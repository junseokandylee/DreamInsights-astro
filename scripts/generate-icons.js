import { Resvg } from '@resvg/resvg-js';
import { readFile } from 'node:fs/promises';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

async function generateIcons() {
  const font = await readFile(join(process.cwd(), 'src', 'fonts', 'NotoSansKR[wght].ttf')).catch(() => null);
  const fontArr = font ? Array.from(font) : undefined;
  const sizes = [[192, 'public/icon-192.png'], [512, 'public/icon-512.png']];

  for (const [size, outFile] of sizes) {
    const fontSize = size * 0.4;
    const textY = size * 0.55;
    const subY = size * 0.72;

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.18)}" fill="#4F46E5"/>
  <text x="50%" y="${textY}" font-family="'Noto Sans KR'" font-weight="700" font-size="${fontSize}" fill="white" text-anchor="middle">\u{1F319}</text>
  <text x="50%" y="${subY}" font-family="'Noto Sans KR'" font-weight="600" font-size="${Math.round(fontSize * 0.2)}" fill="rgba(255,255,255,0.9)" text-anchor="middle">\u{B4DC}\u{B9BC}\u{B514}\u{BE44}</text>
</svg>`;

    const resvg = new Resvg(svg, {
      fitTo: { mode: 'width', value: size },
      ...(fontArr ? { font: { fontData: fontArr } } : {}),
    });
    const png = resvg.render().asPng();
    writeFileSync(join(process.cwd(), outFile), png);
    console.log(`OK ${outFile} (${png.length} bytes)`);
  }
}

generateIcons().catch(console.error);
