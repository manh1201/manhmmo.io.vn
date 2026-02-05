import { Heart } from 'lucide-react';
import { contactInfo } from '@/data/products';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold gradient-text">ShopUSD</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href={contactInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href={contactInfo.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              TikTok
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>© {currentYear} ShopUSD</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> in Vietnam
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
