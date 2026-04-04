import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';

/**
 * Post-build script: copies index.html into each SPA route directory
 * so GitHub Pages serves it with a 200 (not 404) for direct navigation.
 * Crawlers that execute JS will see the full rendered page.
 */

const routes = [
  '/case-studies',
  '/case-studies/compliance-training',
  '/case-studies/evaluator-decision-making',
  '/case-studies/accredited-disinfection-certificate',
  '/contact',
];

const distDir = join(process.cwd(), 'dist');
const indexHtml = join(distDir, 'index.html');

if (!existsSync(indexHtml)) {
  console.error('dist/index.html not found. Run `npm run build` first.');
  process.exit(1);
}

for (const route of routes) {
  const target = join(distDir, route, 'index.html');
  const dir = dirname(target);
  mkdirSync(dir, { recursive: true });
  copyFileSync(indexHtml, target);
  console.log(`  ✓ ${route}/index.html`);
}

console.log('\nPrerender complete — all routes have static index.html copies.');
