import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import ModuleCard from '@/components/ModuleCard';

export const metadata: Metadata = {
  title: 'Modules - Fortrix ICS Platform',
  description: 'Explore the Fortrix ICS modules: Beacon, Ledger, Draw, Retail, and Clarity. Comprehensive suite of integrated solutions for lottery control systems.',
  alternates: {
    canonical: '/modules',
  },
};

const modules = [
  {
    title: 'Fortrix Beacon',
    description: 'Fraud intelligence & risk patterns. Identifies anomalies, risk patterns, and fraud indicators across systems.',
    href: '/modules/beacon',
  },
  {
    title: 'Fortrix Ledger',
    description: 'Evidence engine for system-of-record integrity. Reconstructs and documents every critical event.',
    href: '/modules/ledger',
  },
  {
    title: 'Fortrix Draw',
    description: 'Draw configuration, validation, and discrepancy analysis. Controls draw procedures and validates winning numbers.',
    href: '/modules/draw',
  },
  {
    title: 'Fortrix Retail',
    description: 'Integration and provider-agnostic API layer. Consistent payload formats and transaction verification.',
    href: '/modules/retail',
  },
  {
    title: 'Fortrix Clarity',
    description: 'Audit log search and transparency. Searchable audit log viewer for oversight and investigation.',
    href: '/modules/clarity',
  },
];

export default function Modules() {
  return (
    <
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Fortrix ICS Modules"
          subtitle="Comprehensive suite of integrated solutions for lottery control systems"
          dark={true}
        />
      </Section>

      {/* Modules Grid */}
      <Section className="bg-fortrix-grey-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {modules.map((module) => (
            <ModuleCard
              key={module.href}
              title={module.title}
              description={module.description}
              href={module.href}
            />
          ))}
        </div>
      </Section>
      <
  );
}

