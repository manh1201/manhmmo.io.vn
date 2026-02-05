import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold gradient-text">ShopUSD</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Trang chủ
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Sản phẩm
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Liên hệ
            </button>
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('home')}
                className="px-4 py-3 rounded-xl text-left text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                Trang chủ
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="px-4 py-3 rounded-xl text-left text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                Sản phẩm
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-3 rounded-xl text-left text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                Liên hệ
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
