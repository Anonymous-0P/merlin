import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu } from 'lucide-react';
import type { AppView } from '../../types/navigation';

type HeaderProps = {
  setView: (view: AppView) => void;
  onHome: () => void;
};

const navigationData: Array<{
  name: string;
  view?: AppView;
  action?: () => void;
  megaMenu?: { explore: Array<{ name: string; view?: AppView }>; categories: any[] };
}> = [
  { name: 'Home' },
  {
    name: 'About',
    view: 'about',
    megaMenu: {
      explore: [
        { name: 'Our Story', view: 'about' },
        { name: 'Environmental Goals' },
        { name: 'Leadership Team', view: 'about' },
        { name: 'Global Network' },
      ],
      categories: [],
    },
  },
  {
    name: 'Product',
    view: 'store',
    megaMenu: {
      explore: [
        { name: 'Shop the Latest', view: 'store' },
        { name: 'Hydraulic Jacks', view: 'store' },
        { name: 'Hydraulic Cylinders', view: 'store' },
        { name: 'Hydraulic Pumps', view: 'store' },
        { name: 'Power Packs', view: 'store' },
        { name: 'Custom Systems', view: 'store' },
        { name: 'Accessories', view: 'store' },
      ],
      categories: [],
    },
  },
  {
    name: 'Infrastructure',
    view: 'infrastructure',
    megaMenu: {
      explore: [
        { name: 'Construction Solutions', view: 'infrastructure' },
        { name: 'Agriculture Mobility', view: 'infrastructure' },
        { name: 'Smart Manufacturing', view: 'infrastructure' },
        { name: 'Automotive Precision', view: 'infrastructure' },
      ],
      categories: [],
    },
  },
  {
    name: 'Gallery',
    view: 'gallery',
    megaMenu: {
      explore: [
        { name: 'Product Gallery', view: 'gallery' },
        { name: 'Project Highlights', view: 'gallery' },
        { name: 'Event Coverage', view: 'gallery' },
        { name: 'Field Testing', view: 'gallery' },
      ],
      categories: [],
    },
  },
  { name: 'Contact Us', view: 'contact' },
];

export default function Header({ setView, onHome }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigate = (view: AppView) => {
    setView(view);
    window.scrollTo(0, 0);
    setActiveDropdown(null);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-300 bg-merlin-ivory/95 backdrop-blur-xl border-b border-merlin-sage/35 shadow-sm ${activeDropdown ? 'shadow-md' : ''}`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="relative h-[58px] w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button onClick={onHome} className="opacity-95 hover:opacity-100 transition-opacity flex items-center shrink-0">
            <img
              src="/hero_section_videos/used_Icon/logo.png"
              alt="Merlin Hydraulics"
              className="h-10 sm:h-11 w-auto max-w-[min(64vw,520px)] object-contain"
            />
          </button>

          <div className="hidden md:flex items-center justify-center gap-5 lg:gap-7 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navigationData.map((item) => (
              <button
                key={item.name}
                onMouseEnter={() => setActiveDropdown(item.megaMenu ? item.name : null)}
                onClick={() => {
                  if (item.name === 'Home') onHome();
                  else if (item.view) navigate(item.view);
                }}
                className={`text-[12px] font-bold transition-all hover:text-merlin-blue hover:opacity-100 ${
                  activeDropdown ? (activeDropdown === item.name ? 'opacity-100' : 'opacity-40') : 'opacity-80'
                } text-black`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button className="md:hidden hover:text-merlin-blue transition-colors text-black ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={20} />
          </button>
        </div>

        <AnimatePresence>
          {activeDropdown && navigationData.find((d) => d.name === activeDropdown)?.megaMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="bg-merlin-ivory overflow-hidden border-b border-merlin-sage/25"
            >
              <div className="max-w-[1000px] mx-auto px-6 py-12">
                <div className="grid grid-cols-12 gap-12">
                  <div className="col-span-12 md:col-span-4 flex flex-col gap-2">
                    <span className="text-[11px] font-semibold text-zinc-600 mb-4 uppercase tracking-wider">Explore {activeDropdown}</span>
                    {navigationData.find((d) => d.name === activeDropdown)?.megaMenu?.explore.map((exp) => (
                      <button
                        key={exp.name}
                        onClick={() => exp.view && navigate(exp.view)}
                        className="text-2xl font-bold text-black hover:text-merlin-blue hover:translate-x-1 transition-all text-left"
                      >
                        {exp.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-40 bg-merlin-ivory pt-32 px-10 md:hidden text-black"
          >
            <div className="flex flex-col gap-6">
              {navigationData.map((item, i) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  onClick={() => {
                    if (item.name === 'Home') onHome();
                    else if (item.view) navigate(item.view);
                    setIsMenuOpen(false);
                  }}
                  className="text-4xl font-bold text-left hover:text-merlin-blue transition-colors tracking-tight text-black"
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                onClick={() => {
                  navigate('store');
                  setIsMenuOpen(false);
                }}
                className="mt-4 px-8 py-4 bg-merlin-blue text-white rounded-xl font-bold text-lg uppercase tracking-widest text-center"
              >
                Explore Products
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
