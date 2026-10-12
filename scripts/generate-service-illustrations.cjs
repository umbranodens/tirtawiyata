const fs = require('node:fs');
const path = require('node:path');
const {project, points, face, pipe, box, darkBox, panel, tank, carton, pallet, worker, fan, conveyor, bottles} = require('./isometric-primitives.cjs');

const base = () => box(0,0,-14,520,370,14,'#eef5fc','#b6ccde','#a3bdd2');
const rail = (x,y,w,d) => pipe([[x,y,1],[x+w,y,1],[x+w,y+d,1],[x,y+d,1],[x,y,1]],'#8cb9ce',2,'stroke-dasharray="7 6" class="site-plan"');
function fence() {
  let s = '';
  for(let x=0;x<=520;x+=52) s += box(x,0,0,3,3,45);
  s += pipe([[0,1,13],[520,1,13]],'#b1cadb',2) + pipe([[0,1,40],[520,1,40]],'#b1cadb',2);
  for(let y=52;y<370;y+=52) s += box(0,y,0,3,3,45);
  return s + pipe([[1,0,13],[1,370,13]],'#b1cadb',2) + pipe([[1,0,40],[1,370,40]],'#b1cadb',2);
}
function cabin(x,y) {
  let s = box(x,y,0,110,58,68,'#eaf5fc','#c0d7e6','#9abbd1');
  s += box(x-3,y-3,68,116,64,5,'#f7fbfe','#9fbed3','#779fba');
  s += panel(x+12,y+58.4,29,35,23);
  s += face([[x+69,y+58.4,0],[x+96,y+58.4,0],[x+96,y+58.4,54],[x+69,y+58.4,54]],'#88acc5');
  s += pipe([[x+88,y+58.8,26],[x+88,y+58.8,32]],'#e4f4fc',2);
  return s;
}
function vehicle(x,y,loaded=false) {
  let s = darkBox(x,y,9,40,99,11);
  for(const dy of [17,78]) for(const dx of [0,40]) {
    const [cx,cy] = project(x+dx,y+dy,9);
    s += `<ellipse cx="${cx}" cy="${cy}" rx="6" ry="9" fill="#24465f"/><ellipse cx="${cx}" cy="${cy}" rx="2.5" ry="4.5" fill="#b2cddd"/>`;
  }
  s += box(x,y+67,20,40,32,35,'#e7f4fb','#72a6cb','#377cab');
  s += face([[x+3,y+99.3,38],[x+37,y+99.3,38],[x+37,y+99.3,51],[x+3,y+99.3,51]],'#204d70');
  s += pipe([[x+5,y+99.5,28],[x+12,y+99.5,28]],'#eaf9ff',2) + pipe([[x+28,y+99.5,28],[x+35,y+99.5,28]],'#eaf9ff',2);
  if(loaded) {
    s += pallet(x+2,y+3,36,58);
    s += box(x+4,y+6,20,32,53,39,'#dbe8ef','#a2bbc9','#809fb3');
    for(const dy of [16,44]) s += pipe([[x+4,y+dy,59.3],[x+36,y+dy,59.3],[x+36,y+dy,22]],'#397d9e',2);
  } else s += box(x,y,20,40,67,49,'#f0f7fc','#cadfeb','#a7c6db');
  return s;
}
function forklift(x,y) {
  let s = darkBox(x,y,6,28,33,15) + box(x+2,y+2,21,24,17,17,'#65abd5','#337eaf','#215e89');
  for(const dx of [0,28]) for(const dy of [5,27]) {
    const [cx,cy] = project(x+dx,y+dy,6);
    s += `<ellipse cx="${cx}" cy="${cy}" rx="5" ry="7" fill="#294b65"/>`;
  }
  for(const dx of [2,24]) s += box(x+dx,y+28,15,3,3,42,'#a7c9dd','#456e8b','#2b526d');
  s += box(x,y,55,29,32,4,'#bfd9e8','#8fb1c9','#7299b4');
  s += pipe([[x+3,y+33,10],[x+3,y+51,10]],'#577f99',3) + pipe([[x+25,y+33,10],[x+25,y+51,10]],'#577f99',3);
  return `<g class="delivery-forklift">${s}</g>`;
}
function survey() {
  let s = base() + fence();
  s += face([[20,18,0],[205,18,0],[205,56,0],[20,56,0]],'#dce9eb');
  s += face([[18,300,0],[78,300,0],[78,351,0],[18,351,0]],'#dce9eb');
  s += rail(89,78,314,170) + rail(115,104,110,116) + rail(245,104,132,116);
  for(const [x,y] of [[89,78],[403,78],[89,248],[403,248]]) {
    s += box(x-2,y-2,0,4,4,18,'#e0edf5','#87a9bf','#5a829f');
    s += face([[x+2,y,9],[x+16,y,9],[x+16,y,18],[x+2,y,18]],'#6ab6d6');
  }
  s += cabin(365,17);
  s += box(30,96,0,34,34,9);
  s += pipe([[47,112,9],[47,112,57],[72,112,57]],'#7398b3',5);
  s += pipe([[72,112,55],[72,112,15]],'#48b6d7',2.5,'class="sample-flow" stroke-dasharray="3 8"');
  s += box(65,106,9,14,14,10,'#d9f1f8','#95c8dd','#73b2cf');
  s += darkBox(55,137,0,26,22,21) + panel(59,159.3,7,17,10);
  const [cx,cy] = project(275,141);
  s += `<g transform="translate(${cx} ${cy})"><path d="M0,-38 -14,0 M0,-38 14,0 M0,-38 2,6" stroke="#6f94af" stroke-width="3" fill="none"/><g class="survey-head"><rect x="-10" y="-48" width="21" height="12" rx="2" fill="#377fa8"/><circle cx="9" cy="-42" r="4" fill="#154c70"/></g></g>`;
  for(const [i,target] of [[0,[89,78,1]],[1,[403,78,1]],[2,[89,248,1]]]) {
    s += pipe([[275,141,41],target],'#39a9cb',2,'class="survey-ray" style="animation-delay:-'+(i*2)+'s" stroke-dasharray="5 8"');
    const [tx,ty] = project(...target);
    s += `<g transform="translate(${tx} ${ty})"><ellipse class="survey-target" rx="9" ry="4.5" fill="none" stroke="#43b5d5" stroke-width="1.5" style="animation-delay:-${i*2}s"/></g>`;
  }
  s += worker(295,139,-1) + `<g class="site-inspector">${worker(130,258)}</g>`;
  // The permits and technical drawings sit on a site planning table.
  for(const x of [210,314]) for(const y of [277,329]) s += box(x,y,0,4,4,43);
  s += box(204,272,43,120,66,5,'#b5d2e5','#8cb1ca','#6d97b6');
  s += face([[211,277,48.3],[269,277,48.3],[269,331,48.3],[211,331,48.3]],'#f9fcff');
  s += pipe([[219,286,49],[260,286,49],[260,321,49],[219,321,49],[219,286,49]],'#4e9bbe',2,'class="plan-trace" pathLength="1"');
  s += pipe([[239,286,49],[239,321,49]],'#74a6c4',1);
  s += pipe([[219,303,49],[260,303,49]],'#74a6c4',1);
  s += `<g class="drafting-pencil">${pipe([[245,299,50],[251,305,58]],'#376d94',3)}${pipe([[243,297,49],[245,299,50]],'#d3b58b',2)}</g>`;
  s += box(279,281,48,35,43,2,'#8eb1c9','#7097b3','#5a829e');
  s += face([[282,284,50.3],[311,284,50.3],[311,321,50.3],[282,321,50.3]],'#f7fcff');
  for(let y=288;y<303;y+=5) s += pipe([[286,y,50.6],[306,y,50.6]],'#b2cadb',1.3);
  s += pipe([[288,310,51],[294,316,51],[306,305,51]],'#2393ab',2.5,'class="permit-check" pathLength="1"');
  s += worker(193,301,-1) + worker(302,352);
  return s;
}
function construction() {
  let s = base() + fence();
  s += box(89,78,0,314,170,6,'#d9e7f1','#a8c3d7','#93b3cc');
  // Tower crane and trussed jib behind the rising building frame.
  s += darkBox(22,20,0,49,46,12);
  for(const x of [32,56]) for(const y of [27,51]) s += box(x,y,12,4,4,175);
  for(let z=24;z<167;z+=22) {
    s += pipe([[32,27,z],[59,27,z]],'#7babc7',2);
    s += pipe([[32,27,z],[59,27,z+20]],'#a0c5db',1.5);
    s += pipe([[59,27,z],[59,54,z+20]],'#8bb5d0',1.5);
  }
  s += box(8,22,187,359,12,8,'#b5d6e9','#78a6c4','#5d8eaf');
  s += pipe([[42,28,210],[8,28,195],[367,28,195],[42,28,210]],'#87b1cc',2);
  s += darkBox(9,18,175,26,24,17) + box(49,35,161,23,22,22,'#d3e9f6','#5b91b6','#326c96');
  const [ropeX,ropeY] = project(183,28,188);
  const rope = `<g style="transform-origin:${ropeX}px ${ropeY}px" class="crane-rope">${pipe([[183,28,188],[183,28,111]],'#5c7d94',1.8)}</g>`;
  const hook = pipe([[183,28,111],[167,36,83]],'#789bb4',1.5) + pipe([[183,28,111],[200,54,83]],'#789bb4',1.5) + box(164,34,47,40,29,36,'#e0edf6','#a7c3d6','#779eb9');
  s += `<g class="crane-trolley">${box(175,21,184,16,14,8,'#87b2cd','#477d9f','#2c5d7e')}${rope}<g class="crane-load">${hook}</g></g>`;
  s += tank(126,111,19,83);
  s += darkBox(200,127,7,72,42,18) + box(200,127,25,72,42,42,'#dcecf7','#a8c7dc','#7ea5c3');
  s += panel(207,169.3,42,25,16);
  s += `<g class="installer">${worker(177,168)}</g>` + worker(298,191,-1);
  for(const y of [78,160,248]) {
    for(const x of [89,246,403]) s += box(x,y,6,6,6,115,'#d7e9f5','#8bafc9','#608ba9');
    s += box(89,y,121,320,6,7,'#dfeef8','#9abbd2','#7199b8');
  }
  for(const x of [89,246,403]) s += box(x,78,121,6,176,7,'#dfeef8','#9abbd2','#7199b8');
  s += face([[89,78,128],[188,78,128],[188,254,128],[89,254,128]],'#e1edf6','opacity=".78"');
  for(let x=95;x<188;x+=13) s += pipe([[x,80,128.4],[x,252,128.4]],'#b4ccdf',1);
  // Scaffolding, stacked materials and delivery of production equipment.
  for(const x of [72,83]) for(const y of [171,232]) s += pipe([[x,y,0],[x,y,86]],'#8bacc2',2);
  for(const z of [25,51,78]) s += box(70,169,z,16,68,3,'#c3d8e6','#86a6bc','#7496b0');
  for(let y=175;y<232;y+=15) s += pipe([[72,y,0],[72,y+15,25]],'#87aac1',1);
  s += worker(75,210);
  const [wx,wy] = project(83,212,29);
  s += `<g transform="translate(${wx} ${wy})"><g class="welding-spark"><circle r="3" fill="#e5f9ff"/><path d="M-8,0H8M0,-7V7M-5,-5 5,5M-5,5 5,-5" stroke="#71c7df" stroke-width="1.2"/></g></g>`;
  s += `<g class="supply-truck">${vehicle(448,155,true)}</g>`;
  for(let i=0;i<4;i++) s += box(29,288+i*12,0,88,8,6,'#b4ccdd','#7b9bb3','#5c7e9a');
  s += pallet(151,280,62,50) + carton(154,283,6,55,43,33);
  s += pallet(238,303,59,49) + box(242,307,6,50,40,45,'#dceaf4','#acc6d8','#86a8c1');
  s += forklift(358,283) + worker(328,316,-1);
  return s;
}
function ready() {
  let s = base();
  s += box(89,78,0,314,170,6,'#f2f8fc','#b6cedf','#9ab9d0');
  s += box(89,78,6,314,6,128,'#eaf5fc','#c3dbea','#9ebfd7');
  s += box(397,84,6,6,164,128,'#eaf5fc','#c3dbea','#9ebfd7');
  s += box(85,74,134,322,59,7,'#f6fbff','#b5d0e3','#8eb2ce');
  for(const x of [113,174,235,296,357]) {
    s += box(x,89,141,26,24,13,'#dcecf7','#a2c2d9','#88acc7');
    for(let dx=3;dx<25;dx+=5) s += pipe([[x+dx,92,154.3],[x+dx,110,154.3]],'#7d9eb8',1);
  }
  for(let y=101;y<224;y+=43) s += face([[403.3,y,58],[403.3,y+31,58],[403.3,y+31,110],[403.3,y,110]],'url(#glass)','stroke="#88b5d3"');
  s += tank(126,127,19,91) + tank(178,127,21,101);
  s += box(206,106,6,48,35,57,'#e3f0f9','#a6c5da','#7ba3c0') + panel(212,141.3,35,22,16);
  const route = [[126,127,45],[178,127,45],[230,127,45],[230,177,86],[290,177,86]];
  s += pipe(route,'#93b4cd',6) + pipe(route,'#e4f3fa',3) + pipe(route,'#39b5d5',2,'class="water-flow" stroke-dasharray="5 13"');
  s += worker(268,151,-1);
  s += darkBox(269,112,6,96,43,12);
  s += box(269,112,18,96,43,43,'#dcecf7','#a8c7dc','#7ea5c3');
  s += panel(277,155.3,34,24,17);
  s += face([[316,155.2,27],[357,155.2,27],[357,155.2,54],[316,155.2,54]],'#2a536f');
  s += `<g class="production-press">${box(323,130,31,27,20,17,'#d7e9f5','#83acc6','#608eaf')}</g>`;
  s += face([[316,155.3,27],[357,155.3,27],[357,155.3,54],[316,155.3,54]],'url(#glass)','stroke="#6a97b8"');
  s += conveyor(126,215,270);
  s += darkBox(264,185,14,90,66,15);
  for(const x of [264,350]) for(const y of [186,246]) s += box(x,y,29,4,4,80);
  s += box(261,182,109,97,73,9,'#ecf7fd','#a4c3da','#81a8c6');
  s += `<g class="filling-head">${box(274,198,91,66,12,7)}</g>`;
  for(let x=283;x<339;x+=17) {
    s += pipe([[x,211,91],[x,211,75]],'#688da8',3);
    s += pipe([[x,227,74],[x,227,64]],'#35b5d8',2.5,'class="filling-water" style="animation-delay:-'+((x-283)/17*.3)+'s"');
  }
  s += bottles(130,229,260,16,'bottle-clip','main-line',9);
  s += `<g clip-path="url(#packing-clip)"><g class="packing-carton">${carton(368,215,41,22,24,18)}</g></g>`;
  s += face([[264,250,56],[350,250,56],[350,250,107],[264,250,107]],'url(#glass)','stroke="#91b8d2"');
  s += pipe([[302,250.3,56],[302,250.3,107]],'#91b8d2',1.5);
  s += pipe([[273,250.4,64],[285,250.4,98]],'#fff',2,'opacity=".7"');
  s += panel(354,243,66,17,16);
  s += pipe([[126,244,49],[396,244,49]],'#c5dfed',2);
  s += darkBox(365,211,15,34,40,12) + box(365,211,63,34,40,20,'#e3f1fa','#a0c1d9','#789fbd');
  s += worker(249,274) + worker(416,258,-1);
  s += box(24,95,0,39,48,45,'#e4f0f9','#b2cddd','#87abc6') + fan(44,143.4,24,12);
  s += tank(43,188,12,61);
  // Sample-testing bench and dispatch represent commissioning and readiness.
  for(const x of [45,106]) for(const y of [287,323]) s += box(x,y,0,4,4,36);
  s += box(40,282,36,78,47,4,'#deedf7','#acc9de','#89abc7');
  s += darkBox(51,289,40,18,17,4);
  s += pipe([[60,298,44],[60,298,64],[67,298,70]],'#6285a0',4);
  for(const x of [84,95,106]) {
    const [cx,cy] = project(x,307,40);
    s += `<rect x="${cx-2.5}" y="${cy-12}" width="5" height="12" rx="1.5" fill="#b7e6f4" stroke="#79a8c4" stroke-width=".7"/><rect x="${cx-3}" y="${cy-14}" width="6" height="3" rx="1" fill="#3b789f"/>`;
  }
  const [sx,sy] = project(95,307,61);
  s += `<g transform="translate(${sx} ${sy})"><g class="sample-pipette"><path d="M0,-8V5" stroke="#477d9f" stroke-width="2"/><rect x="-3" y="-12" width="6" height="8" rx="2" fill="#81bed7"/></g><circle class="sample-drop" cy="8" r="1.5" fill="#4ab6d6"/></g>`;
  s += worker(127,314,-1);
  for(const [x,y] of [[315,294],[377,305]]) {
    s += pallet(x,y);
    for(const [dx,dy,z] of [[2,2,6],[28,2,6],[2,25,6],[28,25,6],[15,14,26]]) s += carton(x+dx,y+dy,z);
  }
  s += `<g class="dispatch-truck">${vehicle(455,195)}</g>`;
  s += forklift(235,315) + worker(441,332);
  return s;
}

