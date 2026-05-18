import { motion } from 'motion/react';
import gsap from 'gsap';
import type { Product } from '../../constants';

type ProductCardProps = {
  product: Product;
  index: number;
  onClick: () => void;
  onEnquire: () => void;
};

export default function ProductCard({ product, index, onClick, onEnquire }: ProductCardProps) {
  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const xPerc = ((event.clientX - left) / width - 0.5) * 20;
    const yPerc = ((event.clientY - top) / height - 0.5) * -20;

    gsap.to(card, {
      rotateY: xPerc,
      rotateX: yPerc,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.5,
    });
  };

  const onMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(event.currentTarget, {
      rotateY: 0,
      rotateX: 0,
      ease: 'power2.out',
      duration: 0.5,
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="bg-white rounded-[20px] p-5 sm:p-7 shadow-md md:shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col h-full border border-gray-100 group relative preserve-3d active:scale-[0.98]"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="h-6 mb-1">
        {product.isNew && <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider">New</span>}
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 sm:mb-10 leading-tight tracking-tight">
        {product.name}
      </h3>

      <div className="flex-grow flex items-center justify-center mb-8 sm:mb-10 relative" style={{ transform: 'translateZ(50px)' }}>
        <motion.img
          layoutId={`img-${product.id}`}
          src={product.image}
          alt={product.name}
          className="w-full max-h-[180px] sm:max-h-[200px] object-contain transition-transform duration-500 group-hover:scale-110 group-active:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="flex justify-center gap-2.5 mb-6 sm:mb-8">
        {(product.colors || ['#d1d5db', '#94a3b8', '#475569']).map((color, i) => (
          <div key={`${color}-${i}`} className="w-3.5 h-3.5 rounded-full border border-gray-200 shadow-inner" style={{ backgroundColor: color }} />
        ))}
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
        <div className="flex flex-col">
          <p className="text-[11px] text-gray-600 font-medium leading-tight">Specs available</p>
          <p className="text-[10px] text-gray-400 leading-tight">view technical data</p>
        </div>
        <button
          onClick={(event) => {
            event.stopPropagation();
            onEnquire();
          }}
          className="bg-[#0071e3] text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-[#0077ed] transition-colors shadow-sm"
        >
          Enquire
        </button>
      </div>
    </motion.div>
  );
}
