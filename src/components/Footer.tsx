import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = ({ onNavigate }: { onNavigate?: (view: string) => void }) => {
  return (
    <footer
      id="footer"
      className="border-t border-black/10 bg-merlin-sage text-black"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[320px_1fr]">
          
          {/* LEFT SECTION */}
          <div className="flex flex-col justify-between">
            {/* Logo */}
            <div>
              <button
                onClick={() => onNavigate?.('home')}
                className="transition-opacity hover:opacity-90"
              >
                <img
                  src="/hero_section_videos/used_Icon/logo.png"
                  alt="Merlin Hydraulics"
                  className="w-[240px] object-contain"
                />
              </button>

              {/* Short Tagline */}
              
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              {[
                {
                  icon: Linkedin,
                  href: '#',
                },
                {
                  icon: Instagram,
                  href: '#',
                },
                {
                  icon: Twitter,
                  href: '#',
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.href}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-merlin-blue hover:bg-merlin-blue hover:text-white"
                  >
                    <Icon size={18} strokeWidth={2.4} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Solutions */}
            <div>
              <h5 className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-black">
                Solutions
              </h5>

              <ul className="space-y-3 text-sm font-medium text-black/70">
                <li>
                  <button
                    onClick={() => onNavigate?.('infrastructure')}
                    className="transition-colors hover:text-merlin-blue"
                  >
                    Infrastructure
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => onNavigate?.('store')}
                    className="transition-colors hover:text-merlin-blue"
                  >
                    Hydraulic Jacks
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => onNavigate?.('store')}
                    className="transition-colors hover:text-merlin-blue"
                  >
                    Hydraulic Cylinders
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => onNavigate?.('store')}
                    className="transition-colors hover:text-merlin-blue"
                  >
                    Hydraulic Pumps
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-black">
                Company
              </h5>

              <ul className="space-y-3 text-sm font-medium text-black/70">
                <li>
                  <button
                    onClick={() => onNavigate?.('about')}
                    className="transition-colors hover:text-merlin-blue"
                  >
                    About Us
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => onNavigate?.('home')}
                    className="transition-colors hover:text-merlin-blue"
                  >
                    Home
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => onNavigate?.('gallery')}
                    className="transition-colors hover:text-merlin-blue"
                  >
                    Gallery
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="transition-colors hover:text-merlin-blue"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h5 className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-black">
                Address
              </h5>

              <div className="text-sm font-medium leading-7 text-black/70">
                <p>
                  681/B, Old Glascon Shed
                  <br />
                  Angol Industrial Estate,
                  <br />
                  Udyambag, Belagavi
                  <br />
                  Karnataka 590008
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h5 className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-black">
                Get in Touch
              </h5>

              <div className="space-y-3 text-sm font-medium">
                <a
                  href="mailto:marketing@merlinhydraulics.com"
                  className="block text-black/70 transition-colors hover:text-merlin-blue"
                >
                  marketing@merlinhydraulics.com
                </a>

                <a
                  href="mailto:info@merlinhydraulics.com"
                  className="block text-black/70 transition-colors hover:text-merlin-blue"
                >
                  info@merlinhydraulics.com
                </a>

                <a
                  href="tel:+919513941001"
                  className="block leading-7 text-merlin-blue transition-colors hover:text-blue-700"
                >
                  +91 951 394 1001
                  <br />
                  +91 936 401 1001
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-black/10 pt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Merlin Hydraulics Pvt. Ltd.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;