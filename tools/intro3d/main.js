// 3D начален екран (WebGL, Three.js): златен мусхаф с физически материали, релеф от карта на височината,
// околна светлина за отраженията, меки сенки и сияние (bloom). При отваряне светлината идва от страницата.
// Пакетира се в js/intro3d.js с: npm run build:intro  (esbuild, само използваните части на Three.js)
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { coverHeight, coverGems, frame, ebru } from './assets.js';

// размери (метри, мащабът няма значение): мусхаф ~ 14 × 20 см
const W = 1.4, H = 1.96, T = 0.34, BT = 0.034, O = 0.035;
const TW = 1024, TH = 1434; // текстури 200 × 280 → 1024 × 1434

const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const clamp01 = t => Math.min(1, Math.max(0, t));
const lerp = (a, b, t) => a + (b - a) * t;

function svgImage(svg) {
  return new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
}
const canvas2d = (w = TW, h = TH) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d', { willReadFrequently: true })]; };

// Корица: височина → нормали (Sobel), цвят (злато с тъмни вдлъбнатини), грапавост/метал (смарагдите не са метал)
async function coverMaps(title) {
  const [hImg, gImg] = await Promise.all([svgImage(coverHeight), svgImage(coverGems)]);
  const [hc, hx] = canvas2d();
  hx.filter = 'blur(1.6px)';
  hx.drawImage(hImg, 0, 0, TW, TH);
  // заглавието — релефно, с истинския шрифт на мусхафа
  hx.filter = 'blur(1.2px)';
  hx.fillStyle = 'rgb(245,245,245)';
  hx.textAlign = 'center'; hx.textBaseline = 'middle'; hx.direction = 'rtl';
  hx.font = `${Math.round(TW * .095)}px Hafs`;
  hx.fillText(title[0], TW / 2, TH / 2 - TW * .055);
  hx.fillText(title[1], TW / 2, TH / 2 + TW * .06);
  hx.filter = 'none';
  const h = hx.getImageData(0, 0, TW, TH).data;
  const [, gx] = canvas2d(); gx.drawImage(gImg, 0, 0, TW, TH);
  const gem = gx.getImageData(0, 0, TW, TH).data;
  // размита височина за „кухини“ (тъмно в дълбоките места, както при истински релеф)
  const [bc, bx] = canvas2d(); bx.filter = 'blur(7px)'; bx.drawImage(hc, 0, 0); const hb = bx.getImageData(0, 0, TW, TH).data;

  const [nc, nx] = canvas2d(), [cc, cx] = canvas2d(), [rc, rx] = canvas2d();
  const N = nx.createImageData(TW, TH), C = cx.createImageData(TW, TH), R = rx.createImageData(TW, TH);
  const hv = (x, y) => h[((Math.min(TH - 1, Math.max(0, y)) * TW) + Math.min(TW - 1, Math.max(0, x))) * 4] / 255;
  const S = 7; // сила на релефа
  for (let y = 0; y < TH; y++) for (let x = 0; x < TW; x++) {
    const i = (y * TW + x) * 4;
    const dx = (hv(x + 1, y) - hv(x - 1, y)) * S, dy = (hv(x, y + 1) - hv(x, y - 1)) * S;
    const len = Math.hypot(dx, dy, 1);
    N.data[i] = (-dx / len * .5 + .5) * 255; N.data[i + 1] = (dy / len * .5 + .5) * 255; N.data[i + 2] = (1 / len * .5 + .5) * 255; N.data[i + 3] = 255;
    const v = h[i] / 255, cav = (h[i] - hb[i]) / 255, isGem = gem[i] > 128;
    if (isGem) { // смарагд
      C.data[i] = 12; C.data[i + 1] = 120; C.data[i + 2] = 80;
      R.data[i + 1] = 12; R.data[i + 2] = 0;
    } else {
      const k = Math.min(1.12, Math.max(.5, .9 + (v - .45) * .45 + cav * 2));
      C.data[i] = 255 * Math.min(1, .98 * k); C.data[i + 1] = 255 * Math.min(1, .76 * k); C.data[i + 2] = 255 * Math.min(1, .38 * k);
      R.data[i + 1] = 255 * (v > .7 ? .16 : v < .38 ? .5 : .3); // изпъкналото е полирано, гравираното — матово
      R.data[i + 2] = 255;
    }
    C.data[i + 3] = 255; R.data[i] = 255; R.data[i + 3] = 255;
  }
  nx.putImageData(N, 0, 0); cx.putImageData(C, 0, 0); rx.putImageData(R, 0, 0);
  return { normal: nc, color: cc, rough: rc };
}

