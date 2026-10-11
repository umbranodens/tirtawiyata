const fs = require('node:fs');
const path = require('node:path');

const round = n => Math.round(n * 100) / 100;
const project = (x, y, z = 0) => [round(390 + (x - y) * .866), round(180 + (x + y) * .5 - z)];
const points = coords => coords.map(c => project(...c).join(',')).join(' ');
const face = (coords, fill, attrs = '') => `<polygon points="${points(coords)}" fill="${fill}" ${attrs}/>`;
const pipe = (coords, color, width = 2, attrs = '') => `<path d="${coords.map((c, i) => (i ? 'L' : 'M') + project(...c)).join(' ')}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linejoin="round" stroke-linecap="round" ${attrs}/>`;
function box(x, y, z, w, d, h, top = '#edf5fa', front = '#bfd2df', side = '#99b5c9', attrs = '') {
  return `<g ${attrs}>${face([[x,y,z+h],[x+w,y,z+h],[x+w,y+d,z+h],[x,y+d,z+h]],top)}${face([[x,y+d,z],[x+w,y+d,z],[x+w,y+d,z+h],[x,y+d,z+h]],front)}${face([[x+w,y,z],[x+w,y+d,z],[x+w,y+d,z+h],[x+w,y,z+h]],side)}</g>`;
}
const darkBox = (x,y,z,w,d,h) => box(x,y,z,w,d,h,'#315b7a','#173d5b','#234c69');
const panel = (x,y,z,w=18,h=14) => face([[x,y,z],[x+w,y,z],[x+w,y,z+h],[x,y,z+h]],'#16486a') + pipe([[x+3,y+.3,z+4],[x+w-3,y+.3,z+4]],'#66d8ef',2);
function tank(x,y,r,h,z=12) {
  const [cx,cy] = project(x,y,z), ry = round(r*.5), ty = cy-h;
  let s = '';
  for(const [dx,dy] of [[-r*.6,-r*.3],[r*.6,r*.3],[-r*.3,r*.6]]) s += box(x+dx,y+dy,0,4,4,z+5);
  return s + `<g><path d="M${cx-r},${ty}v${h}a${r},${ry} 0 0 0 ${r*2},0v-${h}Z" fill="url(#steel)" stroke="#8eacbf" stroke-width=".8"/><ellipse cx="${cx}" cy="${ty}" rx="${r}" ry="${ry}" fill="#e8f3f9" stroke="#9bb6c7"/><ellipse cx="${cx}" cy="${ty}" rx="${r-5}" ry="${ry-2.5}" fill="none" stroke="#c3d9e6"/><path d="M${cx-r},${ty+h*.78}a${r},${ry} 0 0 0 ${r*2},0" fill="none" stroke="#8eacbf"/><path d="M${cx-r+7},${ty+10}v${h-17}" stroke="#fff" stroke-width="3" opacity=".65"/><rect x="${cx-3}" y="${ty+h*.35}" width="6" height="${h*.32}" rx="2" fill="#225675"/><rect x="${cx-1.5}" y="${ty+h*.39}" width="3" height="${h*.2}" rx="1" fill="#52c9e5"/><ellipse cx="${cx}" cy="${ty-3}" rx="7" ry="3.5" fill="#acc7d8"/></g>`;
}
function carton(x,y,z,w=23,d=22,h=20) {
  return box(x,y,z,w,d,h,'#e5d4b9','#c8ab83','#b99a72') + face([[x+w*.42,y,z+h+.2],[x+w*.58,y,z+h+.2],[x+w*.58,y+d,z+h+.2],[x+w*.42,y+d,z+h+.2]],'#f0e7d6') + face([[x+5,y+d+.2,z+5],[x+13,y+d+.2,z+5],[x+13,y+d+.2,z+11],[x+5,y+d+.2,z+11]],'#f4f1e8');
}
function pallet(x,y,w=56,d=49) {
  let s = box(x,y,0,w,d,5,'#c7ad87','#a98d64','#b69a73');
  for(let dx=3;dx<w;dx+=10) s += pipe([[x+dx,y,5.2],[x+dx,y+d,5.2]],'#e1c9a5',2);
  return s;
}
function worker(x,y,flip=1) {
  const [cx,cy] = project(x,y);
  return `<g transform="translate(${cx} ${cy}) scale(${flip} 1)"><ellipse cy="2" rx="10" ry="4" fill="#62849d" opacity=".18"/><path d="M-4,-18 -5,-2 M4,-18 6,-2" fill="none" stroke="#254f75" stroke-width="5" stroke-linecap="round"/><path d="M-7,0h4 M4,0h5" stroke="#183b56" stroke-width="3" stroke-linecap="round"/><path d="M-7,-36 Q0,-41 7,-36 L6,-17 Q0,-14 -6,-17Z" fill="#347fc0"/><path d="M-2,-36v18" stroke="#75b9e2" stroke-width="2"/><path d="M-7,-33 -11,-23 -7,-19 M7,-33 11,-25 15,-27" fill="none" stroke="#3989c7" stroke-width="4" stroke-linecap="round"/><circle cy="-44" r="5" fill="#c9b59e"/><path d="M-7,-46 Q-6,-54 1,-53 Q7,-52 7,-46Z" fill="#f1f8fc" stroke="#b7d0e0"/><path d="M-8,-46h16" stroke="#d0e4ef" stroke-width="2"/></g>`;
}
function fan(x,y,z,r=13) {
  const [cx,cy] = project(x,y,z);
  return `<g transform="translate(${cx} ${cy}) matrix(.866 .5 0 1 0 0)"><circle r="${r+3}" fill="#88a6bb"/><circle r="${r}" fill="#31516b"/><g class="fan">${[0,90,180,270].map(a=>`<path d="M0,0 Q-${r},-${r} 0,-${r-1} Q${r*.55},-${r*.5} 0,0Z" fill="#bacfdd" transform="rotate(${a})"/>`).join('')}</g><circle r="2.5" fill="#e4f1f7"/></g>`;
}
function conveyor(x,y,length) {
  let s = '';
  for(let dx=12;dx<length;dx+=54) for(const dy of [2,24]) s += box(x+dx,y+dy,0,4,4,35);
  s += box(x,y,33,length,29,7,'#345b77','#b0c9da','#8caec3');
  for(let dx=4;dx<length;dx+=9) s += pipe([[x+dx,y+1,40.3],[x+dx,y+28,40.3]],'#7499b2',1);
  return s + pipe([[x,y,49],[x+length,y,49]],'#c4deec',2);
}
function bottles(x,y,length,count,clip,id,duration=15) {
  const [cx,cy] = project(x,y,42);
  return `<g clip-path="url(#${clip})">${Array.from({length:count},(_,i)=>`<g class="bottle-travel ${id}" style="animation-delay:-${round(i*duration/count)}s"><use href="#bottle" x="${cx}" y="${cy}"/></g>`).join('')}</g>`;
}

