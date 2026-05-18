import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = ({ onNavigate }: { onNavigate?: (view: string) => void }) => {
  return (
    <footer id="footer" className="bg-[#e5e7eb] text-gray-900 pt-10 sm:pt-12 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-col items-center justify-center">
          <button
            onClick={() => onNavigate?.('home')}
            className="hover:opacity-90 transition-opacity flex items-center justify-center"
          >
            <img
              src="/hero_section_videos/used_Icon/logo.png"
              alt="Merlin Hydraulics"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </button>
          <div className="mt-7 flex justify-center gap-4">
            {[Linkedin, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-11 h-11 rounded-full border border-white/80 bg-white/35 flex items-center justify-center hover:bg-merlin-blue hover:text-white transition-all text-gray-900">
                <Icon size={20} strokeWidth={3} />
              </a>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-10">
          <div>
            <h5 className="text-[10px] font-black mb-6 uppercase tracking-[0.3em] text-gray-700">Solutions</h5>
            <ul className="space-y-2 text-xs font-medium text-gray-600">
              <li><button onClick={() => onNavigate?.('infrastructure')} className="hover:text-merlin-blue transition-colors">Infrastructure</button></li>
              <li><button onClick={() => onNavigate?.('store')} className="hover:text-merlin-blue transition-colors">Hydraulic Jacks</button></li>
              <li><button onClick={() => onNavigate?.('store')} className="hover:text-merlin-blue transition-colors">Hydraulic Cylinders</button></li>
              <li><button onClick={() => onNavigate?.('store')} className="hover:text-merlin-blue transition-colors">Hydraulic Pumps</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-black mb-6 uppercase tracking-[0.3em] text-gray-700">Company</h5>
            <ul className="space-y-2 text-xs font-medium text-gray-600">
              <li><button onClick={() => onNavigate?.('about')} className="hover:text-merlin-blue transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate?.('home')} className="hover:text-merlin-blue transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate?.('gallery')} className="hover:text-merlin-blue transition-colors">Gallery</button></li>
              <li><button onClick={() => onNavigate?.('contact')} className="hover:text-merlin-blue transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-black mb-6 uppercase tracking-[0.3em] text-gray-700">Address</h5>
            <div className="text-xs font-medium text-gray-600">
              <p className="leading-relaxed">
                681/B, Old Glascon Shed<br />
                Angol Industrial Estate,<br />
                Udyambag, Belagavi,<br />
                Karnataka 590008
              </p>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-start lg:items-end">
            <h5 className="text-[10px] font-black mb-6 uppercase tracking-[0.3em] text-gray-700">Get in Touch</h5>
            <div className="text-xs font-medium text-gray-900 lg:text-right space-y-1 max-w-[260px]">
              <p className="hover:text-merlin-blue transition-colors cursor-pointer">marketing@merlinhydraulics.com</p>
              <p className="hover:text-merlin-blue transition-colors cursor-pointer">info@merlinhydraulics.com</p>
              <p className="hover:text-merlin-blue transition-colors cursor-pointer text-merlin-blue font-bold leading-relaxed">+91 951 394 1001<br className="hidden lg:block" /> | +91 936 401 1001</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <p>© 2026 Merlin Hydraulics Pvt. Ltd.</p>
          <p>Precision Engineered Solutions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
