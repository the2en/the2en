// Generate the decorative footer. Run: node tools/generate-assets.mjs
// The ImageGen cover is assets/header.png; its prompt is in tools/header-prompt.md.
import { mkdir, writeFile } from 'node:fs/promises';
const root = new URL('../assets/', import.meta.url);
await mkdir(root, { recursive: true });
const c = { ink: '#173b8f', blue: '#2257c8', pink: '#f863a8', cream: '#fff9e9' };
const svg = (w, h, title, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title"><title id="title">${title}</title>${body}</svg>\n`;

await writeFile(new URL('footer.svg', root), svg(900, 66, 'Made with love, curiosity and too many tabs.', `
<defs><pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1" fill="${c.blue}" opacity=".18"/></pattern></defs>
<rect x="1.5" y="1.5" width="897" height="63" fill="${c.cream}" stroke="${c.ink}" stroke-width="3"/>
<rect x="3" y="3" width="894" height="60" fill="url(#dots)"/>
<text x="25" y="40" fill="${c.ink}" font-family="Arial Black,Arial,sans-serif" font-size="22" font-weight="900" letter-spacing="-1">theSen<tspan fill="${c.pink}">.</tspan>log</text>
<text x="875" y="38" text-anchor="end" fill="${c.ink}" font-family="Courier New,monospace" font-size="12" font-weight="700" letter-spacing="1">MADE WITH <tspan fill="${c.pink}">♥</tspan>, CURIOSITY &amp; TOO MANY TABS.</text>
`));
console.log('Generated footer.svg');
