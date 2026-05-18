import { PRODUCT_ASSETS } from './productAssets';

export interface Product {
  id: string;
  name: string;
  category: string;
  subtitle?: string;
  description: string;
  image: string;
  tag?: string;
  color?: string;
  hasSmartIcon?: boolean;
  isNew?: boolean;
  price?: string;
  colors?: string[];
  specs?: {
    capacity: string;
    stroke: string;
    pressure: string;
  };
  features?: string[];
  technicalData?: {
    headers: string[];
    rows: string[][];
  };
  diagramImage?: string;
  diagramNote?: string;
  topViewImage?: string;
  topViewNote?: string;
}

export const CATEGORIES = [
  { id: "cylinder", name: "Hydraulic Cylinder", icon: "Disc", image: "/hero_section_videos/used_Icon/hydraulic cylinder.png", color: "text-merlin-blue", bgColor: "bg-merlin-gray" },
  { id: "pumping", name: "Pumping Unit & Accessories", icon: "Zap", image: "/hero_section_videos/used_Icon/pumping unit and accesories.png", color: "text-blue-700", bgColor: "bg-blue-50" },
  { id: "construction", name: "Equipment for Construction", icon: "Construction", image: "/hero_section_videos/used_Icon/equipment for construction.png", color: "text-slate-700", bgColor: "bg-slate-50" },
  { id: "steel", name: "Equipment for Steel", icon: "Factory", image: "/hero_section_videos/used_Icon/equipment for steel.png", color: "text-merlin-blue", bgColor: "bg-blue-50" },
  { id: "sugar", name: "Equipment for Sugar", icon: "Settings2", image: "/hero_section_videos/used_Icon/equipment for sugar.png", color: "text-blue-800", bgColor: "bg-merlin-gray" }
];

