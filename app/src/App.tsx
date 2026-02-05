import { CartProvider } from '@/context/CartContext';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Products } from '@/sections/Products';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { CartDrawer } from '@/sections/CartDrawer';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Products />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
