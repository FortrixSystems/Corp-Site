'use client';

import { trackConversion } from '@/lib/analytics';

interface TrackedAnchorProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function TrackedAnchor({ href, className, children }: TrackedAnchorProps) {
  const handleClick = () => {
    if (href.startsWith('tel:')) {
      trackConversion('tel_click');
    } else if (href.startsWith('mailto:')) {
      trackConversion('mailto_click');
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
