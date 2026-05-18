import { RefObject } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CATEGORIES, Product } from '../constants';
import ProductCard from '../components/products/ProductCard';

type ProductStorePageProps = {
  activeCategory: string;
  filteredProducts: Product[];
  productsRef: RefObject<HTMLDivElement | null>;
  onCategoryClick: (id: string) => void;
  onProductClick: (product: Product) => void;
  onEnquire: () => void;
};

export default function ProductStorePage({
  activeCategory,
  filteredProducts,
  productsRef,
  onCategoryClick,
  onProductClick,
  onEnquire,
}: ProductStorePageProps) {
  return (
    <>
      <section className="px-6 pt-8 md:pt-14 max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-merlin-blue font-bold tracking-widest text-sm uppercase mb-2 block">Our Complete</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Product Range</h1>
          <div className="flex justify-center gap-2">
            <div className="w-1 h-1 rounded-full bg-merlin-blue" />
            <div className="w-1 h-1 rounded-full bg-merlin-blue" />
            <div className="w-1 h-1 rounded-full bg-merlin-blue" />
          </div>
        </div>

        <div className="mb-8 md:mb-10 px-2 md:px-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row md:justify-center gap-3 sm:gap-5 md:gap-8">
            {CATEGORIES.map((cat, index) => {
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => onCategoryClick(cat.id)}
                  className="flex flex-col items-center gap-3 group w-full md:w-auto"
                >
                  <div className={`relative w-full aspect-square md:w-32 md:h-32 rounded-[24px] sm:rounded-[30px] overflow-hidden bg-merlin-gray border border-merlin-sage/30 transition-all duration-700 shadow-[0_20px_45px_rgba(15,23,42,0.10)] ${isActive ? 'scale-105 shadow-2xl ring-4 ring-merlin-blue/20' : 'grayscale md:group-hover:grayscale-0 md:group-hover:scale-105'}`}>
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-contain p-4 transition-transform duration-700 md:group-hover:scale-110 group-active:scale-105" />
                    <div className={`absolute inset-0 bg-gradient-to-br from-merlin-ivory/0 to-merlin-sage/20 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'md:group-hover:opacity-0'}`} />
                  </div>
                  <span className={`text-[11px] sm:text-sm font-black transition-colors duration-300 max-w-[190px] text-center leading-tight tracking-[0.02em] ${isActive ? 'text-merlin-blue' : 'text-zinc-700 md:group-hover:text-black'}`}>
                    {cat.name.toUpperCase()}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 md:py-10 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 uppercase">
              {CATEGORIES.find((c) => c.id === activeCategory)?.name}
            </h2>
            <p className="text-base md:text-xl text-zinc-700 max-w-2xl mx-auto mb-6 font-medium">
              Precision-engineered solutions for the most demanding industrial environments.
            </p>
          </motion.div>
        </AnimatePresence>
      </section>

      <section ref={productsRef} className="py-8 md:py-10 bg-merlin-ivory scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 md:gap-y-12">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onClick={() => onProductClick(product)}
                  onEnquire={onEnquire}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
