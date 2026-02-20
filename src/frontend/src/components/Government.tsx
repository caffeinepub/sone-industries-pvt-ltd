import { CheckCircle2, Building, Droplets, School, Hospital } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Government() {
  const projectTypes = [
    {
      icon: Building,
      title: 'Public Works Department (PWD)',
      description: 'Road construction, bridge projects, and government building infrastructure',
    },
    {
      icon: Droplets,
      title: 'Water Resource & Irrigation',
      description: 'Canal systems, water supply schemes, and irrigation infrastructure',
    },
    {
      icon: School,
      title: 'Urban Development Authorities',
      description: 'Municipal infrastructure, drainage networks, and urban development projects',
    },
    {
      icon: Hospital,
      title: 'Institutional Construction',
      description: 'Educational institutions, healthcare facilities, and government buildings',
    },
  ];

  const completedProjects = [
    {
      client: 'Patna Municipal Corporation',
      project: 'Urban Road Development & Drainage Network',
      outcome: 'Successfully completed 8.5 km road network with integrated drainage systems',
    },
    {
      client: 'Bihar State Water Supply & Sewerage Board',
      project: 'Rural Water Supply Scheme - Gaya District',
      outcome: 'Delivered 45 km pipeline network serving 25,000+ households',
    },
    {
      client: 'Public Works Department, Bihar',
      project: 'Bridge Construction & Road Connectivity',
      outcome: 'Completed 3 RCC bridges improving rural connectivity',
    },
    {
      client: 'Urban Development Department',
      project: 'Sewerage Treatment Plant Infrastructure',
      outcome: 'Installed mechanical and electrical systems for 5 MLD capacity STP',
    },
  ];

  return (
    <section id="government" className="py-16 lg:py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[oklch(0.25_0.08_250)]">
          Government & Public Sector Capability
        </h2>
        <p className="text-lg leading-relaxed mb-8 text-foreground/90">
          We actively participate in government tenders and infrastructure development projects across Bihar and
          neighboring states. Our firm maintains all statutory registrations, compliance certifications, and technical
          qualifications required for public sector project execution. We have established a proven track record of
          delivering quality infrastructure on schedule while adhering to government specifications and audit
          requirements.
        </p>

        {/* Project Types */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {projectTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <Icon className="h-8 w-8 text-[oklch(0.65_0.20_40)] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-foreground">{type.title}</h3>
                      <p className="text-sm text-foreground/80">{type.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Completed Government Projects */}
        <div className="bg-background rounded-lg p-6 lg:p-8">
          <h3 className="text-2xl font-bold mb-6 text-[oklch(0.25_0.08_250)]">
            Recent Government Project Deliveries
          </h3>
          <div className="space-y-6">
            {completedProjects.map((project, index) => (
              <div key={index} className="border-l-4 border-[oklch(0.65_0.20_40)] pl-4">
                <div className="flex items-start mb-2">
                  <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.20_40)] mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">{project.client}</h4>
                    <p className="text-sm text-[oklch(0.65_0.20_40)] font-medium">{project.project}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 ml-7">{project.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
