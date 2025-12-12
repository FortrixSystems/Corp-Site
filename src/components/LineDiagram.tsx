import { ReactNode } from 'react';

interface LineDiagramProps {
  className?: string;
  variant?: 'layered' | 'flow' | 'grid';
}

export default function LineDiagram({ className = '', variant = 'layered' }: LineDiagramProps) {
  if (variant === 'layered') {
    return (
      <div className={`relative ${className}`}>
        <div className="space-y-4">
          <div className="h-px bg-fortrix-grey-700/30"></div>
          <div className="h-px bg-fortrix-grey-700/20 ml-8"></div>
          <div className="h-px bg-fortrix-grey-700/30 ml-16"></div>
          <div className="h-px bg-fortrix-teal/40 ml-24"></div>
          <div className="h-px bg-fortrix-grey-700/30 ml-16"></div>
          <div className="h-px bg-fortrix-grey-700/20 ml-8"></div>
          <div className="h-px bg-fortrix-grey-700/30"></div>
        </div>
      </div>
    );
  }

  if (variant === 'flow') {
    return (
      <div className={`relative ${className}`}>
        <div className="flex items-center space-x-2">
          <div className="w-16 h-1 bg-fortrix-grey-700/30"></div>
          <div className="w-2 h-2 border border-fortrix-teal/40"></div>
          <div className="w-24 h-1 bg-fortrix-teal/40"></div>
          <div className="w-2 h-2 border border-fortrix-teal/40"></div>
          <div className="w-16 h-1 bg-fortrix-grey-700/30"></div>
        </div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`grid grid-cols-4 gap-2 ${className}`}>
        {[...Array(12)].map((_, i) => (
          <div key={i} className="aspect-square border border-fortrix-grey-700/20 bg-fortrix-grey-700/5"></div>
        ))}
      </div>
    );
  }

  return null;
}

