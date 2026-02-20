import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      className="relative bg-[oklch(0.25_0.08_250)] text-white py-20 sm:py-24 lg:py-32 px-6 overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x800.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="absolute inset-0 bg-[oklch(0.25_0.08_250)]/85"></div>
      <div className="relative max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Building India's Infrastructure with Engineering Excellence
        </h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl mb-8 text-white/90">
          Trusted Partner for Government & Public Sector Infrastructure Development — Delivering Quality, Safety, and Innovation Since Inception.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-[oklch(0.65_0.20_40)] hover:bg-[oklch(0.60_0.22_40)] text-white font-semibold px-8 py-6 text-base"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Corporate Profile
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[oklch(0.25_0.08_250)] font-semibold px-8 py-6 text-base"
          >
            <FileText className="mr-2 h-5 w-5" />
            Tender Enquiry
          </Button>
        </div>
      </div>
    </section>
  );
}
