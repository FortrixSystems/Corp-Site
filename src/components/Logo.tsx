import Link from 'next/link';

interface LogoProps {
  variant?: 'stacked' | 'horizontal' | 'logomark';
  dark?: boolean;
  className?: string;
}

export default function Logo({
  variant = 'stacked',
  dark = false,
  className = '',
}: LogoProps) {
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

  const logoSrc = dark ? logoPaths[variant].white : logoPaths[variant].color;

  const dimensions = {
    stacked: { width: 180, height: 60 },
    horizontal: { width: 200, height: 40 },
    logomark: { width: 40, height: 40 },
  };

  const { width, height } = dimensions[variant];

  return (
    <Link
      href="/"
      className={`inline-flex items-center shrink-0 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- SVG logos: next/image + SVG caused optimizer 404 and aspect-ratio warnings */}
      <img
        src={logoSrc}
        alt="Fortrix Systems"
        width={width}
        height={height}
        className="block h-full w-auto max-w-none object-contain object-left"
        decoding="async"
        fetchPriority="high"
      />
    </Link>
  );
}
