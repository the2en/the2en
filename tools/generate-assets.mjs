// Generate only the decorative header/footer. Run: node tools/generate-assets.mjs
import { mkdir, writeFile } from 'node:fs/promises';
const root = new URL('../assets/', import.meta.url);
await mkdir(root, { recursive: true });
const c = { ink: '#173b8f', blue: '#2257c8', pink: '#f863a8', cream: '#fff9e9' };
const svg = (w, h, title, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title"><title id="title">${title}</title>${body}</svg>\n`;

await writeFile(new URL('header.svg', root), svg(1200, 330, 'Welcome to Seeun’s GitHub', `
<defs>
  <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r=".85" fill="${c.ink}" opacity=".075"/></pattern>
  <clipPath id="canvas"><rect width="1200" height="330"/></clipPath>
</defs>
<g clip-path="url(#canvas)">
  <rect width="1200" height="330" fill="${c.cream}"/>
  <rect width="1200" height="330" fill="url(#dots)"/>
  <circle cx="1164" cy="278" r="202" fill="${c.ink}"/>
  <ellipse cx="1107" cy="174" rx="142" ry="49" transform="rotate(-26 1107 174)" fill="none" stroke="#a9eee4" stroke-width="29"/>
  <circle cx="1065" cy="66" r="24" fill="${c.pink}"/>
  <text x="70" y="112" fill="${c.ink}" font-family="Georgia,Times New Roman,serif" font-size="49" font-style="italic" letter-spacing="-.8">Welcome to</text>
  <text x="66" y="215" fill="${c.ink}" font-family="Arial Black,Arial,sans-serif" font-size="88" font-weight="900" letter-spacing="-4.5">Seeun’s GitHub</text>
  <path d="M74 246Q220 238 367 242" fill="none" stroke="${c.pink}" stroke-width="10" stroke-linecap="round"/>
</g>
`));

await writeFile(new URL('footer.svg', root), svg(900, 66, 'Made with love, curiosity and too many tabs.', `
<defs><pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1" fill="${c.blue}" opacity=".18"/></pattern></defs>
<rect x="1.5" y="1.5" width="897" height="63" fill="${c.cream}" stroke="${c.ink}" stroke-width="3"/>
<rect x="3" y="3" width="894" height="60" fill="url(#dots)"/>
<text x="25" y="40" fill="${c.ink}" font-family="Arial Black,Arial,sans-serif" font-size="22" font-weight="900" letter-spacing="-1">theSen<tspan fill="${c.pink}">.</tspan>log</text>
<text x="875" y="38" text-anchor="end" fill="${c.ink}" font-family="Courier New,monospace" font-size="12" font-weight="700" letter-spacing="1">MADE WITH <tspan fill="${c.pink}">♥</tspan>, CURIOSITY &amp; TOO MANY TABS.</text>
`));
console.log('Generated header.svg and footer.svg');
