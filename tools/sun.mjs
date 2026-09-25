// Слънчева позиция (алгоритъм на NOAA / Jean Meeus), общ за инструментите и приложението
const rad = Math.PI / 180, deg = 180 / Math.PI;
export function sunAt(jd) {
  const T = (jd - 2451545) / 36525;
  const L0 = (280.46646 + T * (36000.76983 + T * 0.0003032)) % 360;
  const M = 357.52911 + T * (35999.05029 - 0.0001537 * T);
  const e = 0.016708634 - T * (0.000042037 + 0.0000001267 * T);
  const C = Math.sin(M * rad) * (1.914602 - T * (0.004817 + 0.000014 * T)) + Math.sin(2 * M * rad) * (0.019993 - 0.000101 * T) + Math.sin(3 * M * rad) * 0.000289;
  const om = 125.04 - 1934.136 * T;
  const lam = L0 + C - 0.00569 - 0.00478 * Math.sin(om * rad);
  const eps0 = 23 + (26 + (21.448 - T * (46.815 + T * (0.00059 - T * 0.001813))) / 60) / 60;
  const eps = eps0 + 0.00256 * Math.cos(om * rad);
  const dec = Math.asin(Math.sin(eps * rad) * Math.sin(lam * rad)) * deg;
  const y = Math.tan(eps * rad / 2) ** 2;
  const eqt = 4 * deg * (y * Math.sin(2 * L0 * rad) - 2 * e * Math.sin(M * rad) + 4 * e * y * Math.sin(M * rad) * Math.cos(2 * L0 * rad) - 0.5 * y * y * Math.sin(4 * L0 * rad) - 1.25 * e * e * Math.sin(2 * M * rad));
  return { dec, eqt }; // градуси, минути
}
// Връща UTC минути от полунощ за дадена дата (y,m,d) и събитие
export function solarTimes(y, m, d, lat, lon) {
  const jd0 = Date.UTC(y, m - 1, d) / 86400000 + 2440587.5; // 0h UT
  const noonAt = t => { const s = sunAt(jd0 + t / 1440); return 720 - 4 * lon - s.eqt; };
  let noon = noonAt(720); noon = noonAt(noon);
  const at = (alt, dir) => { // dir -1 сутрин, +1 вечер
    let t = noon;
    for (let i = 0; i < 3; i++) {
      const s = sunAt(jd0 + t / 1440);
      const c = (Math.sin(alt * rad) - Math.sin(lat * rad) * Math.sin(s.dec * rad)) / (Math.cos(lat * rad) * Math.cos(s.dec * rad));
      if (c < -1 || c > 1) return NaN;
      const H = Math.acos(c) * deg;
      t = 720 - 4 * lon - s.eqt + dir * 4 * H;
    }
    return t;
  };
  const asrAlt = f => { const s = sunAt(jd0 + noon / 1440); return Math.atan(1 / (f + Math.tan(Math.abs(lat - s.dec) * rad))) * deg; };
  return { noon, at, asrAlt };
}
