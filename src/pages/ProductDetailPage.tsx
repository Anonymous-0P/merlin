import { ArrowLeft, Info, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import Footer from '../components/Footer';
import type { Product } from '../constants';
import type { AppView } from '../types/navigation';

type ProductDetailPageProps = {
  product: Product;
  onBack: () => void;
  setView: (view: AppView) => void;
};

export default function ProductDetailPage({ product, onBack, setView }: ProductDetailPageProps) {
  const goContact = () => {
    setView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-white overflow-y-auto no-scrollbar">
      <div className="absolute top-5 left-5 sm:top-8 sm:left-8 z-[70]">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-black font-bold transition-colors group">
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          Back to Store
        </button>
      </div>

      <div className="relative min-h-[520px] md:min-h-[600px] flex flex-col items-center justify-center pt-20 px-4 sm:px-6 overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-center mb-5 relative z-10">
          <span className="text-merlin-blue font-bold tracking-widest text-xs uppercase mb-4 block">{product.category.replace('-', ' ')}</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter apple-text-gradient mb-3">{product.name}</h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed px-2 sm:px-4">{product.description}</p>
          <button onClick={goContact} className="mt-6 px-8 py-3 bg-merlin-blue text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
            Enquire
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="relative w-full max-w-2xl h-[210px] sm:h-[280px] md:h-[340px] flex items-center justify-center">
          <img src={product.image} alt={product.name} className="h-full w-full object-contain drop-shadow-[0_36px_42px_rgba(0,0,0,0.12)]" referrerPolicy="no-referrer" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
        <section className="py-4 sm:py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
            <div className="apple-card p-5 flex flex-col justify-between min-h-[176px] h-full">
              <div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">Precision Engineering.</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Hard chrome plated ram to resist scoring and corrosion.</p>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Zap size={18} className="text-yellow-500" />
                </div>
                <span className="font-bold text-xs sm:text-sm">High-performance lifting</span>
              </div>
            </div>

            <div className="apple-card p-5 bg-merlin-gray text-gray-900 flex flex-col justify-between min-h-[176px] h-full">
              <div>
                <h3 className="text-xl font-bold tracking-tight">Ultra Flat Design.</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">Ensure no gap between jack and load.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-2xl font-bold text-merlin-blue">{product.specs?.pressure || '700 bar'}</span>
                <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mt-2">Max Working Pressure</p>
              </div>
            </div>

            <div className="apple-card p-5 flex flex-col justify-center items-center text-center min-h-[176px] h-full">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl mb-4">
                <ShieldCheck size={24} className="text-merlin-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First.</h3>
              <p className="text-sm text-gray-500">Tested for high-pressure reliability.</p>
            </div>

            <div className="apple-card p-5 flex items-center gap-5 min-h-[176px] h-full bg-gradient-to-br from-gray-50 to-gray-200">
              <img src={product.image} alt="" className="h-24 w-24 sm:h-28 sm:w-28 shrink-0 object-contain mix-blend-multiply" referrerPolicy="no-referrer" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">Built for the Extreme.</h3>
                <p className="text-sm text-gray-500 mt-2">For bridge construction and heavy industrial maintenance.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10 border-t border-gray-100">
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Engineering Blueprint.</h2>
            <p className="text-sm sm:text-base text-gray-500">Technical breakdown and visual specifications.</p>
          </div>

          <div className="bg-white rounded-[24px] sm:rounded-[32px] border border-gray-100 p-4 sm:p-8 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-merlin-blue" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400">Side View</span>
                </div>
                <div className="p-4 sm:p-6 rounded-3xl flex flex-col items-center justify-center bg-gray-50/50">
                  <img src={product.diagramImage || product.image} alt="Technical Sketch" className="w-full max-w-md h-auto object-contain mix-blend-multiply" referrerPolicy="no-referrer" />
                  {product.diagramNote && <p className="mt-4 text-sm text-gray-500 italic text-center">Note: {product.diagramNote}</p>}
                </div>
              </div>

              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400">Top View Visualization</span>
                  <div className="w-2 h-2 rounded-full bg-merlin-blue" />
                </div>
                <div className="w-full min-h-[280px] flex items-center justify-center relative rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 bg-gray-50/50">
                  <img src={product.topViewImage || product.image} alt="Product Top View" className="w-full max-h-[320px] object-contain relative z-10 mix-blend-multiply" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-merlin-blue rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0">
                <Info size={20} />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Technical Note</p>
                <p className="text-base sm:text-lg font-bold text-gray-900">{product.topViewNote || product.diagramNote || product.specs?.pressure || 'Technical drawing and model data for product selection.'}</p>
              </div>
            </div>
          </div>
        </section>

        {product.technicalData && (
          <section className="py-10 sm:py-16 border-t border-gray-100">
            <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-5">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Technical Data.</h2>
                <p className="text-sm sm:text-base text-gray-500">Comprehensive performance specifications for the {product.name} series.</p>
              </div>
              <button className="w-full md:w-auto px-6 py-3 bg-merlin-blue text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">Download Full Specs (PDF)</button>
            </div>

            <div className="bg-white border border-gray-100 rounded-[20px] sm:rounded-[28px] shadow-2xl shadow-gray-200/50 overflow-hidden">
              <table className="w-full table-fixed text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    {product.technicalData.headers.map((header) => (
                      <th key={header} className="px-1.5 py-2 sm:px-3 sm:py-4 text-[7px] sm:text-[10px] lg:text-[11px] font-black text-gray-600 uppercase tracking-normal border-r border-gray-100 last:border-0 break-words leading-tight">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {product.technicalData.rows.map((row, i) => (
                    <tr key={i} className="group hover:bg-merlin-gray/50 active:bg-merlin-gray/50 transition-colors">
                      {row.map((cell, j) => (
                        <td key={`${cell}-${j}`} className={`px-1.5 py-2 sm:px-3 sm:py-3 text-[8px] sm:text-[11px] lg:text-[12px] font-semibold border-r border-gray-50 last:border-0 break-words leading-tight ${j === 0 ? 'text-merlin-blue font-bold' : 'text-gray-600'}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <div className="flex justify-center pt-12 pb-24">
          <button onClick={onBack} className="flex items-center gap-3 text-gray-400 hover:text-black font-bold transition-colors group">
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-2" />
            Back to Store
          </button>
        </div>
      </div>

      <Footer onNavigate={(view: any) => { setView(view); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
    </motion.div>
  );
}
