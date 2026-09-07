# elizabethmachado.me

Source for Elizabeth Machado's portfolio site — plain HTML/CSS/JS, built to host on GitHub Pages under the elizabethmachado.me domain.

## Structure

```
index.html         one-page site (nav, hero, My Story, quote, Selected Works, Contact)
css/style.css       all styling, incl. the light/dark theme variables
js/main.js          dark-mode toggle (persisted via localStorage) + footer year
images/              hero, quote banner, contact banner, project photos/logos, and the two logo variants (light/dark)
resume/              a standalone resume landing page (resume/index.html) with an embedded PDF preview plus download/open buttons, next to the real PDF itself
brasa/               Liz's real Brasa Coffee Co. site (self-contained HTML/CSS/JS), published as a subpage of this site
CNAME                 tells GitHub Pages this site serves elizabethmachado.me — required for the custom domain to work
```

## Before this goes live, replace the placeholders

- **Resume**: done — the nav's Resume link now opens `resume/index.html`, a proper landing page (matching the site's fonts/theme) with an embedded PDF preview and Download / Open in New Tab buttons, rather than jumping straight to the raw file.
- **Brasa**: done — the real Brasa site lives at `brasa/index.html` and the Brasa project circle links straight to it. Its repo link (`data-repo`) is still `#` — fill in the real Brasa-Coffee-Co GitLab URL if you want that wired up too.
- **Projects**: in `index.html`, each `.project-card` has a `href` (live demo) and `data-repo` (repo link) — fill in the real repo links for TrailPaceTracker, Harborlight Digital, and DINO_CODE (still `#`). All four project images/logos are already in place.
- **Contact form**: the form's `action` in `index.html` points to `https://formspree.io/f/YOUR_FORM_ID` — replace with your real Formspree endpoint once you've created a form at formspree.io.
- **Social links**: the GitLab and LinkedIn links in the Contact section are currently `#` — add your real profile URLs.

## Publishing to GitHub Pages

- **DNS at Hover: done.** The apex domain (`@`) has all four GitHub Pages `A` records (185.199.108/109/110/111.153) and all four `AAAA` records, plus the `_github-pages-challenge` `TXT` verification record and a `www` `CNAME` pointing at the GitHub Pages username site — this is exactly what GitHub's docs call for, nothing left to change here.
- **A `CNAME` file is included** in this project's root containing `elizabethmachado.me` — this is what tells GitHub Pages which custom domain to serve once the repo is pushed, so that step doesn't need to be repeated in the GitHub UI.
- **What's left**:
  1. Push this folder to a GitHub repo (e.g. a repo named `elizabethmachado.me`, or any repo with Pages enabled on the `main` branch).
  2. In the repo's Settings → Pages, set the source to the branch/folder this lives in.
  3. Still in Settings → Pages, the custom domain field should pick up `elizabethmachado.me` from the `CNAME` file automatically — if not, type it in and save. GitHub will verify it against the DNS records above (already in place) and can take anywhere from a few minutes to a few hours to issue the HTTPS certificate; once it does, check "Enforce HTTPS."

## Notes on the build

- Theme: the default look matches the approved mockup (cream nav/sections, dark green "Selected Works", photo sections). The dark-mode toggle (sun/moon icon in the nav) switches to a deeper, fuller dark-green theme — it's a separate, more immersive dark treatment rather than just re-showing the default section colors.
- Fonts: two-way split. Headings/nav/buttons ("the main font") use Italiana — a tall, thin display serif. Body copy (My Story paragraph, form, notes) uses Noto Serif Condensed, a free stand-in for Georgia Pro Condensed (a paid Monotype font — see below if you have a license for the real one). Both load from Google Fonts, so they won't render correctly in an offline preview — only once opened with a normal internet connection. Italiana ships one weight only, so headings are pinned to `font-weight: 400` with `font-synthesis: none` to avoid the browser faking a bold cut.
  - **If you have a Georgia Pro Condensed license** (e.g. via Microsoft 365 or Adobe Fonts): send the actual font files (woff2 preferred) and I'll swap in a self-hosted `@font-face` instead of the Noto Serif Condensed stand-in.
- The cursive "Liz" in the hero is Liz's actual signature — traced from a Notability scan, vectorized to an inline SVG (`images/liz-signature.svg`), and revealed with a left-to-right pen-draw wipe animation on page load (`.cursive-svg-reveal` in `css/style.css`, respects `prefers-reduced-motion`).
- Project circles flip on hover/focus (CSS 3D transform) to reveal the project name, and the whole circle is a link to the live project.
- Brasa is published as a real subpage rather than an external link — `brasa/index.html`, with its own images at `brasa/images/`. It ships as its own complete HTML file (styles and script inline) with a working Formspree-backed contact form of its own, separate from the main site's Contact section.
- Logo: the "Em." mark in the nav is Liz's own hand-drawn design, with light/dark background-matched versions that swap with the theme toggle.
- DINO_CODE and Harborlight Digital's project circles show a small italic "Coming soon" note under the title on flip, since neither has a live link yet. Brasa and TrailPaceTracker don't — Brasa now links to a real page, and TrailPaceTracker's screenshot badge stands in permanently for a live demo (it's a local Java console app, not something that can be hosted on the web).
- Note on the resume page's embedded PDF preview: some mobile browsers don't render embedded PDFs inline (they'll show a blank box instead) — the Download / Open in New Tab buttons above it are the reliable fallback either way.
