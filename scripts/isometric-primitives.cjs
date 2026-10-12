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


module.exports = {round, project, points, face, pipe, box, darkBox, panel, tank, carton, pallet, worker, fan, conveyor, bottles};
