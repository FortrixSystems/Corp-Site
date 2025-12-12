# Image Usage Guide

## Adding Images to the Site

### Option 1: Using the ImagePlaceholder Component

The `ImagePlaceholder` component is available for easy image integration:

```tsx
import ImagePlaceholder from '@/components/ImagePlaceholder';

// With a local image from public folder
<ImagePlaceholder
  src="/images/your-image.jpg"
  alt="Description of image"
  width={800}
  height={600}
/>

// Without src - creates a placeholder automatically
<ImagePlaceholder
  alt="Placeholder image"
  width={800}
  height={600}
/>
```

### Option 2: Using Next.js Image Component Directly

For optimized images, use Next.js Image component:

```tsx
import Image from 'next/image';

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

### Option 3: Place Images in Public Folder

1. Create an `images` folder in the `public` directory:
   ```
   public/
     images/
       your-image.jpg
   ```

2. Reference it in your component:
   ```tsx
   <img src="/images/your-image.jpg" alt="Description" />
   ```

## Recommended Image Locations

- **Hero images**: `/public/images/hero/`
- **Module diagrams**: `/public/images/modules/`
- **Team photos**: `/public/images/team/`
- **Logos**: `/public/images/logos/`
- **Diagrams/illustrations**: `/public/images/diagrams/`

## Image Specifications

- **Format**: JPG or PNG (use WebP for better performance)
- **Hero images**: 1920x1080px (16:9 aspect ratio)
- **Card images**: 800x600px (4:3 aspect ratio)
- **Thumbnails**: 400x300px
- **Optimize**: Compress images before uploading to reduce file size

## Brand Colors for Placeholders

When using placeholder images, the component uses brand colors:
- Background: Charcoal (#1A1A1C)
- Text: Teal (#0099A8)

