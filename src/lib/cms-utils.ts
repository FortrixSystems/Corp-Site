/**
 * CMS Utility Functions
 * Helper functions for working with CMS data
 */

import { CMSConfig, ThemeConfig, ImageConfig, PageContent } from '@/types/cms';
import { getActiveTheme, getImageById, getPageByPath } from './cms-validator';

/**
 * Apply theme colors to CSS variables
 */
export function applyTheme(theme: ThemeConfig): Record<string, string> {
  return {
    '--color-charcoal': theme.colors.primary.charcoal,
    '--color-navy': theme.colors.primary.navy,
    '--color-teal': theme.colors.accent.teal,
    '--color-amber': theme.colors.accent.amber,
    '--color-crimson': theme.colors.accent.crimson,
    '--color-grey-900': theme.colors.neutral.grey900,
    '--color-grey-700': theme.colors.neutral.grey700,
    '--color-grey-500': theme.colors.neutral.grey500,
    '--color-grey-300': theme.colors.neutral.grey300,
    '--color-grey-100': theme.colors.neutral.grey100,
    '--color-white': theme.colors.neutral.white,
  };
}

/**
 * Get theme color value by key
 */
export function getThemeColor(theme: ThemeConfig, path: string): string | undefined {
  const parts = path.split('.');
  let value: any = theme.colors;

  for (const part of parts) {
    if (value && typeof value === 'object' && part in value) {
      value = value[part as keyof typeof value];
    } else {
      return undefined;
    }
  }

  return typeof value === 'string' ? value : undefined;
}

/**
 * Merge CMS config with defaults
 */
export function mergeWithDefaults(config: Partial<CMSConfig>, defaults: CMSConfig): CMSConfig {
  return {
    version: config.version || defaults.version,
    site: {
      ...defaults.site,
      ...config.site,
      footer: {
        ...defaults.site.footer,
        ...config.site?.footer,
        links: {
          company: config.site?.footer?.links?.company || defaults.site.footer.links.company,
          solutions: config.site?.footer?.links?.solutions || defaults.site.footer.links.solutions,
          legal: config.site?.footer?.links?.legal || defaults.site.footer.links.legal,
        },
      },
      contact: {
        ...defaults.site.contact,
        ...config.site?.contact,
      },
    },
    themes: config.themes && config.themes.length > 0 ? config.themes : defaults.themes,
    images: config.images || defaults.images,
    pages: config.pages || defaults.pages,
  };
}

/**
 * Create a safe CMS config with validation
 */
export function createSafeConfig(config: unknown, defaults: CMSConfig): CMSConfig {
  if (!config || typeof config !== 'object') {
    return defaults;
  }

  const partial = config as Partial<CMSConfig>;
  return mergeWithDefaults(partial, defaults);
}

/**
 * Export config helpers
 */
export { getActiveTheme, getImageById, getPageByPath };

