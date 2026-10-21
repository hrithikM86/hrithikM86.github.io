# Hrithik Mhatre — Personal Portfolio

A static, dependency-free redesign of the supplied website. All original portfolio text and all 58 original hyperlinks are retained. The original profile photograph was recovered unchanged from `hrithikM86/hrithikM86.github.io` (commit `05890170154a862a9a7319c7f9a6a1e892c67ff9`). Its relative URL works both at a GitHub Pages domain root and under a repository subpath.

## Files

```text
index.html          Complete page and original content
styles.css          Responsive layout and visual styles
script.js           Disclosure animations, anchor navigation, print handling
img/Hrithik.jpg      Original profile photograph
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

- Click a section card, or focus its heading and press Enter or Space, to expand or collapse it.
- Multiple cards can remain expanded. Existing publication, project, and experience disclosures remain independently interactive.
- Navigation links open the requested section, including direct hash URLs and browser history navigation.
- Native HTML details/summary elements keep all content accessible if JavaScript is unavailable.
- Keyboard focus indicators, a skip link, reduced-motion preferences, and responsive layouts are supported.
- Printing expands all sections and nested entries, then restores the previous state afterward.

All original link destinations are preserved; preservation does not establish that third-party websites are currently available. The only added link is the keyboard skip link. Dates, publication statuses, descriptions, and achievements are unchanged from the supplied HTML.
