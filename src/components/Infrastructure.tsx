import React from 'react';
import { motion } from 'motion/react';
import { 
  Construction, 
  Sprout, 
  Factory, 
  Car, 
  ArrowRight, 
  ShieldAlert, 
  ShieldCheck, 
  TrendingUp,
  Box,
  ChevronRight
} from 'lucide-react';
import { PRODUCTS } from '../constants';

const segments = [
  {
    id: 'construction',
    name: 'Construction',
    icon: Construction,
    color: 'blue',
    problem: 'Standard jacks are often too bulky to fit in the narrow gaps between structural beams and bridge bearings, leading to risky improvisations.',
    solution: 'Our ultra-low profile MLPVL and MLTVL Pan Cake jacks provide high tonnage capacity in heights as low as 30mm, fitting where others cannot.',
    impact: 'Enhanced structural integrity during leveling and 40% faster operation cycles in complex bridge jacking projects.',
    products: ['mlpvl', 'mltvl', 'mcc-cutter'],
    img: 'https://images.unsplash.com/photo-1541625602330-2277a1cd43a7?auto=format&fit=crop&q=80&w=1200&h=600'
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: Sprout,
    color: 'emerald',
    problem: 'Field maintenance of heavy harvesters and tractors often lacks access to power, making repair work slow and labor-intensive.',
    solution: 'Portable, high-reliability MSP General Purpose jacks coupled with MHP Hand Pumps allow for precise field lifting without any external power source.',
    impact: 'Drastic reduction in field downtime during critical harvest seasons, ensuring equipment is back in operation within hours.',
    products: ['msp', 'mhp-hand'],
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200&h=600'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    color: 'slate',
    problem: 'Aligning heavy CNC machines or pressing components requires extremely controlled and uniform pressure to avoid structural damage.',
    solution: 'MEP Electric Pumps combined with synchronized multi-jack systems (MSPU) offer precise load distribution and electronic monitoring.',
    impact: 'Zero-damage installation of multi-million dollar machinery with precision alignment accuracy up to 0.5mm.',
    products: ['mep-electric', 'mspu'],
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200&h=600'
  },
  {
    id: 'automotive',
    name: 'Automotive',
    icon: Car,
    color: 'indigo',
    problem: 'Assembly line cycles demand rapid retraction and high durability to withstand thousands of operations per day without failure.',
    solution: 'MSPS and MSLS Spring Return cylinders are designed for high-cycle industrial use, providing rapid, automatic retraction and superior seal life.',
    impact: 'Significant boost in assembly line throughput and 3x longer maintenance intervals compared to standard cylinders.',
    products: ['msps', 'msls'],
    img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200&h=600'
  }
];

const Infrastructure = ({ onProductClick }: { onProductClick: (product: any) => void }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-merlin-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000&h=1000" 
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Infrastructure background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            animate={{ opacity: 1, letterSpacing: '0.5em' }}
            className="text-merlin-blue font-bold uppercase text-xs mb-4 block"
          >
            Sector Solutions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900"
          >
            Built for<br />Modern Infrastructure.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-lg text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Specialized hydraulic engineering for critical sectors. We don't just lift loads; we lift entire industries.
          </motion.p>
        </div>
      </section>

      {/* Segment Sections */}
      {segments.map((segment, idx) => (
        <section 
          key={segment.id} 
          id={segment.id}
          className={`py-24 sm:py-40 overflow-hidden ${idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`flex flex-col lg:flex-row gap-16 lg:gap-32 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-xl bg-white text-merlin-blue`}>
                    <segment.icon size={32} />
                  </div>
                  
                  <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-12 text-gray-900">{segment.name}</h2>
                  
                  <div className="space-y-12">
                    {/* Problem */}
                    <div className="flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                        <ShieldAlert size={20} className="text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-gray-900">The Problem</h4>
                        <p className="text-gray-500 font-medium leading-relaxed">{segment.problem}</p>
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <ShieldCheck size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-gray-900">Our Solution</h4>
                        <p className="text-gray-500 font-medium leading-relaxed">{segment.solution}</p>
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <TrendingUp size={20} className="text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-gray-900">Business Impact</h4>
                        <p className="text-gray-500 font-medium leading-relaxed">{segment.impact}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Visual Side */}
              <div className="w-full lg:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, rotate: idx % 2 === 0 ? 2 : -2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl relative z-10">
                    <img 
                      src={segment.img} 
                      className="w-full h-full object-cover"
                      alt={segment.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className={`absolute -top-10 ${idx % 2 === 0 ? '-right-10' : '-left-10'} w-40 h-40 bg-merlin-blue/10 rounded-full blur-3xl`} />
                  <div className={`absolute -bottom-10 ${idx % 2 === 0 ? '-left-10' : '-right-10'} w-40 h-40 bg-blue-500/10 rounded-full blur-3xl`} />
                </motion.div>
              </div>
            </div>

            {/* Mapped Products */}
            <div className="mt-24 pt-16 border-t border-gray-100">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                  <Box className="text-merlin-blue" size={24} />
                  <h4 className="text-2xl font-bold tracking-tight">Mapped Products</h4>
                </div>
                <button className="text-merlin-blue font-bold flex items-center gap-2 hover:translate-x-1 transition-transform group">
                  View All Products <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {segment.products.map((productId) => {
                  const product = PRODUCTS.find(p => p.id === productId);
                  if (!product) return null;
                  return (
                    <motion.div 
                      key={product.id}
                      whileHover={{ y: -10 }}
                      onClick={() => onProductClick(product)}
                      className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                    >
                      <div className="aspect-square bg-gray-50 rounded-2xl mb-6 p-4 flex items-center justify-center overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h5 className="font-bold text-gray-900 group-hover:text-merlin-blue transition-colors">{product.name}</h5>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1 mb-4">{product.category}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-900">{product.price || 'Contact for Quote'}</span>
                        <ChevronRight size={16} className="text-gray-300 group-hover:text-merlin-blue group-hover:translate-x-1 transition-all" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      
    </div>
  );
};

export default Infrastructure;
