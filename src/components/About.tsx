import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Shield, Target, ChevronRight, Globe, Factory, Lightbulb, CheckCircle2,
  Building2, Cpu, Zap, Award
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const VISION_MISSION = [
  {
    title: "Our Vision",
    desc: "To be the global benchmark for excellence in hydraulic engineering, recognized for innovation, reliability, and our commitment to powering the world's most critical infrastructure.",
    icon: Target,
    color: "bg-blue-600"
  },
  {
    title: "Our Mission",
    desc: "To achieve sustainable growth and lead the hydraulic industry by providing precision-engineered, high-pressure solutions that prioritize customer safety and operational efficiency.",
    icon: Shield,
    color: "bg-merlin-blue"
  }
];

const LEADERSHIP = [
  {
    name: "ABC (Managing Director)",
    role: "Managing Director",
    desc: "With over 25 years of expertise, ABC has been the visionary force behind Merlin's engineering excellence and technical growth.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "XYZ (Director of Operations)",
    role: "Director of Operations",
    desc: "XYZ leads our manufacturing operations and global supply chain, ensuring every product meets our stringent 'Zero-Defect' policy.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "PQR (Director of Strategy)",
    role: "Director of Strategy",
    desc: "PQR drives our digital transformation and strategic growth initiatives, positioning Merlin at the forefront of Industry 4.0.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

type Milestone = {
  year: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  left: string;
  top: string;
  mobileLeft: string;
  mobileTop: string;
  mobileCardSide: "left" | "right";
};

const MILESTONES: Milestone[] = [
  { 
    year: "1998", 
    title: "The Genesis", 
    desc: "Founded as a specialized repair hub for high-pressure hydraulic jacks in Pune.",
    icon: Target,
    color: "bg-[#f97316]",
    left: "65.2%",
    top: "6.3%",
    mobileLeft: "72%",
    mobileTop: "6.3%",
    mobileCardSide: "right"
  },
  { 
    year: "2004", 
    title: "Incorporation", 
    desc: "Formally incorporated as Merlin Hydraulics Pvt Ltd, starting full-scale manufacturing.",
    icon: Building2,
    color: "bg-[#0ea5e9]",
    left: "56%",
    top: "24.2%",
    mobileLeft: "56.1%",
    mobileTop: "24.2%",
    mobileCardSide: "left"
  },
  { 
    year: "2010", 
    title: "Expansion", 
    desc: "Introduced custom synchronized lifting systems for massive infrastructure projects.",
    icon: Zap,
    color: "bg-[#22c55e]",
    left: "39.6%",
    top: "34%",
    mobileLeft: "36.4%",
    mobileTop: "34%",
    mobileCardSide: "right"
  },
  { 
    year: "2015", 
    title: "Precision", 
    desc: "Achieved ISO 9001:2015 and expanded to a 20,000 sq. ft advanced facility.",
    icon: Award,
    color: "bg-[#eab308]",
    left: "56%",
    top: "54.7%",
    mobileLeft: "55.7%",
    mobileTop: "54.7%",
    mobileCardSide: "right"
  },
  { 
    year: "2021", 
    title: "Industry 4.0", 
    desc: "Launched IoT-enabled hydraulic monitoring and smart control systems.",
    icon: Cpu,
    color: "bg-[#ef4444]",
    left: "66.6%",
    top: "67.6%",
    mobileLeft: "68.4%",
    mobileTop: "67.6%",
    mobileCardSide: "left"
  },
  { 
    year: "2024", 
    title: "Global Hub", 
    desc: "Serving 20+ countries with extreme reliability across nuclear and metro sectors.",
    icon: Globe,
    color: "bg-[#8b5cf6]",
    left: "48.6%",
    top: "87.5%",
    mobileLeft: "47.1%",
    mobileTop: "87.5%",
    mobileCardSide: "left"
  }
];

const ROAD_PATH = "M390,-180 C720,52 740,214 560,310 C375,408 315,500 450,610 C606,737 765,842 590,1000 C455,1122 390,1248 500,1460";
const MOBILE_ROAD_PATH = "M140,-180 C292,52 300,214 202,310 C122,408 96,500 154,610 C220,737 288,842 214,1000 C156,1122 128,1248 180,1460";

interface TimelineMarkerProps {
  milestone: Milestone;
  index: number;
  progress: any;
}

const TimelineMarker: React.FC<TimelineMarkerProps> = ({ milestone, index, progress }) => {
  const revealPoint = [0.13, 0.27, 0.42, 0.58, 0.74, 0.88][index] ?? 0.5;
  const cardOpacity = useTransform(
    progress,
    [revealPoint - 0.045, revealPoint, revealPoint + 0.11, revealPoint + 0.17],
    [0, 1, 1, 0]
  );
  const cardX = useTransform(
    progress,
    [revealPoint - 0.045, revealPoint, revealPoint + 0.17],
    [24, 0, -8]
  );
  const cardScale = useTransform(
    progress,
    [revealPoint - 0.045, revealPoint],
    [0.94, 1]
  );
  const mobileCardY = useTransform(
    progress,
    [revealPoint - 0.045, revealPoint, revealPoint + 0.17],
    [12, 0, -4]
  );
  const mobileCardPosition = milestone.mobileCardSide === "left"
    ? "right-full mr-3 text-right"
    : "left-full ml-3 text-left";
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="timeline-marker absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-[50]"
      style={{
        "--marker-left": milestone.left,
        "--marker-top": milestone.top,
        "--marker-mobile-left": milestone.mobileLeft,
        "--marker-mobile-top": milestone.mobileTop,
      } as React.CSSProperties}
    >
      <div className="relative">
        <div className={`w-11 h-11 sm:w-16 sm:h-16 ${milestone.color} rounded-full flex items-center justify-center text-white shadow-2xl relative z-10 ring-4 sm:ring-8 ring-white/70 backdrop-blur-sm`}>
          <milestone.icon size={20} className="sm:w-7 sm:h-7" />
        </div>
        
        {/* Dotted Aura */}
        <div className="absolute inset-0 -m-3 sm:-m-4 border-2 border-dashed border-gray-300 rounded-full animate-spin-slow opacity-60" />
      </div>

      <div className="mt-2 sm:mt-3 flex flex-col items-center">
        <div className="bg-white px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-xl border border-gray-100 flex items-center gap-2">
          <span className="text-[13px] sm:text-base font-black text-gray-900 tracking-tighter">{milestone.year}</span>
        </div>
      </div>

      <motion.div
        style={{ opacity: cardOpacity, x: cardX, scale: cardScale }}
        className="absolute top-1/2 right-full mr-5 hidden w-[220px] -translate-y-1/2 rounded-[22px] border border-gray-100 bg-white/95 p-5 text-left shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur-md pointer-events-none md:block"
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-3xl font-black text-merlin-blue/20">{milestone.year}</span>
          <div className={`h-11 w-11 ${milestone.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
            <milestone.icon size={20} />
          </div>
        </div>
        <h4 className="text-lg font-black text-gray-950 leading-tight">{milestone.title}</h4>
        <p className="mt-3 text-xs text-gray-600 font-semibold leading-relaxed">
          {milestone.desc}
        </p>
        <div className="absolute left-full top-1/2 h-4 w-4 -translate-x-2 -translate-y-1/2 rotate-45 border-r border-t border-gray-100 bg-white/95" />
      </motion.div>

      <motion.div
        style={{ opacity: cardOpacity, y: mobileCardY, scale: cardScale }}
        className={`absolute top-0 block w-[min(42vw,168px)] rounded-2xl border border-gray-100 bg-white/95 p-3 shadow-[0_18px_44px_rgba(15,23,42,0.16)] backdrop-blur-md pointer-events-none md:hidden ${mobileCardPosition}`}
      >
        <h4 className="text-[13px] font-black text-gray-950 leading-tight">{milestone.title}</h4>
        <p className="mt-1.5 text-[10px] text-gray-600 font-semibold leading-relaxed">
          {milestone.desc}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default function About() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 92%", "end 20%"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.92], [0, 1]);

  return (
    <div className="min-h-screen bg-white">
      {/* Cinematic Hero */}
      <section className="relative min-h-[620px] h-[72vh] flex items-center justify-center overflow-hidden bg-white pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20 scale-110"
            alt="Engineering Excellence"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-merlin-blue font-black tracking-[0.5em] uppercase text-xs mb-5 block">Est. 1998</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[0.9] text-gray-900">
              The Power <br /><span className="text-merlin-blue">of Precision.</span>
            </h1>
            <p className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed italic">
              Crafting high-pressure hydraulic masterpieces for the world's most demanding projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-14 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VISION_MISSION.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 rounded-[36px] bg-merlin-gray border border-gray-100 group hover:shadow-3xl transition-all duration-700"
              >
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white mb-7 shadow-2xl group-hover:scale-110 transition-transform`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-14 sm:py-20 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Leadership.</h2>
              <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed">
                Guided by a multi-generational legacy of engineering passion and operational excellence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP.map((leader, i) => (
              <motion.div
                key={`${leader.name}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/5] rounded-[32px] overflow-hidden mb-5 relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-merlin-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-merlin-blue/80 backdrop-blur-md p-4 rounded-2xl">
                    <p className="text-sm font-medium leading-relaxed">{leader.desc}</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h4>
                <p className="text-merlin-blue font-bold text-xs uppercase tracking-widest">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Merlin Legacy - Road Timeline */}
      <section ref={timelineRef} className="pt-6 pb-12 sm:pt-8 sm:pb-16 bg-white overflow-hidden relative">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-3 italic">
              The Merlin <span className="text-merlin-blue">Legacy.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto font-medium leading-relaxed">
              A trajectory of engineering excellence, charted through decades of strategic evolution.
            </p>
          </div>

          {/* Road Path SVG Container */}
          <div className="relative mx-auto h-[1180px] max-w-[430px] sm:h-[1280px] sm:max-w-[1120px]">
            {/* Background Road Shape */}
            <svg 
              viewBox="0 0 1000 1280" 
              fill="none" 
              className="absolute inset-0 hidden w-full h-full pointer-events-none opacity-100 drop-shadow-2xl sm:block"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="roadSurface" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a3a3a3" />
                  <stop offset="48%" stopColor="#7d7d7d" />
                  <stop offset="100%" stopColor="#5f5f5f" />
                </linearGradient>
                <linearGradient id="roadProgress" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#17d7e8" />
                  <stop offset="50%" stopColor="#10b8cf" />
                  <stop offset="100%" stopColor="#22e0f2" />
                </linearGradient>
                <filter id="roadShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#0f172a" floodOpacity="0.18" />
                </filter>
              </defs>
              {/* Road shoulder */}
              <path 
                d={ROAD_PATH} 
                stroke="#d6d6d6" 
                strokeWidth="104" 
                strokeLinecap="round" 
                filter="url(#roadShadow)"
              />
              {/* Asphalt road */}
              <path 
                d={ROAD_PATH} 
                stroke="url(#roadSurface)" 
                strokeWidth="78" 
                strokeLinecap="round" 
              />
              {/* Road edge highlights */}
              <path 
                d={ROAD_PATH} 
                stroke="#8f8f8f" 
                strokeWidth="58" 
                strokeLinecap="round"
                opacity="0.7"
              />
              {/* Subtle road texture */}
              <path 
                d={ROAD_PATH} 
                stroke="#6f6f6f" 
                strokeWidth="42" 
                strokeDasharray="2 22" 
                strokeLinecap="round" 
                opacity="0.24"
              />
              {/* Dashed center markings */}
              <path 
                d={ROAD_PATH} 
                stroke="#f8fafc" 
                strokeWidth="4" 
                strokeDasharray="18 34" 
                strokeLinecap="round"
                opacity="0.82"
              />
              {/* Cyan route base */}
              <motion.path 
                d={ROAD_PATH} 
                stroke="#7cf4ff" 
                strokeWidth="12" 
                strokeLinecap="round"
                style={{ pathLength }}
              />
              {/* Cyan active route */}
              <motion.path 
                d={ROAD_PATH} 
                stroke="url(#roadProgress)" 
                strokeWidth="6" 
                strokeLinecap="round"
                opacity="0.95"
                style={{ pathLength }}
              />
              {/* Route highlight */}
              <motion.path 
                d={ROAD_PATH} 
                stroke="#eaffff" 
                strokeWidth="2" 
                strokeLinecap="round"
                opacity="0.8"
                style={{ pathLength }}
              />
            </svg>

            <svg
              viewBox="0 0 360 1280"
              fill="none"
              className="absolute inset-0 block h-full w-full pointer-events-none opacity-95 drop-shadow-2xl sm:hidden"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="mobileRoadSurface" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a3a3a3" />
                  <stop offset="48%" stopColor="#7d7d7d" />
                  <stop offset="100%" stopColor="#5f5f5f" />
                </linearGradient>
                <linearGradient id="mobileRoadProgress" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#17d7e8" />
                  <stop offset="50%" stopColor="#10b8cf" />
                  <stop offset="100%" stopColor="#22e0f2" />
                </linearGradient>
                <filter id="mobileRoadShadow" x="-25%" y="-20%" width="150%" height="140%">
                  <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#0f172a" floodOpacity="0.2" />
                </filter>
              </defs>
              <path
                d={MOBILE_ROAD_PATH}
                stroke="#d6d6d6"
                strokeWidth="72"
                strokeLinecap="round"
                filter="url(#mobileRoadShadow)"
              />
              <path
                d={MOBILE_ROAD_PATH}
                stroke="url(#mobileRoadSurface)"
                strokeWidth="54"
                strokeLinecap="round"
              />
              <path
                d={MOBILE_ROAD_PATH}
                stroke="#8f8f8f"
                strokeWidth="40"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d={MOBILE_ROAD_PATH}
                stroke="#6f6f6f"
                strokeWidth="28"
                strokeDasharray="2 18"
                strokeLinecap="round"
                opacity="0.24"
              />
              <path
                d={MOBILE_ROAD_PATH}
                stroke="#f8fafc"
                strokeWidth="3"
                strokeDasharray="14 24"
                strokeLinecap="round"
                opacity="0.82"
              />
              <motion.path
                d={MOBILE_ROAD_PATH}
                stroke="#7cf4ff"
                strokeWidth="8"
                strokeLinecap="round"
                style={{ pathLength }}
              />
              <motion.path
                d={MOBILE_ROAD_PATH}
                stroke="url(#mobileRoadProgress)"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.95"
                style={{ pathLength }}
              />
              <motion.path
                d={MOBILE_ROAD_PATH}
                stroke="#eaffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.8"
                style={{ pathLength }}
              />
            </svg>

            {/* Interactive Markers */}
            {MILESTONES.map((m, idx) => (
              <TimelineMarker key={m.year} milestone={m} index={idx} progress={pathLength} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
