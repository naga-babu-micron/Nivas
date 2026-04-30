import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const assets = [
  // Hero background image
  { url: 'https://nivafoods.com.sg/wp-content/uploads/2026/03/Fresh-mangoes-with-water-droplets.webp', dest: 'images/hero-bg.webp' },
  // Why choose us background
  { url: 'https://nivafoods.com.sg/wp-content/uploads/2026/03/Background-image.png', dest: 'images/why-choose-bg.png' },
  // Logo
  { url: 'https://nivafoods.com.sg/wp-content/uploads/2026/03/Niva-logo-2.png', dest: 'images/niva-logo.png' },
  { url: 'https://nivafoods.com.sg/wp-content/uploads/2026/03/cropped-Niva-logo-2-100x75.png', dest: 'images/niva-logo-small.png' },
  // Favicon
  { url: 'https://nivafoods.com.sg/wp-content/uploads/2026/03/cropped-Niva-logo-2-1-32x32.png', dest: 'seo/favicon-32x32.png' },
  { url: 'https://nivafoods.com.sg/wp-content/uploads/2026/03/cropped-Niva-logo-2-1-192x192.png', dest: 'seo/favicon-192x192.png' },
  { url: 'https://nivafoods.com.sg/wp-content/uploads/2026/03/cropped-Niva-logo-2-1-180x180.png', dest: 'seo/apple-touch-icon.png' },
  // Product images
  { url: 'https://nivafoods.com.sg/wp-content/uploads/2026/03/bangapalli-300x300.jpg', dest: 'images/mango-bangapalli.jpg' },
  { url: 'https://nivafoods.com.sg/wp-content/uploads/2026/04/Untitled-design-24-300x300.png', dest: 'images/mango-alphonso-reg.png' },
  { url: 'https://nivafoods.com.sg/wp-content/uploads/2026/03/dasheri-300x300.webp', dest: 'images/mango-kesar.webp' },
  { url: 'https://nivafoods.com.sg/wp-content/uploads/2026/03/neelam-2-300x300.jpg', dest: 'images/mango-payri.jpg' },
  { url: 'https://nivafoods.com.sg/wp-content/uploads/2026/03/chaunsa-300x300.webp', dest: 'images/mango-imampasanth.webp' },
  { url: 'https://nivafoods.com.sg/wp-content/uploads/2026/03/rumani-300x300.webp', dest: 'images/mango-rumani.webp' },
];

async function downloadAsset(url, dest) {
  const fullDest = path.join(publicDir, dest);
  const dir = path.dirname(fullDest);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  
  if (existsSync(fullDest)) {
    console.log(`⏭️  Skipping (exists): ${dest}`);
    return;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    await pipeline(response.body, createWriteStream(fullDest));
    console.log(`✅ Downloaded: ${dest}`);
  } catch (err) {
    console.error(`❌ Failed: ${dest} - ${err.message}`);
  }
}

// Download 4 at a time
const batchSize = 4;
for (let i = 0; i < assets.length; i += batchSize) {
  const batch = assets.slice(i, i + batchSize);
  await Promise.all(batch.map(({ url, dest }) => downloadAsset(url, dest)));
}

console.log('\nDone!');
