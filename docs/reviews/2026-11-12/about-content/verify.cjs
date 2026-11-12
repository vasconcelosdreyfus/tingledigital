/* eslint-disable @typescript-eslint/no-require-imports -- Standalone browser verification. */
const {chromium}=require('/opt/homebrew/lib/node_modules/@playwright/cli/node_modules/playwright');
const fs=require('node:fs');
const assert=require('node:assert/strict');
const [base,mode='new',out='/tmp/tingle-about-20261112']=process.argv.slice(2);
const pt='Somos uma startup de produto. Desenvolvemos e publicamos software próprio: o Eter, mensageiro com criptografia de ponta a ponta, e o Sentinelas da Guanabara, jogo de educação ambiental, estão na App Store e no Google Play; o The Candidate, simulador de campanha eleitoral, está no Google Play. O Cognita, nossa plataforma de gestão educacional, opera desde 2023 na Escola de Programação e Empreendedorismo de Saquarema e atende cinco organizações.';
const en='We are a product startup. We build and publish our own software: Eter, an end-to-end encrypted messenger, and Sentinelas da Guanabara, an environmental education game, are on the App Store and Google Play; The Candidate, an election campaign simulator, is on Google Play. Cognita, our education management platform, has been running since 2023 at the Saquarema School of Programming and Entrepreneurship and serves five organizations.';
(async()=>{
 fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({headless:true,channel:'chrome'});
 const report=[],errors=[];
 try {
 for(const width of [390,1440])for(const locale of ['pt','en']){
  const context=await browser.newContext({viewport:{width,height:1000},reducedMotion:'reduce',colorScheme:'light'});
  if(process.env.VERCEL_OIDC_TOKEN){await context.route('**/*',async route=>{const request=route.request();if(new URL(request.url()).origin===new URL(base).origin)await route.continue({headers:{...request.headers(),'x-vercel-trusted-oidc-idp-token':process.env.VERCEL_OIDC_TOKEN}});else await route.continue();});}
  await context.addCookies([{name:'locale',value:locale,url:base}]);
  const page=await context.newPage();page.setDefaultTimeout(15000);
  page.on('pageerror',e=>errors.push({width,locale,error:e.message}));page.on('console',m=>{if(m.type()==='error')errors.push({width,locale,error:m.text()});});
  const response=await page.goto(base+'/sobre',{waitUntil:'networkidle'});assert.equal(response.status(),200);
  await page.evaluate(()=>document.fonts.ready);
  const text=await page.locator('main').innerText();
  assert(!/Parque Tecnológico de Saquarema|Saquarema Technology Park/i.test(text));
  const alex=page.locator('#socios .grid > div').filter({has:page.getByText('Alexandre Behrens',{exact:true})});
  const milestone=page.locator('main ol > li').filter({has:page.getByText('2024',{exact:true})});
  if(mode==='baseline'){
   assert(text.includes('Primeiro P&D Aprovado'));
   assert(!text.includes(pt)&&!text.includes(en));
   assert((await alex.innerText()).includes('Sócio · Estratégia & Energia'));
  }else{
   const statement=page.getByText(locale==='pt'?pt:en,{exact:true});assert.equal(await statement.count(),1);assert(await statement.isVisible());
   assert.equal(await statement.evaluate(el=>el.closest('section')===document.querySelector('main section')),true);
   assert(!text.includes('Primeiro P&D Aprovado'));assert(!text.includes('Marco histórico: 1º projeto de P&D aprovado com Hubz'));
   assert((await alex.innerText()).includes(locale==='pt'?'Parceiro · Estratégia & Energia':'Partner · Strategy & Energy'));
   assert(!(await alex.innerText()).includes('Sócio ·'));
   assert((await milestone.innerText()).includes(locale==='pt'?'Primeiro P&D Estruturado':'First R&D Project Structured'));
   assert(!(await milestone.innerText()).includes('Equatorial'));
   assert(text.includes(locale==='pt'?'Sócios e parceiros com experiência em energia, tecnologia e gestão.':'Co-owners and partners with experience in energy, technology and management.'));
   for(const [name,role] of [['Dreyfus Vasconcelos',locale==='pt'?'Sócio-Fundador':'Co-founder'],['Marcelo Fernandes',locale==='pt'?'Sócio ·':'Co-owner ·']])assert((await page.locator('#socios .grid > div').filter({has:page.getByText(name,{exact:true})}).innerText()).includes(role));
   assert.equal(await page.locator('html').getAttribute('lang'),locale);
  }
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'horizontal overflow');
  const visuals=await page.evaluate(()=>{
   const pick=(el,keys)=>{const s=getComputedStyle(el);return Object.fromEntries(keys.map(k=>[k,s[k]]));};
   return {h1:pick(document.querySelector('h1'),['fontFamily','fontSize','fontWeight','color','lineHeight','letterSpacing']),body:pick(document.body,['backgroundColor','color']),hero:pick(document.querySelector('main section'),['paddingTop','paddingBottom']),team:pick(document.querySelector('#socios .grid'),['gridTemplateColumns','gap']),photo:pick(document.querySelector('#socios .grid > div > div'),['aspectRatio','borderRadius']),subtitle:pick(document.querySelector('main section p.leading-relaxed'),['fontFamily','fontSize','lineHeight','color','textAlign','maxWidth'])};
  });
  if(mode!=='baseline'){
   const baseline=JSON.parse(fs.readFileSync(require('node:path').join(__dirname,'baseline/verification.json'))).report.find(x=>x.width===width&&x.locale===locale);
   assert.deepEqual(visuals,baseline.visuals,'existing styles must match baseline');
  }
  for(const image of await page.locator('#socios img').all()){await image.scrollIntoViewIfNeeded();await image.evaluate(el=>el.decode());}
  await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(350);
  await page.screenshot({path:`${out}/sobre-${locale}-${width}.png`,fullPage:true});
  if(mode!=='baseline'){await page.screenshot({path:`${out}/hero-${locale}-${width}.png`});await alex.scrollIntoViewIfNeeded();await page.screenshot({path:`${out}/team-${locale}-${width}.png`});}
  report.push({width,locale,newParagraph:mode!=='baseline',oldTitleAbsent:mode!=='baseline',visuals,overflow:false});
  if(mode!=='baseline'){
   if(width<640)await page.getByRole('button',{name:'Abrir menu'}).click();
   await page.getByRole('button',{name:locale==='pt'?'Switch to English':'Mudar para português'}).filter({visible:true}).click();
   await page.getByText(locale==='pt'?en:pt,{exact:true}).waitFor();
   assert.equal(await page.locator('html').getAttribute('lang'),locale==='pt'?'en':'pt');
   if(width===1440&&locale==='pt')for(const path of ['/cases','/utilities']){
    await page.goto(base+path,{waitUntil:'networkidle'});
    const project=page.locator('[data-service-case="pd-tratamento-agua-amapa"]');
    assert((await project.innerText()).includes('não executamos o projeto'));
    assert(!(await project.innerText()).includes('Equatorial'));
   }
  }
  await context.close();
 }
 assert.deepEqual(errors,[]);
 fs.writeFileSync(out+'/verification.json',JSON.stringify({base,mode,report,errors},null,2));
 console.log(JSON.stringify({base,mode,checks:report.length,errors}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
