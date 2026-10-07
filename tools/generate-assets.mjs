// Generate the footer to match the retro cover. Run: node tools/generate-assets.mjs
// The ImageGen cover is assets/header.png; its prompt is in tools/header-prompt.md.
import { mkdir, writeFile } from 'node:fs/promises';
const root = new URL('../assets/', import.meta.url);
await mkdir(root, { recursive: true });
const c = { ink: '#344edb', blue: '#a9d5ed', pink: '#eea0c0', cream: '#f6f1e7' };
const title = 'Thanks for stopping by';
// Draw the letters as pixels so GitHub does not need a custom font.
const glyphs = {
  T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100', '00000'],
  h: ['10000', '10000', '10000', '11110', '10001', '10001', '10001', '00000'],
  a: ['00000', '00000', '01110', '00001', '01111', '10001', '01111', '00000'],
  n: ['00000', '00000', '11110', '10001', '10001', '10001', '10001', '00000'],
  k: ['10000', '10000', '10010', '10100', '11000', '10100', '10010', '00000'],
  s: ['00000', '00000', '01111', '10000', '01110', '00001', '11110', '00000'],
  f: ['00110', '01001', '01000', '11100', '01000', '01000', '01000', '00000'],
  o: ['00000', '00000', '01110', '10001', '10001', '10001', '01110', '00000'],
  r: ['00000', '00000', '10110', '11001', '10000', '10000', '10000', '00000'],
  t: ['01000', '01000', '11110', '01000', '01000', '01000', '00110', '00000'],
  p: ['00000', '00000', '11110', '10001', '10001', '11110', '10000', '10000'],
  i: ['00100', '00000', '01100', '00100', '00100', '00100', '01110', '00000'],
  g: ['00000', '00000', '01111', '10001', '10001', '01111', '00001', '01110'],
  b: ['10000', '10000', '11110', '10001', '10001', '10001', '11110', '00000'],
  y: ['00000', '00000', '10001', '10001', '10001', '01111', '00001', '01110'],
};
const scale = 4;
let advance = 0;
let letters = '';
for (const character of title) {
  if (character === ' ') { advance += 4 * scale; continue; }
  const rows = glyphs[character];
  if (!rows) throw new Error(`Missing pixel glyph: ${character}`);
  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < rows[y].length; x++) {
      if (rows[y][x] === '1') letters += `M${advance + x * scale},${y * scale}h${scale}v${scale}h-${scale}z`;
    }
  }
  advance += 6 * scale;
}
const left = (900 - (advance - scale)) / 2;
const checks = (x, y) => Array.from({ length: 16 }, (_, i) => {
  const column = i % 8, row = Math.floor(i / 8);
  return (column + row) % 2 === 0
    ? `<rect x="${x + column * 10}" y="${y + row * 10}" width="10" height="10"/>` : '';
}).join('');
const sparkle = (x, y, color, opacity = 1) => `<path d="M8 0h4v8h8v4h-8v8H8v-8H0V8h8z" transform="translate(${x} ${y})" fill="${color}" opacity="${opacity}"/>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="110" viewBox="0 0 900 110" role="img" aria-labelledby="title">
<title id="title">${title}</title>
<defs>
  <filter id="paper" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency=".6" numOctaves="3" seed="12"/>
    <feColorMatrix type="saturate" values="0"/>
  </filter>
  <pattern id="flecks" width="83" height="47" patternUnits="userSpaceOnUse">
    <circle cx="11" cy="14" r=".8" fill="${c.blue}" opacity=".5"/>
    <circle cx="58" cy="34" r=".6" fill="${c.ink}" opacity=".15"/>
    <path d="M72 8h3m-1.5-1.5v3" stroke="${c.pink}" stroke-width=".8" opacity=".4"/>
  </pattern>
</defs>
<rect width="900" height="110" fill="${c.cream}"/>
<rect width="900" height="110" fill="url(#flecks)"/>
<rect x="3" y="3" width="894" height="104" fill="none" stroke="${c.ink}" stroke-width="1.7" opacity=".75"/>
<g fill="${c.blue}" opacity=".8">${checks(20, 18)}${checks(800, 72)}</g>
${sparkle(149, 43, c.pink, .75)}
${sparkle(733, 43, c.blue, .95)}
<g transform="translate(${left} 39)">
  <path d="${letters}" fill="${c.pink}" transform="translate(3 3)"/>
  <path d="${letters}" fill="${c.ink}"/>
</g>
<rect x="3" y="3" width="894" height="104" filter="url(#paper)" opacity=".055"/>
</svg>\n`;
await writeFile(new URL('footer.svg', root), svg);
console.log('Generated footer.svg');
