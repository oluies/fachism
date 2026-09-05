// Renderar tools/share.html till docs/share.png i 1200 x 630.
//
// Körs med:  node tools/render-share.mjs
// Kräver playwright, hämtas vid behov med:  npx playwright install chromium
//
// Bilden genereras här och beskärs inte ur något annat format.
//
// Facebook och LinkedIn cachar OG-data. Byts share.png ut måste
// förhandsvisningen rensas i Facebook Sharing Debugger respektive
// LinkedIn Post Inspector, annars visas den gamla bilden.

import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const src = pathToFileURL(resolve(here, "share.html")).href;
const out = resolve(here, "..", "docs", "share.png");

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1
});
await page.goto(src, { waitUntil: "load" });
await page.screenshot({ path: out, type: "png", clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log("skrev " + out);
