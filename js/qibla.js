// Кибла: посоката към Кябе по голям кръг (най-краткия път по земното кълбо),
// магнитното отклонение в България и часът, в който слънцето е точно в посоката на киблата.
const KAABA = { lat: 21.422487, lon: 39.826206 };
const rad = Math.PI / 180, deg = 180 / Math.PI;

// Посока в градуси от географския север (по часовниковата стрелка) и разстояние в км
export function qibla(p) {
  const f1 = p.lat * rad, f2 = KAABA.lat * rad, dl = (KAABA.lon - p.lon) * rad;
  const bearing = (Math.atan2(Math.sin(dl) * Math.cos(f2), Math.cos(f1) * Math.sin(f2) - Math.sin(f1) * Math.cos(f2) * Math.cos(dl)) * deg + 360) % 360;
  const h = Math.sin((f2 - f1) / 2) ** 2 + Math.cos(f1) * Math.cos(f2) * Math.sin(dl / 2) ** 2;
  return { bearing, km: 2 * 6371 * Math.asin(Math.sqrt(h)) };
}

// Компасът на телефона сочи магнитния север. В България той е ≈ 5–6° на изток от географския
// (WMM 2025: Видин 5.0°, София 5.3°, Варна 6.4°) — достатъчно точно като линейна функция на дължината.
export const declination = p => 5.3 + 0.23 * (p.lon - 23.3);

const DIRS = ['север', 'североизток', 'изток', 'югоизток', 'юг', 'югозапад', 'запад', 'северозапад'];
export const dirName = b => DIRS[Math.round(b / 45) % 8];

// Слънчева позиция (NOAA / Meeus), същият алгоритъм като tools/sun.mjs
function sunDecEqt(ms) {
  const T = (ms / 86400000 + 2440587.5 - 2451545) / 36525;
  const L0 = (280.46646 + T * (36000.76983 + T * 0.0003032)) % 360;
  const M = 357.52911 + T * (35999.05029 - 0.0001537 * T);
  const e = 0.016708634 - T * (0.000042037 + 0.0000001267 * T);
  const C = Math.sin(M * rad) * (1.914602 - T * (0.004817 + 0.000014 * T)) + Math.sin(2 * M * rad) * (0.019993 - 0.000101 * T) + Math.sin(3 * M * rad) * 0.000289;
  const om = 125.04 - 1934.136 * T;
  const lam = L0 + C - 0.00569 - 0.00478 * Math.sin(om * rad);
  const eps = 23 + (26 + (21.448 - T * (46.815 + T * (0.00059 - T * 0.001813))) / 60) / 60 + 0.00256 * Math.cos(om * rad);
  const dec = Math.asin(Math.sin(eps * rad) * Math.sin(lam * rad)) * deg;
  const y = Math.tan(eps * rad / 2) ** 2;
  const eqt = 4 * deg * (y * Math.sin(2 * L0 * rad) - 2 * e * Math.sin(M * rad) + 4 * e * y * Math.sin(M * rad) * Math.cos(2 * L0 * rad) - 0.5 * y * y * Math.sin(4 * L0 * rad) - 1.25 * e * e * Math.sin(2 * M * rad));
  return { dec, eqt };
}
function sunPos(ms, lat, lon) {
  const { dec, eqt } = sunDecEqt(ms);
  const utcMin = ((ms / 60000) % 1440 + 1440) % 1440;
  const H = ((utcMin + eqt + 4 * lon) / 4 - 180) * rad; // часов ъгъл
  const f = lat * rad, d = dec * rad;
  const alt = Math.asin(Math.sin(f) * Math.sin(d) + Math.cos(f) * Math.cos(d) * Math.cos(H)) * deg;
  const az = (Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(f) - Math.tan(d) * Math.cos(f)) * deg + 540) % 360;
  return { az, alt };
}

// Кога на дадената дата слънцето е в посоката на киблата. Връща UTC минути от полунощ или null.
// В България слънцето никога не минава през зенита, затова азимутът расте плавно
// от 0° (слънчева полунощ) до 360° (следващата) и можем да търсим с разполовяване.
export function sunInQibla(p, y, m, d, bearing) {
  const day = Date.UTC(y, m - 1, d);
  const noon = day + (720 - 4 * p.lon - sunDecEqt(day + 43200000).eqt) * 60000;
  let lo = noon - 43200000, hi = noon + 43200000;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (sunPos(mid, p.lat, p.lon).az < bearing) lo = mid; else hi = mid;
  }
  const at = (lo + hi) / 2;
  if (sunPos(at, p.lat, p.lon).alt < 3) return null; // под хоризонта или твърде ниско
  return Math.round((at - day) / 60000);
}

// Компас от сензорите на телефона. onHeading получава посоката (от магнитния север),
// накъдето сочи горният край на телефона. Връща функция за спиране.
// Слушаме и двете събития: iPhone дава webkitCompassHeading в deviceorientation, Chrome — абсолютна
// ориентация в deviceorientationabsolute; относителната (absolute: false) не става за компас.
export function watchHeading(onHeading) {
  const h = e => {
    let hd = null;
    if (typeof e.webkitCompassHeading === 'number' && e.webkitCompassHeading >= 0) hd = e.webkitCompassHeading; // iPhone
    else if ((e.absolute || e.type === 'deviceorientationabsolute') && typeof e.alpha === 'number') hd = 360 - e.alpha; // Android
    if (hd == null) return;
    const scr = screen.orientation ? screen.orientation.angle : (window.orientation || 0);
    onHeading(((hd + scr) % 360 + 360) % 360);
  };
  const EVS = ['deviceorientationabsolute', 'deviceorientation'];
  EVS.forEach(ev => window.addEventListener(ev, h, true));
  return () => EVS.forEach(ev => window.removeEventListener(ev, h, true));
}

// iPhone иска разрешение, дадено с докосване
export const needsPermission = () => typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function';
export async function askPermission() {
  try { return (await DeviceOrientationEvent.requestPermission()) === 'granted'; } catch (e) { return false; }
}
