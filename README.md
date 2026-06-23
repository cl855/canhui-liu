# Canhui Liu Personal Website

Static academic website for GitHub Pages.

## Local Preview

Open `index.html` directly in a browser, or run a tiny local server from this folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publish on GitHub Pages

Recommended repository name: `canhui-liu`

Published URL after enabling Pages:

```text
https://cl855.github.io/canhui-liu/
```

GitHub Pages setup:

1. Create a public repository under `cl855` named `canhui-liu`.
2. Push this folder to the repository.
3. In repository settings, open Pages.
4. Set the source to the `main` branch and the root folder.
5. Wait a few minutes, then visit the URL above.

Push commands after the GitHub repository exists:

```bash
cd /Users/canhui/canhui-liu
git remote add origin https://github.com/cl855/canhui-liu.git
git push -u origin main
```

If you prefer the shorter root URL `https://cl855.github.io/`, create a repository named `cl855.github.io` instead and push the same files there.

If you later buy a custom domain such as `canhuiliu.com`, add a `CNAME` file containing only that domain and configure the DNS records in the domain provider.

## Included Assets

- `assets/Canhui-LIU-CV-202606.pdf`
- `assets/self-portrait-line.svg`
- `works/ai-risk-5platform-comparison.html`
- `works/ai-semiconductor-ecosystem/index.html`

## WordPress.com Deletion

The old site at `https://canhuiliu.wordpress.com/` must be deleted from the logged-in WordPress.com account. WordPress.com does not allow support staff or outside tools to delete it without account access.

Official path:

1. Go to the WordPress.com hosting dashboard.
2. Select `canhuiliu.wordpress.com`.
3. Open Settings.
4. Scroll to Delete site.
5. Type the full site address to confirm.
6. Click Delete Site.

Export content first if you want a backup. WordPress.com says deleted sites can be restored within 30 days, but the WordPress.com address cannot be reused after permanent deletion.
