// Времена за намаз по официалния календар на Главно мюфтийство (grandmufti.bg).
// Календарът е таблица за София + постоянна разлика в минути за всеки от 48-те града
// (проверено за всички 48 града × 365 дни). За всяко друго населено място взимаме
// най-близкия официален град и добавяме разликата по географска дължина (4 мин на градус) —
// същото правило, по което Мюфтийството изчислява градовете си.

export const PRAYERS = [
  { key: 'fajr', bg: 'Зора', tr: 'Имсак', ic: '✦' },
  { key: 'sunrise', bg: 'Изгрев', tr: 'Гюнеш', ic: '☀' },
  { key: 'dhuhr', bg: 'Обяд', tr: 'Йойле', ic: '◐' },
  { key: 'asr', bg: 'Следобяд', tr: 'Икинди', ic: '◑' },
  { key: 'maghrib', bg: 'Залез', tr: 'Акшам', ic: '◒' },
  { key: 'isha', bg: 'Нощ', tr: 'Ятсъ', ic: '☾' },
];

let data = null, places = null;
export async function loadPrayer() {
  if (!data) data = await (await fetch('data/prayer.json')).json();
  return data;
}
export async function loadPlaces() {
  if (!places) {
    const raw = await (await fetch('data/places.json')).json();
    places = raw.map(([name, type, lat, lon, obl, obs]) => ({ name, type, lat, lon, obl, obs, key: norm(name), lat_: translit(name) }));
  }
  return places;
}

const CUM = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
const dayIndex = (m, d) => CUM[m - 1] + Math.min(d, m === 2 ? 28 : 31) - 1; // 29 февруари → 28 февруари

// Отместване на българското време спрямо UTC (мин) за дадена дата — лятно/зимно по правилата на ЕС
const offFmt = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Sofia', timeZoneName: 'shortOffset' });
export function sofiaOffset(y, m, d) {
  try {
    const s = offFmt.formatToParts(new Date(Date.UTC(y, m - 1, d, 10))).find(p => p.type === 'timeZoneName').value;
    const mm = s.match(/GMT([+-]\d+)/);
    return mm ? +mm[1] * 60 : 120;
  } catch (e) { return 120; }
}

// Сега по българско време
const nowFmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Sofia', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hourCycle: 'h23' });
export function nowBG() {
  const p = Object.fromEntries(nowFmt.formatToParts(new Date()).map(x => [x.type, x.value]));
  return { y: +p.year, m: +p.month, d: +p.day, sec: +p.hour * 3600 + +p.minute * 60 + +p.second };
}

const dist = (a, b) => { const k = Math.cos((a.lat + b.lat) / 2 * Math.PI / 180); return Math.hypot(a.lat - b.lat, (a.lon - b.lon) * k) * 111.2; };

// Официален град, от който тръгваме за дадено място
export function refTown(place) {
  let best = null;
  for (const [id, t] of Object.entries(data.towns)) {
    const km = dist(place, t);
    if (!best || km < best.km) best = { id, t, km };
  }
  return best;
}

export function isOfficial(place) {
  const r = refTown(place);
  return place.type === 0 && r.t.name === place.name && r.km < 8 ? r : null;
}

// Връща минути от полунощ (местно българско време) за 6-те времена
export function timesFor(place, y, m, d, villageMode = 'corrected') {
  const idx = dayIndex(m, d);
  const off = sofiaOffset(y, m, d) - 120; // таблицата е в зимно време (UTC+2)
  const r = refTown(place);
  const official = isOfficial(place);
  const row = r.t.table ? r.t.table[idx] : data.base[idx].map(v => v + r.t.shift);
  const extra = official || villageMode === 'town' ? 0 : Math.round(4 * (r.t.lon - place.lon));
  return { times: row.map(v => v + extra + off), ref: r, official: !!official, extra };
}

// Кога за последно е сверен календарът с grandmufti.bg (обновява се от GitHub Actions)
export function checkedOn() {
  const m = data && /^(\d{4})-(\d{2})-(\d{2})$/.exec(data.checked || '');
  return m ? `${+m[3]}.${m[2]}.${m[1]} г.` : '';
}

export const fmt = min => { min = ((min % 1440) + 1440) % 1440; return `${Math.floor(min / 60)}:${String(min % 60).padStart(2, '0')}`; };

