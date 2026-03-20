# Release Notes

## v1.1.1 (2026-02-04)

**Production-ready release: module icons**

This release adds marketing-approved module icons across the site.

**Update (2026-03-20):** The audit and reporting module is named **Fortrix Clarity** (canonical `/modules/clarity`). The former name Fortrix Insight redirects to Clarity.

### Highlights

- **Module icons** – All six modules (Beacon, Ledger, Draw, Retail, Connect, Clarity) now display the approved icons:
  - **Light backgrounds** (modules list, main page platform section, platform page): dark-on-light variant
  - **Navy hero** (each module landing page): white outline icons, matched to title contrast and stacking
- **Fortrix Clarity** – The audit and reporting module uses the Fortrix Clarity name and `/modules/clarity`; older `/modules/insight` URLs redirect here.
- **Brand alignment** – Icons follow Fortrix Brand Guide (§8.2 Iconography); no stretch, skew, or recolor; correct light/dark variant per background.

### Where icons appear

| Page | Location | Icon variant |
|------|----------|--------------|
| `/` (home) | "The Fortrix ICS Platform" section | Light |
| `/modules` | Next to each module title | Light |
| `/platform` | "The Fortrix Platform" module list | Light |
| `/modules/beacon`, `/modules/ledger`, etc. | Hero above module title | Dark (white outline) |

### Technical

- New `ModuleIcon` component with `moduleId`, `variant` (light | dark), optional `size` and `className`
- Icons: PNGs in `public/icons/modules/` (e.g. `beacon-light.png`, `beacon-dark.png`), SVG fallback if PNG missing
- Dark variant uses CSS filter so hero icons render pure white on navy

### Deployment

- Version in `package.json`: **1.1.1**
- No new environment variables or config changes
- Build and deploy as usual (e.g. push to `main`; Amplify or your pipeline will build)

---

*For a full list of file and copy changes, see [CHANGELOG.md](./CHANGELOG.md).*
