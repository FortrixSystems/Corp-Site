# CMS Data Model Documentation

## Overview

Lightweight content management system for the Fortrix Systems corporate website. Uses a single JSON configuration file as the source of truth for content, images, and themes.

## Structure

### Configuration File

The CMS configuration is stored in `/public/cms/config.json` and follows this structure:

```json
{
  "version": "1.0.0",
  "site": { ... },
  "themes": [ ... ],
  "images": [ ... ],
  "pages": [ ... ]
}
```

## Components

### 1. Site Content (`site`)

Global site-wide content including:
- Site name and tagline
- Footer links and copyright
- Contact information

### 2. Themes (`themes`)

Color theme configurations:
- Multiple theme support
- One active theme at a time
- Complete color palette (primary, accent, neutral)
- Hex color validation

### 3. Images (`images`)

Image asset management:
- Unique IDs for referencing
- Source paths (local or external)
- Alt text for accessibility
- Optional dimensions

### 4. Pages (`pages`)

Page content structure:
- Path-based routing
- Sections with blocks
- Support for multiple content types
- Metadata (SEO, canonical URLs)

## Content Block Types

- **text**: Plain text paragraphs
- **heading**: Section headings
- **list**: Bulleted or numbered lists
- **quote**: Blockquotes with styling
- **cta**: Call-to-action buttons

## Usage

### Loading Configuration

```typescript
import { loadCMSConfig } from '@/lib/cms-loader';

const { config, validation } = await loadCMSConfig();

if (!validation.valid) {
  console.error('Config errors:', validation.errors);
}
```

### Accessing Data

```typescript
import { getActiveTheme, getPageByPath, getImageById } from '@/lib/cms-utils';

const theme = getActiveTheme(config);
const page = getPageByPath(config, '/about');
const image = getImageById(config, 'hero-diagram');
```

### Validation

All configuration is validated on load:
- Required fields checked
- Color formats validated (hex)
- URL/path validation
- Type checking
- Safe defaults applied on errors

## File Structure

```
src/
├── types/
│   └── cms.ts              # TypeScript interfaces
├── lib/
│   ├── cms-loader.ts       # Configuration loader
│   ├── cms-validator.ts    # Validation logic
│   └── cms-utils.ts        # Utility functions
└── components/
    └── CMSContent.tsx      # Content renderer

public/
└── cms/
    ├── config.json         # Main configuration
    └── config.example.json # Example template
```

## Validation Rules

1. **Version**: Required string
2. **Site**: All required fields must be present
3. **Themes**: 
   - At least one theme required
   - Exactly one must be active
   - All colors must be valid hex codes
4. **Images**:
   - Unique IDs required
   - Valid src paths
   - Alt text required
5. **Pages**:
   - Paths must start with `/`
   - Sections and blocks must have IDs
   - Content types must be valid

## Safe Defaults

If configuration fails to load or validate:
- Default Fortrix theme applied
- Basic site structure maintained
- Errors logged to console
- Warnings provided for non-critical issues

## Example

See `/public/cms/config.example.json` for a complete example with all features demonstrated.





