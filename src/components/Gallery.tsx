import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Precision Manufacturing",
    category: "Facility",
    image: "/gallery/Exhibition (2).jpg",
    description: "Our state-of-the-art manufacturing unit in action."
  },
  {
    id: 2,
    title: "Hydraulic Cylinder Assembly",
    category: "Products",
    image: "/gallery/Exhibition (3).JPG",
    description: "Meticulous assembly process of high-pressure cylinders."
  },
  {
    id: 3,
    title: "Quality Control Testing",
    category: "Quality",
    image: "/gallery/Exhibition (4).JPG",
    description: "Rigorous testing to ensure maximum reliability."
  },
  {
    id: 4,
    title: "Advanced CNC Machining",
    category: "Facility",
    image: "/gallery/Exhibition (5).JPG",
    description: "Precision components crafted with micron-level accuracy."
  },
  {
    id: 5,
    title: "Heavy Duty Power Packs",
    category: "Products",
    image: "/gallery/Exhibition (6).JPG",
    description: "Robust power solutions for industrial applications."
  },
  {
    id: 6,
    title: "Global Shipment",
    category: "Logistics",
    image: "/gallery/Exhibition.jpg",
    description: "Ready for delivery to our international clients."
  },
  {
    id: 7,
    title: "Engineering Design Team",
    category: "Team",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
    description: "Our experts designing the next generation of hydraulics."
  },
  {
    id: 8,
    title: "Industrial Installation",
    category: "Projects",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1200",
    description: "On-site installation of a custom hydraulic system."
  }
];

