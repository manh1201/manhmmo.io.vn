import { ArrowDown, Sparkles, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white/80">Giá tốt nhất thị trường</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Mua </span>
            <span className="gradient-text">Tài Khoản Premium</span>
            <br />
            <span className="text-white">Giá Rẻ - Uy Tín</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Netflix, Spotify, YouTube Premium, Canva Pro và hàng trăm dịch vụ khác 
            với giá chỉ từ <span className="text-purple-400 font-semibold">$2.49</span>
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12">
            <div className="flex items-center gap-2 text-white/70">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">Giao dịch nhanh</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm">Bảo hành 100%</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-sm">Hỗ trợ 24/7</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToProducts}
            size="lg"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-purple-500/25 transition-all hover:scale-105"
          >
            Xem Sản Phẩm
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
