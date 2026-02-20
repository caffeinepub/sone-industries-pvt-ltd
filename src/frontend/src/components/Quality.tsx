import { Shield, FileCheck, Award, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Quality() {
  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System',
      image: '/assets/generated/iso-cert.dim_200x200.png',
    },
    {
      name: 'Safety Accreditation',
      description: 'Occupational Health & Safety',
      image: '/assets/generated/safety-badge.dim_200x200.png',
    },
  ];

  const qualityPractices = [
    'Material testing and verification at approved laboratories',
    'Stage-wise inspection and quality control checkpoints',
    'Compliance with IS codes, IRC specifications, and CPWD standards',
    'Third-party quality audits and independent testing',
    'Digital documentation and traceability systems',
    'Environmental impact assessment and mitigation measures',
  ];

  return (
    <section id="quality" className="bg-background py-16 lg:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[oklch(0.25_0.08_250)]">
          Quality, Safety & Compliance
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-start">
              <Shield className="h-8 w-8 text-[oklch(0.65_0.20_40)] mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Execution Framework</h3>
                <p className="text-base leading-relaxed text-foreground/90">
                  Our execution framework includes comprehensive material verification, stage-wise inspection protocols,
                  regulatory documentation, proactive risk management, and continuous safety compliance monitoring at
                  every project phase.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FileCheck className="h-8 w-8 text-[oklch(0.65_0.20_40)] mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Governance & Transparency</h3>
                <p className="text-base leading-relaxed text-foreground/90">
                  We maintain structured governance, complete transparency in project execution, environmental
                  responsibility, and adherence to all statutory and contractual obligations throughout the
                  infrastructure development lifecycle.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications Display */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
              <Award className="h-6 w-6 text-[oklch(0.65_0.20_40)] mr-2" />
              Industry Certifications
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-border text-center">
                  <CardContent className="pt-6">
                    <div className="w-32 h-32 mx-auto mb-3 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                      <img src={cert.image} alt={cert.name} className="w-full h-full object-contain p-2" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1 text-foreground">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Practices */}
        <div className="bg-muted rounded-lg p-6 lg:p-8">
          <h3 className="text-2xl font-bold mb-4 text-[oklch(0.25_0.08_250)]">Quality Assurance Practices</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {qualityPractices.map((practice, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.20_40)] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground/90">{practice}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
