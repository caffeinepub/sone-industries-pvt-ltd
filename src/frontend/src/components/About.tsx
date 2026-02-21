import { Award, Users, Building2, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const credentials = [
    {
      icon: Building2,
      label: 'Years of Experience',
      value: '5+',
      description: 'Delivering infrastructure excellence',
    },
    {
      icon: TrendingUp,
      label: 'Projects Completed',
      value: '10+',
      description: 'Across government & private sectors',
    },
    {
      icon: Users,
      label: 'Professional Team',
      value: '20+',
      description: 'Engineers, technicians & specialists',
    },
    {
      icon: Award,
      label: 'Client Satisfaction',
      value: '98%',
      description: 'On-time delivery & quality assurance',
    },
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management System',
    'ISO 14001:2015 Environmental Management',
    'ISO 45001:2018 Occupational Health & Safety',
    'Member - Indian Roads Congress (IRC)',
    'Member - Indian Water Works Association (IWWA)',
    'Registered with CPWD, PWD Bihar, and Urban Development Authorities',
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[oklch(0.25_0.08_250)]">About Sone Industries</h2>
        <p className="text-lg leading-relaxed text-foreground/90 mb-8">
          Sone Industries Pvt Ltd is a professionally structured infrastructure development company based in Bihar,
          India. We specialize in comprehensive civil, mechanical, and electrical engineering solutions for Government
          and Private sector clients. Our approach emphasizes regulatory compliance, engineering precision, transparent
          project execution, and long-term infrastructure sustainability. With a proven track record of delivering
          complex infrastructure projects on time and within budget, we have established ourselves as a reliable
          partner for public sector development initiatives.
        </p>

        {/* Credentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {credentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="border-border text-center">
                <CardContent className="pt-6">
                  <Icon className="h-10 w-10 text-[oklch(0.65_0.20_40)] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[oklch(0.25_0.08_250)] mb-1">{item.value}</div>
                  <div className="font-semibold text-foreground mb-1">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications & Memberships */}
        <div className="bg-muted rounded-lg p-6 lg:p-8">
          <h3 className="text-2xl font-bold mb-4 text-[oklch(0.25_0.08_250)]">
            Certifications & Industry Affiliations
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start">
                <Award className="h-5 w-5 text-[oklch(0.65_0.20_40)] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground/90">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
