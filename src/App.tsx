import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS, Product } from './constants';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import About from './components/About';
import Infrastructure from './components/Infrastructure';
import Header from './components/layout/Header';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductStorePage from './pages/ProductStorePage';
import type { AppView } from './types/navigation';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('cylinder');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [view, setView] = useState<AppView>('home');
  const productsRef = useRef<HTMLDivElement>(null);

  const filteredProducts = PRODUCTS.filter((product) => product.category === activeCategory);
  const makeUrl = (nextView: AppView, productId?: string) => {
    if (nextView === 'home') return window.location.pathname;
    if (nextView === 'detail' && productId) return `${window.location.pathname}#product-${productId}`;
    return `${window.location.pathname}#${nextView}`;
  };

  const applyHistoryState = (state: { view?: AppView; productId?: string } | null) => {
    const nextView = state?.view || 'home';
    const product = state?.productId ? PRODUCTS.find((item) => item.id === state.productId) || null : null;

    setView(nextView);
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  useEffect(() => {
    if (!window.history.state?.view) {
      window.history.replaceState({ view: 'home' }, '', makeUrl('home'));
    }

    const handlePopState = (event: PopStateEvent) => {
      applyHistoryState(event.state);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (nextView: AppView, product?: Product | null) => {
    const nextProductId = nextView === 'detail' ? product?.id : undefined;
    window.history.pushState({ view: nextView, productId: nextProductId }, '', makeUrl(nextView, nextProductId));
    setView(nextView);
    setSelectedProduct(product || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    if (view === 'detail') navigate('store');
    setTimeout(() => {
      productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleProductClick = (product: Product) => {
    navigate('detail', product);
  };

  const handleBackToStore = () => {
    navigate('store');
  };

  const handleGoHome = () => {
    navigate('home');
  };

  return (
    <div className="min-h-screen bg-merlin-ivory text-black">
      <Header setView={(nextView) => navigate(nextView)} onHome={handleGoHome} />

      <main>
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <HomePage setView={(nextView) => navigate(nextView)} />
            </motion.div>
          )}

          {view === 'about' && (
            <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <About />
            </motion.div>
          )}

          {view === 'gallery' && (
            <motion.div key="gallery" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Gallery />
            </motion.div>
          )}

          {view === 'infrastructure' && (
            <motion.div key="infrastructure" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Infrastructure onProductClick={handleProductClick} />
            </motion.div>
          )}

          {view === 'contact' && (
            <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ContactPage />
            </motion.div>
          )}

          {view === 'store' && (
            <motion.div key="store" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ProductStorePage
                activeCategory={activeCategory}
                filteredProducts={filteredProducts}
                productsRef={productsRef}
                onCategoryClick={handleCategoryClick}
                onProductClick={handleProductClick}
                onEnquire={() => navigate('contact')}
              />
            </motion.div>
          )}

          {view === 'detail' && selectedProduct && (
            <ProductDetailPage key="detail" product={selectedProduct} onBack={handleBackToStore} setView={(nextView) => navigate(nextView)} />
          )}
        </AnimatePresence>

        {!['store', 'detail', 'gallery', 'contact', 'infrastructure', 'news'].includes(view) && (
          <section className="py-24 bg-merlin-gray border-y border-merlin-sage/25">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Ready to lift your business?</h2>
              <p className="text-xl text-zinc-700 mb-12">Join thousands of companies worldwide that trust Merlin Hydraulics for their critical operations.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button onClick={() => navigate('contact')} className="w-full sm:w-auto px-10 py-5 bg-merlin-blue text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
                  Get a Quote
                </button>
                <button className="w-full sm:w-auto px-10 py-5 bg-merlin-ivory border border-merlin-sage/50 rounded-full font-bold text-lg hover:border-merlin-blue hover:text-merlin-blue transition-all text-black">
                  Download Catalog
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      {view !== 'detail' && <Footer onNavigate={(nextView: any) => navigate(nextView)} />}
    </div>
  );
}
