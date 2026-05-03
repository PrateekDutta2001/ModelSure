# Model Validation — The Complete Guide

Static reference page on **model validation** for machine learning: splits, cross-validation, metrics, bias–variance, clustering validation, and an end-to-end workflow. Examples use **Python** and **scikit-learn**.

## Live site (GitHub Pages)

The guide is published at **[prateekdutta2001.github.io/ModelSure](https://prateekdutta2001.github.io/ModelSure/)**.

GitHub Pages loads **`index.html`** at the repository root. This repo includes:

- **`index.html`** — full guide (same content as the main page)
- **`.nojekyll`** — tells GitHub Pages not to run Jekyll, so `README.md` is not turned into the homepage

If you still open `model_validation.html`, it redirects to `index.html`.

## Contents

| File | Description |
|------|-------------|
| `index.html` | Page structure and content (entry URL for GitHub Pages) |
| `model_validation.css` | Layout, typography, and component styles |
| `model_validation.js` | Table-of-contents pills: highlights the section in view while scrolling |
| `model_validation.html` | Short redirect to `index.html` (optional bookmark) |

## How to view locally

Open **`index.html`** in a browser (double-click the file, or use **Open with** your preferred browser).

Keep `index.html`, `model_validation.css`, and `model_validation.js` in the **same folder**.

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
