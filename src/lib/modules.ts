/**
 * Canonical module metadata. Taglines match live module-page subtitles (system of record).
 * Module Overview reconciles to these strings — not the reverse.
 */
export const MODULE_CATALOG = [
  {
    id: 'beacon',
    title: 'Fortrix Beacon',
    tagline: 'Detects anomalies, patterns, and risk signals across systems.',
    href: '/modules/beacon',
  },
  {
    id: 'ledger',
    title: 'Fortrix Ledger',
    tagline: 'Tamper-evident evidence engine for system-of-record integrity.',
    href: '/modules/ledger',
  },
  {
    id: 'draw',
    title: 'Fortrix Draw',
    tagline: 'Secure draw configuration, validation, and discrepancy analysis.',
    href: '/modules/draw',
  },
  {
    id: 'retail',
    title: 'Fortrix Retail',
    tagline: 'Retail terminal-estate health monitoring and daily reconciliation.',
    href: '/modules/retail',
  },
  {
    id: 'digital',
    title: 'Fortrix Digital',
    tagline: 'Control and reconciliation for digital lottery and iGaming.',
    href: '/modules/digital',
  },
  {
    id: 'connect',
    title: 'Fortrix Connect',
    tagline: 'Integration and normalization layer across partners and systems.',
    href: '/modules/connect',
  },
  {
    id: 'clarity',
    title: 'Fortrix Clarity',
    tagline: 'Audit, review, and reporting layer for oversight teams.',
    href: '/modules/clarity',
  },
  {
    id: 'regulatory-filing',
    title: 'Fortrix Regulatory Filing',
    tagline: 'Prepares, validates, and submits regulatory reports from one controlled workflow.',
    cardOneLiner: 'Regulatory reporting and submission, starting with FINTRAC.',
    navLabel: 'Regulatory Filing',
    href: '/modules/regulatory-filing',
  },
] as const;

export type ModuleCatalogId = (typeof MODULE_CATALOG)[number]['id'];

export function getModuleById(id: string) {
  return MODULE_CATALOG.find((m) => m.id === id);
}

/** Short line for homepage cards (no trailing period). */
export function cardTagline(text: string): string {
  return text.endsWith('.') ? text.slice(0, -1) : text;
}

export function homeCardLine(module: (typeof MODULE_CATALOG)[number]): string {
  if ('cardOneLiner' in module && module.cardOneLiner) {
    return module.cardOneLiner;
  }
  return module.tagline;
}

export function navLabelFor(module: (typeof MODULE_CATALOG)[number]): string {
  if ('navLabel' in module && module.navLabel) {
    return module.navLabel;
  }
  return module.title;
}
