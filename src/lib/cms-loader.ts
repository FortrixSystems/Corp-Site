/**
 * CMS Configuration Loader
 * Loads and validates CMS configuration
 */

import { CMSConfig, ValidationResult } from '@/types/cms';
import { validateCMSConfig } from './cms-validator';

// Default safe configuration
const defaultConfig: CMSConfig = {
  version: '1.0.0',
  site: {
    siteName: 'Fortrix Systems Inc.',
    tagline: 'Independent truth for lottery systems',
    footer: {
      company: 'Fortrix Systems Inc.',
      copyright: 'All rights reserved',
      links: {
        company: [],
        solutions: [],
        legal: [],
      },
    },
    contact: {
      email: 'info@fortrixsystems.com',
    },
  },
  themes: [
    {
      name: 'Fortrix Default',
      colors: {
        primary: {
          charcoal: '#0F1316',
          navy: '#14222F',
        },
        accent: {
          teal: '#6FA8A5',
          amber: '#FFB340',
          crimson: '#D64541',
        },
        neutral: {
          grey900: '#1C1F22',
          grey700: '#2A2F33',
          grey500: '#5D6368',
          grey300: '#AEB4B8',
          grey100: '#F1F3F4',
          white: '#FFFFFF',
        },
      },
      active: true,
    },
  ],
  images: [],
  pages: [],
};

/**
 * Load CMS configuration from JSON file
 * @param configPath Path to config JSON file
 * @returns CMSConfig with validation
 */
export async function loadCMSConfig(configPath: string = '/cms/config.json'): Promise<{
  config: CMSConfig;
  validation: ValidationResult;
}> {
  try {
    const response = await fetch(configPath);
    if (!response.ok) {
      console.warn(`CMS config not found at ${configPath}, using defaults`);
      return {
        config: defaultConfig,
        validation: {
          valid: true,
          errors: [],
          warnings: [`Config file not found, using defaults`],
        },
      };
    }

    const data = await response.json();
    const validation = validateCMSConfig(data);

    if (!validation.valid) {
      console.error('CMS config validation failed:', validation.errors);
      return {
        config: defaultConfig,
        validation,
      };
    }

    return {
      config: data as CMSConfig,
      validation,
    };
  } catch (error) {
    console.error('Error loading CMS config:', error);
    return {
      config: defaultConfig,
      validation: {
        valid: false,
        errors: [`Failed to load config: ${error instanceof Error ? error.message : 'Unknown error'}`],
        warnings: ['Using default configuration'],
      },
    };
  }
}

/**
 * Load CMS configuration synchronously (for server-side)
 * Note: This requires fs access, use only in Node.js environment
 */
export function loadCMSConfigSync(configPath: string = './public/cms/config.json'): {
  config: CMSConfig;
  validation: ValidationResult;
} {
  // For client-side, use async loader
  // For server-side, you would use fs.readFileSync here
  // This is a placeholder - implement based on your needs
  return {
    config: defaultConfig,
    validation: {
      valid: true,
      errors: [],
      warnings: ['Sync loader not implemented, using defaults'],
    },
  };
}


