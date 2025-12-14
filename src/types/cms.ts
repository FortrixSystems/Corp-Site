/**
 * CMS Data Model Types
 * Lightweight content management system for corporate website
 */

// Theme Configuration
export interface ThemeConfig {
  name: string;
  colors: {
    primary: {
      charcoal: string;
      navy: string;
    };
    accent: {
      teal: string;
      amber: string;
      crimson: string;
    };
    neutral: {
      grey900: string;
      grey700: string;
      grey500: string;
      grey300: string;
      grey100: string;
      white: string;
    };
  };
  active: boolean;
}

// Image Configuration
export interface ImageConfig {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  placeholder?: string;
}

// Page Content Block
export interface ContentBlock {
  id: string;
  type: 'text' | 'heading' | 'list' | 'quote' | 'cta';
  content: string | string[];
  className?: string;
}

// Page Section
export interface PageSection {
  id: string;
  title?: string;
  subtitle?: string;
  blocks: ContentBlock[];
  imageId?: string;
  backgroundColor?: string;
  className?: string;
}

// Page Content
export interface PageContent {
  path: string;
  title: string;
  description: string;
  sections: PageSection[];
  metadata?: {
    canonical?: string;
    keywords?: string[];
  };
}

// Global Site Content
export interface SiteContent {
  siteName: string;
  tagline: string;
  footer: {
    company: string;
    copyright: string;
    links: {
      company: Array<{ name: string; href: string }>;
      solutions: Array<{ name: string; href: string }>;
      legal: Array<{ name: string; href: string }>;
    };
  };
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };
}

// Complete CMS Config
export interface CMSConfig {
  version: string;
  site: SiteContent;
  themes: ThemeConfig[];
  images: ImageConfig[];
  pages: PageContent[];
}

// Validation Result
export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}


