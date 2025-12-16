import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'stacked' | 'horizontal' | 'logomark';
  dark?: boolean;
  className?: string;
}

export default function Logo({ 
  variant = 'stacked', 
  dark = false,
  className = '' 
}: LogoProps) {
  // Placeholder paths - update when logo files are added
  const logoPaths = {
    stacked: {
      color: '/logo/fortrix-stacked-color.svg',
      white: '/logo/fortrix-stacked-white.svg',
    },
    horizontal: {
      color: '/logo/fortrix-horizontal-color.svg',
      white: '/logo/fortrix-horizontal-white.svg',
    },
    logomark: {
      color: '/logo/fortrix-logomark-color.svg',
      white: '/logo/fortrix-logomark-white.svg',
    },
  };

  const logoSrc = dark 
    ? logoPaths[variant].white
    : logoPaths[variant].color;

  const dimensions = {
    stacked: { width: 180, height: 60 },
    horizontal: { width: 200, height: 40 },
    logomark: { width: 40, height: 40 },
  };

  const { width, height } = dimensions[variant];

  // Fallback to text until logo files are added
  return (
    <Link href="/" className={className}>
      <div className="flex items-center">
        {/* Placeholder: will show text until logo files are added */}
        <span className="text-lg sm:text-xl font-heading font-semibold text-fortrix-charcoal">
          FORTRIX
        </span>
        <span className="text-lg sm:text-xl font-heading font-regular text-fortrix-blue ml-1">
          SYSTEMS
        </span>
        {/* Uncomment when logo files are ready:
        <Image
          src={logoSrc}
          alt="Fortrix Systems"
          width={width}
          height={height}
          className="h-auto"
          priority
        />
        */}
      </div>
    </Link>
  );
}

