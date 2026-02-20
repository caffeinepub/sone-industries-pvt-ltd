import { Building2, Droplets, Zap, Package } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Civil Infrastructure Development',
      description:
        'Comprehensive civil engineering solutions including buildings, roads, bridges, dams, canals, and public infrastructure.',
      details: [
        'Site planning, grading, and earthwork with advanced surveying equipment',
        'RCC structures, foundation design, and structural analysis',
        'Road construction with quality bituminous and concrete paving',
        'Bridge construction and rehabilitation using modern construction methodologies',
        'Drainage systems, culverts, and stormwater management infrastructure',
      ],
    },
    {
      icon: Droplets,
      title: 'Water & Sewerage Projects',
      description:
        'End-to-end water supply and sewerage infrastructure with pipeline installation, pumping stations, and treatment facilities.',
      details: [
        'Water supply networks with HDPE, DI, and MS pipeline systems',
        'Sewerage collection systems and trunk mains installation',
        'Pumping stations with electrical and mechanical integration',
        'Water treatment plants and sewage treatment infrastructure',
        'Leak detection, pressure testing, and commissioning services',
      ],
    },
    {
      icon: Zap,
      title: 'Mechanical & Electrical (MEP)',
      description:
        'Complete MEP solutions including power distribution, electrical installations, HVAC systems, and mechanical equipment.',
      details: [
        'HT/LT electrical installations and power distribution networks',
        'Transformer installations, switchgear, and control panels',
        'Building electrical systems with lighting and power backup',
        'Mechanical systems including pumps, motors, and HVAC equipment',
        'Fire safety systems, earthing, and lightning protection',
      ],
    },
    {
      icon: Package,
      title: 'EPC Turnkey Solutions',
      description:
        'Integrated Engineering, Procurement & Construction services with single-point accountability from concept to commissioning.',
      details: [
        'Complete project lifecycle management from design to handover',
        'Detailed engineering, technical specifications, and BOQ preparation',
        'Material procurement with quality assurance and vendor management',
        'Construction execution with safety protocols and quality control',
        'Testing, commissioning, and post-completion support',
      ],
    },
  ];

  return (
    <section id="services" className="bg-muted py-16 lg:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[oklch(0.25_0.08_250)]">Our Core Services</h2>
        <p className="text-lg text-foreground/80 mb-10 max-w-3xl">
          We deliver comprehensive infrastructure solutions backed by technical expertise, modern equipment, and proven
          methodologies that meet industry standards and client expectations.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-3">
                    <Icon className="h-10 w-10 text-[oklch(0.65_0.20_40)]" />
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-foreground/80 flex items-start">
                        <span className="text-[oklch(0.65_0.20_40)] mr-2 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
