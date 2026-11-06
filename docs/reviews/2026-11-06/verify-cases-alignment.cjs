/* eslint-disable @typescript-eslint/no-require-imports -- Standalone CommonJS verification script. */
const {chromium}=require('/opt/homebrew/lib/node_modules/@playwright/cli/node_modules/playwright');
const assert=require('node:assert/strict');const fs=require('node:fs');const origin=process.argv[2];const remote=!origin.includes('localhost');
(async()=>{const b=await chromium.launch({headless:true,channel:'chrome'});const errors=[];const results=[];try{
 const c=await b.newContext({viewport:{width:1440,height:1100},reducedMotion:'no-preference'});
 if(remote){assert(process.env.VERCEL_OIDC_TOKEN);await c.route(origin+'/**',r=>r.continue({headers:{...r.request().headers(),'x-vercel-trusted-oidc-idp-token':process.env.VERCEL_OIDC_TOKEN}}));}
 const p=await c.newPage();p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 const measure=async(width,filter)=>{
  const rows=await p.locator('[data-app] article').evaluateAll(cards=>cards.map(card=>{const rect=card.getBoundingClientRect();return {id:card.id,top:rect.top,height:rect.height,slots:[...card.querySelectorAll('[data-card-slot]')].filter(x=>x.textContent.trim()).map(x=>({slot:x.dataset.cardSlot,top:x.getBoundingClientRect().top})),metrics:[...card.querySelectorAll('dd')].map(x=>{const range=document.createRange();range.selectNodeContents(x);return {text:x.textContent,top:x.getBoundingClientRect().top,lines:range.getClientRects().length,overflow:x.scrollWidth>x.clientWidth+1}})}}));
  assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`overflow at ${width}`);
  for(const card of rows)for(const metric of card.metrics){assert.equal(metric.lines,1,`${card.id} ${metric.text} wraps at ${width}`);assert.equal(metric.overflow,false,`${card.id} metric overflows at ${width}`)}
  const grouped=[];for(const card of rows){let group=grouped.find(g=>Math.abs(g[0].top-card.top)<2);if(!group){group=[];grouped.push(group)}group.push(card)}
  if(width>=768){for(const group of grouped){for(const slot of ['header','title','owner','status','tagline','description','metrics','platforms','actions']){const values=group.flatMap(card=>card.slots.filter(s=>s.slot===slot).map(s=>s.top));if(values.length>1)assert(Math.max(...values)-Math.min(...values)<1.5,`${width} ${filter} ${slot} misaligned ${JSON.stringify(group.map(x=>({id:x.id,slots:x.slots})))}`)}assert(Math.max(...group.map(x=>x.height))-Math.min(...group.map(x=>x.height))<1.5,'card heights differ')}}
  results.push({width,filter,cards:rows.length,rows:grouped.length,aligned:true,metricValuesSingleLine:true});
 };
 assert.equal((await p.goto(origin+'/cases')).status(),200);
 await p.locator('#eter').scrollIntoViewIfNeeded();await p.waitForTimeout(1800);
 for(const width of [1440,1280,1024,768,390,320]){await p.setViewportSize({width,height:1100});await p.waitForTimeout(250);await measure(width,'Todos');}
 await p.setViewportSize({width:1440,height:1100});await p.locator('#eter').scrollIntoViewIfNeeded();await p.waitForTimeout(400);await p.screenshot({path:'/tmp/tingle-review/cases-aligned-desktop.png'});
 await p.setViewportSize({width:390,height:844});await p.locator('#cognita').scrollIntoViewIfNeeded();await p.waitForTimeout(400);await p.locator('#cognita').screenshot({path:'/tmp/tingle-review/cases-cognita-mobile.png'});
 await p.setViewportSize({width:1440,height:1100});
 for(const filter of ['Publicados','Em eventos (realizado)','Em teste e desenvolvimento']){await p.getByRole('button',{name:filter,exact:false}).click();await p.locator('[data-app]').first().scrollIntoViewIfNeeded();await p.waitForTimeout(1700);await measure(1440,filter)}
 await p.goto(origin+'/sobre');const milestone=p.getByRole('heading',{name:'Rock World, novos projetos e expansão do portfólio'}).locator('..');await milestone.scrollIntoViewIfNeeded();const text=await milestone.innerText();for(const expected of ['2026','Rock World','Leitura Delas','Papo que Protege','Coronel Chrisóstomo','Tropa do Esporte','The Candidate','Eter','Sentinelas da Guanabara','Lineup Battle','Vesti','Prime Healthcare','DreamPhi','24.406','51.487','mais que dobrou'])assert(text.includes(expected),expected);
 await milestone.screenshot({path:'/tmp/tingle-review/timeline-2026-desktop.png'});await p.setViewportSize({width:320,height:812});await milestone.scrollIntoViewIfNeeded();assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 assert.deepEqual(errors,[]);const result={origin,results,timeline2026:true,errors};fs.writeFileSync('/tmp/tingle-review/cases-alignment-verification.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result));
}finally{await b.close()}})().then(()=>process.exit(0)).catch(e=>{console.error(e.stack);process.exit(1)});
