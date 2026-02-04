'use client';

import { useState } from 'react';

const MODULE_IDS = ['beacon', 'ledger', 'draw', 'retail', 'connect', 'insight'] as const;
export type ModuleId = (typeof MODULE_IDS)[number];

export function isValidModuleId(id: string): id is ModuleId {
  return MODULE_IDS.includes(id as ModuleId);
}

interface ModuleIconProps {
  /** Module slug (e.g. beacon, ledger, draw, retail, connect, insight) */
  moduleId: string;
  /** Use 'light' on light backgrounds (Grey 100, white); use 'dark' on Charcoal/Navy (Brand §4.2) */
  variant: 'light' | 'dark';
  size?: number;
  className?: string;
  alt?: string;
}

/**
 * Renders marketing-approved module icons per Fortrix Brand Guide §8.2 (Iconography).
 * Uses PNGs when present; falls back to SVG placeholder if PNG is missing.
 * No stretch, skew, rotate, or recolor (Brand §3.6).
 */
export default function ModuleIcon({
  moduleId,
  variant,
  size = 48,
  className = '',
  alt,
}: ModuleIconProps) {
  const normalizedId = moduleId.toLowerCase().trim();
  const [useSvgFallback, setUseSvgFallback] = useState(false);

  if (!isValidModuleId(normalizedId)) {
    return null;
  }

  const title = `Fortrix ${normalizedId.charAt(0).toUpperCase() + normalizedId.slice(1)}`;
  const pngSrc = `/icons/modules/${normalizedId}-${variant}.png`;
  const svgSrc = `/icons/modules/${normalizedId}-${variant}.svg`;
  const src = useSvgFallback ? svgSrc : pngSrc;

  const isDarkVariant = variant === 'dark';
  const whiteFilterClass = isDarkVariant ? 'brightness-0 invert' : '';
  const layerClass = isDarkVariant ? 'relative z-10' : '';

  return (
    <img
      src={src}
      alt={alt ?? `${title} module icon`}
      width={size}
      height={size}
      className={`flex-shrink-0 object-contain ${whiteFilterClass} ${layerClass} ${className}`}
      onError={() => setUseSvgFallback(true)}
    />
  );
}
