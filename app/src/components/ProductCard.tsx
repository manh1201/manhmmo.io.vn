import { ShoppingCart, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative rounded-2xl overflow-hidden glass hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
      {/* Popular Badge */}
      {product.popular && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
          <Star className="w-3 h-3 text-white fill-white" />
          <span className="text-xs font-semibold text-white">Bán chạy</span>
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">
          {product.category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mt-1 mb-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/60 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-5">
          {product.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-white/70">
              <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-white">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-white/40 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={() => addToCart(product)}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white font-semibold rounded-xl transition-all hover:scale-[1.02]"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Thêm vào giỏ
        </Button>
      </div>
    </div>
  );
}