const defs = `<defs>
<linearGradient id="steel"><stop stop-color="#8facbf"/><stop offset=".23" stop-color="#f2f9fd"/><stop offset=".5" stop-color="#d6e8f4"/><stop offset="1" stop-color="#8eafc6"/></linearGradient>
<linearGradient id="glass" x2="1" y2="1"><stop stop-color="#e0f6ff" stop-opacity=".65"/><stop offset="1" stop-color="#6fb7dc" stop-opacity=".2"/></linearGradient>
<g id="bottle"><path d="M-2.5,-23v4l-3.5,4v14Q-6,2 0,2Q6,2 6,-1v-14l-3.5,-4v-4Z" fill="#d5f3fc" stroke="#5597b8" stroke-width=".8"/><path d="M-4,-13H4V-1Q0,1 -4,-1Z" fill="#65c5e6" opacity=".8"/><path d="M-4,-10Q0,-8 4,-10v5Q0,-3 -4,-5Z" fill="#eef9ff"/><rect x="-3.5" y="-25" width="7" height="3" rx="1" fill="#21648f"/></g>
<clipPath id="bottle-clip"><polygon points="${points([[129,229,75],[391,229,75],[391,229,39],[129,229,39]])}"/></clipPath>
<clipPath id="packing-clip"><polygon points="${points([[367,215,72],[407,215,72],[407,239,40],[367,239,40]])}"/></clipPath>
</defs>`;
const css = `<style>
.site-plan{animation:plan 6s linear infinite}.water-flow{animation:flow 1.2s linear infinite}
.sample-flow{animation:flow 1.4s linear infinite}.survey-ray{animation:survey 6s linear infinite}
.survey-head{transform-origin:0 -42px;animation:survey-head 6s ease-in-out infinite}
.survey-target{animation:target 6s ease-out infinite}
.permit-check,.plan-trace{stroke-dasharray:1;animation:approve 6s ease-in-out infinite}
.drafting-pencil{animation:drawing 4s ease-in-out infinite}.site-inspector{animation:inspect 10s ease-in-out infinite}
.crane-trolley{animation:trolley 10s ease-in-out infinite}.crane-load{animation:hoist 4s ease-in-out infinite}
.crane-rope{animation:rope 4s ease-in-out infinite}.delivery-forklift{animation:deliver 9s ease-in-out infinite}
.supply-truck{animation:truck 12s ease-in-out infinite}.installer{animation:inspect 7s ease-in-out infinite}
.welding-spark{animation:welding 2.8s ease-in-out infinite}
.main-line{animation:bottles 9s linear infinite}.filling-water{animation:fill 1.5s ease-in-out infinite}
.fan{animation:fan 2s linear infinite}.production-press{animation:press 2.2s ease-in-out infinite}
.filling-head{animation:press 1.5s ease-in-out infinite}.packing-carton{animation:pack 4s linear infinite}
.sample-pipette{animation:pipette 3s ease-in-out infinite}.sample-drop{animation:drop 3s ease-in infinite}
.dispatch-truck{animation:truck 14s ease-in-out infinite}
@keyframes plan{to{stroke-dashoffset:-26}}@keyframes flow{to{stroke-dashoffset:-36}}
@keyframes approve{0%,12%{stroke-dashoffset:1}35%,85%{stroke-dashoffset:0}100%{stroke-dashoffset:1}}
@keyframes survey{0%,28%{opacity:.9;stroke-dashoffset:0}33%,95%{opacity:0}100%{opacity:.9;stroke-dashoffset:-36}}
@keyframes survey-head{0%,100%{transform:rotate(-14deg)}33%{transform:rotate(14deg)}66%{transform:rotate(0)}}
@keyframes target{0%,30%{opacity:.9;transform:scale(1)}35%,100%{opacity:0;transform:scale(1.8)}}
@keyframes drawing{0%,100%{transform:translate(0,0)}35%{transform:translate(10px,5px)}65%{transform:translate(3px,8px)}}
@keyframes inspect{0%,15%,85%,100%{transform:translate(0,0)}40%,60%{transform:translate(15.59px,9px)}}
@keyframes trolley{0%,100%{transform:translate(0,0)}50%{transform:translate(34.64px,20px)}}
@keyframes hoist{0%,100%{transform:translateY(0)}50%{transform:translateY(-24px)}}
@keyframes rope{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.6883117)}}
@keyframes deliver{0%,10%,90%,100%{transform:translate(0,0)}40%,60%{transform:translate(-34.64px,20px)}}
@keyframes truck{0%,12%,88%,100%{transform:translate(0,0)}40%,60%{transform:translate(-19.05px,11px)}}
@keyframes welding{0%,30%,65%,100%{opacity:0}35%,60%{opacity:.9}}
@keyframes bottles{to{transform:translate(225.16px,130px)}}@keyframes fill{0%,15%,85%,100%{opacity:.15}25%,75%{opacity:.85}}
@keyframes press{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}
@keyframes pack{0%{transform:translate(0,0);opacity:0}10%,85%{opacity:1}100%{transform:translate(32.91px,19px);opacity:0}}
@keyframes pipette{0%,100%{transform:translateY(0)}40%,65%{transform:translateY(4px)}}
@keyframes drop{0%,40%,75%,100%{opacity:0;transform:translateY(0)}45%{opacity:1}65%{opacity:1;transform:translateY(9px)}}
@keyframes fan{to{transform:rotate(360deg)}}
@media(prefers-reduced-motion:reduce){*{animation:none!important}.permit-check,.plan-trace{stroke-dashoffset:0}.welding-spark,.survey-ray,.survey-target,.sample-drop{opacity:0}}
</style>`;
const stages = [
  ['layanan-perencanaan-isometrik','Persiapan dan perizinan pabrik air','Lahan yang belum dibangun, patok denah, alat survei, pengujian sumber air, kantor lapangan, serta teknisi menyiapkan gambar dan dokumen perizinan.',survey()],
  ['layanan-konstruksi-isometrik','Konstruksi dan pemasokan mesin pabrik air','Struktur pabrik sedang dibangun, crane mengangkat peralatan, tangki dan mesin mulai dipasang, truk mengirim mesin, dengan material konstruksi dan teknisi di lapangan.',construction()],
  ['layanan-operasional-isometrik','Pabrik air siap beroperasi','Pabrik selesai dengan tangki dan sistem pemurnian, mesin pengisian, conveyor botol bergerak, pemeriksaan sampel air, operator, palet kemasan, forklift, serta truk distribusi.',ready()]
];
for(const [name,title,description,scene] of stages) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="45 0 825 660" role="img" aria-labelledby="title description"><title id="title">${title}</title><desc id="description">${description}</desc>${css}${defs}${scene}</svg>`.replace(/></g,'>\n<');
  fs.writeFileSync(path.join(__dirname,'../assets/img/'+name+'.svg'),svg);
  console.log(name+': '+Buffer.byteLength(svg)+' bytes');
}
