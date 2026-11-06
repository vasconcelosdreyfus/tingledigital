/* eslint-disable @typescript-eslint/no-require-imports -- Standalone CommonJS verification script. */
const {chromium}=require('/opt/homebrew/lib/node_modules/@playwright/cli/node_modules/playwright');
const fs=require('fs');
const assert=require('assert/strict');
const base=process.argv[2]||'http://localhost:3418';
const dir=process.argv[3]||'/tmp/tingle-review/service-cases';
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'chrome'});const report=[];const errors=[];
 for(const [width,theme] of [[390,'light'],[768,'light'],[1440,'light'],[1440,'dark']]){
  const context=await browser.newContext({viewport:{width,height:1000},colorScheme:theme,reducedMotion:'reduce'});const page=await context.newPage();
  page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
  for(const path of ['/cases','/consultoria','/utilities','/sobre']){
   await page.goto(base+path,{waitUntil:'networkidle'});
   if(theme==='dark' && !await page.locator('html').evaluate(e=>e.classList.contains('dark'))){await page.getByRole('button',{name:'Alternar tema claro e escuro'}).click();await page.waitForTimeout(150);}
   assert.equal(await page.locator('html').evaluate(e=>e.classList.contains('dark')),theme==='dark');
   const text=await page.locator('main').innerText();
   assert(!text.includes('VotIA'),'Electoral app must stay absent');
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Overflow '+path+' '+width);
   const expected=path==='/cases'?6:path==='/sobre'?0:3;
   assert.equal(await page.locator('[data-service-case]').count(),expected);
   if(path==='/cases'){
    assert(text.includes('trocadores') && text.includes('Circuito Musical das Águas'));
    await page.locator('#aplicacoes').scrollIntoViewIfNeeded();await page.waitForTimeout(650);
    assert.equal(await page.locator('[data-app]').count(),13);
    assert.equal(await page.getByRole('link',{name:'Conhecer o Eter',exact:true}).getAttribute('href'),'https://eter.social');
    for(const [label,count] of [['Publicados',5],['Em eventos',3],['Em teste',5],['Todos',13]]){
     await page.getByRole('button',{name:new RegExp('^'+label)}).click();await page.waitForTimeout(100);assert.equal(await page.locator('[data-app]').count(),count);
    }
    await page.getByRole('link',{name:/Projetos e consultoria/}).click();await page.waitForTimeout(250);
   }
   if(path==='/consultoria'){
    assert.equal(await page.locator('main').getByText('CB',{exact:true}).count(),0);
    const logo=page.locator('main img[alt="Casa Brasil"]');await logo.scrollIntoViewIfNeeded();await logo.evaluate(e=>e.decode());assert(await logo.evaluate(e=>e.naturalWidth>0));
    await page.screenshot({path:`${dir}/consultoria-${width}-${theme}.png`});
   }
   if(path==='/utilities'){
    assert(text.includes('Trocadores de calor: tecnologia que ganhou mercado.'));
    assert(text.includes('P&D para o tratamento de água no Amapá.'));
    assert(text.includes('Dreyfus Vasconcelos')&&text.includes('Marcelo Fernandes')&&text.includes('Alexandre Behrens'));
    await page.getByRole('heading',{name:'Trocadores de calor: tecnologia que ganhou mercado.'}).scrollIntoViewIfNeeded();await page.screenshot({path:`${dir}/utilities-${width}-${theme}.png`});
   }
   if(path==='/sobre'){
    for(const name of ['Dreyfus Vasconcelos','Marcelo Fernandes','Alexandre Behrens']){
     const im=page.getByAltText('Foto de '+name);await im.scrollIntoViewIfNeeded();await im.evaluate(e=>e.decode());assert(await im.evaluate(e=>e.naturalWidth>0));
    }
    assert(text.includes('Light')&&text.includes('École Centrale')&&text.includes('APS Soluções'));
    await page.locator('#socios').scrollIntoViewIfNeeded();await page.screenshot({path:`${dir}/socios-${width}-${theme}.png`});
   }
   const boxes=await page.locator('[data-service-case]').evaluateAll(cards=>cards.map(c=>({slug:c.dataset.serviceCase,top:c.getBoundingClientRect().top,slots:[...c.querySelectorAll('[data-case-slot]')].map(x=>({name:x.dataset.caseSlot,top:x.getBoundingClientRect().top}))})));
   if(width>=768){for(let i=0;i+1<boxes.length;i+=2){assert(Math.abs(boxes[i].top-boxes[i+1].top)<1);for(let k=0;k<boxes[i].slots.length;k++)assert(Math.abs(boxes[i].slots[k].top-boxes[i+1].slots[k].top)<1,'Slot misalignment '+path+' '+boxes[i].slots[k].name)}}
   if(path==='/cases')await page.locator('#projetos').screenshot({path:`${dir}/cases-${width}-${theme}.png`});
   report.push({path,width,theme,cases:expected,alignment:true,overflow:false});
  }
  await context.close();
 }
 assert.equal(errors.length,0,JSON.stringify(errors));fs.writeFileSync(`${dir}/verification.json`,JSON.stringify({base,report,errors},null,2));await browser.close();console.log(JSON.stringify({base,checks:report.length,errors}));
})().catch(e=>{console.error(e);process.exit(1)});
