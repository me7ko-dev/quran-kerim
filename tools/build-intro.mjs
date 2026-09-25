// Генерира SVG орнаментите на началния екран (корица, гръбче, ебру, илюминацията на Фатиха)
// и ги вписва в index.html между маркерите <!--intro:X--> … <!--/intro:X-->.
//   node tools/build-intro.mjs
import fs from 'fs';
import path from 'path';
const here = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1'));
const FILE = path.join(here, '../index.html');
const r = n => +n.toFixed(2);
const around = (n, f) => Array.from({ length: n }, (_, i) => f(i * 360 / n, i)).join('');
const pt = (cx, cy, rad, deg) => [r(cx + rad * Math.sin(deg * Math.PI / 180)), r(cy - rad * Math.cos(deg * Math.PI / 180))];

// ---------- корица 200 × 280 ----------
const CX = 100, CY = 140;
const petal = (len, w, from) => `M0,${-from} C${w},${-from - len * .35} ${w * .7},${-from - len * .8} 0,${-from - len} C${-w * .7},${-from - len * .8} ${-w},${-from - len * .35} 0,${-from}Z`;
const shamsa = `
  <g transform="translate(${CX} ${CY})">
    <circle r="47" fill="url(#cvRaise)" filter="url(#cvEmb)"/>
    ${around(16, a => `<path d="${petal(15, 6.2, 31)}" transform="rotate(${a})" fill="url(#cvRaise)" stroke="#6b4a12" stroke-width=".5"/>`)}
    ${around(16, a => `<path d="${petal(9, 3, 33)}" transform="rotate(${a + 11.25})" fill="#8a6118" opacity=".55"/>`)}
    <circle r="31.5" fill="none" stroke="#6b4a12" stroke-width="1.1"/>
    ${around(36, a => { const [x, y] = pt(0, 0, 29.3, a); return `<circle cx="${x}" cy="${y}" r=".85" fill="#fff1c2" stroke="#6b4a12" stroke-width=".25"/>`; })}
    <circle r="27" fill="url(#cvDisc)" stroke="#6b4a12" stroke-width=".8"/>
    <circle r="24.5" fill="none" stroke="#a37a26" stroke-width=".5" stroke-dasharray="1 1.2"/>
  </g>`;
// висящи медальони (салбек) горе и долу
const pendant = flip => `
  <g transform="translate(${CX} ${CY}) scale(1 ${flip})">
    <path d="M0,-47 L0,-53" stroke="#6b4a12" stroke-width="1.4"/>
    <path d="M0,-53 C9,-56 13,-66 0,-82 C-13,-66 -9,-56 0,-53Z" fill="url(#cvRaise)" stroke="#6b4a12" stroke-width=".7" filter="url(#cvEmb)"/>
    <path d="M0,-57 C5,-60 7,-66 0,-75 C-7,-66 -5,-60 0,-57Z" fill="none" stroke="#6b4a12" stroke-width=".5"/>
    <circle cy="-65" r="2.3" fill="url(#cvGem)" stroke="#5a3b08" stroke-width=".4"/>
    <circle cy="-85" r="1.6" fill="#fff1c2" stroke="#6b4a12" stroke-width=".4"/>
  </g>`;
// ъглови орнаменти: четвърт розетка с листа (руми)
const corner = (x, y, rot) => `
  <g transform="translate(${x} ${y}) rotate(${rot})" filter="url(#cvEmb)">
    <path d="M0,0 L32,0 A32,32 0 0 1 0,32Z" fill="url(#cvRaise)" stroke="#6b4a12" stroke-width=".7"/>
    ${[12, 27, 42, 57, 72].map(a => `<path d="${petal(13, 3.6, 8)}" transform="rotate(${90 + a})" fill="#8a6118" opacity=".6"/>`).join('')}
    <path d="M0,24 A24,24 0 0 0 24,0" fill="none" stroke="#6b4a12" stroke-width=".6"/>
    <path d="M0,8 A8,8 0 0 0 8,0" fill="none" stroke="#6b4a12" stroke-width=".8"/>
    <circle cx="4" cy="4" r="2.2" fill="url(#cvGem)" stroke="#5a3b08" stroke-width=".4"/>
  </g>`;
