# Mithun Manjunath, Portfolio Website

A static portfolio site. No build step, no dependencies. Just HTML, CSS, and a small
vanilla-JS file. Hosts cleanly on GitHub Pages (like the older site version).

## Files

```
portfolio-site/
  index.html        # the whole site (semantic content)
  styles.css        # all styling + responsive + motion
  main.js           # scroll progress, reveal-on-scroll, project tabs, active nav
  assets/img/       # product screenshots
  resume/           # the two print-ready resumes the site links to
```

All links are **relative**, so the site works whether it is served from
`username.github.io` (root) or `username.github.io/repo-name/` (project page). No path
changes needed.

All contact links (email, LinkedIn, GitHub: `github.com/superposition-fc23`) are set.
Nothing left to fill.

## Deploy to GitHub Pages (personal account: superposition-fc23)

### Option A, user site at `superposition-fc23.github.io` (recommended)

1. Create a repo named exactly `superposition-fc23.github.io`.
2. Copy the **contents** of this `portfolio-site/` folder into the repo root
   (so `index.html` sits at the top level).
3. Commit and push to the `main` branch (use your personal git identity).
4. Repo **Settings to Pages**: set Source = "Deploy from a branch", Branch = `main`,
   folder = `/ (root)`. Save.
5. Live in ~1 minute at `https://superposition-fc23.github.io`.

### Option B, project page (keeps your username site free)

1. Create any repo, e.g. `portfolio`.
2. Push these files to `main`.
3. Settings to Pages to Branch `main` / root.
4. Live at `https://superposition-fc23.github.io/portfolio/`.

### Custom domain (optional)

Add a file named `CNAME` containing your domain (e.g. `mithun.dev`) to the repo root,
then point your DNS (A records or a CNAME) at GitHub Pages per GitHub's docs.

## Résumé

The "Résumé" card links to `resume/resume-mithun-manjunath.html` (one combined version covering
building, scaling, and managing). To produce a PDF: open it in Chrome, Cmd/Ctrl+P, Save as PDF.
The editable Markdown lives in `../resumes/resume-mithun-manjunath.md`.


## Editing content

Everything is in `index.html` as one bento grid of cards: an avatar/About card (opens an About
modal), four callout stat tiles, the work cards (uniform, dated, ordered most-recent first), a
side-projects group (computer vision, robotics, privacy-preserving ML, then RL-with-cat and
aquaponics), a grouped toolkit, a "Currently" tile, and contact. Each work and research card is a
`<button data-modal="...">` that opens a modal with `TL;DR` and `Detailed` tabs; the Detailed tab is
a Problem / Solution / Result / Learnings case study. To swap your photo, replace
`assets/img/avatar.jpg` (square crop looks best). Categories (`data-cat`) drive the nav filters.


## Style notes (house rules)

Per Mithun's writing preferences: **no em-dashes, no arrow glyphs, no emojis.** Keep copy
succinct and metric-led. The accent palette and Inter typography are defined as CSS
variables at the top of `styles.css`.
