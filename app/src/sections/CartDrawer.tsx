import { X, Minus, Plus, ShoppingBag, ExternalLink, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/data/products';

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0f0a1a] border-l border-white/10 z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Giỏ hàng</h2>
              <p className="text-sm text-white/60">{items.length} sản phẩm</p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <ShoppingBag className="w-10 h-10 text-white/30" />
              </div>
              <p className="text-white/60 mb-2">Giỏ hàng trống</p>
              <p className="text-sm text-white/40">Thêm sản phẩm để tiếp tục</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="p-4 rounded-xl glass">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{item.name}</h3>
                      <p className="text-sm text-white/60 mb-2">{item.category}</p>
                      <p className="text-lg font-bold text-purple-400">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-4 h-4 text-white" />
                      </button>
                      <span className="w-10 text-center text-white font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-4 h-4 text-white" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-400 hover:text-red-300 transition-colors"
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-white/60">Tổng cộng</span>
              <span className="text-2xl font-bold text-white">${totalPrice.toFixed(2)}</span>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-2">
              <p className="text-sm text-white/60 text-center mb-3">
                Liên hệ để thanh toán và nhận gói
              </p>
              <a
                href={contactInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-semibold transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Liên hệ qua Facebook
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={contactInfo.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#ff0050] to-[#00f2ea] hover:opacity-90 text-white font-semibold transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                Liên hệ qua TikTok
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <Button
              onClick={clearCart}
              variant="outline"
              className="w-full border-white/10 text-white/60 hover:text-white hover:bg-white/5"
            >
              Xóa giỏ hàng
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