const cover = `<svg class="cv-svg" viewBox="0 0 200 280" preserveAspectRatio="none" aria-hidden="true">
  <defs>
    <filter id="cvEmb" x="-10%" y="-10%" width="120%" height="120%">
      <feOffset in="SourceAlpha" dx="-.55" dy="-.55" result="hi"/><feFlood flood-color="#fff6d2" flood-opacity=".9"/><feComposite in2="hi" operator="in" result="hic"/>
      <feOffset in="SourceAlpha" dx=".75" dy=".75" result="lo"/><feFlood flood-color="#3d2604" flood-opacity=".75"/><feComposite in2="lo" operator="in" result="loc"/>
      <feMerge><feMergeNode in="loc"/><feMergeNode in="hic"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <radialGradient id="cvRaise" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#fff3c4"/><stop offset=".35" stop-color="#e2b95a"/><stop offset=".75" stop-color="#b8892c"/><stop offset="1" stop-color="#8a6118"/></radialGradient>
    <radialGradient id="cvDisc" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#fbe7a6"/><stop offset=".6" stop-color="#d7ab4c"/><stop offset="1" stop-color="#a47724"/></radialGradient>
    <radialGradient id="cvGem" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#d8fff0"/><stop offset=".25" stop-color="#3fbf8f"/><stop offset=".7" stop-color="#0b6b4d"/><stop offset="1" stop-color="#053a2a"/></radialGradient>
    <pattern id="cvGirih" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M10 2l2.3 5.7L18 10l-5.7 2.3L10 18l-2.3-5.7L2 10l5.7-2.3z" fill="none" stroke="#7d5816" stroke-width=".45" opacity=".55"/>
      <path d="M0 0l4 4M20 0l-4 4M0 20l4-4M20 20l-4-4" stroke="#7d5816" stroke-width=".45" opacity=".55"/>
      <circle cx="10" cy="10" r="1.1" fill="none" stroke="#fff3c4" stroke-width=".35" opacity=".6"/>
    </pattern>
    <pattern id="cvBand" width="8" height="8" patternUnits="userSpaceOnUse">
      <path d="M4 .8L7.2 4 4 7.2.8 4z" fill="#e6c16b" stroke="#6b4a12" stroke-width=".45"/><circle cx="4" cy="4" r=".9" fill="#6b4a12"/>
    </pattern>
  </defs>
  <rect x="21" y="21" width="158" height="238" fill="url(#cvGirih)"/>
  <g filter="url(#cvEmb)" fill="none" stroke="#6b4a12">
    <rect x="5" y="5" width="190" height="270" rx="4" stroke-width="1.6"/>
    <rect x="9" y="9" width="182" height="262" rx="2" stroke-width=".7"/>
    <rect x="17" y="17" width="166" height="246" rx="1" stroke-width=".7"/>
    <rect x="21" y="21" width="158" height="238" stroke-width="1.3"/>
  </g>
  <path d="M9 9h182v262H9zM17 17v246h166V17z" fill="url(#cvBand)" fill-rule="evenodd" filter="url(#cvEmb)"/>
  ${corner(21, 21, 0)}${corner(179, 21, 90)}${corner(179, 259, 180)}${corner(21, 259, 270)}
  ${pendant(1)}${pendant(-1)}
  ${shamsa}
  <g fill="#6b4a12">${[[CX - 58, CY], [CX + 58, CY]].map(([x, y]) => `<path d="M${x},${y - 5} L${x + 3},${y} L${x},${y + 5} L${x - 3},${y}Z" filter="url(#cvEmb)" fill="url(#cvRaise)" stroke="#6b4a12" stroke-width=".4"/>`).join('')}</g>
</svg>`;

