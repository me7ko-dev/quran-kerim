// Сваля текста (QPC Hafs), превода на Цветан Теофанов (id 237) и данни за сурите от api.quran.com
import fs from 'fs';
const API = 'https://api.quran.com/api/v4';
const j = async u => { for (let a = 0; a < 5; a++) { try { const r = await fetch(u); if (r.ok) return r.json(); } catch {} await new Promise(r => setTimeout(r, 1500)); } throw new Error(u); };
const ch = (await j(`${API}/chapters?language=bg`)).chapters;
const chEn = (await j(`${API}/chapters?language=en`)).chapters;
const surahs = [];
for (const c of ch) {
  const vs = [];
  for (let p = 1; ; p++) {
    const d = await j(`${API}/verses/by_chapter/${c.id}?fields=text_qpc_hafs,page_number,juz_number,hizb_number&translations=237&per_page=50&page=${p}`);
    vs.push(...d.verses);
    if (!d.pagination.next_page) break;
  }
  if (vs.length !== c.verses_count) throw new Error('count ' + c.id);
  surahs.push({
    n: c.id, ar: c.name_arabic, tr: c.name_simple, bg: c.translated_name.name, en: chEn[c.id - 1].translated_name.name,
    place: c.revelation_place, order: c.revelation_order, bism: c.bismillah_pre,
    a: vs.map(v => [v.text_qpc_hafs, v.translations[0].text, v.page_number, v.juz_number, v.hizb_number])
  });
  process.stdout.write(c.id + ' ');
}
fs.mkdirSync('../data', { recursive: true });
fs.writeFileSync('../data/quran.json', JSON.stringify(surahs));
console.log('\nayahs', surahs.reduce((s, x) => s + x.a.length, 0));
