import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';

// Since the project uses "type": "module", we need to use process.cwd() or path.resolve()
const __dirname = path.resolve();

const PORT = 3456;
const DIST_DIR = path.join(__dirname, 'dist');

const ROUTES_TO_PRERENDER = [
  "/",
  "/services/vehicle-window-tinting",
  "/services/tesla-window-tinting",
  "/services/commercial-window-tinting",
  "/services/residential-window-tinting",
  "/services/vehicle-paint-correction",
  "/services/vehicle-paint-protection",
  "/services/headlight-services",
  "/services/ceramic-coating",
  "/services/windshield-protection-film",
  "/gallery",
  "/support"
];

async function prerender() {
  console.log('Starting static server for prerendering...');
  const app = express();
  
  // Serve static assets from dist
  app.use(express.static(DIST_DIR));
  // Serve the index.html for any other route (SPA fallback)
  app.get('*', (req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });

  const server = app.listen(PORT, async () => {
    try {
      console.log(`Server listening on http://localhost:${PORT}`);
      console.log('Launching puppeteer...');
      
      const browser = await puppeteer.launch({
        headless: 'new', // Use the new headless mode
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });

      for (const route of ROUTES_TO_PRERENDER) {
        console.log(`Prerendering route: ${route}`);
        const page = await browser.newPage();
        
        // Wait until there are 0 network connections for at least 500 ms.
        // This ensures all animations, lazy loaded components, and data fetch complete.
        await page.goto(`http://localhost:${PORT}${route}`, { 
          waitUntil: 'networkidle0', 
          timeout: 45000 
        });

        // Get the fully rendered HTML
        const html = await page.content();
        
        // Map route to output file
        // e.g. "/" -> "dist/index.html"
        // e.g. "/gallery" -> "dist/gallery/index.html"
        let relativePath = route === '/' ? 'index.html' : `${route}/index.html`;
        let outFile = path.join(DIST_DIR, relativePath);
        const dir = path.dirname(outFile);
        
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync(outFile, html);
        console.log(`Saved ${outFile}`);
        await page.close();
      }

      await browser.close();
      console.log('Prerendering complete!');
      
    } catch (e) {
      console.error('Error during prerendering:', e);
      process.exitCode = 1;
    } finally {
      server.close();
    }
  });
}

prerender();
