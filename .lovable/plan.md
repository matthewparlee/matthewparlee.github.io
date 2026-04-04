

## Fix SPA Routing for GitHub Pages

GitHub Pages serves static files and returns a 404 for any path that doesn't match a real file. For client-side routed SPAs, we need a `404.html` that redirects back to `index.html` with the original path preserved as a query parameter.

### Changes

1. **Create `public/404.html`** — A minimal HTML page that captures the current path and redirects to `/` with the path encoded as a query string parameter (e.g., `/case-studies` becomes `/?p=/case-studies`).

2. **Add redirect handler in `index.html`** — A small inline script in `<head>` that reads the `?p=` query parameter on load and uses `history.replaceState` to restore the original URL before React mounts, so React Router picks up the correct route.

### How it works

```text
User visits /case-studies (hard refresh)
  → GitHub Pages can't find /case-studies/index.html
  → Serves 404.html instead
  → 404.html redirects to /?p=/case-studies
  → index.html script reads ?p, replaces URL to /case-studies
  → React Router renders the CaseStudies page
```

This is the standard GitHub Pages SPA workaround (based on the spa-github-pages technique). No changes to routing code or dependencies needed.