// Страницата с Ал-Фатиха: илюминацията (SVG) + текстът с шрифта на мусхафа (от проверените данни)
async function pageMap(ayahs, head) {
  const img = await svgImage(frame);
  const [c, x] = canvas2d();
  x.fillStyle = '#f8efd6'; x.fillRect(0, 0, TW, TH);
  // лека текстура на хартията
  const n = x.getImageData(0, 0, TW, TH);
  for (let i = 0; i < n.data.length; i += 4) { const d = (Math.random() - .5) * 10; n.data[i] += d; n.data[i + 1] += d; n.data[i + 2] += d; }
  x.putImageData(n, 0, 0);
  x.drawImage(img, 0, 0, TW, TH);
  // заглавна рамка
  const hw = TW * .46, hh = TW * .075, hy = TH * .19;
  const grd = x.createLinearGradient(TW / 2 - hw / 2, 0, TW / 2 + hw / 2, 0);
  grd.addColorStop(0, '#163f78'); grd.addColorStop(.5, '#2a64ad'); grd.addColorStop(1, '#163f78');
  x.fillStyle = grd; x.strokeStyle = '#c9a043'; x.lineWidth = 6;
  x.beginPath(); x.roundRect(TW / 2 - hw / 2, hy - hh / 2, hw, hh, 14); x.fill(); x.stroke();
  x.fillStyle = '#fbeec4'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.direction = 'rtl';
  x.font = `${Math.round(TW * .05)}px Hafs`;
  x.fillText(head, TW / 2, hy + 4);
  // текст: думите се нареждат отдясно наляво в полето на рамката
  x.fillStyle = '#1b2521';
  const fs = Math.round(TW * .052), lh = fs * 2.05, maxW = TW * .6;
  x.font = `${fs}px Hafs`;
  const words = ayahs.join(' ').split(/\s+/);
  const lines = []; let line = '';
  for (const w of words) { const t = line ? line + ' ' + w : w; if (x.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t; }
  if (line) lines.push(line);
  const top = TH * .53 - (lines.length - 1) * lh / 2;
  lines.forEach((l, i) => x.fillText(l, TW / 2, top + i * lh));
  return c;
}

async function imgCanvas(svg) { const img = await svgImage(svg); const [c, x] = canvas2d(); x.drawImage(img, 0, 0, TW, TH); return c; }

function gildedEdge() { // позлатените ръбове: фини линии на листовете
  const [c, x] = canvas2d(64, 512);
  for (let i = 0; i < 64; i++) { const v = 200 + Math.random() * 55; x.fillStyle = `rgb(${v},${v * .8},${v * .42})`; x.fillRect(i, 0, 1, 512); }
  return c;
}

function backgroundTex() {
  const [c, x] = canvas2d(512, 1024);
  const g = x.createRadialGradient(256, 400, 20, 256, 420, 700);
  g.addColorStop(0, '#15453a'); g.addColorStop(.45, '#0a241d'); g.addColorStop(1, '#020806');
  x.fillStyle = g; x.fillRect(0, 0, 512, 1024);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function glowSprite() {
  const [c, x] = canvas2d(256, 256);
  const g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, 'rgba(255,236,180,1)'); g.addColorStop(.25, 'rgba(255,210,120,.55)'); g.addColorStop(1, 'rgba(255,190,90,0)');
  x.fillStyle = g; x.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}

// Студио за отраженията: тъмна зелена стая с меки панели. Зад камерата има само широк приглушен топъл панел,
// за да не изгаря златото, когато корицата е фронтално.
function studio() {
  const env = new THREE.Scene();
  env.add(new THREE.Mesh(new THREE.SphereGeometry(30, 32, 16), new THREE.MeshBasicMaterial({ color: new THREE.Color(0x06140f), side: THREE.BackSide })));
  const panel = (w, h, pos, c) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(...c), side: THREE.DoubleSide })); m.position.set(...pos); m.lookAt(0, 0, 0); env.add(m); };
  panel(9, 6, [-8, 9, 5], [3.2, 2.9, 2.4]);    // основен софтбокс горе вляво
  panel(2.2, 14, [10, 2, -4], [3.6, 2.8, 1.6]); // контурна лента отдясно
  panel(12, 10, [0, 14, 0], [1.1, 1.05, .95]);  // таван
  panel(16, 8, [0, 1, 16], [.55, .45, .3]);     // широк топъл панел зад камерата — приглушен
  panel(20, 3, [0, -10, 4], [.25, .18, .08]);   // отблясък от „пода“
  panel(9, 9, [-13, 2, 9], [1.5, 1.3, 1]);      // мек панел отляво-отпред — корицата под ъгъл
  return env;
}

