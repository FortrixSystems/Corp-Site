/**
 * CMS Content Component
 * Renders content blocks from CMS configuration
 */

'use client';

import { ContentBlock, PageSection } from '@/types/cms';
import Image from 'next/image';
import { getImageById } from '@/lib/cms-utils';

interface CMSContentProps {
  section: PageSection;
  images?: Array<{ id: string; src: string; alt: string; width?: number; height?: number }>;
}

function renderBlock(block: ContentBlock) {
  switch (block.type) {
    case 'heading':
      return (
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 sm:mb-8 text-fortrix-grey-900">
          {typeof block.content === 'string' ? block.content : block.content[0]}
        </h2>
      );

    case 'text':
      return (
        <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed mb-4">
          {typeof block.content === 'string' ? block.content : block.content.join(' ')}
        </p>
      );

    case 'list':
      const items = Array.isArray(block.content) ? block.content : [block.content];
      return (
        <ul className="list-disc list-inside space-y-2 text-fortrix-grey-700 font-regular mb-4">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );

    case 'quote':
      return (
        <blockquote className="border-l-4 border-fortrix-teal pl-4 italic text-fortrix-grey-700 font-regular mb-4">
          {typeof block.content === 'string' ? block.content : block.content[0]}
        </blockquote>
      );

    case 'cta':
      return (
        <div className="mb-4">
          <button className="bg-fortrix-charcoal text-white px-6 py-3 rounded-md hover:bg-fortrix-navy transition-colors">
            {typeof block.content === 'string' ? block.content : block.content[0]}
          </button>
        </div>
      );

    default:
      return null;
  }
}

export default function CMSContent({ section, images = [] }: CMSContentProps) {
  const image = section.imageId ? images.find((img) => img.id === section.imageId) : null;

  return (
    <div className={section.className || ''}>
      {section.title && (
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 sm:mb-8 text-fortrix-grey-900">
          {section.title}
        </h2>
      )}
      {section.subtitle && (
        <p className="text-lg sm:text-xl text-fortrix-grey-700 font-regular mb-6">
          {section.subtitle}
        </p>
      )}

      <div className="space-y-4">
        {section.blocks.map((block) => (
          <div key={block.id} className={block.className}>
            {renderBlock(block)}
          </div>
        ))}
      </div>

      {image && (
        <div className="mt-8">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 800}
            height={image.height || 400}
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  );
}


