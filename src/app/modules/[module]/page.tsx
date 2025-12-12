import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import ProtectedContent from '@/components/ProtectedContent';

interface PageProps {
  params: {
    module: string;
  };
}

export default function ModulePage({ params }: PageProps) {
  const moduleName = params.module.charAt(0).toUpperCase() + params.module.slice(1).replace(/-/g, ' ');

  return (
    <ProtectedContent>
      <>
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title={moduleName}
          subtitle="Module details and capabilities"
          dark={true}
        />
      </Section>

      {/* Overview Section - Placeholder */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Overview</h2>
          <div className="space-y-6">
            <p className="text-lg text-fortrix-grey-700 font-regular">
              Module overview placeholder text. This section will describe the module&apos;s purpose and functionality.
            </p>
            <p className="text-lg text-fortrix-grey-700 font-regular">
              Additional module information placeholder. More detailed information about the module&apos;s capabilities.
            </p>
          </div>
        </div>
      </Section>

      {/* Features Section - Placeholder */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-10 sm:mb-12 text-fortrix-grey-900">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card hover>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Feature Title</h3>
            <p className="text-fortrix-grey-700 font-regular mb-4">
              Feature description placeholder text goes here.
            </p>
            <ul className="space-y-2 text-fortrix-grey-700 font-regular">
              <li>• Feature detail placeholder</li>
              <li>• Feature detail placeholder</li>
              <li>• Feature detail placeholder</li>
            </ul>
          </Card>
          <Card hover>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Feature Title</h3>
            <p className="text-fortrix-grey-700 font-regular mb-4">
              Feature description placeholder text goes here.
            </p>
            <ul className="space-y-2 text-fortrix-grey-700 font-regular">
              <li>• Feature detail placeholder</li>
              <li>• Feature detail placeholder</li>
              <li>• Feature detail placeholder</li>
            </ul>
          </Card>
          <Card hover>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Feature Title</h3>
            <p className="text-fortrix-grey-700 font-regular mb-4">
              Feature description placeholder text goes here.
            </p>
            <ul className="space-y-2 text-fortrix-grey-700 font-regular">
              <li>• Feature detail placeholder</li>
              <li>• Feature detail placeholder</li>
              <li>• Feature detail placeholder</li>
            </ul>
          </Card>
          <Card hover>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Feature Title</h3>
            <p className="text-fortrix-grey-700 font-regular mb-4">
              Feature description placeholder text goes here.
            </p>
            <ul className="space-y-2 text-fortrix-grey-700 font-regular">
              <li>• Feature detail placeholder</li>
              <li>• Feature detail placeholder</li>
              <li>• Feature detail placeholder</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Benefits Section - Placeholder */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Benefits</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-fortrix-grey-900">Benefit Title</h3>
                <p className="text-fortrix-grey-700 font-regular">
                  Benefit description placeholder text goes here.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-fortrix-grey-900">Benefit Title</h3>
                <p className="text-fortrix-grey-700 font-regular">
                  Benefit description placeholder text goes here.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-fortrix-grey-900">Benefit Title</h3>
                <p className="text-fortrix-grey-700 font-regular">
                  Benefit description placeholder text goes here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Integration Section - Placeholder */}
      <Section className="bg-fortrix-grey-100">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Integration</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular mb-8 sm:mb-10 leading-relaxed">
            Integration information placeholder text. This section will describe how the module integrates with other systems.
          </p>
          <div className="border border-fortrix-grey-300 p-6 sm:p-8">
            <div className="aspect-video flex items-center justify-center">
              <div className="w-full max-w-2xl">
                <div className="flex items-center justify-between space-x-2">
                  <div className="flex-1 h-px bg-fortrix-grey-500/40"></div>
                  <div className="w-2 h-2 border border-fortrix-teal/50"></div>
                  <div className="flex-1 h-px bg-fortrix-teal/50"></div>
                  <div className="w-2 h-2 border border-fortrix-teal/50"></div>
                  <div className="flex-1 h-px bg-fortrix-grey-500/40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Use Cases Section - Placeholder */}
      <Section className="bg-fortrix-grey-100">
        <h2 className="text-3xl font-heading font-semibold mb-12 text-fortrix-grey-900 text-center">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Use Case Title</h3>
            <p className="text-fortrix-grey-700 font-regular">
              Use case description placeholder text goes here.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Use Case Title</h3>
            <p className="text-fortrix-grey-700 font-regular">
              Use case description placeholder text goes here.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Use Case Title</h3>
            <p className="text-fortrix-grey-700 font-regular">
              Use case description placeholder text goes here.
            </p>
          </Card>
        </div>
      </Section>
      </>
    </ProtectedContent>
  );
}
