# Changelog

All notable changes to the Fortrix corporate website are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.1.1] - 2026-02-04

### Added

- **Module icons (marketing-approved)** – All six modules (Beacon, Ledger, Draw, Retail, Connect, Insight) now use the approved PNG icons:
  - Modules list page (`/modules`) – light icons next to each module title
  - Main page "The Fortrix ICS Platform" section – light icons next to each module
  - Platform page (`/platform`) "The Fortrix Platform" section – light icons next to each module
  - Individual module pages (e.g. `/modules/beacon`) – white outline icons in the navy hero above the module title
- **ModuleIcon component** – Reusable component with light/dark variants, PNG with SVG fallback, and white filter for dark backgrounds so icons match title contrast
- **Icon assets** – 12 PNGs in `public/icons/modules/` (beacon, ledger, draw, retail, connect, insight × light + dark) plus SVG placeholders
- **Copy script** – `scripts/copy-module-icons.js` and `assets/module-icons/` for adding or refreshing icon assets

### Changed

- **Fortrix Clarity removed** – Clarity module removed from the site; replaced by Insight per product decision
- **Module pages** – Dedicated module pages (beacon, ledger, draw, retail, connect, insight) now show the white outline icon in the hero with correct stacking and contrast
- **Version** – Bumped from 0.1.0 to 1.1.1 for this production-ready release

### Redirects

- `/modules/clarity` now redirects to `/modules/insight`

### Documentation

- `public/icons/modules/README.md` – Icon naming, brand application, and required files
- `assets/module-icons/README.md` – Drop-folder instructions for marketing-approved PNGs

---

## [0.1.0] – prior

- Initial site: hero, platform, modules, contact, privacy, terms, trust-security, solutions, about
- Logo, favicon, and brand color system
