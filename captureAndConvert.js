import { chromium } from '@playwright/test';
import portfolioSites from './src/lib/constants/portfolioSites.js';
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function cleanDirectory() {
	const baseDir = path.join(__dirname, 'src/lib/assets/portfolioScreenshots');
	try {
		// Remove the entire screenshots directory and its contents
		await fs.rm(baseDir, { recursive: true, force: true });
		console.log('Screenshots directory cleaned');
	} catch (error) {
		console.error('Error cleaning directory:', error);
	}
}

async function ensureDirectories() {
	const baseDir = path.join(__dirname, 'src/lib/assets/portfolioScreenshots');
	await fs.mkdir(baseDir, { recursive: true });
}

function toCamelCase(str) {
	return str
		.toLowerCase()
		.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
		.replace(/[^a-zA-Z0-9]/g, '');
}

async function captureScreenshots() {
	const browser = await chromium.launch();
	const updatedSites = [];
	const aspectRatio = 16 / 9;
	const width = 1920;
	const height = Math.round(width / aspectRatio);

	for (const site of portfolioSites) {
		let context;
		try {
			console.log(`Capturing screenshot for ${site.name} (${site.url})`);

			context = await browser.newContext({
				viewport: { width, height },
				timeout: 30000
			});

			const page = await context.newPage();
			await page.goto(site.url, {
				waitUntil: 'networkidle',
				timeout: 30000
			});

			// Wait for 4 seconds after page load
			await page.waitForTimeout(4000);

			await page.setViewportSize({ width, height });

			const imageName = toCamelCase(site.name);
			const imagePath = imageName;

			// Capture the viewport only (16:9 portion)
			await page.screenshot({
				path: `src/lib/assets/portfolioScreenshots/${imageName}.png`,
				fullPage: false
			});

			console.log(`Screenshot captured for ${site.name}`);

			updatedSites.push({
				...site,
				image: imagePath
			});
		} catch (error) {
			console.error(`Error capturing ${site.name}:`, error);
		} finally {
			if (context) {
				await context.close().catch((e) => console.error('Error closing context:', e));
			}
		}
	}

	await browser.close();

	// Update portfolioSites.js file
	const siteFileContent = `const portfolioSites = ${JSON.stringify(updatedSites, null, 2)};

export default portfolioSites;
`;

	await fs.writeFile('./src/lib/constants/portfolioSites.js', siteFileContent);
}

async function convertPNGtoWebP() {
	const baseDir = './src/lib/assets/portfolioScreenshots';
	try {
		const files = await fs.readdir(baseDir);
		const pngFiles = files.filter((file) => file.endsWith('.png'));

		for (const pngFile of pngFiles) {
			const inputPath = path.join(baseDir, pngFile);
			const outputPath = path.join(baseDir, pngFile.replace('.png', '.webp'));

			console.log(`Converting ${pngFile} to WebP...`);

			await sharp(inputPath)
				.resize(1280, 720, {
					// 16:9 ratio at a good size for web
					fit: 'cover',
					position: 'top'
				})
				.webp({ quality: 80 })
				.toFile(outputPath);

			await fs.unlink(inputPath);
		}
	} catch (error) {
		console.error('Error converting files:', error);
	}
}

async function main() {
	console.log('Cleaning screenshots directory...');
	await cleanDirectory();

	console.log('Creating directories...');
	await ensureDirectories();

	console.log('Starting screenshot capture...');
	await captureScreenshots();

	console.log('Starting WebP conversion...');
	await convertPNGtoWebP();

	console.log('All operations completed!');
}

main().catch(console.error);
