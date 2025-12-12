import Image from 'next/image';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: 'blur' | 'empty';
  priority?: boolean;
}

export default function ImagePlaceholder({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  placeholder = 'empty',
  priority = false,
}: ImagePlaceholderProps) {
  // If no src provided, create a placeholder using a data URI or placeholder service
  const imageSrc = src || `https://via.placeholder.com/${width}x${height}/0F1316/6FA8A5?text=${encodeURIComponent(alt)}`;

  // For local images in public folder, use Next.js Image component
  if (src && !src.startsWith('http')) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full"
          placeholder={placeholder}
          priority={priority}
        />
      </div>
    );
  }

  // For external URLs or placeholders, use regular img tag
  return (
    <div className={`relative ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
}

