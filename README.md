# ModelSure — Model Validation guides

**ModelSure** bundles two static guides: **classic model validation** (`index.html`) and **agentic model validation** (`agentic_model_validation.html`). Both share the same editorial look (Playfair / DM Sans / JetBrains Mono, cream paper palette, dark hero headers).

The classic guide covers splits, cross-validation, metrics, bias–variance, clustering validation, and an end-to-end workflow with **Python** and **scikit-learn**. The agentic guide keeps its original deep-dive copy; only layout and theme were aligned with ModelSure.

## Live site (GitHub Pages)

The guide is published at **[prateekdutta2001.github.io/ModelSure](https://prateekdutta2001.github.io/ModelSure/)**.

GitHub Pages loads **`index.html`** at the repository root. This repo includes:

- **`index.html`** — full guide (same content as the main page)
- **`.nojekyll`** — tells GitHub Pages not to run Jekyll, so `README.md` is not turned into the homepage

If you still open `model_validation.html`, it redirects to `index.html`.

## Contents

| File | Description |
|------|-------------|
| `index.html` | Classic model validation — page structure and content (GitHub Pages entry) |
| `agentic_model_validation.html` | Agentic model validation — same article body as before; ModelSure-themed layout |
| `agentic_modelsure.css` | Styles for the agentic guide (palette + UI aligned with `model_validation.css`) |
| `model_validation.css` | Classic guide layout, typography, ModelSure **switch bar** styles |
| `model_validation.js` | Classic guide: left **Contents** nav + active section while scrolling |
| `model_validation.html` | Short redirect to `index.html` (optional bookmark) |

## How to view locally

Open **`index.html`** in a browser (double-click the file, or use **Open with** your preferred browser).

Keep `index.html`, `agentic_model_validation.html`, both CSS files, and `model_validation.js` in the **same folder** so links and assets resolve.

### Local server (optional)

If you prefer serving over HTTP:

```bash
# Python 3
python -m http.server 8080
```

Then visit `http://localhost:8080/index.html` (or `http://localhost:8080/` if the server is started in this folder).

## Fonts

The page loads **Playfair Display**, **JetBrains Mono**, and **DM Sans** from [Google Fonts](https://fonts.google.com/). An internet connection is required for typography on first load.

## Credits

© 2026 [PRATEEK DUTTA](https://prateekdutta2001.github.io/PrateekDutta.in/). Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