let scene = '';
scene += box(0,0,-14,520,370,14,'#eef5fc','#b6ccde','#a3bdd2');
scene += box(0,0,0,520,5,60,'#eef8ff','#c8dce9','#d5e6f0');
scene += box(0,5,0,5,365,60,'#eef8ff','#b7cede','#c7ddea');
scene += pipe([[17,155,1],[17,273,1],[497,273,1]],'#bdcfdf',1.5,'stroke-dasharray="5 6"');
scene += pipe([[188,18,1],[188,118,1],[493,118,1]],'#c5d7e5',1.5,'stroke-dasharray="5 6"');

// Rear service building, laboratory and rooftop air handling.
scene += box(205,12,0,272,60,128,'#f1f7fc','#c8dce9','#adc8dc');
scene += box(202,9,128,278,66,6,'#f9fcff','#d7e6f0','#a8c3d7');
for(let x=218;x<459;x+=39) {
  scene += face([[x,72.3,55],[x+29,72.3,55],[x+29,72.3,103],[x,72.3,103]],'#94bdd9');
  scene += face([[x+2,72.5,58],[x+27,72.5,58],[x+27,72.5,100],[x+2,72.5,100]],'url(#window)');
  scene += pipe([[x+14,72.7,58],[x+14,72.7,100]],'#daeaf5',1.5);
}
scene += box(225,27,134,70,29,21,'#e8f2f9','#a2bed3','#bfd5e4');
for(let x=233;x<291;x+=12) scene += box(x,32,155,6,19,4,'#becfdf','#8eabbf','#a4bfd2');
scene += box(330,26,134,59,30,17,'#e8f2f9','#a2bed3','#bfd5e4');
scene += box(411,32,134,30,26,24,'#e8f2f9','#a2bed3','#bfd5e4');
scene += pipe([[413,48,158],[413,48,173]],'#bdd1e0',8);
scene += panel(448,72.8,8,20,28);

