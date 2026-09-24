import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const files = [
  'vendor/gsap.min.js',
  'vendor/scroll-trigger.min.js',
  'vendor/split-text.min.js',
  'vendor/custom-ease.min.js',
  'vendor/lenis.min.js',
  'vendor/swiper.min.js',
  'vendor/vanilla-infinite-marquee.min.js',
  'vendor/springer.min.js',
  'vendor/number-flow.min.js',
  'src/theme/main.js',
];

let combined = '/* Auto-generated unified theme bundle */\n';
for (const relPath of files) {
  const fullPath = path.join(rootDir, relPath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    combined += `\n/* --- ${relPath} --- */\n` + content + ';\n';
  } else {
    console.warn(`Warning: File ${fullPath} not found!`);
  }
}

const outputPath = path.join(rootDir, 'vendor', 'theme-bundle.min.js');
fs.writeFileSync(outputPath, combined, 'utf8');
console.log(`Successfully generated ${outputPath} (${(combined.length / 1024).toFixed(1)} KB)`);
