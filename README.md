# Pixabay Image Search — Homework 3

- Source: https://github.com/nikita-parkhomenko/goit-advancedjs-hw-03
- GitHub Pages: https://nikita-parkhomenko.github.io/goit-advancedjs-hw-03/

## Run locally

```sh
npm ci
npm run dev
```

`npm run build` creates `dist` with the repository-specific GitHub Pages base.

Search uses Axios and Pixabay photo, horizontal orientation, and safe search filters.
Notifications use iziToast, enlarged images use SimpleLightbox, and the spinner
comes from https://css-loaders.com/spinner/.

The included workflow deploys pushes to `main` to the `gh-pages` branch.
Configure GitHub Pages to serve from that branch at `/ (root)`.
The Pages URL above is the intended deployment URL; verify it after deployment.
