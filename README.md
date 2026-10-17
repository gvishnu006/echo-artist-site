# ECHO — Official Artist Site

A dark, responsive one-page website for a fictional electronic music project. Built as a fast, dependency-free static site with hand-written HTML, CSS and JavaScript.

## Features

- Full-viewport hero with layered "echo" typography and an animated equalizer
- Sticky glass header with a mobile navigation panel
- Interactive demo player — play buttons across the page update the now-playing strip
- Three release cards with pure CSS cover artwork and tracklists
- Tour listing with ticketing calls to action
- About section with animated orbit artwork and stats
- Booking form with inline confirmation feedback
- Scroll-reveal animations via `IntersectionObserver`
- Responsive down to small phones, with keyboard focus styles, a skip link and `prefers-reduced-motion` support

## Tech

- HTML5
- CSS (custom properties, grid, animations)
- Vanilla JavaScript (no build step, no dependencies)
- Google Fonts: Archivo Black and Space Grotesk

## Structure

```
echo-artist-site/
├── index.html
├── assets/
│   └── favicon.svg
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── LICENSE
└── README.md
```

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy with GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.
5. The site will be live at `https://<username>.github.io/echo-artist-site/`.

## Customize

- Artist name, copy, tour dates and links live in `index.html`.
- Colors are defined as custom properties at the top of `css/styles.css` (`--acid`, `--violet`, `--pink`).
- The player is a visual demo; connect real audio by replacing the play handler in `js/main.js`.

## Note

ECHO, its releases and tour dates are fictional, created for this demo. All artwork is rendered with CSS.

## License

MIT — see [LICENSE](LICENSE).