// Raw water, buffer tanks and an exposed membrane filtration skid.
scene += tank(35,39,22,128);
scene += tank(93,39,24,146);
scene += tank(47,107,28,112);
scene += box(111,70,0,69,60,7);
for(const x of [113,174]) for(const y of [72,124]) scene += box(x,y,7,4,4,81);
for(let z=24;z<=69;z+=21) {
  scene += box(118,77,z,54,15,13,'#e7f4fb','#aec8d9','#87aabe');
  scene += pipe([[123,92,z+7],[165,92,z+7]],'#fff',2);
}
scene += tank(135,114,9,50);
scene += tank(162,114,9,50);
scene += darkBox(177,83,15,21,15,43);
scene += panel(180,98.3,39,14,13);
const waterRoute = [[47,107,48],[82,107,48],[82,77,48],[120,77,48],[120,143,48],[215,143,48],[215,196,89],[270,196,89]];
scene += pipe(waterRoute,'#8eafc5',7) + pipe(waterRoute,'#dcecf7',4) + pipe(waterRoute,'#36b1d3',2,'class="water-flow" stroke-dasharray="5 13"');
scene += pipe([[35,39,95],[93,39,95],[93,106,48]],'#a6c5d9',5);

// Bottle blow moulding cell, preform hopper and enclosed press.
scene += darkBox(288,91,0,124,59,16);
scene += box(288,91,16,62,59,78,'#e9f3fa','#b5cfdf','#83a9c4');
scene += box(350,91,16,62,59,78,'#d8e9f5','#8bb1ce','#577f9f');
scene += face([[357,150.2,30],[402,150.2,30],[402,150.2,83],[357,150.2,83]],'#284d6a');
scene += face([[360,150.5,33],[399,150.5,33],[399,150.5,80],[360,150.5,80]],'url(#glass)');
scene += `<g class="mold-press">${box(364,112,35,29,25,26,'#bed7e7','#739bb5','#91b4ca')}</g>`;
scene += panel(299,150.4,55,28,24);
for(let x=299;x<341;x+=6) scene += pipe([[x,150.5,25],[x,150.5,38]],'#789bb5',1);
scene += box(302,103,94,30,30,19,'#eaf5fb','#a5c4d8','#7fa4bf');
scene += face([[302,103,113],[332,103,113],[326,109,126],[308,109,126]],'#d1e6f3');
scene += pipe([[407,111,94],[407,111,109],[430,111,109],[430,163,42]],'#b1cedf',5);
scene += conveyor(346,162,110);
scene += bottles(350,175,101,7,'preform-clip','preform',9);
scene += pipe([[346,191,49],[456,191,49]],'#c7deec',2);
scene += worker(186,156);
scene += worker(437,171,-1);

