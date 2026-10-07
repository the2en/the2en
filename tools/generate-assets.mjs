// Self-contained GitHub README visuals, using theSen.log's design tokens.
// Run from any directory: node tools/generate-assets.mjs
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../assets/', import.meta.url);
const c = {
  ink: '#173b8f', blue: '#2257c8', pink: '#f863a8',
  lightPink: '#ffd4e6', yellow: '#ffe66f', mint: '#a9eee4',
  sky: '#bde9ff', cream: '#fff9e9', paper: '#fffdf6',
};
const esc = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const svg = (w, h, title, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title"><title id="title">${esc(title)}</title>${body}</svg>\n`;
const mono = 'Courier New,monospace';
const display = 'Arial Black,Arial,sans-serif';
const star = (x, y, size, fill = c.pink) => `<path d="M${x} ${y-size}Q${x} ${y} ${x+size} ${y}Q${x} ${y} ${x} ${y+size}Q${x} ${y} ${x-size} ${y}Q${x} ${y} ${x} ${y-size}Z" fill="${fill}" stroke="${c.ink}" stroke-width="2"/>`;
await mkdir(new URL('badges/', root), { recursive: true });

const header = svg(900, 426, 'theSen.log — Seeun Kim. Write, make, collect. Seoul, KR.', `
<defs>
  <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1.2" fill="${c.blue}" opacity=".17"/></pattern>
</defs>
<rect width="900" height="426" fill="${c.cream}"/>
<rect width="900" height="426" fill="url(#dots)"/>
<rect width="900" height="32" fill="${c.ink}"/>
<circle cx="23" cy="16" r="4" fill="${c.mint}"/>
<g font-family="${mono}" font-weight="700" font-size="11" fill="${c.paper}">
  <text x="36" y="20">ONLINE</text><text x="450" y="20" text-anchor="middle" letter-spacing="1.2">WELCOME TO MY TINY CORNER OF THE WEB</text><text x="876" y="20" text-anchor="end">SEOUL, KR</text>
</g>
<path d="M0 88H900M490 88V385M0 385H900" fill="none" stroke="${c.ink}" stroke-width="3"/>
<rect x="492" y="90" width="408" height="293" fill="${c.lightPink}"/>
<rect x="492" y="90" width="408" height="293" fill="url(#dots)"/>
${star(34, 60, 12)}
<text x="57" y="70" fill="${c.ink}" font-family="${display}" font-weight="900" font-size="31" letter-spacing="-1.8">theSen<tspan fill="${c.pink}">.</tspan>log</text>
<text x="873" y="63" text-anchor="end" fill="${c.ink}" font-family="${mono}" font-weight="700" font-size="11" letter-spacing="1.2">PROFILE / SEEUN KIM</text>
<text x="33" y="125" fill="${c.blue}" font-family="${mono}" font-weight="700" font-size="12" letter-spacing="2">A PERSONAL ARCHIVE OF</text>
<g font-family="${display}" font-weight="900" font-size="67" letter-spacing="-3">
  <text x="29" y="204" fill="${c.ink}">WRITE<tspan fill="${c.pink}">.</tspan></text>
  <text x="29" y="269" fill="${c.ink}">MAKE<tspan fill="${c.yellow}" stroke="${c.ink}" stroke-width="1.2">.</tspan></text>
  <text x="29" y="334" fill="${c.cream}" stroke="${c.ink}" stroke-width="2.2" paint-order="stroke">COLLECT<tspan fill="${c.mint}" stroke-width="1.2">.</tspan></text>
</g>
<text x="33" y="363" fill="${c.ink}" font-family="${mono}" font-size="12" font-weight="700">WEB · DATA · AI · WRITING</text>
<g transform="translate(578 145)">
  <rect x="7" y="7" width="235" height="165" rx="16" fill="${c.ink}"/>
  <rect width="235" height="165" rx="16" fill="${c.sky}" stroke="${c.ink}" stroke-width="3"/>
  <path d="M14 19V13H55" fill="none" stroke="white" stroke-width="4"/>
  <rect x="19" y="20" width="197" height="125" rx="7" fill="${c.paper}" stroke="${c.ink}" stroke-width="3"/>
  <path d="M21 43H214" stroke="${c.ink}" stroke-width="3"/>
  <path d="M21 22H214V42H21Z" fill="${c.mint}"/>
  <g fill="${c.pink}" stroke="${c.ink}" stroke-width="1.4"><circle cx="32" cy="32" r="3"/><circle cx="43" cy="32" r="3"/><circle cx="54" cy="32" r="3"/></g>
  <path d="M117 77C96 63 103 53 111 56L117 62L123 56C133 51 139 66 117 77Z" fill="${c.pink}"/>
  <text x="117" y="108" text-anchor="middle" fill="${c.ink}" font-family="${display}" font-size="32" font-weight="900" letter-spacing="-1.5">HELLO!</text>
  <text x="117" y="128" text-anchor="middle" fill="${c.blue}" font-family="${mono}" font-size="10" font-weight="700">YOU FOUND ME :)</text>
  <rect x="-5" y="166" width="251" height="28" rx="5" fill="${c.lightPink}" stroke="${c.ink}" stroke-width="3"/>
  <rect x="13" y="176" width="72" height="6" rx="2" fill="${c.ink}"/>
  <circle cx="222" cy="180" r="4" fill="${c.mint}" stroke="${c.ink}" stroke-width="2"/>
  <path d="M-14 207H250L266 230H-30Z" fill="${c.paper}" stroke="${c.ink}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M1 215H237M16 222H220" stroke="${c.ink}" stroke-width="3" stroke-dasharray="14 5"/>
</g>
${star(539, 179, 18, c.yellow)}${star(839, 124, 15)}${star(853, 288, 11, c.mint)}
<g transform="translate(519 291) rotate(-10)">
  <rect x="4" y="4" width="70" height="56" fill="${c.ink}"/>
  <rect width="70" height="56" fill="${c.yellow}" stroke="${c.ink}" stroke-width="2.5"/>
  <text x="35" y="24" text-anchor="middle" fill="${c.ink}" font-family="${mono}" font-weight="700" font-size="13">new</text>
  <text x="35" y="41" text-anchor="middle" fill="${c.ink}" font-family="${mono}" font-weight="700" font-size="13">ideas!</text>
</g>
<g fill="${c.ink}" font-family="${mono}" font-weight="700" font-size="11" letter-spacing="1.4">
  <text x="32" y="410">KEEP LEARNING. KEEP MAKING.</text><text x="873" y="410" text-anchor="end">A LITTLE MORE EVERY DAY <tspan fill="${c.pink}">♥</tspan></text>
</g>
<rect x="1.5" y="1.5" width="897" height="423" fill="none" stroke="${c.ink}" stroke-width="3"/>
`);
await writeFile(new URL('header.svg', root), header);

for (const [name, text, fill] of [
  ['blog', 'VISIT THE BLOG', c.yellow],
  ['stories', 'READ STORIES', c.lightPink],
  ['portfolio', 'VIEW PORTFOLIO', c.mint],
]) {
  await writeFile(new URL(`nav-${name}.svg`, root), svg(204, 54, `${text} →`, `
<rect x="7" y="7" width="193" height="43" fill="${c.ink}"/>
<rect x="2" y="2" width="193" height="43" fill="${fill}" stroke="${c.ink}" stroke-width="3"/>
<text x="17" y="29" fill="${c.ink}" font-family="${mono}" font-size="13" font-weight="700">${text}</text>
<path d="M173 18L179 24L173 30M164 24H179" fill="none" stroke="${c.ink}" stroke-width="2.5"/>
`));
}

const badges = [
  ['python', 'Python', c.mint], ['mysql', 'MySQL', c.sky],
  ['oracle', 'Oracle', c.lightPink], ['bigquery', 'BigQuery', c.yellow],
  ['excel-vba', 'Excel VBA', c.mint], ['java', 'Java', c.lightPink],
  ['gcp', 'GCP', c.sky], ['aws', 'AWS', c.yellow], ['git', 'Git', c.lightPink],
  ['github', 'GitHub', c.sky], ['notion', 'Notion', c.paper],
  ['vscode', 'VS Code', c.mint], ['jupyter', 'Jupyter', c.yellow],
  ['colab', 'Colab', c.lightPink], ['pycharm', 'PyCharm', c.sky],
];
for (const [name, text, fill] of badges) {
  const width = 22 + text.length * 8;
  await writeFile(new URL(`badges/${name}.svg`, root), svg(width, 30, text, `
<rect x="3" y="3" width="${width-4}" height="26" fill="${c.ink}"/>
<rect x="1" y="1" width="${width-4}" height="25" fill="${fill}" stroke="${c.ink}" stroke-width="2"/>
<text x="${(width-2)/2}" y="18" text-anchor="middle" fill="${c.ink}" font-family="${mono}" font-size="13" font-weight="700">${esc(text)}</text>
`));
}

await writeFile(new URL('footer.svg', root), svg(900, 66, 'Made with love, curiosity and too many tabs.', `
<defs><pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1" fill="${c.blue}" opacity=".18"/></pattern></defs>
<rect x="1.5" y="1.5" width="897" height="63" fill="${c.cream}" stroke="${c.ink}" stroke-width="3"/>
<rect x="3" y="3" width="894" height="60" fill="url(#dots)"/>
<text x="25" y="40" fill="${c.ink}" font-family="${display}" font-size="22" font-weight="900" letter-spacing="-1">theSen<tspan fill="${c.pink}">.</tspan>log</text>
<text x="875" y="38" text-anchor="end" fill="${c.ink}" font-family="${mono}" font-size="12" font-weight="700" letter-spacing="1">MADE WITH <tspan fill="${c.pink}">♥</tspan>, CURIOSITY &amp; TOO MANY TABS.</text>
`));
console.log(`Generated 20 SVG assets in ${fileURLToPath(root)}`);
