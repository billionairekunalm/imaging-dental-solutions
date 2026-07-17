import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 overflow-hidden shrink-0">
                <img src="/images/logo.png" alt="Imaging Dental Solutions Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-semibold text-xl tracking-wide text-white">
                Imaging Dental <span className="font-light text-white/70">Solutions</span>
              </span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Pune's Premier Diagnostic Network. Providing state-of-the-art 2D and 3D dental imaging with unparalleled precision.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/shri_sudantee/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#4FC3F7] hover:text-white flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.youtube.com/@imagindentalsolutions9564" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF0000] hover:text-white flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h3>
            <ul className="space-y-4 text-sm opacity-80">
              <li><Link href="/" className="hover:text-[#4FC3F7] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#4FC3F7] transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-[#4FC3F7] transition-colors">Careers</Link></li>
              <li><Link href="/#services" className="hover:text-[#4FC3F7] transition-colors">Our Services</Link></li>
              <li><Link href="/#team" className="hover:text-[#4FC3F7] transition-colors">Our Team</Link></li>
            </ul>
          </div>

          {/* Our Centers */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Our Centers</h3>
            <ul className="space-y-4 text-sm opacity-80">
              <li><Link href="/#branches" className="hover:text-[#4FC3F7] transition-colors">Wakad</Link></li>
              <li><Link href="/#branches" className="hover:text-[#4FC3F7] transition-colors">Chinchwad</Link></li>
              <li><Link href="/#branches" className="hover:text-[#4FC3F7] transition-colors">Hinjawadi</Link></li>
              <li><Link href="/#branches" className="hover:text-[#4FC3F7] transition-colors">Sangavi</Link></li>
              <li><Link href="/#branches" className="hover:text-[#4FC3F7] transition-colors">Ravet</Link></li>
              <li><Link href="/#branches" className="hover:text-[#4FC3F7] transition-colors">Dombivali</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Contact Us</h3>
            <ul className="space-y-4 text-sm opacity-80">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#4FC3F7] shrink-0" />
                <a href="tel:+918446231590" className="hover:text-white transition-colors">+91 8446231590</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4FC3F7] shrink-0" />
                <span>Available at 6 locations across Pune and Mumbai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>© {new Date().getFullYear()} Imaging Dental Solutions. All rights reserved.</p>
          <p>
            Created and managed by <a href="https://intellobyte.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4FC3F7] font-semibold transition-colors">intellobyte.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
