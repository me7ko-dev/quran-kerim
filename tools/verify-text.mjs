// Проверка на достоверността на текста: сравнява всеки айет в data/ с независими източници.
//   node tools/verify-text.mjs
// - арабски (QPC Hafs), страница, джуз — Quran.com API v4 (буква по буква)
// - арабски — скелет на буквите (расм) срещу Tanzil Uthmani (alquran.cloud), втори независим източник
// - български превод (Теофанов) — alquran.cloud (bg.theophanov); там 65:1–2 са отрязани, нашият текст е пълен
// - брой айети, мекка/медина — Quran.com chapters
import fs from 'fs';
import path from 'path';
const here = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1'));
const D = p => JSON.parse(fs.readFileSync(path.join(here, '../data', p)));
const meta = D('meta.json');
const get = async u => { for (let k = 0; ; k++) { try { const r = await fetch(u); if (r.ok) return r.json(); throw new Error(r.status); } catch (e) { if (k > 4) throw new Error(u + ': ' + e.message); await new Promise(r => setTimeout(r, 2000 * (k + 1))); } } };
const errs = {};
const bad = (kind, msg) => { (errs[kind] ||= []).push(msg); };

const ws = s => s.normalize('NFC').replace(/\s+/g, ' ').trim();
// расм: само основните букви, без харакат, малки знаци и варианти на алиф/хамза/я
const rasm = s => s.normalize('NFC')
  .replace(/[٠-٩۰-۹]/g, '')                 // номер на айета
  .replace(/[ً-ٰٟۖ-ۭ࣓-ࣿـ]/g, '') // харакат, малки букви, татуил
  .replace(/[آأإٱٲٳ]/g, 'ا')  // алиф
  .replace(/[ىیيئ]/g, 'ي')              // я / алиф максура
  .replace(/[ؤ]/g, 'و').replace(/[ء]/g, '')
  .replace(/ة/g, 'ه').replace(/[ۡ۟]/g, '')
  .replace(/[^ؠ-ي]/g, '');

const [bgAll, tzAll, chaps] = await Promise.all([
  get('https://api.alquran.cloud/v1/quran/bg.theophanov'),
  get('https://api.alquran.cloud/v1/quran/quran-uthmani'),
  get('https://api.quran.com/api/v4/chapters?language=en'),
]);
const flat = x => x.data.surahs.flatMap(s => s.ayahs.map(a => ({ s: s.number, a: a.numberInSurah, t: a.text })));
const BG = flat(bgAll), TZ = flat(tzAll);

let total = 0, rasmDiff = [];
for (const s of meta.surahs) {
  const ch = chaps.chapters[s.n - 1];
  if (ch.verses_count !== s.ayahs) bad('meta', `${s.n}: айети ${s.ayahs} ≠ ${ch.verses_count}`);
  const place = ch.revelation_place === 'makkah' ? 'Мека' : 'Медина';
  if (place !== s.place) bad('meta', `${s.n}: ${s.place} ≠ ${place}`);
  if (ch.name_arabic !== s.ar) bad('meta', `${s.n}: име ${s.ar} ≠ ${ch.name_arabic}`);

  const mine = D(`s/${s.n}.json`);
  const q = await get(`https://api.quran.com/api/v4/verses/by_chapter/${s.n}?per_page=300&fields=text_qpc_hafs`);
  if (mine.length !== s.ayahs || q.verses.length !== s.ayahs ) bad('брой', `${s.n}: ${mine.length}/${q.verses.length}`);
  for (let i = 0; i < s.ayahs; i++) {
    const k = `${s.n}:${i + 1}`, [ar, bg, page, juz] = mine[i], v = q.verses[i];
    const b = BG[total], z = TZ[total]; total++;
    if (v.text_qpc_hafs !== ar) bad('арабски', k);
    if (v.page_number !== page) bad('страница', `${k}: ${page} ≠ ${v.page_number}`);
    if (v.juz_number !== juz) bad('джуз', `${k}: ${juz} ≠ ${v.juz_number}`);
    if (b.s !== s.n || b.a !== i + 1 || ws(b.t) !== ws(bg)) bad('български', k);
    // Tanzil слага Бисмиллях в началото на 1-вия айет на всяка сура (освен 1 и 9)
    let zt = z.t; if (i === 0 && s.n !== 1 && s.n !== 9) zt = zt.replace(/^\S+ \S+ \S+ \S+ /, '');
    if (rasm(zt) !== rasm(ar)) rasmDiff.push(k);
  }
  process.stdout.write(`\r${s.n}/114`);
}
console.log(`\nПроверени ${total} айета.`);
for (const [k, v] of Object.entries(errs)) console.log(`✗ ${k}: ${v.length} — ${v.slice(0, 15).join(', ')}`);
console.log(`Расм (скелет) различен от Tanzil в ${rasmDiff.length} айета${rasmDiff.length ? ': ' + rasmDiff.slice(0, 40).join(', ') : ''}`);
if (!Object.keys(errs).length) console.log('✓ Арабски, страници, джузове, български превод съвпадат напълно с източниците.');
// Известни: 12:39 и 12:41 — Tanzil пише يَٰصَىٰحِبَىِ, мусхафът от Медина — يَٰصَٰحِبَيِ (правописна разлика, не грешка)
