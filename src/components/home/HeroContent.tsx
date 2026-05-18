import { ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import type { AppView } from '../../types/navigation';

export default function HeroContent({ setView }: { setView: (view: AppView) => void }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className="absolute inset-x-0 bottom-4 sm:bottom-5 z-50 w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-end text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex w-full flex-col items-center justify-center"
      >
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto px-4">
          <button
            onClick={() => setView('store')}
            className="h-14 w-[176px] sm:w-[190px] bg-merlin-blue text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-all active:scale-95 shadow-[0_18px_45px_rgba(0,102,204,0.42)] group flex items-center justify-center gap-2"
          >
            Explore Products
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => setView('contact')}
            className="h-14 w-[176px] sm:w-[190px] bg-merlin-ivory/90 backdrop-blur-md text-black border border-merlin-ivory rounded-full font-bold text-sm hover:border-merlin-blue hover:text-merlin-blue transition-all active:scale-95 shadow-[0_18px_45px_rgba(15,23,42,0.22)]"
          >
            Enquire Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