const BASE_PRODUCTS: Product[] = [
  {
    id: "mlpvl",
    name: "MLPVL Pan Cake Jacks",
    subtitle: "Pan Cake Jacks - Plain Ram Single Acting (Type - Load Return)",
    category: "cylinder",
    description: "Ultra-compact hydraulic jacks for precision lifting in tight clearances.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/1.-MLPVL-Pan-Cake-Jacks-4-300x300.png",
    color: "bg-blue-50",
    isNew: true,
    
    colors: ["#e5e5e5", "#3b82f6", "#f5f5f7", "#606c7e"],
    specs: {
      capacity: "10 - 300 ton",
      stroke: "10 mm",
      pressure: "Max. Working Pressure 700 bar"
    },
    features: [
      "Pancake Jacks are designed specifically where space is constraint.",
      "Hard chrome plated ram to resist scoring and corrosion.",
      "Ultra flat cylinder / jack",
      "Ensure no gap between jack & load to be lifted, to utilize full stroke",
      "Compact, flat design for use where other cylinders will not fit",
      "Precision lifting, alignment of machinery, heavy structures, removal of pulleys, sprockets on taper seats"
    ],
    technicalData: {
      headers: ["Rated capacity (ton)", "Capacity @ 700 bar (kN)", "Stroke (mm)", "Model", "Effective area (cm²)", "Oil cap. (cc)", "Closed height (mm)", "Cylinder OD (mm)", "Bore dia. (mm)", "Ram dia. (mm)", "Wt. (Approx.) (kg)"],
      rows: [
        ["10", "111", "10", "MLPVL 10-10", "15.9", "16", "30", "80", "45", "45", "1.2"],
        ["20", "218", "10", "MLPVL 20-10", "31.2", "32", "35", "100", "63", "63", "2.2"],
        ["30", "309", "10", "MLPVL 30-10", "44.2", "44", "40", "110", "75", "75", "3.0"],
        ["50", "550", "10", "MLPVL 50-10", "78.5", "79", "50", "140", "100", "100", "6.0"],
        ["100", "1077", "10", "MLPVL 100-10", "153.9", "154", "70", "180", "140", "140", "14.0"],
        ["150", "1589", "10", "MLPVL 150-10", "227.0", "227", "75", "220", "170", "170", "22.0"],
        ["200", "2199", "10", "MLPVL 200-10", "314.2", "315", "80", "255", "200", "200", "34.0"],
        ["300", "3167", "10", "MLPVL 300-10", "452.4", "453", "90", "310", "240", "240", "55.0"]
      ]
    },
    diagramImage: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/MLPVL-Drawing.png",
    diagramNote: "Blue band on the Ram to indicate the stroke limit.",
    topViewImage: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/1.-MLPVL-Pan-Cake-Jacks-4-300x300.png",
    topViewNote: "Blue band on the Ram to indicate the stroke limit."
  },
  {
    id: "mltvl",
    name: "MLTVL Pancake Jacks",
    category: "cylinder",
    description: "High-stability pancake design for heavy industrial maintenance.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/3.-MSF-Flat-Jacks-2-300x300.png",
    color: "bg-blue-50",
   
    colors: ["#d1d5db", "#fca5a5", "#fde68a"],
    specs: {
      capacity: "5 - 150 ton",
      stroke: "6 - 16 mm",
      pressure: "700 bar"
    },
    features: [
      "Extremely low height for use in confined spaces.",
      "High strength alloy steel for durability.",
      "Chrome plated piston to resist corrosion.",
      "Base mounting holes for easy fixture."
    ],
    technicalData: {
      headers: ["Model", "Capacity (tons)", "Stroke (mm)", "Collapsed Ht (mm)", "Ext. Ht (mm)", "OD (mm)", "Weight (kg)"],
      rows: [
        ["MLTVL 5-6", "5", "6", "32", "38", "58x41", "1.0"],
        ["MLTVL 10-10", "10", "10", "43", "53", "82x55", "1.4"],
        ["MLTVL 20-11", "20", "11", "51", "62", "101x76", "2.7"],
        ["MLTVL 30-13", "30", "13", "58", "71", "117x95", "4.5"],
        ["MLTVL 50-16", "50", "16", "66", "82", "140x114", "6.8"]
      ]
    },
    topViewNote: "High-strength alloy steel construction for maximum durability."
  },
  {
    id: "msf-flat",
    name: "MSF Flat Jacks",
    category: "cylinder",
    description: "Smart-enabled flat jacks for real-time pressure monitoring.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/6.-MSP-General-Purpose-Jacks-300x300.png",
    tag: "Smart Series",
    color: "bg-blue-50",
    hasSmartIcon: true,
    isNew: true,
   
    colors: ["#94a3b8", "#38bdf8"],
    specs: {
      capacity: "5 - 100 ton",
      stroke: "10 - 15 mm",
      pressure: "700 bar"
    },
    features: [
      "Ultra-flat design with smart pressure sensors.",
      "Ideal for bridge jacking and heavy equipment leveling.",
      "Corrosion-resistant nitro-carburized finish.",
      "Integrated overflow port prevents over-extension."
    ],
    technicalData: {
      headers: ["Model", "Capacity (tons)", "Stroke (mm)", "Collapsed Ht (mm)", "OD (mm)", "Bore Dia (mm)", "Weight (kg)"],
      rows: [
        ["MSF 5", "5", "10", "41", "80", "28", "1.5"],
        ["MSF 10", "10", "12", "50", "105", "38", "3.0"],
        ["MSF 20", "20", "12", "55", "125", "50", "4.8"],
        ["MSF 50", "50", "15", "70", "165", "80", "10.0"]
      ]
    }
  },
  {
    id: "msl",
    name: "MSL Low Height Jacks",
    category: "cylinder",
    description: "Versatile low-profile jacks for machine positioning.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/2.-MLTVL-Pancake-Jacks-4-300x300.png",
    color: "bg-blue-50",
    specs: {
      capacity: "10 - 100 ton",
      stroke: "38 - 57 mm",
      pressure: "700 bar"
    },
    technicalData: {
      headers: ["Model", "Capacity (tons)", "Stroke (mm)", "Collapsed Ht (mm)", "OD (mm)", "Weight (kg)"],
      rows: [
        ["MSL 10-38", "10", "38", "88", "69", "2.3"],
        ["MSL 20-45", "20", "45", "98", "92", "4.5"],
        ["MSL 30-54", "30", "54", "117", "101", "6.5"],
        ["MSL 50-60", "50", "60", "122", "124", "10.5"]
      ]
    }
  },
  {
    id: "msls",
    name: "MSLS Low Height Jacks",
    category: "cylinder",
    description: "Spring-return low height cylinders for rapid retraction.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/2.-MLTVL-Pancake-Jacks-4-300x300.png",
    color: "bg-slate-50",
    specs: {
      capacity: "10 - 100 ton",
      stroke: "38 - 57 mm",
      pressure: "700 bar"
    },
    features: [
      "Spring-return for faster retraction.",
      "Low height design for confined areas.",
      "High-pressure seals for long life.",
      "Standard coupling included."
    ],
    technicalData: {
      headers: ["Model", "Capacity (tons)", "Stroke (mm)", "Collapsed Ht (mm)", "OD (mm)", "Weight (kg)"],
      rows: [
        ["MSLS 10-38", "10", "38", "88", "69", "2.5"],
        ["MSLS 20-45", "20", "45", "98", "92", "4.8"],
        ["MSLS 50-60", "50", "60", "122", "124", "11.0"]
      ]
    }
  },
  {
    id: "msp",
    name: "MSP General Purpose Jacks",
    category: "cylinder",
    description: "The industry workhorse for all-around lifting and pushing.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/6.-MSP-General-Purpose-Jacks-300x300.png",
    tag: "Best Seller",
    color: "bg-blue-50",
    specs: {
      capacity: "5 - 100 ton",
      stroke: "25 - 250 mm",
      pressure: "700 bar"
    },
    technicalData: {
      headers: ["Model", "Capacity (tons)", "Stroke (mm)", "Collapsed Ht (mm)", "OD (mm)", "Weight (kg)"],
      rows: [
        ["MSP 5-25", "5", "25", "110", "38", "1.0"],
        ["MSP 10-50", "10", "50", "121", "57", "2.3"],
        ["MSP 25-100", "25", "100", "165", "85", "5.9"],
        ["MSP 50-150", "50", "150", "282", "127", "18.0"]
      ]
    }
  },
  {
    id: "msps",
    name: "MSPS General Purpose Jacks",
    category: "cylinder",
    description: "Enhanced durability for continuous industrial cycles.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/6.-MSP-General-Purpose-Jacks-300x300.png",
    color: "bg-blue-100",
    specs: {
      capacity: "10 - 50 ton",
      stroke: "50 - 150 mm",
      pressure: "700 bar"
    },
    technicalData: {
      headers: ["Model", "Capacity (tons)", "Stroke (mm)", "Weight (kg)"],
      rows: [
        ["MSPS 10-50", "10", "50", "3.0"],
        ["MSPS 30-100", "30", "100", "8.5"],
        ["MSPS 50-150", "50", "150", "16.0"]
      ]
    }
  },
  {
    id: "mspu",
    name: "MSPU General Purpose Jacks",
    category: "cylinder",
    description: "Universal mounting options for integrated systems.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/6.-MSP-General-Purpose-Jacks-300x300.png",
    color: "bg-merlin-gray",
    specs: {
      capacity: "10 - 100 ton",
      stroke: "50 - 200 mm",
      pressure: "700 bar"
    },
    technicalData: {
      headers: ["Model", "Capacity (tons)", "Stroke (mm)", "Mounting", "Weight (kg)"],
      rows: [
        ["MSPU 10-50", "10", "50", "Base/Collar", "3.5"],
        ["MSPU 30-100", "30", "100", "Base/Collar", "9.0"]
      ]
    }
  },
  {
    id: "mlps",
    name: "MLPS High Tonnage Jacks",
    category: "cylinder",
    description: "Massive lifting capacity for bridge and heavy infrastructure projects.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/1.-MLPVL-Pan-Cake-Jacks-4-300x300.png",
    tag: "Heavy Duty",
    color: "bg-blue-200",
    specs: {
      capacity: "100 - 1000 ton",
      stroke: "50 - 300 mm",
      pressure: "700 bar"
    },
    technicalData: {
      headers: ["Model", "Capacity (tons)", "Stroke (mm)", "OD (mm)", "Weight (kg)"],
      rows: [
        ["MLPS 100-50", "100", "50", "220", "45.0"],
        ["MLPS 500-150", "500", "150", "450", "280.0"],
        ["MLPS 1000-300", "1000", "300", "650", "850.0"]
      ]
    }
  },
  {
    id: "mst",
    name: "MST General Purpose Jacks",
    category: "cylinder",
    description: "Standard general purpose jacks for reliable industrial use.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/6.-MSP-General-Purpose-Jacks-300x300.png",
    color: "bg-blue-50",
    specs: {
      capacity: "5 - 100 ton",
      stroke: "25 - 250 mm",
      pressure: "700 bar"
    },
    technicalData: {
      headers: ["Model", "Capacity (tons)", "Stroke (mm)", "Weight (kg)"],
      rows: [
        ["MST 5-25", "5", "25", "1.2"],
        ["MST 10-50", "10", "50", "2.5"]
      ]
    }
  },
  {
    id: "msts",
    name: "MSTS General Purpose Jacks",
    category: "cylinder",
    description: "Spring-return general purpose jacks for faster cycles.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/6.-MSP-General-Purpose-Jacks-300x300.png",
    color: "bg-slate-50",
    specs: {
      capacity: "5 - 100 ton",
      stroke: "25 - 250 mm",
      pressure: "700 bar"
    },
    technicalData: {
      headers: ["Model", "Capacity (tons)", "Stroke (mm)", "Weight (kg)"],
      rows: [
        ["MSTS 10-50", "10", "50", "2.8"],
        ["MSTS 25-100", "25", "100", "6.5"]
      ]
    }
  },
  {
    id: "mlts",
    name: "MLTS High Tonnage Jacks",
    category: "cylinder",
    description: "Telescopic high tonnage cylinders for extended reach.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/1.-MLPVL-Pan-Cake-Jacks-4-300x300.png",
    color: "bg-blue-100",
    specs: {
      capacity: "100 - 600 ton",
      stroke: "50 - 150 mm",
      pressure: "700 bar"
    },
    technicalData: {
      headers: ["Model", "Capacity (tons)", "Stroke (mm)", "Collapsed Ht (mm)", "Weight (kg)"],
      rows: [
        ["MLTS 100-50", "100", "50", "150", "35.0"],
        ["MLTS 600-100", "600", "100", "280", "190.0"]
      ]
    }
  },
  {
    id: "mdp",
    name: "MDP Multipurpose Jacks",
    category: "cylinder",
    description: "Dual-action cylinders for both tensioning and lifting.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/3.-MSF-Flat-Jacks-2-300x300.png",
    color: "bg-slate-50",
    specs: {
      capacity: "10 - 150 ton",
      stroke: "100 - 300 mm",
      pressure: "700 bar"
    },
    technicalData: {
      headers: ["Model", "Cap-Pull (tons)", "Cap-Push (tons)", "Stroke (mm)", "Weight (kg)"],
      rows: [
        ["MDP 10-150", "4", "10", "150", "12.0"],
        ["MDP 50-200", "25", "50", "200", "45.0"]
      ]
    }
  },
  {
    id: "mdps",
    name: "MDPS Multipurpose Jacks",
    category: "cylinder",
    description: "Precision-controlled multipurpose jacks for complex assemblies.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/3.-MSF-Flat-Jacks-2-300x300.png",
    color: "bg-blue-50",
    specs: {
      capacity: "20 - 100 ton",
      stroke: "150 - 300 mm",
      pressure: "700 bar"
    },
    technicalData: {
      headers: ["Model", "Cap-Pull (tons)", "Cap-Push (tons)", "Stroke (mm)", "Weight (kg)"],
      rows: [
        ["MDPS 25-150", "12", "25", "150", "18.0"]
      ]
    }
  },
  {
    id: "mhp-hand",
    name: "MHP Hand Pump",
    category: "pumping",
    description: "Manual hydraulic hand pump for precision control.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/4.-MHP-Hand-Pump-300x300.png",
    color: "bg-slate-50",
    price: "₹8500.00",
    specs: {
      capacity: "2.5 Liters",
      stroke: "N/A",
      pressure: "700 bar"
    },
    technicalData: {
      headers: ["Model", "Usable Oil (cc)", "Pressure (bar)", "Oil Outlet", "Weight (kg)"],
      rows: [
        ["MHP-1", "700", "700", "3/8 NPT", "6.5"],
        ["MHP-2", "2500", "700", "3/8 NPT", "11.0"]
      ]
    }
  },
  {
    id: "mep-electric",
    name: "MEP Electric Pump",
    category: "pumping",
    description: "High-flow electric pump for heavy-duty industrial applications.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/5.-MEP-Electric-Pump-300x300.png",
    color: "bg-blue-50",
    price: "₹45000.00",
    specs: {
      capacity: "5 - 20 Liters",
      stroke: "N/A",
      pressure: "700 bar"
    },
    technicalData: {
      headers: ["Model", "Motor (kW)", "Tank Cap (L)", "Flow Rate (Lpm)", "Voltage"],
      rows: [
        ["MEP-3", "0.75", "5", "0.8", "220V 1Ph"],
        ["MEP-5", "1.10", "10", "1.2", "415V 3Ph"]
      ]
    }
  },
  {
    id: "construction-msf150t-flat-jack",
    name: "MSF150T Flat Jack",
    category: "construction",
    description: "Low-height hydraulic flat jack for bridge, structure and heavy equipment lifting.",
    image: "/products/3. Equipments for Construction/IMG20230712121122.jpg",
    color: "bg-slate-50",
    isNew: true,
    colors: ["#d1d5db", "#64748b", "#ef4444"],
    specs: {
      capacity: "150 ton",
      stroke: "Low-height stroke",
      pressure: "Hydraulic lifting"
    },
    features: [
      "Compact flat body for construction lifting where vertical clearance is limited.",
      "Integrated hydraulic connection for controlled lifting and positioning.",
      "Designed for bridge, civil structure and heavy machinery maintenance."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Model", "MSF150T"],
        ["Application", "Construction lifting, bridge jacking, structural positioning"],
        ["Construction", "Low-height hydraulic flat jack"],
        ["Availability", "Application-specific sizing available on request"]
      ]
    }
  },
  {
    id: "construction-synchronized-jacking-system",
    name: "Synchronized Jacking System",
    category: "construction",
    description: "Multi-point hydraulic jacking setup for controlled construction lifting operations.",
    image: "/products/3. Equipments for Construction/1001.png",
    color: "bg-blue-50",
    isNew: true,
    colors: ["#111827", "#94a3b8", "#2563eb"],
    specs: {
      capacity: "Multi-point lifting",
      stroke: "Synchronized control",
      pressure: "High-pressure hydraulic"
    },
    features: [
      "Multiple pressure gauges and control valves for coordinated lifting points.",
      "Suitable for bridge, slab, girder and structure lifting operations.",
      "Built on a stable skid for construction-site use."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Control", "Multi-point hydraulic valve and gauge assembly"],
        ["Application", "Synchronized lifting and lowering"],
        ["Use case", "Bridge, structure and heavy construction alignment"],
        ["Configuration", "Custom station count and power source on request"]
      ]
    }
  },
  {
    id: "construction-hydraulic-power-pack",
    name: "Construction Hydraulic Power Pack",
    category: "construction",
    description: "Heavy-duty hydraulic power unit for construction jacks and lifting systems.",
    image: "/products/3. Equipments for Construction/IMG_2623-removebg-preview.png",
    color: "bg-slate-50",
    colors: ["#111827", "#475569", "#ef4444"],
    specs: {
      capacity: "Custom power output",
      stroke: "N/A",
      pressure: "High-pressure hydraulic"
    },
    features: [
      "Power unit with gauge and controls for construction hydraulic equipment.",
      "Supports jacking, lifting and positioning applications.",
      "Configurable tank, motor and valve options based on project needs."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "Hydraulic power pack"],
        ["Controls", "Gauge and operator controls"],
        ["Application", "Construction jacks and lifting systems"],
        ["Customization", "Tank capacity, motor rating and valves as required"]
      ]
    }
  },
  {
    id: "construction-long-stroke-cylinder",
    name: "Long Stroke Construction Cylinder",
    category: "construction",
    description: "Long-stroke hydraulic cylinder for bridge and construction positioning systems.",
    image: "/products/3. Equipments for Construction/IMG_3494-removebg-preview.png",
    color: "bg-blue-50",
    colors: ["#64748b", "#94a3b8", "#ef4444"],
    specs: {
      capacity: "Project-specific",
      stroke: "Long stroke",
      pressure: "Hydraulic positioning"
    },
    features: [
      "Long cylinder body with clevis-style mounting for construction assemblies.",
      "Used for pushing, pulling, aligning and positioning heavy structures.",
      "Can be paired with hydraulic power packs for field operation."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "Long-stroke hydraulic cylinder"],
        ["Mounting", "Clevis-style end connection"],
        ["Application", "Bridge and civil construction positioning"],
        ["Stroke", "Made to suit project requirements"]
      ]
    }
  },
  {
    id: "construction-strand-jacking-system",
    name: "Strand Jacking System",
    category: "construction",
    description: "Hydraulic strand jacking kit for lifting and holding heavy construction loads.",
    image: "/products/3. Equipments for Construction/IMG_3493-removebg-preview.png",
    color: "bg-slate-50",
    colors: ["#64748b", "#94a3b8", "#111827"],
    specs: {
      capacity: "Heavy construction loads",
      stroke: "System-specific",
      pressure: "Hydraulic jacking"
    },
    features: [
      "Complete construction lifting setup with power unit, long cylinders and supports.",
      "Designed for controlled lifting, holding and alignment work.",
      "Suitable for bridge and large civil structure applications."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["System", "Hydraulic jacking kit"],
        ["Includes", "Power unit, cylinders and support fixtures"],
        ["Application", "Construction lifting and structure alignment"],
        ["Configuration", "Custom capacity and layout available"]
      ]
    }
  },
  {
    id: "construction-heavy-hydraulic-jack",
    name: "Heavy Construction Jack",
    category: "construction",
    description: "High-capacity hydraulic jack for civil construction lifting and support.",
    image: "/products/3. Equipments for Construction/IMG_3190-.png",
    color: "bg-blue-50",
    colors: ["#1d4ed8", "#64748b", "#111827"],
    specs: {
      capacity: "High capacity",
      stroke: "Project-specific",
      pressure: "Hydraulic lifting"
    },
    features: [
      "Robust cylinder body for heavy civil construction applications.",
      "Designed for high-load lifting, support and positioning.",
      "Available with project-specific stroke and mounting options."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "Heavy hydraulic jack"],
        ["Application", "Civil construction and structural lifting"],
        ["Capacity", "Configured to project load requirements"],
        ["Options", "Custom stroke, body size and mounting"]
      ]
    }
  },
  {
    id: "construction-compact-hydraulic-jack",
    name: "Compact Construction Jack",
    category: "construction",
    description: "Compact hydraulic jack for construction lifting and maintenance work.",
    image: "/products/3. Equipments for Construction/IMG_2653-.png",
    color: "bg-orange-50",
    colors: ["#f97316", "#94a3b8", "#111827"],
    specs: {
      capacity: "Project-specific",
      stroke: "Compact stroke",
      pressure: "Hydraulic lifting"
    },
    features: [
      "Compact vertical jack body for field lifting applications.",
      "Hydraulic connection points support controlled operation.",
      "Suitable for construction support, positioning and maintenance tasks."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "Compact hydraulic jack"],
        ["Application", "Construction lifting and support"],
        ["Configuration", "Custom capacity and stroke available"],
        ["Operation", "Hydraulic power pack or hand pump"]
      ]
    }
  },
  {
    id: "construction-high-capacity-jack",
    name: "High Capacity Construction Jack",
    category: "construction",
    description: "Heavy-duty construction jack for demanding lifting and alignment operations.",
    image: "/products/3. Equipments for Construction/IMG_2654-.png",
    color: "bg-orange-50",
    colors: ["#f97316", "#94a3b8", "#111827"],
    specs: {
      capacity: "High capacity",
      stroke: "Project-specific",
      pressure: "Hydraulic lifting"
    },
    features: [
      "Heavy jack construction for demanding site loads.",
      "Designed for stable lifting and structural positioning.",
      "Can be supplied as part of a complete hydraulic lifting system."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "High-capacity hydraulic jack"],
        ["Application", "Construction lifting and alignment"],
        ["Supply", "Standalone jack or integrated system"],
        ["Customization", "Capacity and stroke to suit site requirements"]
      ]
    }
  },
  {
    id: "construction-telescopic-jack",
    name: "Telescopic Construction Jack",
    category: "construction",
    description: "Telescopic-style hydraulic jack for construction lifting applications.",
    image: "/products/3. Equipments for Construction/IMG_2656-.png",
    color: "bg-slate-50",
    colors: ["#f97316", "#94a3b8", "#475569"],
    specs: {
      capacity: "Project-specific",
      stroke: "Extended stroke",
      pressure: "Hydraulic lifting"
    },
    features: [
      "Extended body design for construction lifting and positioning.",
      "Hydraulic operation supports controlled movement under load.",
      "Suitable for project-specific lifting systems."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "Telescopic-style construction jack"],
        ["Application", "Lifting, positioning and support"],
        ["Stroke", "Extended stroke configuration"],
        ["Customization", "Project-specific capacity and interface"]
      ]
    }
  },
  {
    id: "construction-hand-pump-25",
    name: "Hydraulic Hand Pump 25",
    category: "construction",
    description: "Manual hydraulic hand pump for construction lifting equipment.",
    image: "/products/3. Equipments for Construction/Hydraulic Power Pack & Hand Pump/25.png",
    color: "bg-blue-50",
    colors: ["#1d4ed8", "#94a3b8", "#111827"],
    specs: {
      capacity: "Manual pump",
      stroke: "N/A",
      pressure: "Hydraulic hand pump"
    },
    features: [
      "Manual pressure generation for hydraulic jacks and construction tools.",
      "Portable setup for field maintenance and lifting work.",
      "Suitable for controlled low-volume hydraulic operation."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "Hydraulic hand pump"],
        ["Operation", "Manual"],
        ["Application", "Construction jacks and hydraulic tools"],
        ["Portability", "Field-ready pump unit"]
      ]
    }
  },
  {
    id: "construction-hand-pump-26",
    name: "Hydraulic Hand Pump 26",
    category: "construction",
    description: "Portable manual hydraulic pump for construction jacking applications.",
    image: "/products/3. Equipments for Construction/Hydraulic Power Pack & Hand Pump/26.png",
    color: "bg-slate-50",
    colors: ["#1d4ed8", "#64748b", "#111827"],
    specs: {
      capacity: "Manual pump",
      stroke: "N/A",
      pressure: "Hydraulic hand pump"
    },
    features: [
      "Hand-operated hydraulic pressure source for site work.",
      "Compact format for construction and maintenance teams.",
      "Pairs with compatible hydraulic jacks and cylinders."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "Portable hydraulic hand pump"],
        ["Operation", "Manual"],
        ["Application", "Hydraulic jacking and maintenance"],
        ["Compatibility", "Hydraulic cylinders and tools"]
      ]
    }
  },
  {
    id: "construction-power-pack-29",
    name: "Hydraulic Power Pack 29",
    category: "construction",
    description: "Electric hydraulic power pack for construction lifting systems.",
    image: "/products/3. Equipments for Construction/Hydraulic Power Pack & Hand Pump/29.png",
    color: "bg-blue-50",
    colors: ["#111827", "#64748b", "#ef4444"],
    specs: {
      capacity: "Electric power unit",
      stroke: "N/A",
      pressure: "High-pressure hydraulic"
    },
    features: [
      "Electric power unit for construction hydraulic equipment.",
      "Supports repeated lifting and positioning cycles.",
      "Available with custom tank, motor and valve combinations."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "Hydraulic power pack"],
        ["Drive", "Electric"],
        ["Application", "Construction lifting systems"],
        ["Customization", "Tank, motor and valve package on request"]
      ]
    }
  },
  {
    id: "construction-power-pack-30",
    name: "Hydraulic Power Pack 30",
    category: "construction",
    description: "Hydraulic power unit for construction cylinders and jacks.",
    image: "/products/3. Equipments for Construction/Hydraulic Power Pack & Hand Pump/30.png",
    color: "bg-slate-50",
    colors: ["#111827", "#64748b", "#2563eb"],
    specs: {
      capacity: "Electric power unit",
      stroke: "N/A",
      pressure: "High-pressure hydraulic"
    },
    features: [
      "Power pack designed for construction hydraulic actuation.",
      "Supports controlled pressure delivery to jacks and cylinders.",
      "Can be configured for project-specific flow and pressure needs."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "Hydraulic power unit"],
        ["Application", "Construction jacks and cylinders"],
        ["Controls", "Project-specific valve controls"],
        ["Configuration", "Custom power and reservoir options"]
      ]
    }
  },
  {
    id: "construction-power-pack-31",
    name: "Hydraulic Power Pack 31",
    category: "construction",
    description: "Compact power pack for construction-site hydraulic operations.",
    image: "/products/3. Equipments for Construction/Hydraulic Power Pack & Hand Pump/31.png",
    color: "bg-blue-50",
    colors: ["#111827", "#64748b", "#ef4444"],
    specs: {
      capacity: "Compact power unit",
      stroke: "N/A",
      pressure: "Hydraulic power"
    },
    features: [
      "Compact hydraulic power source for site lifting work.",
      "Designed for reliable field operation with hydraulic jacks.",
      "Custom controls and pressure ratings available."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "Compact hydraulic power pack"],
        ["Application", "Site lifting and hydraulic tooling"],
        ["Operation", "Electric hydraulic"],
        ["Customization", "Control and pressure package on request"]
      ]
    }
  },
  {
    id: "construction-power-pack-32",
    name: "Hydraulic Power Pack 32",
    category: "construction",
    description: "High-pressure hydraulic power pack for construction lifting equipment.",
    image: "/products/3. Equipments for Construction/Hydraulic Power Pack & Hand Pump/32.png",
    color: "bg-slate-50",
    colors: ["#111827", "#94a3b8", "#2563eb"],
    specs: {
      capacity: "High-pressure unit",
      stroke: "N/A",
      pressure: "High-pressure hydraulic"
    },
    features: [
      "High-pressure power pack for hydraulic construction equipment.",
      "Suitable for repeated lifting, pressing and positioning operations.",
      "Configurable for project flow and pressure requirements."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "High-pressure hydraulic power pack"],
        ["Application", "Construction lifting and positioning"],
        ["Use", "Jacks, cylinders and hydraulic tools"],
        ["Configuration", "Custom motor, pump and reservoir options"]
      ]
    }
  },
  {
    id: "construction-mobile-power-pack",
    name: "Mobile Hydraulic Power Pack",
    category: "construction",
    description: "Mobile power pack for portable construction hydraulic operations.",
    image: "/products/3. Equipments for Construction/Hydraulic Power Pack & Hand Pump/IMG_3509-removebg-preview.png",
    color: "bg-blue-50",
    colors: ["#111827", "#64748b", "#ef4444"],
    specs: {
      capacity: "Mobile power unit",
      stroke: "N/A",
      pressure: "Hydraulic power"
    },
    features: [
      "Portable hydraulic power pack for field deployment.",
      "Supports construction jacks, cylinders and lifting systems.",
      "Useful for site maintenance and controlled load movement."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "Mobile hydraulic power pack"],
        ["Application", "Field construction hydraulics"],
        ["Operation", "Portable power unit"],
        ["Compatibility", "Hydraulic cylinders and jacks"]
      ]
    }
  },
  {
    id: "construction-power-pack-3904",
    name: "Hydraulic Power Pack 3904",
    category: "construction",
    description: "Industrial hydraulic power pack for high-force construction applications.",
    image: "/products/3. Equipments for Construction/Hydraulic Power Pack & Hand Pump/IMG_3904.png",
    color: "bg-slate-50",
    colors: ["#111827", "#64748b", "#2563eb"],
    specs: {
      capacity: "Industrial power unit",
      stroke: "N/A",
      pressure: "High-pressure hydraulic"
    },
    features: [
      "Industrial power pack for demanding hydraulic work.",
      "Designed to supply construction lifting and positioning equipment.",
      "Customizable for pressure, flow and control mode."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "Industrial hydraulic power pack"],
        ["Application", "High-force construction hydraulics"],
        ["Controls", "Manual, push button or custom controls"],
        ["Customization", "Pressure and flow to project requirement"]
      ]
    }
  },
  {
    id: "construction-power-pack",
    name: "Hydraulic Power Pack",
    category: "construction",
    description: "Construction hydraulic power pack for jacking and lifting systems.",
    image: "/products/3. Equipments for Construction/Hydraulic Power Pack & Hand Pump/Powerpack.png",
    color: "bg-blue-50",
    colors: ["#111827", "#94a3b8", "#ef4444"],
    specs: {
      capacity: "Custom power output",
      stroke: "N/A",
      pressure: "High-pressure hydraulic"
    },
    features: [
      "Hydraulic power pack for construction lifting applications.",
      "Supports jacks, cylinders and multi-point lifting systems.",
      "Available in custom configurations for project needs."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "Hydraulic power pack"],
        ["Application", "Construction jacking and lifting"],
        ["Supply", "Standalone or integrated with lifting systems"],
        ["Customization", "Motor, tank, pump and valve options"]
      ]
    }
  },
  {
    id: "construction-power-pack-2",
    name: "Hydraulic Power Pack 2",
    category: "construction",
    description: "Alternate hydraulic power pack configuration for construction systems.",
    image: "/products/3. Equipments for Construction/Hydraulic Power Pack & Hand Pump/powerpack 2.png",
    color: "bg-slate-50",
    colors: ["#111827", "#64748b", "#ef4444"],
    specs: {
      capacity: "Custom power output",
      stroke: "N/A",
      pressure: "High-pressure hydraulic"
    },
    features: [
      "Alternate construction power pack build for hydraulic equipment.",
      "Configurable hydraulic circuit and reservoir arrangement.",
      "Suitable for jacks, cylinders and lifting fixtures."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "Hydraulic power pack"],
        ["Application", "Construction hydraulic systems"],
        ["Configuration", "Alternate power pack layout"],
        ["Customization", "Project-specific flow and controls"]
      ]
    }
  },
  {
    id: "construction-pp-power-unit",
    name: "PP Hydraulic Power Unit",
    category: "construction",
    description: "Hydraulic power unit for construction-site lifting and positioning work.",
    image: "/products/3. Equipments for Construction/Hydraulic Power Pack & Hand Pump/pp.png",
    color: "bg-blue-50",
    colors: ["#111827", "#64748b", "#2563eb"],
    specs: {
      capacity: "Power unit",
      stroke: "N/A",
      pressure: "Hydraulic power"
    },
    features: [
      "Power unit for operating construction hydraulic equipment.",
      "Built for field lifting, pressing and positioning duties.",
      "Custom pressure and control packages available."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "Hydraulic power unit"],
        ["Application", "Construction lifting equipment"],
        ["Use", "Jacks, cylinders and hydraulic tools"],
        ["Customization", "Pressure, flow and controls to requirement"]
      ]
    }
  },
  {
    id: "construction-pp1-power-unit",
    name: "PP1 Hydraulic Power Unit",
    category: "construction",
    description: "Hydraulic power unit variant for construction lifting equipment.",
    image: "/products/3. Equipments for Construction/Hydraulic Power Pack & Hand Pump/pp1.png",
    color: "bg-slate-50",
    colors: ["#111827", "#64748b", "#ef4444"],
    specs: {
      capacity: "Power unit",
      stroke: "N/A",
      pressure: "Hydraulic power"
    },
    features: [
      "Hydraulic power unit variant for construction-site operation.",
      "Designed to run compatible jacks and cylinders.",
      "Can be supplied with custom valves and controls."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Type", "Hydraulic power unit"],
        ["Application", "Construction jacks and cylinders"],
        ["Configuration", "Power unit variant"],
        ["Customization", "Project-specific hydraulic package"]
      ]
    }
  },
  {
    id: "steel-bolt-tensioners",
    name: "Bolt Tensioners",
    category: "steel",
    description: "Hydraulic hollow cylinders used to pre-tension bolts in heavy steel applications.",
    image: "/steel-products/bolt-tensioners.png",
    color: "bg-slate-50",
    specs: {
      capacity: "Standard and special sizes",
      stroke: "Application-specific",
      pressure: "Hydraulic pre-tensioning"
    },
    features: [
      "Hydraulic hollow cylinder with internally threaded piston screwed to the bolt.",
      "Hydraulic pressure stretches the bolt to a predefined pre-tension.",
      "Nut can be tightened through the tensioner window after pre-tensioning.",
      "Standard sizes are available and special sizes can be provided on request."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Construction", "Hydraulic hollow cylinder with internally threaded piston"],
        ["Operation", "Stretches bolt to predefined pre-tension using hydraulic pressure"],
        ["Nut tightening", "Window provided in tensioner for tightening after pre-tensioning"],
        ["Availability", "Standard sizes and special sizes on request"]
      ]
    }
  },
  {
    id: "steel-hydraulic-nut",
    name: "Hydraulic Nut",
    category: "steel",
    description: "Hydraulic nuts replace mechanical nuts to apply controlled force on the system.",
    image: "/steel-products/hydraulic-nut.png",
    color: "bg-blue-50",
    specs: {
      capacity: "Up to 800 mm size",
      stroke: "6 mm - 20 mm",
      pressure: "Up to 1000 bar"
    },
    features: [
      "Replaces traditional mechanical nuts for controlled hydraulic force application.",
      "Mounted using several bolts or internal threads fastened to the shaft.",
      "Mechanical tension ring is tightened before hydraulic pressure is removed.",
      "Suitable for steel mills, saws, marine and similar heavy applications."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Thread type", "Metric, inch, square threads"],
        ["Pressure", "Up to 1000 bar"],
        ["Stroke", "6 mm - 20 mm, depending on application"],
        ["Size", "Up to 800 mm"],
        ["Applications", "Steel mills, saws, marine etc."]
      ]
    }
  },
  {
    id: "steel-hydraulic-cylinders",
    name: "Hydraulic Cylinders",
    category: "steel",
    description: "Large hydraulic cylinders designed for harsh primary metal and steel mill environments.",
    image: "/steel-products/hydraulic-cylinders.png",
    color: "bg-blue-50",
    specs: {
      capacity: "30 mm - 600 mm sizes",
      stroke: "Up to 10 m",
      pressure: "Heavy steel duty"
    },
    features: [
      "Designed for tough demands of primary metal customers.",
      "Used in arc furnaces, slab casters, rolling mills, material handling and levellers.",
      "Built to operate in extremely harsh conditions in the steel industry.",
      "Available in multiple construction and mounting types."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Size range", "30 mm - 600 mm"],
        ["Stroke", "Up to 10 m"],
        ["Applications", "Arc furnaces, slab casters, rolling mills, material handling, levellers"],
        ["Construction types", "Flange mount, trunnion mount, foot side lugs, clevis mount, tie rod cylinder, mill duty cylinder"]
      ]
    }
  },
  {
    id: "steel-hydraulic-jacks",
    name: "Hydraulic Jacks",
    category: "steel",
    description: "Multifunction hydraulic jacks for lifting, aligning, pushing, pulling and load locking.",
    image: "/steel-products/hydraulic-jacks.png",
    color: "bg-slate-50",
    specs: {
      capacity: "5 MT - 2000 MT",
      stroke: "Various strokes",
      pressure: "Steel mill duty"
    },
    features: [
      "Wide range of multifunction jacks for mechanical and steel industry applications.",
      "Available in various sizes, tonnage, strokes and global standard construction.",
      "Suited for precision lifting, aligning, pushing, pulling and load locking.",
      "Available as single acting or double acting construction."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Capacity range", "5 MT - 2000 MT"],
        ["Hydraulic construction", "Single acting / double acting"],
        ["Ram construction", "Plain / hollow / axial misalign"],
        ["Applications", "Precision lifting, aligning, pushing, pulling, load locking"]
      ]
    }
  },
  {
    id: "steel-hydraulic-pullers",
    name: "Hydraulic Pullers",
    category: "steel",
    description: "Heavy-duty hydraulic pullers for dismounting gears, pulleys and bearings.",
    image: "/steel-products/hydraulic-pullers.png",
    color: "bg-blue-50",
    specs: {
      capacity: "10 MT - 800 MT",
      stroke: "Application-specific",
      pressure: "Hydraulic pulling"
    },
    features: [
      "Designed for heavy-duty maintenance and repair work in steel industries.",
      "Used to dismount gears, pulleys, bearings and similar assemblies.",
      "Applied in steel mills, rolling mills, automobile industry, sugar and more.",
      "Manufactured in multiple puller types and capacities based on application."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Capacity", "10 MT - 800 MT"],
        ["Types", "2 jaw / 3 jaw puller"],
        ["Types", "Rod puller / pusher"],
        ["Types", "Bearing lap puller, bearing puller, mill sprocket puller"],
        ["Applications", "Steel mills, rolling mills, automobile industry, sugar industry"]
      ]
    }
  },
  {
    id: "steel-hydraulic-clamps",
    name: "Hydraulic Clamps",
    category: "steel",
    description: "High-force hydraulic clamps for holding machines or blocks in place.",
    image: "/steel-products/hydraulic-clamps.png",
    color: "bg-orange-50",
    specs: {
      capacity: "High force clamping",
      stroke: "5 mm - 50 mm",
      pressure: "Hydraulic clamping"
    },
    features: [
      "Provides higher force when manual force is not sufficient.",
      "Used as shock absorption devices on the mounting of mill stands.",
      "Opens under hydraulic force to ease extraction of mill stands during maintenance.",
      "Deploys on wedges after pressure release to clamp the mill in position."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Stroke range", "5 mm - 50 mm"],
        ["Application", "Mill stand mounting and maintenance"],
        ["Function", "Hydraulic opening and wedge-based clamping"],
        ["Use case", "Holding machines or blocks in place when manual force is insufficient"]
      ]
    }
  },
  {
    id: "steel-ring-nuts-swing-bolt",
    name: "Ring Nuts / Swing Bolt",
    category: "steel",
    description: "Pre-stressed clamping devices used to clamp mill stands to the base.",
    image: "/steel-products/ring-nuts-swing-bolt.png",
    color: "bg-slate-50",
    specs: {
      capacity: "Mill stand clamping",
      stroke: "Application-specific",
      pressure: "Hydraulic pre-stress"
    },
    features: [
      "Used to clamp mill stands to the base for primary metal customers.",
      "Designed for pre-stressing to sustain variable loads of drawn products.",
      "Top nut is tightened and fixed into locking position after pressure is applied.",
      "Hydraulic pressure is reapplied to remove loads and unclamp the device."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Application", "Mill stand base clamping"],
        ["Operation", "Hydraulic pressure pre-stresses bolt and locks top nut"],
        ["Release", "Pressure is reapplied and top nut is opened to unclamp"],
        ["Industry", "Primary metal and steel mill applications"]
      ]
    }
  },
  {
    id: "steel-hydraulic-powerpack",
    name: "Hydraulic Powerpack",
    category: "steel",
    description: "Custom robust powerpacks for high-pressure steel and sheet metal applications.",
    image: "/steel-products/hydraulic-powerpack.png",
    color: "bg-blue-50",
    specs: {
      capacity: "Custom power outputs",
      stroke: "N/A",
      pressure: "High pressure applications"
    },
    features: [
      "Robust, high power generating hydraulic machines for demanding applications.",
      "Used for automobiles, sheet metal presses, rolling mills and steel mills.",
      "Each assembly is customized to suit the application and component criteria.",
      "Supports pressure control, flow control and operating modes such as manual, push button or PLC."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Applications", "Automobiles, sheet metal presses, rolling mills, steel mills"],
        ["Customization", "Component selection based on application-specific criteria"],
        ["Controls", "Pressure control, flow control, different power outputs"],
        ["Operating modes", "Manual, push button, PLC operated"]
      ]
    }
  },
  {
    id: "steel-accessories",
    name: "Steel Mill Accessories",
    category: "steel",
    description: "Replacement accessories for seals, valves, hoses, fittings, coolers, springs, accumulators and pumps.",
    image: "/steel-products/accessories.png",
    color: "bg-slate-50",
    specs: {
      capacity: "Major brand replacements",
      stroke: "N/A",
      pressure: "System-specific"
    },
    features: [
      "One-to-one replacement of major accessory brands for existing setups.",
      "Accessory coverage includes seals, valves, hoses, fittings, coolers, springs, accumulators and pumps.",
      "Compatible with leading brands including Parker, Hallite, Rexroth, Hydac, Eaton, Yuken and more.",
      "Selected to work perfectly with installed hydraulic systems."
    ],
    technicalData: {
      headers: ["Accessory", "Supported brands"],
      rows: [
        ["Seals", "Merkel, Hallite, Parker, Max Spare"],
        ["Valves", "Yuken, Rexroth, Hydac, Polyhydron"],
        ["Hoses", "Parker, Polyhose"],
        ["Fittings", "Eaton, Parker"],
        ["Coolers", "Shell & tube, air cooled"],
        ["Springs", "Mubea, Gala, Schnorr"],
        ["Accumulators", "Hydac, EPE, Olear"],
        ["Pumps", "Yuken, Eaton, Dynamatic, Veljan, Nachi"]
      ]
    }
  },
  {
    id: "steel-turnkey-solutions",
    name: "Turnkey Solutions",
    category: "steel",
    description: "Custom hydraulic system development, installation and post-sales support for steel projects.",
    image: "/steel-products/turnkey-solutions.png",
    color: "bg-blue-50",
    specs: {
      capacity: "Custom projects",
      stroke: "Application-specific",
      pressure: "System-specific"
    },
    features: [
      "Efficient turnkey hydraulic systems tailored to field requirements.",
      "Designers develop solutions through active interaction with clients.",
      "Covers product innovation, project development, installation and support.",
      "Backed by over 25 years of collective project experience."
    ],
    technicalData: {
      headers: ["Specification", "Details"],
      rows: [
        ["Scope", "Custom hydraulic systems and field solutions"],
        ["Project support", "Design, development, installation stage expertise"],
        ["Experience", "Over 25 years of successful project knowledge"],
        ["Service", "Dedicated post-sales hydraulic machinery support"]
      ]
    }
  },
  {
    id: "msc-sugar",
    name: "MSC Sugar Mill Jack",
    category: "sugar",
    description: "Specialized hydraulic jacks for sugar mill maintenance.",
    image: "https://www.merlinhydraulics.com/wp-content/uploads/2026/03/9.-MSC-Sugar-Mill-Jack-300x300.png",
    color: "bg-blue-50",
    specs: {
      capacity: "250 - 500 ton",
      stroke: "150 - 300 mm",
      pressure: "700 bar"
    },
    technicalData: {
      headers: ["Model", "Cap (tons)", "Stroke (mm)", "Closed Ht (mm)", "Weight (kg)"],
      rows: [
        ["MSC-250", "250", "150", "420", "110"],
        ["MSC-500", "500", "300", "650", "320"]
      ]
    }
  }
];

const CYLINDER_FEATURES = [
  "Designed for high-pressure hydraulic lifting and positioning.",
  "Robust construction for demanding industrial applications.",
  "Precision-machined components for reliable operation.",
  "Suitable for maintenance, construction, and heavy equipment work."
];

export const PRODUCTS: Product[] = BASE_PRODUCTS.map((product) => ({
  ...product,
  ...(product.category === 'cylinder' && !product.features ? { features: CYLINDER_FEATURES } : {}),
  ...(product.category === 'cylinder' && !product.subtitle ? { subtitle: product.description } : {}),
  ...(product.category === 'cylinder' && !product.topViewNote ? { topViewNote: product.specs?.pressure || 'Hydraulic cylinder technical reference.' } : {}),
  ...PRODUCT_ASSETS[product.id],
}));
