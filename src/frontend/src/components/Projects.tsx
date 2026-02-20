import { MapPin, Calendar, IndianRupee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Projects() {
  const projects = [
    {
      name: 'Urban Road Development Project',
      location: 'Patna, Bihar',
      value: '₹12.5 Crore',
      completion: 'March 2024',
      description:
        'Construction of 8.5 km urban road network with drainage systems, street lighting, and pedestrian pathways for Patna Municipal Corporation.',
      category: 'Civil Infrastructure',
      image: '/assets/generated/project-1.dim_800x600.png',
    },
    {
      name: 'Water Supply Scheme - Phase II',
      location: 'Gaya District, Bihar',
      value: '₹18.2 Crore',
      completion: 'January 2024',
      description:
        'Installation of 45 km water supply pipeline network with overhead tanks, pumping stations, and distribution systems serving 25,000+ households.',
      category: 'Water & Sewerage',
      image: '/assets/generated/project-2.dim_800x600.png',
    },
    {
      name: 'Government Hospital Electrical Upgradation',
      location: 'Muzaffarpur, Bihar',
      value: '₹6.8 Crore',
      completion: 'November 2023',
      description:
        'Complete electrical system upgradation including HT/LT panels, transformer installation, backup power systems, and fire safety infrastructure.',
      category: 'MEP Services',
      image: '/assets/generated/project-3.dim_800x600.png',
    },
  ];

  return (
    <section id="projects" className="py-16 lg:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[oklch(0.25_0.08_250)]">Featured Projects</h2>
        <p className="text-lg text-foreground/80 mb-10 max-w-3xl">
          Our portfolio demonstrates our capability to deliver complex infrastructure projects across civil, water, and
          electrical domains with consistent quality and timely execution.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-[oklch(0.65_0.20_40)] hover:bg-[oklch(0.60_0.22_40)]">
                  {project.category}
                </Badge>
                <CardTitle className="text-xl font-semibold">{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground/80 leading-relaxed">{project.description}</p>
                <div className="space-y-2 pt-2 border-t border-border">
                  <div className="flex items-center text-sm text-foreground/70">
                    <MapPin className="h-4 w-4 mr-2 text-[oklch(0.65_0.20_40)]" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-foreground/70">
                    <IndianRupee className="h-4 w-4 mr-2 text-[oklch(0.65_0.20_40)]" />
                    <span>Contract Value: {project.value}</span>
                  </div>
                  <div className="flex items-center text-sm text-foreground/70">
                    <Calendar className="h-4 w-4 mr-2 text-[oklch(0.65_0.20_40)]" />
                    <span>Completed: {project.completion}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
