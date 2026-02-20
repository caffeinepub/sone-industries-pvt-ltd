import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'sone-industries';

  return (
    <footer className="bg-[oklch(0.15_0.02_250)] text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-3">
        <p className="font-semibold text-lg">Sone Industries Pvt Ltd</p>
        <p className="text-white/80">Strategic Infrastructure & EPC Partner</p>
        <p className="text-sm text-white/70">© {currentYear} Sone Industries Pvt Ltd. All Rights Reserved.</p>
        <p className="text-sm text-white/60 flex items-center justify-center gap-1">
          Built with <Heart className="h-4 w-4 text-[oklch(0.65_0.20_40)] fill-current" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
