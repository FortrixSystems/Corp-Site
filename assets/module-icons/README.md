# Module icons (marketing-approved)

**Drop your 14–18 marketing-approved PNGs here**, then from the project root run:

```bash
node scripts/copy-module-icons.js
```

The script will copy and rename them into `public/icons/modules/` so the site uses the correct files per brand (Light on light backgrounds, Dark on navy/charcoal).

Accepted filenames (any of these patterns):

- `Light_Beacon...png`, `Dark_Beacon...png` or `Inverse_Beacon...png`
- Same for Ledger, Draw, Retail, Connect, Insight

You need **light** and **dark** (or **inverse**) for each of the 6 modules (12 files minimum).