// ---------- гръбче (вертикално, 30 × 280) ----------
const spine = `<svg class="sp-svg" viewBox="0 0 30 280" preserveAspectRatio="none" aria-hidden="true">
  <defs><linearGradient id="spBand" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff0b8"/><stop offset=".45" stop-color="#d4a748"/><stop offset="1" stop-color="#6e4b10"/></linearGradient></defs>
  ${[34, 82, 130, 178, 226].map(y => `<rect x="0" y="${y}" width="30" height="7" fill="url(#spBand)"/><rect x="0" y="${y + 7}" width="30" height="1.2" fill="#4a2f05" opacity=".6"/>`).join('')}
  ${[58, 106, 154, 202].map(y => `<g transform="translate(15 ${y + 2})">${around(8, a => `<path d="${petal(6, 2.2, 1.5)}" transform="rotate(${a})" fill="#7a5415"/>`)}<circle r="1.6" fill="#fff0b8"/></g>`).join('')}
  <path d="M3 14h24M3 266h24" stroke="#6b4a12" stroke-width="1"/>
</svg>`;

// ---------- ебру (мраморирана хартия) отвътре на корицата ----------
// „таш ебру“: плътно наредени цветни капки с тъмни жилки, разкривени като боя по вода (фиксирано зърно — еднакво всеки път)
let seed = 11;
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const EB = ['#6f9a88', '#d8b86a', '#8397b8', '#f1e6c8', '#c9967a', '#efe0b0', '#8fb3a0', '#f1e6c8'];
const drops = Array.from({ length: 230 }, () => `<circle cx="${r(rnd() * 200)}" cy="${r(rnd() * 280)}" r="${r(4 + rnd() * 10)}" fill="${EB[Math.floor(rnd() * EB.length)]}" stroke="#5a4520" stroke-width=".5" stroke-opacity=".45"/>`).join('');
const ebru = `<svg class="eb-svg" viewBox="0 0 200 280" preserveAspectRatio="none" aria-hidden="true">
  <filter id="ebF" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="turbulence" baseFrequency=".035 .022" numOctaves="2" seed="4" result="n"/>
    <feDisplacementMap in="SourceGraphic" in2="n" scale="16" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <g filter="url(#ebF)"><rect width="200" height="280" fill="#efe2bf"/>${drops}</g>
  <rect x="10" y="10" width="180" height="260" rx="3" fill="none" stroke="#c9a043" stroke-width="2.5"/>
  <rect x="13.5" y="13.5" width="173" height="253" rx="2" fill="none" stroke="#6b4a12" stroke-width=".6"/>
</svg>`;

// ---------- илюминация на страницата с Ал-Фатиха (200 × 280) ----------
const frame = `<svg class="pg-svg" viewBox="0 0 200 280" preserveAspectRatio="none" aria-hidden="true">
  <defs>
    <pattern id="pgFlor" width="10" height="10" patternUnits="userSpaceOnUse">
      <rect width="10" height="10" fill="#1d4f91"/>
      <path d="M5 1.2c1.4 1.6 1.4 2.4 0 3.8-1.4-1.4-1.4-2.2 0-3.8zM5 9c1.4-1.6 1.4-2.4 0-3.8-1.4 1.4-1.4 2.2 0 3.8zM1 5c1.6-1.4 2.4-1.4 3.8 0-1.4 1.4-2.2 1.4-3.8 0zM9 5c-1.6-1.4-2.4-1.4-3.8 0 1.4 1.4 2.2 1.4 3.8 0z" fill="#d9b25a"/>
      <circle cx="5" cy="5" r=".8" fill="#fff"/>
    </pattern>
    <pattern id="pgLeaf" width="12" height="12" patternUnits="userSpaceOnUse">
      <rect width="12" height="12" fill="#e2c476"/>
      <path d="M6 1c2.5 2 2.5 4 0 5-2.5-1-2.5-3 0-5zM6 11c2.5-2 2.5-4 0-5-2.5 1-2.5 3 0 5z" fill="#1f7a5c"/>
      <circle cx="0" cy="6" r="1.3" fill="#b0302f"/><circle cx="12" cy="6" r="1.3" fill="#b0302f"/>
    </pattern>
  </defs>
  <rect x="4" y="4" width="192" height="272" fill="none" stroke="#b8892c" stroke-width="1.4"/>
  <path d="M8 8h184v264H8zM15 15v250h170V15z" fill="url(#pgFlor)" fill-rule="evenodd"/>
  <path d="M8 8h184v264H8zM15 15v250h170V15z" fill="none" stroke="#b8892c" stroke-width="1"/>
  <path d="M15 15h170v250H15zM100 34 C150 34 168 56 168 80 V200 C168 224 150 246 100 246 C50 246 32 224 32 200 V80 C32 56 50 34 100 34Z" fill="url(#pgLeaf)" fill-rule="evenodd"/>
  <path d="M100 34 C150 34 168 56 168 80 V200 C168 224 150 246 100 246 C50 246 32 224 32 200 V80 C32 56 50 34 100 34Z" fill="none" stroke="#1d4f91" stroke-width="2.2"/>
  <path d="M100 38 C146 38 164 58 164 81 V199 C164 222 146 242 100 242 C54 242 36 222 36 199 V81 C36 58 54 38 100 38Z" fill="#fffbef" stroke="#b8892c" stroke-width="1"/>
  ${[[15, 15], [185, 15], [185, 265], [15, 265]].map(([x, y]) => `<g transform="translate(${x} ${y})"><circle r="6.5" fill="#1d4f91" stroke="#b8892c" stroke-width="1"/>${around(8, a => `<path d="${petal(4.6, 1.8, .6)}" transform="rotate(${a})" fill="#e2c476"/>`)}<circle r="1.3" fill="#b0302f"/></g>`).join('')}
</svg>`;

