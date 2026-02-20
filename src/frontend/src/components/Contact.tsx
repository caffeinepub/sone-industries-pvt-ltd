import { MapPin, Phone, Mail, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Barkagawan, Mohan Darwan, Kaimur (Bhabua), Kudra, Bihar – 821108',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7366909935',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'sipl.kaimur@outlook.com',
    },
  ];

  const registrations = [
    { label: 'GSTIN', value: '10ABRCS2205E1ZT' },
    { label: 'PAN', value: 'ABRCS2205E' },
    { label: 'CIN', value: 'U43299BR2025PTC078700' },
  ];

  return (
    <section id="contact" className="bg-muted py-16 lg:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-[oklch(0.25_0.08_250)]">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <Icon className="h-6 w-6 text-[oklch(0.65_0.20_40)] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-base">{info.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start mb-4">
              <FileText className="h-6 w-6 text-[oklch(0.65_0.20_40)] mr-3 mt-1 flex-shrink-0" />
              <h3 className="text-lg font-semibold">Registration Details</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 ml-9">
              {registrations.map((reg, index) => (
                <div key={index}>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">{reg.label}</p>
                  <p className="text-base font-mono">{reg.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
