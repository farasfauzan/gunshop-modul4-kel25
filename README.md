# Bore & Barrel

A dummy gunshop storefront built as a Progressive Web App. It runs offline
with an app shell, a web app manifest, and a service worker, and uses React +
Vite + `vite-plugin-pwa` with plain CSS.

- **Live:** https://gunshop-modul4-kel25.vercel.app
- **Source:** https://github.com/farasfauzan/gunshop-modul4-kel25

## Setup

```bash
npm install
npm run dev      # dev server with HMR
```

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Features

- **Installable** — a custom `Install app` button driven by
  `beforeinstallprompt`, hidden automatically once the app is running
  standalone. On iOS Safari it falls back to the Share → Add to Home
  Screen instructions.
- **Search** — matches name, type, and caliber. An empty result set renders
  `no guns match`.
- **Filter by type** — the chip list is derived from the data, so it picks up
  new types automatically.

## Structure

```
.
├── index.html              # HTML shell
├── vite.config.js          # Vite + vite-plugin-pwa (manifest + service worker)
├── public/                 # static assets served at /
│   ├── icon-192.png / icon-512.png / icon.svg
│   └── guns/               # product images (SVG silhouettes + photos)
└── src/
    ├── main.jsx            # entry, mounts <App/>
    ├── App.jsx             # app shell: tab state, header/nav/content/install/footer
    ├── App.css             # app shell styles
    ├── index.css           # global styles
    ├── components/
    │   ├── Header.jsx      # brand + nav
    │   ├── GunCard.jsx     # single product card
    │   ├── InstallButton.jsx
    │   └── Footer.jsx
    ├── data/
    │   └── guns.js         # dummy product data
    └── pages/
        ├── Catalog.jsx     # search + filter + product grid
        ├── About.jsx
        └── Contact.jsx
```

## Photo credits

Three product photos come from Wikimedia Commons and are shown with an
in-app credit on each card's detail dialog.

| Item | Author | License |
| --- | --- | --- |
| Lee-Enfield Mk III | Armémuseum (Swedish Army Museum) | CC BY-SA 3.0 |
| Winchester Model 1897 | National Park Service — Hot Springs National Park | Public domain |
| Walther P38N | Askild Antonsen | CC BY 2.0 |

All three were cropped to 4:3 to match the card layout; the near-white
studio background was mapped to the card's `#e4e8ea` so photos and SVG
silhouettes sit on the same tone.