// Следващото време за намаз спрямо сега. day — времената на деня, към който то принадлежи
// (след ятсъ това е утрешният ден).
export function nextPrayer(place, villageMode) {
  const n = nowBG();
  let day = timesFor(place, n.y, n.m, n.d, villageMode).times;
  let i = day.findIndex(t => t > n.sec / 60);
  let { y, m, d } = n;
  if (i === -1) {
    const t = new Date(Date.UTC(n.y, n.m - 1, n.d + 1));
    [y, m, d] = [t.getUTCFullYear(), t.getUTCMonth() + 1, t.getUTCDate()];
    day = timesFor(place, y, m, d, villageMode).times;
    i = 0;
  }
  const at = day[i];
  // броим в UTC: в нощта на смяна на часовото време денят има 23 или 25 часа
  const secsLeft = (Date.UTC(y, m - 1, d) + (at - sofiaOffset(y, m, d)) * 60000 - Date.now()) / 1000;
  return { i, at, secsLeft, day };
}

export function placeLabel(p) {
  if (!p) return '';
  return (p.type === 0 ? 'гр.\u00a0' : 'с.\u00a0') + p.name; // без пренасяне след „с.“
}
export function placeSub(p) {
  if (!p) return '';
  const obl = p.obl === 'София-град' ? 'София-град' : 'обл. ' + p.obl;
  return p.obs && p.obs !== p.name ? `общ. ${p.obs}, ${obl}` : obl;
}

// Търсене на населено място (на кирилица или латиница)
export function norm(s) { return s.toLowerCase().replace(/ё/g, 'е').replace(/[^a-zа-я0-9 ]/g, '').trim(); }
const TR = { а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ж: 'zh', з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sht', ъ: 'a', ь: 'y', ю: 'yu', я: 'ya' };
export function translit(s) { return [...norm(s)].map(c => TR[c] ?? c).join(''); }
export function searchPlaces(q, limit = 60) {
  const a = norm(q), l = translit(q);
  if (!a) return [];
  const score = p => {
    if (p.key === a || p.lat_ === l) return 0;
    if (p.key.startsWith(a) || p.lat_.startsWith(l)) return 1;
    if (p.key.includes(' ' + a) || p.lat_.includes(' ' + l)) return 2;
    if (p.key.includes(a) || (l.length > 2 && p.lat_.includes(l))) return 3;
    return -1;
  };
  const out = [];
  for (const p of places) { const s = score(p); if (s >= 0) out.push([s, p]); }
  out.sort((x, y) => x[0] - y[0] || x[1].type - y[1].type || x[1].name.localeCompare(y[1].name, 'bg'));
  return out.slice(0, limit).map(x => x[1]);
}
// Точно съвпадение по име (за връзки #/prayer/<място>), градовете първи
export function exactPlaces(q) {
  const a = norm(q), l = translit(q);
  return a ? places.filter(p => p.key === a || p.lat_ === l).sort((x, y) => x.type - y.type) : [];
}
// Какво пазим за избраното място
export const placeRecord = p => ({ name: p.name, type: p.type, lat: p.lat, lon: p.lon, obl: p.obl, obs: p.obs });
export function nearestPlace(lat, lon) {
  let best = null;
  for (const p of places) { const km = dist({ lat, lon }, p); if (!best || km < best.km) best = { p, km }; }
  return best;
}

// Хиджри дата (Умм ал-Кура) — приблизителна, началото на месеца се обявява от Мюфтийството
const HM = ['Мухаррем', 'Сафер', 'Ребиул-евел', 'Ребиул-ахир', 'Джемазиел-евел', 'Джемазиел-ахир', 'Реджеб', 'Шабан', 'Рамазан', 'Шеввал', 'Зилкаде', 'Зилхидже'];
export function hijri(date = new Date()) {
  try {
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn', { day: 'numeric', month: 'numeric', year: 'numeric', timeZone: 'Europe/Sofia' }).formatToParts(date).map(x => [x.type, x.value]));
    return `${+p.day} ${HM[+p.month - 1]} ${parseInt(p.year)}\u00a0г.\u00a0х.`;
  } catch (e) { return ''; }
}

// 48-те града с официален календар, като записи от списъка с населени места
export function officialPlaces() {
  return Object.values(data.towns).map(t => {
    const p = places.filter(x => x.type === 0 && x.name === t.name).sort((a, b) => dist(a, t) - dist(b, t))[0];
    return p || { name: t.name, type: 0, lat: t.lat, lon: t.lon, obl: t.obl, obs: '' };
  }).sort((a, b) => a.name.localeCompare(b.name, 'bg'));
}
