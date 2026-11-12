/* eslint-disable @typescript-eslint/no-require-imports -- Standalone browser verification. */
const {chromium}=require('/opt/homebrew/lib/node_modules/@playwright/cli/node_modules/playwright');const fs=require('node:fs');const assert=require('node:assert/strict');
const [base,out,mode='new']=process.argv.slice(2);const apple='https://apps.apple.com/br/app/the-candidate/id6797874252';
(async()=>{fs.mkdirSync(out,{recursive:true});const browser=await chromium.launch({headless:true,channel:'chrome'});const report=[],errors=[];
try{
for(const [width,locale,theme] of (mode==='old'?[[390,'pt','light']]:[[320,'pt','light'],[390,'pt','light'],[390,'en','light'],[1440,'pt','light'],[1440,'en','light'],[1440,'pt','dark']])){
 const context=await browser.newContext({viewport:{width,height:1000},colorScheme:theme,reducedMotion:'reduce'});await context.addCookies([{name:'locale',value:locale,url:base}]);await context.addInitScript(theme=>localStorage.setItem('theme',theme),theme);
 if(process.env.VERCEL_OIDC_TOKEN)await context.route('**/*',r=>r.continue({headers:{...r.request().headers(),...(new URL(r.request().url()).origin===new URL(base).origin?{'x-vercel-trusted-oidc-idp-token':process.env.VERCEL_OIDC_TOKEN}:{})}}));
 const page=await context.newPage();page.setDefaultTimeout(15000);page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 for(const path of ['/','/cases','/sobre']){
  const res=await page.goto(base+path,{waitUntil:'networkidle'});assert.equal(res.status(),200);await page.evaluate(()=>document.fonts.ready);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`overflow ${path} ${width}`);
  const text=await page.locator('main').innerText();const pt=locale==='pt';
  if(path==='/'){
   const rock=page.locator('[data-featured-project="rock"]');const title=await rock.locator('h3').innerText();assert.equal(title,mode==='old'?'Rock in Rio 2026.':'Rock World.');
   assert.equal(await rock.locator('[data-rock-festivals] img').count(),mode==='old'?0:3);
   if(mode!=='old'){
    const copy=await rock.innerText();assert(copy.includes('Cognita'));assert(copy.includes(pt?'relatórios finais personalizados':'customized final reports'));assert(copy.includes(pt?'leituras no Rock in Rio 2026':'readings at Rock in Rio 2026'));
    assert.deepEqual(await rock.locator('[data-rock-festivals] img').evaluateAll(es=>es.map(e=>e.alt)),['The Town','Lollapalooza','Rock in Rio']);
    for(const im of await rock.locator('[data-rock-festivals] img').all()){await im.scrollIntoViewIfNeeded();await im.evaluate(e=>e.decode());assert(await im.evaluate(e=>e.naturalWidth>0&&e.getBoundingClientRect().width>30));}
    const candidate=page.locator('.app-tile').filter({has:page.getByRole('heading',{name:'The Candidate',exact:true})});assert((await candidate.innerText()).includes(pt?'Publicado na App Store e no Google Play':'Available on the App Store and Google Play'));assert(!(await candidate.innerText()).includes('No Google Play'));
    await rock.scrollIntoViewIfNeeded();await page.waitForTimeout(350);await rock.screenshot({path:`${out}/rock-${locale}-${width}-${theme}.png`});
   }
  }else if(path==='/cases'){
   assert.equal(await page.locator('[data-app]').count(),14);assert.equal(await page.locator('[data-service-case]').count(),6);
   const candidate=page.locator('#the-candidate');assert.equal(await candidate.getByRole('link',{name:/^App Store/}).count(),mode==='old'?0:1);
   if(mode!=='old'){
    assert.equal(await candidate.getByRole('link',{name:/^App Store/}).getAttribute('href'),apple);assert(await candidate.getByText('iOS',{exact:true}).count());assert(await candidate.getByText('Android',{exact:true}).count());assert(!(await candidate.innerText()).includes('No Google Play'));
    assert((await page.locator('#leitura-delas').innerText()).includes(pt?'relatórios finais personalizados':'customized final reports'));
    await candidate.scrollIntoViewIfNeeded();await page.waitForTimeout(750);await candidate.screenshot({path:`${out}/candidate-${locale}-${width}-${theme}.png`});
   }
  }else{
   if(mode==='old')assert(text.includes('está no Google Play.'));
   else{assert(text.includes(pt?'também está nas duas lojas.':'is also available in both stores.'));assert(!text.includes('está no Google Play.')&&!text.includes('is on Google Play.'));assert(text.includes(pt?'relatórios finais personalizados':'customized final reports'));}
  }
  report.push({path,width,locale,theme,overflow:false});
 }
 await context.close();console.log(`Verified ${width} ${locale} ${theme}`);
}
assert.deepEqual(errors,[]);fs.writeFileSync(out+'/verification.json',JSON.stringify({base,mode,report,errors},null,2));console.log(JSON.stringify({checks:report.length,errors}));
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1});
