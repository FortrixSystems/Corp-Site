import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import ModuleCard from '@/components/ModuleCard';
import { StructuredData } from '@/components/StructuredData';

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
    description: 'Detects anomalies, patterns, and fraud indicators across systems. Real-time intelligence using rule-based logic, risk scoring, and alert automation.',
    href: '/modules/beacon',
  },
  {
    title: 'Fortrix Ledger',
    description: 'Immutable evidence engine for system-of-record integrity. Every critical event captured with full attribution, timestamping, and reconciliation support.',
    href: '/modules/ledger',
  },
  {
    title: 'Fortrix Draw',
    description: 'Secure draw configuration, validation, and discrepancy analysis. Controls procedures, enforces dual-approval workflows, and prevents unauthorized changes.',
    href: '/modules/draw',
  },
  {
    title: 'Fortrix Retail',
    description: 'Provider-agnostic API and transaction verification layer. Standardizes payloads and streamlines integrations across vendor systems.',
    href: '/modules/retail',
  },
  {
    title: 'Fortrix Clarity',
    description: 'Searchable audit log viewer for oversight and investigation. Full-text search, filterable views, and exportable records.',
    href: '/modules/clarity',
  },
];

const modulesCollectionData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Fortrix ICS Modules',
  description: 'Comprehensive suite of integrated solutions for lottery control systems',
  itemListElement: modules.map((module, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: module.title,
    description: module.description,
    url: `https://fortrixsystems.com${module.href}`,
  })),
};

export default function Modules() {
  return (
    <>
      <StructuredData data={modulesCollectionData} />
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
    </>
  );
}

