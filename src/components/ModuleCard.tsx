import Link from 'next/link';

interface ModuleCardProps {
  title: string;
  description: string;
  href: string;
  className?: string;
}

export default function ModuleCard({ title, description, href, className = '' }: ModuleCardProps) {
  return (
    <Link href={href} className={`block group h-full ${className}`}>
      <div className="bg-white rounded-md border border-fortrix-grey-300 p-6 md:p-8 transition-all duration-200 hover:shadow-sm hover:border-fortrix-teal/40 h-full flex flex-col">
        <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900 group-hover:text-fortrix-teal">
          {title}
        </h3>
        <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base flex-grow">
          {description}
        </p>
      </div>
    </Link>
  );
}

