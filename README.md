# liliumapps.com

The Lilium Apps website, built with Gatsby and deployed to GitHub Pages.

```bash
npm install
npm run develop   # http://localhost:8000
npm run build     # static site in public/
```

Pushing `main` deploys through `.github/workflows/deploy.yml`. The app list
lives in `src/data/projects.js`. Logos and icons in `static/` are generated
by `../../../branding` (`npm run build` there); don't edit them by hand.
