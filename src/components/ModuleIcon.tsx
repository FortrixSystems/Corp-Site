'use client';

import { useState } from 'react';
import { MODULE_CATALOG, type ModuleCatalogId } from '@/lib/modules';

const MODULE_IDS = MODULE_CATALOG.map((m) => m.id);

export type ModuleId = ModuleCatalogId;

export function isValidModuleId(id: string): id is ModuleId {
  return MODULE_IDS.includes(id as ModuleId);
}

interface ModuleIconProps {
  /** Module slug (e.g. beacon, ledger, draw, retail, connect, clarity) */
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

  const pngSrc = `/icons/modules/${normalizedId}-${variant}.png`;
  const svgSrc = `/icons/modules/${normalizedId}-${variant}.svg`;
  const src = useSvgFallback ? svgSrc : pngSrc;
  const title = `Fortrix ${normalizedId.charAt(0).toUpperCase() + normalizedId.slice(1)}`;

  const isDarkVariant = variant === 'dark';
  /** White-line marketing PNGs for dark heroes (e.g. Regulatory Filing) must not be inverted. */
  const skipInvert = isDarkVariant && normalizedId === 'regulatory-filing';
  const whiteFilterClass = isDarkVariant && !skipInvert ? 'brightness-0 invert' : '';
  const layerClass = isDarkVariant ? 'relative z-10' : '';

  return (
    <img
      src={src}
      alt={alt ?? `${title} module icon`}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={`flex-shrink-0 object-contain ${whiteFilterClass} ${layerClass} ${className}`}
      decoding="async"
      onError={() => setUseSvgFallback(true)}
    />
  );
}
