import { mkdir, copyFile } from 'node:fs/promises';

for (const route of ['landing-split', 'new', 'design-1', 'design-2']) {
  await mkdir(`dist/${route}`, { recursive: true });
  await copyFile('dist/index.html', `dist/${route}/index.html`);
}
