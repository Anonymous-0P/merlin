import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Award,
  Factory,
  Globe as GlobeIcon,
  Package,
  Settings,
  Settings2,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react';
import Certificates from '../components/Certificates';
import TypewriterText from '../components/common/TypewriterText';
import DynamicGlobe from '../components/home/DynamicGlobe';
import HeroBackground from '../components/home/HeroBackground';
import HeroContent from '../components/home/HeroContent';
import type { AppView } from '../types/navigation';

export default function HomePage({ setView }: { setView: (view: AppView) => void }) {
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);

  return (
    <div className="flex flex-col">
      <section className="relative h-[calc(100vh-58px)] mt-[58px] w-full overflow-hidden bg-merlin-ivory flex flex-col justify-center items-center">
        <HeroBackground videoIndex={currentVideoIdx} />
        <HeroContent setView={setView} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-[118px] sm:bottom-[126px] left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-4">
            {[0, 1, 2].map((idx) => (
              <button key={idx} onClick={() => setCurrentVideoIdx(idx)} className="group relative p-2">
                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${currentVideoIdx === idx ? 'bg-merlin-blue scale-[2] shadow-[0_0_10px_rgba(37,99,235,0.4)]' : 'bg-gray-300 group-hover:bg-gray-500'}`} />
                <motion.div initial={false} animate={{ scale: currentVideoIdx === idx ? 1 : 0 }} className="absolute inset-0 border border-merlin-blue/30 rounded-full" />
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-14 bg-merlin-ivory text-black relative overflow-hidden border-y border-merlin-sage/25">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #0066cc 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {[
              { label: 'Years Experience', value: '25+', icon: Award },
              { label: 'Products', value: '500+', icon: Package },
              { label: 'Global Clients', value: '1000+', icon: Users },
              { label: 'Quality Rating', value: '99.9%', icon: ShieldCheck },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-4 sm:p-6 rounded-[18px] sm:rounded-[24px] bg-merlin-gray border border-merlin-sage/25 shadow-sm hover:border-merlin-blue/35 hover:shadow-lg transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-merlin-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-merlin-blue/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                  <stat.icon size={20} className="sm:w-6 sm:h-6 text-merlin-blue" />
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-1 sm:mb-2 text-black">{stat.value}</p>
                <p className="text-[8px] sm:text-[10px] text-zinc-600 font-black uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-merlin-gray border-y border-merlin-sage/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
            <div className="w-full lg:w-[58%] order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <span className="text-merlin-blue font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-4 block">Our Legacy</span>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 leading-[1.02] text-black">
                  <TypewriterText text="Precision-engineered for the most demanding environments." />
                </h3>
                <p className="text-base sm:text-lg text-zinc-700 mb-8 leading-relaxed font-medium">
                  Merlin Hydraulics Pvt Ltd has been at the forefront of hydraulic innovation for over two decades. We specialize in the design, development, and manufacturing of high-pressure hydraulic systems that power critical infrastructure worldwide.
                </p>
              </motion.div>
            </div>
            <div className="w-full max-w-[430px] lg:w-[42%] order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
                <div className="aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl">
                  <img src="https://media.istockphoto.com/id/2148121243/photo/engineers-are-inspecting-the-plumbing-and-water-valves-inside-an-industrial-facility.jpg?s=612x612&w=0&k=20&c=cJdLiBs0AQzdX_E2CFKWSZoHMhHb_3_jydOijMdNJxU=" className="w-full h-full object-cover" alt="Merlin Hydraulics Facility" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-merlin-ivory p-7 rounded-[24px] shadow-2xl max-w-[210px] hidden xl:block border border-merlin-sage/25">
                  <p className="text-merlin-blue font-black text-5xl mb-2 tracking-tighter">99.9%</p>
                  <p className="font-bold text-sm text-zinc-700 leading-tight">Uptime reliability for our hydraulic systems in heavy industry.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="py-16 sm:py-24 bg-merlin-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-5 text-black">
              <TypewriterText text="Industries We Cater." />
            </h3>
            <p className="text-lg sm:text-xl text-zinc-700 max-w-2xl mx-auto font-medium">Providing specialized hydraulic solutions across diverse industrial sectors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-5 lg:gap-6">
            {[
              { name: 'Steel Industry', icon: Factory, desc: 'High-tonnage cylinders for furnace and rolling mill operations.', img: 'https://www.grantthornton.in/cdn-cgi/image/format=auto/globalassets/1.-member-firms/india/new-homepage/media/1.-hero-banners_repeat-visits/1440x600px_hero_banner_adobestock_164790165.jpg', className: 'md:col-span-3 md:h-[440px]' },
              { name: 'Infrastructure', icon: GlobeIcon, desc: 'Precision systems for large-scale civil engineering projects.', img: 'https://hd-industries.com/wp-content/uploads/2026/02/blog2-scaled.jpg', className: 'md:col-span-3 md:h-[440px]' },
              { name: 'Sugar Industry', icon: Settings2, desc: 'Specialized maintenance jacks and pumping units for mills.', img: 'https://t4.ftcdn.net/jpg/12/10/82/39/360_F_1210823978_JSt7PtkRT3AkmMva8xPpRlZULoswdeXb.jpg', className: 'md:col-span-2 md:h-[360px]' },
              { name: 'Power Industry', icon: Zap, desc: 'Specialized hydraulic systems for power generation and distribution.', img: 'https://www.india-briefing.com/news/wp-content/uploads/2025/03/Indias-Power-Sector-in-2025.jpg', className: 'md:col-span-2 md:h-[360px]' },
              { name: 'General Engineering', icon: Settings, desc: 'Custom hydraulic solutions for diverse engineering applications.', img: 'https://www.pcube.in/wp-content/uploads/2020/09/general-eng.jpg', className: 'md:col-span-2 md:h-[360px]' },
            ].map((industry, i) => (
              <motion.div key={industry.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`group relative rounded-[28px] overflow-hidden shadow-xl hover:shadow-[0_24px_48px_-18px_rgba(0,0,0,0.3)] transition-all duration-700 h-[340px] ${industry.className}`}>
                <img src={industry.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={industry.name} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-merlin-blue/20 to-merlin-blue/90 transition-opacity duration-500 group-hover:opacity-95" />
                <div className="relative h-full flex flex-col items-start justify-end p-7 sm:p-10 text-white">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-lg rounded-[16px] sm:rounded-[20px] flex items-center justify-center mb-6 sm:mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-merlin-blue group-hover:border-merlin-blue">
                    <industry.icon size={24} className="sm:w-6 sm:h-6 transition-colors duration-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tighter leading-[0.95]">{industry.name}</h3>
                  <p className="text-sm sm:text-base opacity-100 sm:opacity-0 group-hover:opacity-100 transform translate-y-0 sm:translate-y-4 group-hover:translate-y-0 transition-all duration-500 max-w-sm font-medium leading-relaxed">{industry.desc}</p>
                  <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="text-sm font-bold uppercase tracking-widest">Learn More</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about-global" className="py-16 sm:py-24 bg-merlin-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-1.5 h-12 bg-merlin-blue rounded-full" />
                  <h3 className="text-4xl sm:text-6xl font-bold tracking-tighter text-black">
                    <TypewriterText text="About Us" />
                  </h3>
                </div>
                <div className="space-y-6 text-base sm:text-lg text-zinc-700 leading-relaxed font-medium">
                  <p><span className="font-bold text-merlin-dark">Merlin Hydraulics</span> was established in the year <span className="font-bold text-merlin-dark">1990</span> and has emerged as a leading player in the Hydraulics industry with the innovation and development of a wide array of products and services.</p>
                  <p>We cater to a diverse spectrum of industries like the Sugar industry, Steel factories, Rolling mills, Railways wagon manufacturing, Nuclear shelters for defence, Automobiles and various other verticals.</p>
                  <p>We are extremely proud to be associated with major global organisations having a strong export base in countries like <span className="font-bold text-merlin-dark">USA, Mexico, Guatemala, Brazil, Uganda, Kenya, Ethiopia, South Africa, Sudan, Nigeria, Indonesia, Thailand etc.</span></p>
                </div>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => { setView('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="mt-12 px-10 py-4 bg-merlin-blue text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/10 flex items-center gap-3 group">
                  Discover More
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </motion.button>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 relative flex items-center justify-center">
              <DynamicGlobe />
            </div>
          </div>
        </div>
      </section>

      <Certificates />
    </div>
  );
}
