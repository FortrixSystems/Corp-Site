interface PageTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

export default function PageTitle({ title, subtitle, className = '', dark = false }: PageTitleProps) {
  const titleColor = dark ? 'text-white' : 'text-fortrix-charcoal';
  const subtitleColor = dark ? 'text-fortrix-grey-300' : 'text-fortrix-grey-700';
  
  return (
    <div className={`mb-8 sm:mb-12 md:mb-16 ${className}`}>
      <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-heading font-bold tracking-tight ${titleColor} mb-4 sm:mb-6 leading-tight`}>
        {title}
      </h1>
      {subtitle && (
        <p className={`text-lg sm:text-xl md:text-2xl ${subtitleColor} max-w-3xl font-sans font-regular leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

