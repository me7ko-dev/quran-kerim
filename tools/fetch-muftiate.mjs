// Сваля официалните времена за намаз от grandmufti.bg (всички градове × 12 месеца)
import fs from 'fs';
const page = fs.readFileSync(process.argv[2], 'utf8');
const sel = page.slice(page.indexOf('name="town"'));
const towns = [...sel.slice(0, sel.indexOf('</select>')).matchAll(/value="([^"]+)"[^>]*>([^<]+)/g)].map(m => ({ id: m[1], name: m[2].trim() }));
const out = { source: 'https://www.grandmufti.bg/bg/home/vremena-za-namaz.html', fetched: new Date().toISOString(), towns: {} };
for (const t of towns) {
  out.towns[t.id] = { name: t.name, months: {} };
  for (let m = 1; m <= 12; m++) {
    let s;
    for (let a = 0; a < 4; a++) {
      try {
        const r = await fetch('https://www.grandmufti.bg/bg/home/vremena-za-namaz.html', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: `month=${m}&town=${t.id}` });
        s = await r.text(); break;
      } catch (e) { await new Promise(r => setTimeout(r, 2000)); }
    }
    const i = s.indexOf('<table'); const tb = s.slice(i, s.indexOf('</table>', i));
    const rows = tb.match(/<tr[\s\S]*?<\/tr>/g).slice(1).map(r => r.match(/<td[\s\S]*?<\/td>/g).map(c => c.replace(/<[^>]+>/g, '').trim()));
    out.towns[t.id].months[m] = rows.map(r => r.slice(1));
    process.stdout.write(`${t.id}:${m}(${rows.length}) `);
    await new Promise(r => setTimeout(r, 250));
  }
}
fs.writeFileSync(process.argv[3], JSON.stringify(out));
console.log('\nOK', towns.length);