// The main rinsing, filling and capping line.
scene += conveyor(86,214,359);
scene += darkBox(207,183,11,128,73,17);
for(const x of [208,330]) for(const y of [185,251]) scene += box(x,y,28,4,4,97);
scene += face([[208,185,53],[330,185,53],[330,185,122],[208,185,122]],'url(#glass)','stroke="#9bbfd7"');
scene += box(204,180,125,135,79,11,'#eff8fd','#98b8d1','#bdd4e5');
scene += box(217,198,101,100,14,8,'#dcecf7','#80a4bf','#b0cddd');
for(let x=225;x<317;x+=18) {
  scene += pipe([[x,213,101],[x,213,82]],'#537d9c',3);
  scene += pipe([[x,225,81],[x,225,64]],'#39b4d5',2,'class="filling-water"');
}
scene += bottles(90,228,350,17,'bottle-clip','main-line');
scene += face([[208,255,54],[330,255,54],[330,255,122],[208,255,122]],'url(#glass)','stroke="#91b9d3"');
for(let x=239;x<330;x+=31) scene += pipe([[x,255.2,54],[x,255.2,122]],'#8eb2cc',1.5);
scene += pipe([[216,255.4,63],[236,255.4,112]],'#fff',2,'opacity=".7"');
scene += box(332,224,65,24,10,31,'#d6e9f6','#7ba2bf','#16486a');
scene += panel(336,234.3,73,16,16);
scene += pipe([[86,243,49],[445,243,49]],'#c6dfed',2.5);

// Shrink wrapping and the dispatch end of the line.
scene += darkBox(385,208,11,71,48,12);
scene += box(385,208,58,71,48,35,'#d8e9f5','#a6c6dd','#7098b8');
scene += box(385,208,23,6,48,35);
scene += box(450,208,23,6,48,35);
scene += face([[392,256,34],[449,256,34],[449,256,57],[392,256,57]],'#254d6b');
scene += panel(405,256.3,68,23,13);
for(let x=391;x<451;x+=8) scene += pipe([[x,218,93.3],[x,245,93.3]],'#90b3cd',1);
scene += carton(455,214,41,26,24,20);

// Maintenance utilities: compressor, air receiver and twin water chillers.
scene += box(25,295,0,73,40,46,'#e2eff8','#acc8dc','#82a7c3');
scene += panel(33,335.3,25,20,15);
for(let x=61;x<92;x+=5) scene += pipe([[x,335.3,9],[x,335.3,34]],'#799bb6',1);
scene += tank(115,319,13,64);
scene += pipe([[97,319,31],[115,319,31],[115,283,31]],'#9fbbce',4);
for(const x of [155,225]) {
  scene += box(x,296,0,58,44,51,'#e7f3fb','#aec9dd','#8cacc6');
  scene += fan(x+18,340.4,27,12);
  scene += fan(x+43,340.4,27,9);
  scene += box(x+8,303,51,38,25,4,'#bfd6e6','#9ebbd1','#8eacc3');
  for(let dx=11;dx<45;dx+=6) scene += pipe([[x+dx,306,55.2],[x+dx,325,55.2]],'#6e91ae',1.5);
}

// Staff and warehouse give the machines scale and a complete factory context.
scene += worker(282,276,-1);
scene += worker(135,259);
for(const [x,y] of [[354,291],[423,306],[458,270]]) {
  scene += pallet(x,y);
  for(const [dx,dy,z] of [[2,2,6],[28,2,6],[2,25,6],[28,25,6],[15,14,26]]) scene += carton(x+dx,y+dy,z);
}
scene += worker(352,356);