// ---------- карти за 3D (WebGL): височина на корицата и маска на смарагдите ----------
// Сиво = височина: 0.45 е полето, по-светлото е изпъкнало, по-тъмното — гравирано. От нея 3D-то смята нормалите.
const g = v => { const c = Math.round(v * 255); return `rgb(${c},${c},${c})`; };
const hCorner = (x, y, rot) => `
  <g transform="translate(${x} ${y}) rotate(${rot})">
    <path d="M0,0 L32,0 A32,32 0 0 1 0,32Z" fill="${g(.64)}"/>
    ${[12, 27, 42, 57, 72].map(a => `<path d="${petal(13, 3.6, 8)}" transform="rotate(${90 + a})" fill="${g(.86)}"/>`).join('')}
    <path d="M0,24 A24,24 0 0 0 24,0" fill="none" stroke="${g(.34)}" stroke-width=".9"/>
    <path d="M0,8 A8,8 0 0 0 8,0" fill="none" stroke="${g(.34)}" stroke-width="1"/>
    <circle cx="4" cy="4" r="2.4" fill="${g(.95)}"/>
  </g>`;
const hPendant = flip => `
  <g transform="translate(${CX} ${CY}) scale(1 ${flip})">
    <path d="M0,-47 L0,-53" stroke="${g(.82)}" stroke-width="1.6"/>
    <path d="M0,-53 C9,-56 13,-66 0,-82 C-13,-66 -9,-56 0,-53Z" fill="${g(.74)}"/>
    <path d="M0,-57 C5,-60 7,-66 0,-75 C-7,-66 -5,-60 0,-57Z" fill="none" stroke="${g(.42)}" stroke-width=".7"/>
    <circle cy="-65" r="2.5" fill="${g(.95)}"/>
    <circle cy="-85" r="1.8" fill="${g(.92)}"/>
  </g>`;
