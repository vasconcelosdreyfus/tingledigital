/* eslint-disable @typescript-eslint/no-require-imports -- Browser verification. */
const {chromium}=require('/opt/homebrew/lib/node_modules/@playwright/cli/node_modules/playwright');
const fs=require('node:fs');const assert=require('node:assert/strict');
const [base,out]=process.argv.slice(2);
const apps=['eter','the-candidate','cognita','soma-studio','sentinelas','epes-summit','leitura-delas','studio-tycoon','breaking-codes','lineup-battle','coronel','vesti','prime','dreamphi'];
const experiences=['epes-summit','leitura-delas','studio-tycoon','breaking-codes','coronel'];
const services=['trocadores-de-calor','circuito-musical-das-aguas','pd-tratamento-agua-amapa','epes-casa-brasil','transforma-nova-iguacu','fixer-telecomunicacoes'];
(async()=>{
 fs.mkdirSync(out,{recursive:true});const browser=await chromium.launch({headless:true,channel:'chrome'});const results=[],errors=[];
 try{
 for(const [width,locale,theme] of [[390,'pt','light'],[390,'en','light'],[768,'pt','light'],[768,'en','light'],[1440,'pt','light'],[1440,'en','light'],[1440,'pt','dark']]){
  const context=await browser.newContext({viewport:{width,height:1000},colorScheme:theme,reducedMotion:'reduce'});
  await context.addCookies([{name:'locale',value:locale,url:base}]);
  await context.addInitScript(theme=>localStorage.setItem('theme',theme),theme);
  if(process.env.VERCEL_OIDC_TOKEN)await context.route('**/*',r=>r.continue({headers:{...r.request().headers(),...(new URL(r.request().url()).origin===new URL(base).origin?{'x-vercel-trusted-oidc-idp-token':process.env.VERCEL_OIDC_TOKEN}:{})}}));
  const page=await context.newPage();page.setDefaultTimeout(15000);
  page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
  for(const path of ['/','/cases','/utilities','/consultoria']){
   const res=await page.goto(base+path,{waitUntil:'networkidle'});assert.equal(res.status(),200);await page.evaluate(()=>document.fonts.ready);
   assert.equal(await page.locator('html').getAttribute('lang'),locale);
   assert.equal(await page.locator('html').evaluate(e=>e.classList.contains('dark')),theme==='dark');
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`overflow ${path} ${width} ${locale}`);
   const text=await page.locator('main').innerText();assert(!text.includes('Parque Tecnológico de Saquarema'));
   if(path==='/'){
    assert.deepEqual(await page.locator('[data-featured-project]').evaluateAll(els=>els.map(e=>e.dataset.featuredProject)),['cognita','eter','rock']);
    assert.equal(await page.locator('.hero-news').getAttribute('href'),'#projetos');
    assert(!(await page.locator('.original-hero').innerText()).includes('QBANHO'));
    assert.equal(await page.locator('[data-featured-project="eter"] a').getAttribute('href'),'https://eter.social');
    for(const project of ['cognita','eter','rock']){
     const image=page.locator(`[data-featured-project="${project}"] img`);await image.scrollIntoViewIfNeeded();await image.evaluate(e=>e.decode());assert(await image.evaluate(e=>e.naturalWidth>0));
    }
    assert.equal(await page.locator('#atuacao a[href="/utilities#qbanho"]').count(),1);
    assert.equal(await page.locator('#atuacao a[href="/consultoria#circuito-musical"]').count(),1);
    assert((await page.locator('#atuacao').innerText()).includes('Circuito Musical das Águas'));
    await page.locator('#projetos').screenshot({path:`${out}/home-${width}-${locale}-${theme}.png`});
   }else if(path==='/cases'){
    assert.deepEqual((await page.locator('[data-app]').evaluateAll(els=>els.map(e=>e.dataset.app))).sort(),[...apps].sort());
    assert.deepEqual((await page.locator('[data-service-case]').evaluateAll(els=>els.map(e=>e.dataset.serviceCase))).sort(),[...services].sort());
    assert.equal(await page.locator('#aplicacoes [data-app]').count(),9);
    assert.deepEqual((await page.locator('#experiencias-digitais [data-app]').evaluateAll(els=>els.map(e=>e.dataset.app))).sort(),[...experiences].sort());
    assert.equal(await page.locator('#energia-negocios [data-service-case]').count(),3);assert.equal(await page.locator('#cultura-impacto [data-service-case]').count(),3);
    for(const id of ['aplicacoes','experiencias-digitais','energia-negocios','cultura-impacto']){
     assert.equal(await page.locator(`main nav a[href="#${id}"]`).count(),1);
     await page.locator(`main nav a[href="#${id}"]`).click();await page.waitForURL(url=>url.hash==='#'+id);assert.equal(new URL(page.url()).hash,'#'+id);
    }
    assert.equal(await page.locator('#projetos').count(),1);
    for(const slug of [...apps,...services])assert.equal(await page.locator('#'+slug).count(),1,'anchor '+slug);
    for(const id of ['aplicacoes','experiencias-digitais']){
     const group=page.locator('#'+id);const buttons=group.getByRole('button');const total=await group.locator('[data-app]').count();
     for(let i=0;i<await buttons.count();i++){
      const button=buttons.nth(i);const expected=Number((await button.innerText()).match(/(\d+)$/)[1]);await button.click();await page.waitForTimeout(100);assert.equal(await group.locator('[data-app]').count(),expected);assert.equal(await button.getAttribute('aria-pressed'),'true');
     }
     await buttons.first().click();assert.equal(await group.locator('[data-app]').count(),total);
     await group.locator('[data-app]').first().scrollIntoViewIfNeeded();
     const cards=await group.locator('[data-app]').evaluateAll(els=>els.map(el=>({top:el.getBoundingClientRect().top,slots:[...el.querySelectorAll('[data-card-slot]')].map(s=>({name:s.dataset.cardSlot,top:s.getBoundingClientRect().top,content:s.textContent.trim()}))})));
     for(let i=1;i<cards.length;i++)if(Math.abs(cards[i].top-cards[i-1].top)<1)for(let j=0;j<cards[i].slots.length;j++){const a=cards[i].slots[j],b=cards[i-1].slots[j];if(a.content&&b.content)assert(Math.abs(a.top-b.top)<1,JSON.stringify({id,width,locale,slot:a.name,a:a.top,b:b.top}));};
    }
    assert(!(await page.locator('#pd-tratamento-agua-amapa').innerText()).includes('Equatorial'));
    await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(150);await page.screenshot({path:`${out}/cases-${width}-${locale}-${theme}.png`});
   }else{
    const id=path==='/utilities'?'qbanho':'circuito-musical';const section=page.locator('#'+id);assert.equal(await section.count(),1);
    assert((await section.innerText()).includes(path==='/utilities'?'QBANHO':'Circuito Musical'));
    const image=section.locator('img');await image.scrollIntoViewIfNeeded();await image.evaluate(e=>e.decode());assert(await image.evaluate(e=>e.naturalWidth>0));
    const imageUrl=new URL(await image.getAttribute('src'),base);assert((imageUrl.searchParams.get('url')||imageUrl.pathname).includes(path==='/utilities'?'qbanho-trocador.webp':'circuito-musical-das-aguas.webp'));
    assert.equal(await page.locator('[data-service-case]').count(),3);
    await section.screenshot({path:`${out}/${id}-${width}-${locale}-${theme}.png`});
   }
   results.push({path,width,locale,theme,overflow:false});
  }
  await context.close();console.log(`Verified ${width} ${locale} ${theme}`);
 }
 assert.deepEqual(errors,[]);fs.writeFileSync(out+'/verification.json',JSON.stringify({base,results,errors},null,2));console.log(JSON.stringify({checks:results.length,errors}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
