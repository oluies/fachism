# Korporatismen och fascismfrågan

Statisk ensidig webbplats. Publiceras på <https://oluies.github.io/fachism/>.

- `docs/` är det som publiceras. `index.html` är hela sidan, inline CSS och inline JS,
  inga externa beroenden. Diagrammen ritas som inline SVG av sidans eget skript.
- `tools/` ingår inte i den publicerade sidan. `share.html` är mallen för
  förhandsvisningsbilden och `render-share.mjs` renderar den till `docs/share.png`
  i 1200 × 630 med Playwright.
- `.github/workflows/pages.yml` laddar upp `docs/` och publicerar. Den bygger ingenting.

Generera om delningsbilden:

```sh
cd tools
npm install
npx playwright install chromium
node render-share.mjs
```

Facebook och LinkedIn cachar OG-data. Byts `share.png` ut måste förhandsvisningen
rensas i Facebook Sharing Debugger respektive LinkedIn Post Inspector.
