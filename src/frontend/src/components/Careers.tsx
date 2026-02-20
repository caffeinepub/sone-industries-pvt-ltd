import { CareerForm } from './CareerForm';

export function Careers() {
  return (
    <section id="careers" className="py-16 lg:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[oklch(0.25_0.08_250)]">Careers</h2>
        <p className="text-lg mb-8 text-foreground/90">
          Join our team of engineers, project managers, and infrastructure professionals.
        </p>
        <CareerForm />
      </div>
    </section>
  );
}