// A small electric forklift beside the packed-water pallets.
let truck = darkBox(293,317,5,35,42,17);
truck += box(295,320,22,31,26,19,'#68afdb','#307daf','#225f91');
for(const x of [293,324]) for(const y of [319,350]) {
  const [cx,cy] = project(x,y,5);
  truck += `<ellipse cx="${cx}" cy="${cy}" rx="6" ry="8" fill="#274963"/><ellipse cx="${cx}" cy="${cy}" rx="2.5" ry="4" fill="#a6c0d3"/>`;
}
for(const x of [296,323]) truck += box(x,347,20,3,3,49,'#a7c3d6','#365d7a','#214660');
truck += box(293,316,66,36,37,4,'#bcd6e7','#7c9db7','#547b9a');
truck += box(308,332,23,13,9,19,'#426d8d','#234f70','#173c5b');
truck += pipe([[297,355,12],[297,376,12]],'#557891',3) + pipe([[322,355,12],[322,376,12]],'#557891',3);
scene += `<g class="forklift">${truck}</g>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="45 5 825 660" role="img" aria-labelledby="title description">
<title id="title">Pabrik air minum dalam kemasan</title>
<desc id="description">Fasilitas pabrik air isometrik yang mencakup tangki dan pemurnian air, ruang laboratorium, mesin cetak botol, lini pengisian dan conveyor bergerak, mesin pengemasan, utilitas, operator, dan gudang pengiriman.</desc>
<style>
  .water-flow{animation:water 2s linear infinite}
  .bottle-travel{animation-timing-function:linear;animation-iteration-count:infinite}
  .main-line{animation-name:main-line;animation-duration:15s}
  .preform{animation-name:preform;animation-duration:9s}
  .filling-water{animation:filling 2s ease-in-out infinite}
  .fan{animation:fan 4s linear infinite}
  .mold-press{animation:mold 3s ease-in-out infinite}
  .forklift{animation:forklift 14s ease-in-out infinite}
  @keyframes water{to{stroke-dashoffset:-36}}
  @keyframes main-line{to{transform:translate(303.1px,175px)}}
  @keyframes preform{to{transform:translate(87.47px,50.5px)}}
  @keyframes filling{0%,15%,85%,100%{opacity:.15}25%,75%{opacity:.85}}
  @keyframes fan{to{transform:rotate(360deg)}}
  @keyframes mold{0%,20%,80%,100%{transform:translateY(0)}40%,60%{transform:translateY(-8px)}}
  @keyframes forklift{0%,15%,85%,100%{transform:translate(0,0)}40%,60%{transform:translate(-20.78px,12px)}}
  @media(prefers-reduced-motion:reduce){*{animation:none!important}}
</style>
<defs>
  <linearGradient id="steel"><stop stop-color="#8facbf"/><stop offset=".23" stop-color="#f2f9fd"/><stop offset=".5" stop-color="#d6e8f4"/><stop offset="1" stop-color="#8eafc6"/></linearGradient>
  <linearGradient id="glass" x2="1" y2="1"><stop stop-color="#e0f6ff" stop-opacity=".65"/><stop offset="1" stop-color="#6fb7dc" stop-opacity=".2"/></linearGradient>
  <linearGradient id="window" x2="0" y2="1"><stop stop-color="#b0daf0"/><stop offset="1" stop-color="#70aacd"/></linearGradient>
  <g id="bottle"><path d="M-2.5,-23v4l-3.5,4v14Q-6,2 0,2Q6,2 6,-1v-14l-3.5,-4v-4Z" fill="#d5f3fc" stroke="#5597b8" stroke-width=".8"/><path d="M-4,-13H4V-1Q0,1 -4,-1Z" fill="#65c5e6" opacity=".8"/><path d="M-4,-10Q0,-8 4,-10v5Q0,-3 -4,-5Z" fill="#eef9ff"/><path d="M-3,-15v4" stroke="#fff" stroke-width="1.5"/><rect x="-3.5" y="-25" width="7" height="3" rx="1" fill="#21648f"/></g>
  <clipPath id="bottle-clip"><polygon points="${points([[89,228,75],[440,228,75],[440,228,39],[89,228,39]])}"/></clipPath>
  <clipPath id="preform-clip"><polygon points="${points([[349,175,75],[452,175,75],[452,175,39],[349,175,39]])}"/></clipPath>
</defs>
${scene}
</svg>`.replace(/></g,'>\n<');
fs.writeFileSync(path.join(__dirname,'../assets/img/pabrik-air-isometrik.svg'),svg);
console.log('Factory SVG generated: '+Buffer.byteLength(svg)+' bytes.');
