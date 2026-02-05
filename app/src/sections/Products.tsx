import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { Package } from 'lucide-react';

export function Products() {
  return (
    <section id="products" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Package className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white/80">Danh sách sản phẩm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Sản Phẩm</span>
            <span className="text-white"> CỦA CHÚNG TÔI</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Tất cả các tài khoản premium với giá tốt nhất. Bảo hành 100%, hỗ trợ 24/7.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
