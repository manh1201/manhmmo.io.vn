import { MessageCircle, ExternalLink, Clock, Shield, Headphones } from 'lucide-react';
import { contactInfo } from '@/data/products';

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Liên Hệ</span>
            <span className="text-white"> VỚI CHÚNG TÔI</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Sau khi thêm sản phẩm vào giỏ hàng, vui lòng liên hệ qua một trong các kênh dưới đây 
            để thanh toán và nhận gói sản phẩm.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {/* Facebook */}
          <a
            href={contactInfo.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl glass hover:bg-[#1877F2]/10 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#1877F2] flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Facebook</h3>
                <p className="text-white/60">{contactInfo.facebook}</p>
              </div>
            </div>
            <p className="text-white/70 mb-4">
              Nhắn tin trực tiếp qua Facebook để được hỗ trợ nhanh chóng.
            </p>
            <div className="flex items-center gap-2 text-[#1877F2]">
              <span className="font-semibold">Liên hệ ngay</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

          {/* TikTok */}
          <a
            href={contactInfo.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl glass hover:bg-gradient-to-br hover:from-[#ff0050]/10 hover:to-[#00f2ea]/10 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff0050] to-[#00f2ea] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">TikTok</h3>
                <p className="text-white/60">{contactInfo.tiktok}</p>
              </div>
            </div>
            <p className="text-white/70 mb-4">
              Theo dõi và nhắn tin qua TikTok để nhận ưu đãi đặc biệt.
            </p>
            <div className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ff0050] to-[#00f2ea]">
              <span className="font-semibold">Liên hệ ngay</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass text-center">
            <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Giao dịch nhanh</h3>
            <p className="text-white/60 text-sm">
              Xử lý đơn hàng trong vòng 5-15 phút sau khi thanh toán
            </p>
          </div>

          <div className="p-6 rounded-2xl glass text-center">
            <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-7 h-7 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Bảo hành 100%</h3>
            <p className="text-white/60 text-sm">
              Hoàn tiền hoặc đổi mới nếu có bất kỳ vấn đề gì
            </p>
          </div>

          <div className="p-6 rounded-2xl glass text-center">
            <div className="w-14 h-14 rounded-xl bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
              <Headphones className="w-7 h-7 text-pink-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Hỗ trợ 24/7</h3>
            <p className="text-white/60 text-sm">
              Luôn sẵn sàng hỗ trợ bạn mọi lúc mọi nơi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
