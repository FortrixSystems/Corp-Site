/**
 * CMS Configuration Validator
 * Validates CMS config structure and content
 */

import { CMSConfig, ValidationResult, ThemeConfig, ImageConfig, PageContent } from '@/types/cms';

// Color hex validation
const isValidHexColor = (color: string): boolean => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
};

// URL validation
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return url.startsWith('/') || url.startsWith('./');
  }
};

// Validate theme configuration
const validateTheme = (theme: ThemeConfig, index: number): string[] => {
  const errors: string[] = [];

  if (!theme.name || typeof theme.name !== 'string') {
    errors.push(`Theme ${index}: name is required and must be a string`);
  }

  if (!theme.colors) {
    errors.push(`Theme ${index}: colors object is required`);
    return errors;
  }

  // Validate primary colors
  if (!isValidHexColor(theme.colors.primary.charcoal)) {
    errors.push(`Theme ${index}: primary.charcoal must be a valid hex color`);
  }
  if (!isValidHexColor(theme.colors.primary.navy)) {
    errors.push(`Theme ${index}: primary.navy must be a valid hex color`);
  }

  // Validate accent colors
  if (!isValidHexColor(theme.colors.accent.teal)) {
    errors.push(`Theme ${index}: accent.teal must be a valid hex color`);
  }
  if (!isValidHexColor(theme.colors.accent.amber)) {
    errors.push(`Theme ${index}: accent.amber must be a valid hex color`);
  }
  if (!isValidHexColor(theme.colors.accent.crimson)) {
    errors.push(`Theme ${index}: accent.crimson must be a valid hex color`);
  }

  // Validate neutral colors
  const neutrals = theme.colors.neutral;
  const neutralKeys = ['grey900', 'grey700', 'grey500', 'grey300', 'grey100', 'white'];
  neutralKeys.forEach((key) => {
    if (!isValidHexColor(neutrals[key as keyof typeof neutrals])) {
      errors.push(`Theme ${index}: neutral.${key} must be a valid hex color`);
    }
  });

  if (typeof theme.active !== 'boolean') {
    errors.push(`Theme ${index}: active must be a boolean`);
  }

  return errors;
};

// Validate image configuration
const validateImage = (image: ImageConfig, index: number): string[] => {
  const errors: string[] = [];

  if (!image.id || typeof image.id !== 'string') {
    errors.push(`Image ${index}: id is required and must be a string`);
  }

  if (!image.src || typeof image.src !== 'string') {
    errors.push(`Image ${index}: src is required and must be a string`);
  } else if (!isValidUrl(image.src)) {
    errors.push(`Image ${index}: src must be a valid URL or path`);
  }

  if (!image.alt || typeof image.alt !== 'string') {
    errors.push(`Image ${index}: alt text is required and must be a string`);
  }

  if (image.width !== undefined && (typeof image.width !== 'number' || image.width <= 0)) {
    errors.push(`Image ${index}: width must be a positive number`);
  }

  if (image.height !== undefined && (typeof image.height !== 'number' || image.height <= 0)) {
    errors.push(`Image ${index}: height must be a positive number`);
  }

  return errors;
};

// Validate page content
const validatePage = (page: PageContent, index: number): string[] => {
  const errors: string[] = [];

  if (!page.path || typeof page.path !== 'string') {
    errors.push(`Page ${index}: path is required and must be a string`);
  } else if (!page.path.startsWith('/')) {
    errors.push(`Page ${index}: path must start with '/'`);
  }

  if (!page.title || typeof page.title !== 'string') {
    errors.push(`Page ${index}: title is required and must be a string`);
  }

  if (!page.description || typeof page.description !== 'string') {
    errors.push(`Page ${index}: description is required and must be a string`);
  }

  if (!Array.isArray(page.sections)) {
    errors.push(`Page ${index}: sections must be an array`);
  } else {
    page.sections.forEach((section, sIndex) => {
      if (!section.id || typeof section.id !== 'string') {
        errors.push(`Page ${index}, Section ${sIndex}: id is required`);
      }
      if (!Array.isArray(section.blocks)) {
        errors.push(`Page ${index}, Section ${sIndex}: blocks must be an array`);
      } else {
        section.blocks.forEach((block, bIndex) => {
          if (!block.id || typeof block.id !== 'string') {
            errors.push(`Page ${index}, Section ${sIndex}, Block ${bIndex}: id is required`);
          }
          if (!block.type || !['text', 'heading', 'list', 'quote', 'cta'].includes(block.type)) {
            errors.push(`Page ${index}, Section ${sIndex}, Block ${bIndex}: type must be one of: text, heading, list, quote, cta`);
          }
          if (!block.content) {
            errors.push(`Page ${index}, Section ${sIndex}, Block ${bIndex}: content is required`);
          }
        });
      }
    });
  }

  return errors;
};

// Main validation function
export function validateCMSConfig(config: unknown): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Type check
  if (!config || typeof config !== 'object') {
    return {
      valid: false,
      errors: ['Config must be an object'],
      warnings: [],
    };
  }

  const cmsConfig = config as Partial<CMSConfig>;

  // Version check
  if (!cmsConfig.version || typeof cmsConfig.version !== 'string') {
    errors.push('version is required and must be a string');
  }

  // Site content validation
  if (!cmsConfig.site) {
    errors.push('site content is required');
  } else {
    if (!cmsConfig.site.siteName || typeof cmsConfig.site.siteName !== 'string') {
      errors.push('site.siteName is required and must be a string');
    }
    if (!cmsConfig.site.tagline || typeof cmsConfig.site.tagline !== 'string') {
      errors.push('site.tagline is required and must be a string');
    }
  }

  // Themes validation
  if (!Array.isArray(cmsConfig.themes)) {
    errors.push('themes must be an array');
  } else {
    if (cmsConfig.themes.length === 0) {
      errors.push('at least one theme is required');
    }
    const activeThemes = cmsConfig.themes.filter((t) => t.active);
    if (activeThemes.length === 0) {
      errors.push('at least one theme must be active');
    }
    if (activeThemes.length > 1) {
      warnings.push('multiple themes are active, only the first will be used');
    }
    cmsConfig.themes.forEach((theme, index) => {
      errors.push(...validateTheme(theme, index));
    });
  }

  // Images validation
  if (!Array.isArray(cmsConfig.images)) {
    errors.push('images must be an array');
  } else {
    cmsConfig.images.forEach((image, index) => {
      errors.push(...validateImage(image, index));
    });
  }

  // Pages validation
  if (!Array.isArray(cmsConfig.pages)) {
    errors.push('pages must be an array');
  } else {
    if (cmsConfig.pages.length === 0) {
      warnings.push('no pages defined in config');
    }
    cmsConfig.pages.forEach((page, index) => {
      errors.push(...validatePage(page, index));
    });
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

// Get active theme
export function getActiveTheme(config: CMSConfig): ThemeConfig {
  const activeTheme = config.themes.find((theme) => theme.active);
  if (!activeTheme) {
    throw new Error('No active theme found in config');
  }
  return activeTheme;
}

// Get image by ID
export function getImageById(config: CMSConfig, imageId: string): ImageConfig | undefined {
  return config.images.find((img) => img.id === imageId);
}

// Get page by path
export function getPageByPath(config: CMSConfig, path: string): PageContent | undefined {
  return config.pages.find((page) => page.path === path);
}