const CATEGORIES = ["All", "Facility", "Products", "Quality", "Logistics", "Team", "Projects"];
const CARD_OFFSETS = [-2, -1, 0, 1, 2];
const MOBILE_CARD_OFFSETS = [-1, 0, 1];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const filteredItems = useMemo(() => {
    return activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeItem = filteredItems[activeIndex] ?? filteredItems[0];

  const wrappedIndex = (index: number) => {
    return (index + filteredItems.length) % filteredItems.length;
  };

  const moveCarousel = (direction: number) => {
    setActiveIndex(index => wrappedIndex(index + direction));
  };

  const visibleOffsets = isMobile ? MOBILE_CARD_OFFSETS : CARD_OFFSETS;

  const visibleItems = visibleOffsets.map(offset => ({
    offset,
    item: filteredItems[wrappedIndex(activeIndex + offset)]
  })).filter(({ item }) => Boolean(item));

  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="text-[11px] font-black uppercase tracking-[0.24em] text-merlin-blue">
            Gallery
          </span>
          <h1 className="mt-3 sm:mt-4 text-3xl sm:text-5xl font-black tracking-tight text-gray-950">
            Merlin Visual Diary
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg font-medium leading-relaxed text-gray-500">
            See our facilities, products, testing, and project moments through a clean visual story.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="-mx-4 mt-8 flex items-center gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-12 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 no-scrollbar"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`h-10 shrink-0 rounded-full border px-4 text-sm font-bold transition-all sm:h-11 sm:px-5 ${
                activeCategory === cat
                  ? 'border-merlin-blue bg-merlin-blue text-white shadow-lg shadow-blue-500/20'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-merlin-blue hover:text-merlin-blue'
              }`}
            >
              {cat}
            </button>
          ))}
         
        </motion.div>

        <div className="relative mt-8 h-[390px] sm:mt-12 sm:h-[470px] md:h-[520px]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[180px] w-[min(680px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/50 blur-3xl sm:h-[220px] sm:w-[min(820px,92vw)]" />

          <AnimatePresence initial={false}>
            {visibleItems.map(({ item, offset }) => {
              const isActive = offset === 0;
              const translateX = offset * (isMobile ? 138 : 205);
              const width = isActive ? (isMobile ? 310 : 420) : (isMobile ? 220 : 320);
              const height = isActive ? (isMobile ? 390 : 520) : (isMobile ? 280 : 360);

              return (
                <motion.button
                  key={`${item.id}-${offset}`}
                  type="button"
                  layout
                  initial={{ opacity: 0, scale: 0.86, x: translateX }}
                  animate={{
                    opacity: Math.abs(offset) === 2 ? 0.58 : 1,
                    scale: isActive ? 1 : 0.9,
                    x: translateX,
                    y: isActive ? 0 : 28,
                    zIndex: 20 - Math.abs(offset)
                  }}
                  exit={{ opacity: 0, scale: 0.82 }}
                  transition={{ type: "spring", stiffness: 130, damping: 22 }}
                  onClick={() => isActive ? setSelectedImage(item) : setActiveIndex(wrappedIndex(activeIndex + offset))}
                  className="group absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[22px] bg-gray-100 text-left shadow-2xl shadow-gray-300/60 outline-none ring-merlin-blue/40 transition-shadow focus-visible:ring-4 sm:rounded-[28px]"
                  style={{
                    width: `min(${width}px, ${isActive ? '86vw' : '56vw'})`,
                    height: `min(${height}px, ${isActive ? '54vh' : '38vh'})`
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-950/75 via-gray-950/10 to-transparent transition-opacity ${isActive ? 'opacity-100' : 'opacity-45'}`} />
                  {isActive && (
                    <div className="absolute inset-x-0 bottom-0 p-4 pr-16 text-white sm:p-8">
                      <span className="mb-3 inline-flex rounded-full bg-white/20 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md">
                        {item.category}
                      </span>
                      <h2 className="text-xl sm:text-3xl font-black tracking-tight">
                        {item.title}
                      </h2>
                      <p className="mt-2 max-w-[13rem] text-xs font-medium text-white/78 sm:max-w-sm sm:text-sm">
                        {item.description}
                      </p>
                      <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-gray-950 shadow-lg sm:bottom-6 sm:right-6 sm:h-11 sm:w-11">
                        <Maximize2 size={16} />
                      </span>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 sm:mt-5">
          <button
            onClick={() => moveCarousel(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-gray-900 text-gray-950 transition-all hover:bg-gray-950 hover:text-white sm:h-12 sm:w-12"
            aria-label="Previous gallery image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => moveCarousel(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-gray-900 text-gray-950 transition-all hover:bg-gray-950 hover:text-white sm:h-12 sm:w-12"
            aria-label="Next gallery image"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {activeItem && (
          <p className="mt-5 text-center text-xs font-bold uppercase tracking-[0.24em] text-gray-400">
            {(activeIndex + 1).toString().padStart(2, '0')} / {filteredItems.length.toString().padStart(2, '0')}
          </p>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-white/95 p-4 pt-20 backdrop-blur-2xl sm:items-center sm:pt-4 md:p-12"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="fixed right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-gray-100 text-gray-900 transition-colors hover:bg-gray-200 sm:right-6 sm:top-6 sm:h-12 sm:w-12"
              aria-label="Close gallery preview"
            >
              <X size={24} />
            </button>

            <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.5fr)_0.8fr]">
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex max-h-[56vh] min-h-[220px] items-center justify-center overflow-hidden rounded-[22px] bg-gray-50 shadow-2xl sm:max-h-[78vh] sm:min-h-[280px] sm:rounded-[28px]"
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[56vh] max-w-full object-contain sm:max-h-[78vh]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="pb-8 text-gray-900 sm:pb-0"
              >
                <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.3em] text-merlin-blue sm:mb-4 sm:text-xs">
                  {selectedImage.category}
                </span>
                <h2 className="mb-3 text-3xl font-black tracking-tight sm:mb-5 md:text-5xl">
                  {selectedImage.title}
                </h2>
                <p className="text-base font-medium leading-relaxed text-gray-500 sm:text-lg">
                  {selectedImage.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