const coverHeight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 280" width="1024" height="1434">
  <defs>
    <pattern id="hG" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M10 2l2.3 5.7L18 10l-5.7 2.3L10 18l-2.3-5.7L2 10l5.7-2.3z" fill="none" stroke="${g(.33)}" stroke-width=".55"/>
      <path d="M0 0l4 4M20 0l-4 4M0 20l4-4M20 20l-4-4" stroke="${g(.33)}" stroke-width=".55"/>
      <circle cx="10" cy="10" r="1.1" fill="${g(.6)}"/>
    </pattern>
    <pattern id="hB" width="8" height="8" patternUnits="userSpaceOnUse">
      <rect width="8" height="8" fill="${g(.5)}"/><path d="M4 .8L7.2 4 4 7.2.8 4z" fill="${g(.8)}"/><circle cx="4" cy="4" r="1" fill="${g(.42)}"/>
    </pattern>
  </defs>
  <rect width="200" height="280" fill="${g(.45)}"/>
  <rect x="21" y="21" width="158" height="238" fill="url(#hG)"/>
  <path d="M9 9h182v262H9zM17 17v246h166V17z" fill="url(#hB)" fill-rule="evenodd"/>
  <g fill="none" stroke="${g(.88)}">
    <rect x="5" y="5" width="190" height="270" rx="4" stroke-width="1.8"/>
    <rect x="9" y="9" width="182" height="262" rx="2" stroke-width=".8"/>
    <rect x="17" y="17" width="166" height="246" rx="1" stroke-width=".8"/>
    <rect x="21" y="21" width="158" height="238" stroke-width="1.4"/>
  </g>
  ${hCorner(21, 21, 0)}${hCorner(179, 21, 90)}${hCorner(179, 259, 180)}${hCorner(21, 259, 270)}
  ${hPendant(1)}${hPendant(-1)}
  <g transform="translate(${CX} ${CY})">
    <circle r="47" fill="${g(.6)}"/>
    ${around(16, a => `<path d="${petal(15, 6.2, 31)}" transform="rotate(${a})" fill="${g(.84)}"/>`)}
    ${around(16, a => `<path d="${petal(9, 3, 33)}" transform="rotate(${a + 11.25})" fill="${g(.7)}"/>`)}
    <circle r="31.5" fill="none" stroke="${g(.3)}" stroke-width="1.3"/>
    ${around(36, a => { const [x, y] = pt(0, 0, 29.3, a); return `<circle cx="${x}" cy="${y}" r=".95" fill="${g(.96)}"/>`; })}
    <circle r="27" fill="${g(.5)}"/>
    <circle r="24.5" fill="none" stroke="${g(.72)}" stroke-width=".6" stroke-dasharray="1 1.2"/>
  </g>
  ${[[CX - 58, CY], [CX + 58, CY]].map(([x, y]) => `<path d="M${x},${y - 5} L${x + 3},${y} L${x},${y + 5} L${x - 3},${y}Z" fill="${g(.86)}"/>`).join('')}
</svg>`;
// смарагдите (бяло на черно) — в 3D са стъкло, не метал
const gemAt = [[25, 25], [175, 25], [175, 255], [25, 255], [CX, CY - 65], [CX, CY + 65]];
const coverGems = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 280" width="1024" height="1434"><rect width="200" height="280" fill="#000"/>${gemAt.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.4" fill="#fff"/>`).join('')}</svg>`;
const asSvgFile = s => s.replace(/<svg class="[^"]*"/, '<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1434"').replace(/ aria-hidden="true"/, '').replace(/\n\s*/g, '');
const ASSETS = path.join(here, 'intro3d/assets.js');
fs.mkdirSync(path.dirname(ASSETS), { recursive: true });
fs.writeFileSync(ASSETS, '// Генерирано от tools/build-intro.mjs — не пипай на ръка.\n' + Object.entries({ coverHeight, coverGems, frame: asSvgFile(frame), ebru: asSvgFile(ebru) })
  .map(([k, v]) => `export const ${k} = ${JSON.stringify(v.replace(/\n\s*/g, ''))};`).join('\n') + '\n');

let html = fs.readFileSync(FILE, 'utf8');
for (const [k, svg] of Object.entries({ cover, spine, ebru, frame })) {
  const re = new RegExp(`<!--intro:${k}-->[\\s\\S]*?<!--/intro:${k}-->`);
  if (!re.test(html)) throw new Error(`Липсва маркер <!--intro:${k}--> в index.html`);
  html = html.replace(re, `<!--intro:${k}-->${svg.replace(/\n\s*/g, '')}<!--/intro:${k}-->`);
}
fs.writeFileSync(FILE, html);
console.log('Орнаментите са вписани в index.html (' + Math.round(html.length / 1024) + ' KB)');