const tex = (canvas, srgb = true, aniso = 8) => { const t = new THREE.CanvasTexture(canvas); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = aniso; return t; };

export async function start({ host, onLost, ayahs, head = 'سُورَةُ ٱلْفَاتِحَةِ', title = ['القرآن', 'الكريم'], reduced = false }) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  const cv = renderer.domElement;
  cv.className = 'in-gl';
  cv.addEventListener('webglcontextlost', e => { e.preventDefault(); onLost?.(); });
  const aniso = renderer.capabilities.getMaxAnisotropy();

  await document.fonts.load(`40px Hafs`).catch(() => {});
  const [cm, page, inside] = await Promise.all([coverMaps(title), pageMap(ayahs, head), imgCanvas(ebru)]);

  const scene = new THREE.Scene();
  scene.background = backgroundTex();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(studio(), .03).texture;
  scene.environmentIntensity = 1;

  const camera = new THREE.PerspectiveCamera(28, 1, .1, 100);

  // светлина: топла основна отгоре-отпред, контурна отзад, лека запълваща
  const key = new THREE.DirectionalLight(0xfff0d8, 1.5);
  key.position.set(-3, 5, 6); key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024); key.shadow.radius = 6; key.shadow.bias = -.0004;
  Object.assign(key.shadow.camera, { left: -3, right: 3, top: 3, bottom: -3, near: 1, far: 20 });
  const rim = new THREE.DirectionalLight(0xffd79a, 1.4); rim.position.set(5, 3, -5);
  const fill = new THREE.HemisphereLight(0xfff4e0, 0x0b2a22, .35);
  scene.add(key, rim, fill);

  // материали
  const gold = new THREE.MeshStandardMaterial({ color: 0xe8b85c, metalness: 1, roughness: .28 });
  const coverFront = new THREE.MeshPhysicalMaterial({
    map: tex(cm.color, true, aniso), normalMap: tex(cm.normal, false, aniso), roughnessMap: tex(cm.rough, false, aniso), metalnessMap: tex(cm.rough, false, aniso),
    metalness: 1, roughness: 1, normalScale: new THREE.Vector2(1.1, 1.1), clearcoat: .25, clearcoatRoughness: .25,
  });
  const coverInside = new THREE.MeshStandardMaterial({ map: tex(inside, true, aniso), color: 0xe6dccb, roughness: .75, metalness: 0 });
  const edgeTex = tex(gildedEdge(), true, aniso);
  const edge = new THREE.MeshStandardMaterial({ map: edgeTex, color: 0xffffff, metalness: .9, roughness: .32 });
  const pageTex = tex(page, true, aniso);
  const pageMat = new THREE.MeshStandardMaterial({ map: pageTex, color: 0xd8d0c0, roughness: .82, metalness: 0, emissive: 0xffffff, emissiveMap: pageTex, emissiveIntensity: 0 });
  const paper = new THREE.MeshStandardMaterial({ color: 0xe8dbb8, roughness: .9 });

  const book = new THREE.Group();
  const spin = new THREE.Group(); // въртене около центъра на книгата
  spin.add(book);
  scene.add(spin);

  // задна корица
  const back = new THREE.Mesh(new RoundedBoxGeometry(W + O, H + 2 * O, BT, 4, .012), [gold, gold, gold, gold, gold, gold]);
  back.position.set(-O / 2, 0, -T / 2 + BT / 2); back.castShadow = true;
  // тяло от страници: +x гръб (скрит), −x предна страна (позлатена), горе/долу позлатени, отпред Ал-Фатиха
  const block = new THREE.Mesh(new THREE.BoxGeometry(W - .02, H, T - 2 * BT - .004), [paper, edge, edge, edge, pageMat, paper]);
  block.position.set(-.01, 0, 0); block.castShadow = true;
  // гръбче: полуцилиндър отдясно с изпъкнали ленти
  const spine = new THREE.Group();
  const sp = new THREE.Mesh(new THREE.CylinderGeometry(T / 2, T / 2, H + 2 * O, 48, 1, true, 0, Math.PI), gold);
  spine.add(sp);
  for (let i = 0; i < 5; i++) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(T / 2 + .004, .012, 10, 40, Math.PI), gold);
    band.rotation.set(Math.PI / 2, 0, -Math.PI / 2); band.position.y = -H * .38 + i * H * .19;
    spine.add(band);
  }
  spine.position.set(W / 2, 0, 0); spine.castShadow = true;
  // предна корица на панта отдясно (мусхафът се отваря надясно)
  const hinge = new THREE.Group();
  hinge.position.set(W / 2, 0, T / 2 - BT / 2);
  const front = new THREE.Mesh(new RoundedBoxGeometry(W + O, H + 2 * O, BT, 4, .012), [gold, gold, gold, gold, coverFront, coverInside]);
  front.position.set(-(W + O) / 2, 0, 0); front.castShadow = true;
  hinge.add(front);
  // лента-разделител (зелена коприна)
  const ribbonMat = new THREE.MeshPhysicalMaterial({ color: 0x0f6b50, roughness: .45, sheen: 1, sheenColor: new THREE.Color(0x9ff0d0), sheenRoughness: .35, side: THREE.DoubleSide });
  const ribbon = new THREE.Mesh(new THREE.PlaneGeometry(.085, .55, 1, 12), ribbonMat);
  ribbon.geometry.translate(0, -.275, 0);
  const rpos = ribbon.geometry.attributes.position;
  for (let i = 0; i < rpos.count; i++) rpos.setZ(i, Math.sin(-rpos.getY(i) * 4) * .03); // лека извивка
  ribbon.position.set(W / 2 - .38, -H / 2, .02); ribbon.castShadow = true;
  book.add(back, block, spine, hinge, ribbon);

  // сянка под книгата
  // мека контактна сянка (по-лека от истинските сенки и без рязък „хоризонт“)
  const [shc, shx] = canvas2d(256, 256);
  const sg = shx.createRadialGradient(128, 128, 0, 128, 128, 128);
  sg.addColorStop(0, 'rgba(0,0,0,.55)'); sg.addColorStop(.55, 'rgba(0,0,0,.22)'); sg.addColorStop(1, 'rgba(0,0,0,0)');
  shx.fillStyle = sg; shx.fillRect(0, 0, 256, 256);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(shc), transparent: true, depthWrite: false }));
  ground.rotation.x = -Math.PI / 2; ground.position.y = -H / 2 - .32; ground.scale.set(W * 1.9, T * 5, 1);
  scene.add(ground);

  // светлината от страницата
  const pageLight = new THREE.PointLight(0xffcf7a, 0, 3, 2);
  pageLight.position.set(0, 0, T / 2 + .45);
  block.add(pageLight);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowSprite(), color: 0xffd98a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
  glow.scale.set(5, 5, 1); glow.position.set(0, 0, -T / 2 - .05); // зад страницата — ореол, не петно върху текста
  block.add(glow);

  // прашинки светлина във въздуха + искри при отваряне
  const dustN = 260, dustGeo = new THREE.BufferGeometry(), dp = new Float32Array(dustN * 3), dv = new Float32Array(dustN);
  for (let i = 0; i < dustN; i++) { dp[i * 3] = (Math.random() - .5) * 8; dp[i * 3 + 1] = (Math.random() - .5) * 6; dp[i * 3 + 2] = (Math.random() - .5) * 4 - 1; dv[i] = .02 + Math.random() * .05; }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dp, 3));
  const dotTex = glowSprite();
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ size: .035, map: dotTex, color: 0xffe2a0, transparent: true, opacity: .8, blending: THREE.AdditiveBlending, depthWrite: false }));
  scene.add(dust);
  const sparkN = 320, sparkGeo = new THREE.BufferGeometry(), sp3 = new Float32Array(sparkN * 3), svel = new Float32Array(sparkN * 3), slife = new Float32Array(sparkN);
  sparkGeo.setAttribute('position', new THREE.BufferAttribute(sp3, 3));
  const sparks = new THREE.Points(sparkGeo, new THREE.PointsMaterial({ size: .06, map: dotTex, color: 0xffd27a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
  block.add(sparks);
  const seedSpark = i => { sp3[i * 3] = (Math.random() - .5) * W * .8; sp3[i * 3 + 1] = (Math.random() - .5) * H * .8; sp3[i * 3 + 2] = T / 2 + .02; svel[i * 3] = (Math.random() - .5) * .25; svel[i * 3 + 1] = .15 + Math.random() * .45; svel[i * 3 + 2] = .2 + Math.random() * .6; slife[i] = Math.random(); };
  for (let i = 0; i < sparkN; i++) seedSpark(i);

  // пост-обработка: сияние на ярките места
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), .25, .45, 1.15);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  // размер и разстояние на камерата — отвореният мусхаф трябва да се побира и на тесен телефон
  let camZ = 7, camY = .15, camIdle = 5, lift = .1;
  const resize = () => {
    const w = host.clientWidth, h = host.clientHeight;
    // до ~2.4 млн. пиксела — гладко и на по-слаби видеокарти
    const pr = Math.min(devicePixelRatio || 1, 2, Math.sqrt(2.4e6 / Math.max(1, w * h)));
    renderer.setPixelRatio(pr); composer.setPixelRatio?.(pr);
    renderer.setSize(w, h, false); composer.setSize(w, h);
    bloom.resolution.set(w / 2, h / 2);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    const halfV = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const needW = (2 * W + .5) / 2 / (halfV * camera.aspect), needH = (H + 1.2) / 2 / halfV;
    camZ = Math.max(needW, needH) * 1.05;
    // затворената книга: над бутона долу (бутонът заема ~28% от височината)
    camIdle = Math.max((W + T + .5) / 2 / (halfV * camera.aspect), (H + .7) / 2 / halfV / .7);
    lift = .22;
  };
  resize();
  addEventListener('resize', resize);
  host.appendChild(cv);

  // анимация
  let t0 = performance.now(), openAt = 0, raf = 0, disposed = false;
  const clock = () => (performance.now() - t0) / 1000;
  const frameFn = () => {
    if (disposed) return;
    raf = requestAnimationFrame(frameFn);
    const t = clock(), o = openAt ? (performance.now() - openAt) / 1000 : 0;
    const turn = openAt ? ease(clamp01(o / 1.5)) : 0;            // обръщане към нас
    const open = openAt ? ease(clamp01((o - 1.1) / 2.6)) : 0;     // корицата
    const lit = openAt ? clamp01((o - 2.4) / 1.4) : 0;            // светлината
    const push = openAt ? ease(clamp01((o - 4.8) / 1.6)) : 0;     // приближаване към страницата
    const idle = reduced ? 0 : 1;
    spin.rotation.y = lerp(-.55 + Math.sin(t * .45) * .12 * idle, 0, turn);
    spin.rotation.x = lerp(.16 + Math.sin(t * .3) * .03 * idle, .04, turn);
    spin.position.y = lerp(Math.sin(t * .9) * .05 * idle + .1, .05, turn);
    ground.scale.x = lerp(W * 1.9, W * 3.4, open); ground.material.opacity = 1 - push;
    book.position.x = lerp(0, -W / 2 - O / 2, open);
    hinge.rotation.y = open * Math.PI * .93;
    ribbon.rotation.z = Math.sin(t * 1.3) * .06 * idle; ribbon.rotation.x = Math.sin(t * .9) * .05 * idle;
    const z = lerp(lerp(camIdle, camIdle * .96, turn), camZ * .98, open) * (1 - push * .6);
    const ly = -lerp(lift, lift * .3, open) * z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    camera.position.set(0, lerp(camY + .35, camY, turn) + ly, z);
    camera.lookAt(0, ly, 0);
    pageLight.intensity = lit * 1.1;
    pageMat.emissiveIntensity = lit * .06 + push * .12;
    glow.material.opacity = lit * .5 + push * .2;
    bloom.strength = .25 + lit * .2 + push * .15;
    scene.environmentIntensity = 1 + lit * .1;
    // прашинки
    for (let i = 0; i < dustN; i++) { dp[i * 3 + 1] += dv[i] * .016; if (dp[i * 3 + 1] > 3) dp[i * 3 + 1] = -3; }
    dustGeo.attributes.position.needsUpdate = true;
    if (lit > 0) {
      sparks.material.opacity = Math.min(1, lit * 1.4) * (1 - push);
      for (let i = 0; i < sparkN; i++) {
        slife[i] += .016 / 3;
        if (slife[i] > 1) seedSpark(i), slife[i] = 0;
        sp3[i * 3] += svel[i * 3] * .016; sp3[i * 3 + 1] += svel[i * 3 + 1] * .016; sp3[i * 3 + 2] += svel[i * 3 + 2] * .016;
      }
      sparkGeo.attributes.position.needsUpdate = true;
    }
    composer.render();
  };
  frameFn();

  return {
    canvas: cv,
    // връща обещание, което се изпълнява, когато е време да влезем в приложението
    open() { openAt = performance.now(); return new Promise(r => setTimeout(r, reduced ? 300 : 6200)); },
    dispose() {
      disposed = true; cancelAnimationFrame(raf); removeEventListener('resize', resize);
      scene.traverse(o => { o.geometry?.dispose(); [].concat(o.material || []).forEach(m => { Object.values(m).forEach(v => v?.isTexture && v.dispose()); m.dispose(); }); });
      pmrem.dispose(); composer.dispose?.(); renderer.dispose(); cv.remove();
    },
  };
}
