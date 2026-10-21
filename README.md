# Hrithik Mhatre — Personal Portfolio

A static, dependency-free redesign of the supplied website. All 58 original hyperlinks are retained. The introduction was simplified and the UCSD “Upcoming” badge removed as requested. All existing portfolio sections are preserved, with the new research entry inserted first. The original profile photograph was recovered unchanged from `hrithikM86/hrithikM86.github.io` (commit `05890170154a862a9a7319c7f9a6a1e892c67ff9`). Its relative URL works both at a GitHub Pages domain root and under a repository subpath.

## Files

```text
index.html          Complete page and original content
styles.css          Responsive layout and visual styles
script.js           Navigation tabs, disclosure animations, print handling
img/Hrithik.jpg      Original profile photograph
img/ucsd-seal.svg    UC San Diego seal
img/iitb-logo.png    IIT Bombay logo
img/amex-logo.svg    American Express logo
img/stml-logo.png    Spatiotemporal Machine Learning Lab logo
.nojekyll           Serve the site as plain static files
```

Keep these files together at your publishing root. The page uses system fonts, with no remote font requests, dependencies, bundler, or build step. Do not nest the files inside an extra directory when copying to your publishing root. README.md is documentation and is not required at runtime.

## GitHub Pages deployment

1. Copy the files into the root of your website repository, retaining the `img` directory.
2. Commit and push them to your publishing branch.
3. In GitHub **Settings → Pages**, select **Deploy from a branch**, choose your publishing branch and **/(root)**, and save. Alternatively, keep your existing Pages deployment configuration and place these files in its publishing directory.

No repository changes have been committed or pushed automatically.

## Optional local preview

From the directory containing `index.html`, run:

```sh
python3 -m http.server 8000
```

Open the local server in a browser. Local file opening also works because this site does not fetch content or use JavaScript modules.

## Interaction and accessibility

- Education is selected initially. Select any label in the navigation bar to show only that section below the bar. There are no homepage boxes or sidebar boxes.
- The profile header and navigation bar remain stationary. Only the content area below the navigation scrolls vertically, including on mobile. The navigation bar scrolls horizontally on narrow screens so every section stays reachable.
- Section changes reset the content area to its top. Direct section links and browser back/forward navigation are supported.
- Use Left/Right arrows, Home, or End in the tab bar, or Tab into the active section. The skip link moves keyboard focus to the selected section.
- Publication, project, and experience entries retain their independent expand/collapse controls.
- The three-line introduction uses bold institution names. Four affiliation marks precede the name at its font size, and the profile photograph is larger.
- The UCSD Upcoming badge was removed. Spatiotemporal Machine Learning Lab (Sep 2026 – Present) is research entry 1; the existing five research entries are preserved as entries 2–6.
- Reduced-motion preferences are respected. Printing includes all sections and nested entries, then restores the selected section and scroll position afterward.
- Without JavaScript, all sections are available in the scrollable content area and navigation links jump to their original anchors.

All original link destinations are preserved; preservation does not establish that third-party websites are currently available. The only added link is the keyboard skip link. Dates, publication statuses, descriptions, and achievements are unchanged from the supplied HTML.

## Local logo assets

The download includes local copies of these assets; loading the website does not depend on external image servers. The American Express card asset uses CSS `object-fit` to display its square AMEX mark.

- UC San Diego seal: `convergent-evolution/convergent-evolution.github.io`, `images/logo/ucsd_seal.svg`
- IIT Bombay: `FOSSEE/eSim`, `images/iitblogo.png`
- American Express: `datatrans/payment-logos`, `assets/cards/american-express.svg`
- Spatiotemporal Machine Learning Lab: `rose-stl-lab/rose-stl-lab.github.io`, `docs/public/logo.png`

The research entry was transcribed from the supplied image, including advisors, dates, overview, and all three bullets.
