"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Microscope,
  Image as ImageIcon,
  UserSquare2,
  Activity,
  MessageCircle,
  MapIcon,
  AlertTriangle
} from "lucide-react";
import { ChevronRight, ArrowRight, ArrowLeft, Menu, X } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

function HoverVideo({ src, poster }: { src: string, poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (window.matchMedia("(hover: hover)").matches) {
      videoRef.current?.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia("(hover: hover)").matches) {
      videoRef.current?.pause();
    }
  };

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      videoRef.current?.play().catch(() => {});
    }
  }, []);

  return (
    <div 
      className="snap-center shrink-0 w-[280px] sm:w-[320px] h-[480px] sm:h-[540px] bg-black rounded-3xl overflow-hidden shadow-xl border border-outline/10 relative flex items-center justify-center group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video 
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 pointer-events-none flex items-center justify-center">
         <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:opacity-0 transition-opacity duration-300">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
         </div>
      </div>
    </div>
  );
}

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Clean Minimalist Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-6xl z-50 transition-all duration-500">
        <div className="mx-4 md:mx-6 px-6 h-[72px] bg-black/15 hover:bg-black/25 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-between transition-colors duration-500">
          
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 overflow-hidden shrink-0">
              <img src="/images/logo.png" alt="Imaging Dental Solutions Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-semibold text-lg tracking-wide text-white/95 hidden sm:block">
              Imaging Dental <span className="font-light text-white/70">Solutions</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 font-medium text-[15px] tracking-wide">
            <a href="#" className="text-white relative after:content-[''] after:absolute after:w-1/2 after:h-[1px] after:bg-white after:left-1/4 after:-bottom-1.5 after:transition-all after:duration-300">Home</a>
            <Link href="/about" className="text-white/60 hover:text-white relative after:content-[''] after:absolute after:w-0 hover:after:w-1/2 after:h-[1px] after:bg-white after:left-1/4 after:-bottom-1.5 after:transition-all after:duration-300">About Us</Link>
            <Link href="/careers" className="text-white/60 hover:text-white relative after:content-[''] after:absolute after:w-0 hover:after:w-1/2 after:h-[1px] after:bg-white after:left-1/4 after:-bottom-1.5 after:transition-all after:duration-300">Careers</Link>
            <a href="#services" className="text-white/60 hover:text-white relative after:content-[''] after:absolute after:w-0 hover:after:w-1/2 after:h-[1px] after:bg-white after:left-1/4 after:-bottom-1.5 after:transition-all after:duration-300">Services</a>
            <a href="#team" className="text-white/60 hover:text-white relative after:content-[''] after:absolute after:w-0 hover:after:w-1/2 after:h-[1px] after:bg-white after:left-1/4 after:-bottom-1.5 after:transition-all after:duration-300">Our Team</a>
            
            <div className="w-[1px] h-4 bg-white/20 mx-2"></div>
            
            <a href="#branches" className="text-sm font-semibold text-black bg-white hover:bg-gray-100 px-6 py-2.5 rounded-full transition-all hover:scale-105">
              Find a Branch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[80px] left-4 right-4 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl lg:hidden"
            >
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-white text-lg font-medium">Home</a>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-white/70 hover:text-white text-lg font-medium">About Us</Link>
              <Link href="/careers" onClick={() => setIsMenuOpen(false)} className="text-white/70 hover:text-white text-lg font-medium">Careers</Link>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-white/70 hover:text-white text-lg font-medium">Services</a>
              <a href="#team" onClick={() => setIsMenuOpen(false)} className="text-white/70 hover:text-white text-lg font-medium">Our Team</a>
              <div className="w-full h-[1px] bg-white/10"></div>
              <a href="#branches" onClick={() => setIsMenuOpen(false)} className="text-center font-semibold text-black bg-white py-3 rounded-full">
                Find a Branch
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Premium Hero Section */}
      <section className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Full-width Background Video */}
        <div className="absolute inset-0 z-0 bg-black">
          <video 
            src="/images/cbct.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-100" 
          />
          {/* Subtle elegant gradient overlay for text readability, keeping video highly visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70"></div>
          {/* Refined Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]"></div>
        </div>

        {/* Content without the heavy glass box */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center flex flex-col items-center mt-10 md:mt-0">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center w-full"
          >
            {/* Top Badge */}
            <motion.div variants={fadeInUp} className="flex items-center gap-2 md:gap-3 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-4 md:px-6 py-2 md:py-2.5 mb-8 md:mb-10 shadow-[0_0_20px_rgba(255,255,255,0.1)] relative z-10 hover:bg-white/20 transition-colors cursor-pointer">
              <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4FC3F7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-[#4FC3F7] shadow-[0_0_8px_#4FC3F7]"></span>
              </span>
              <span className="text-white text-[9px] sm:text-[10px] md:text-sm font-bold tracking-[0.15em] sm:tracking-[0.25em] uppercase">Pune's Premier Diagnostic Network</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={fadeInUp} className="text-[2.75rem] sm:text-5xl md:text-7xl lg:text-[8.5rem] font-black text-white leading-none md:leading-[0.9] tracking-tight md:tracking-tighter mb-4 md:mb-8 drop-shadow-2xl">
              IMAGING <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">DENTAL</span><br/>
              <span className="bg-gradient-to-r from-[#4FC3F7] via-[#0288D1] to-[#01579B] bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(2,136,209,0.5)]">SOLUTIONS</span>
            </motion.h1>

            {/* Sub Headline */}
            <motion.h2 variants={fadeInUp} className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider md:tracking-wide text-white/90 uppercase leading-snug mt-4 md:mt-0 mb-8 md:mb-10 relative z-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              ADVANCED CBCT & OPG IMAGING
              <div className="mt-4 md:mt-8 flex flex-wrap justify-center items-center gap-x-2 gap-y-1.5 md:gap-x-4 md:gap-y-3 text-[9px] sm:text-[10px] md:text-sm text-white/80 font-bold tracking-[0.1em] md:tracking-[0.25em]">
                <span className="hover:text-white transition-colors cursor-default">WAKAD</span> <span className="text-[#4FC3F7] opacity-60">•</span>
                <span className="hover:text-white transition-colors cursor-default">CHINCHWAD</span> <span className="text-[#4FC3F7] opacity-60">•</span>
                <span className="hover:text-white transition-colors cursor-default">HINJAWADI</span> <span className="text-[#4FC3F7] opacity-60">•</span>
                <span className="hover:text-white transition-colors cursor-default">SANGAVI</span> <span className="text-[#4FC3F7] opacity-60">•</span>
                <span className="hover:text-white transition-colors cursor-default">RAVET</span> <span className="text-[#4FC3F7] opacity-60">•</span>
                <span className="hover:text-white transition-colors cursor-default">DOMBIVALI</span>
              </div>
            </motion.h2>

            {/* Description */}
            <motion.p variants={fadeInUp} className="text-sm sm:text-base md:text-2xl text-white/80 max-w-4xl leading-relaxed mx-auto font-light mb-10 md:mb-14 relative z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] px-2">
              Empowering your dental health with <strong className="text-white font-semibold">state-of-the-art diagnostic technology</strong>. Experience unparalleled precision, rapid results, and highly detailed reporting.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-xs md:max-w-none mx-auto relative z-10">
              <a href="#branches" className="w-full md:w-auto bg-gradient-to-r from-[#0288D1] to-[#01579B] hover:from-[#4FC3F7] hover:to-[#0288D1] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(2,136,209,0.5)] hover:shadow-[0_0_50px_rgba(79,195,247,0.7)] hover:-translate-y-1 flex items-center justify-center gap-3 border border-white/10 group text-base md:text-lg">
                Find a Center <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="#services" className="w-full md:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold tracking-wider transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl text-base md:text-lg">
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </div>


      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        <div className="absolute -left-[300px] top-[20%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -right-[200px] bottom-[10%] w-[500px] h-[500px] bg-[#4FC3F7]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-[#0288D1] font-semibold tracking-[0.25em] uppercase text-sm mb-4 block">Expert Diagnostics</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">OUR SERVICES</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#4FC3F7] to-[#0288D1] mx-auto rounded-full"></div>
            </motion.div>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14"
          >
            {[
              { title: "3D CBCT", image: "/images/cbct_scan.jpg", desc: "Detailed 3D imaging of teeth, bones, and tissues. Essential for implants, root canals, and complex oral surgeries. Provides unmatched precision.", path: "/services/cbct" },
              { title: "2D OPG", image: "/images/opg_scan.jpg", desc: "A comprehensive panoramic X-ray providing a full 2D view of your teeth, upper and lower jaws, and facial structures in a single image.", path: "/services/opg" },
              { title: "2D LAT CEPH", image: "/images/lat_ceph.jpg", desc: "Lateral side view of the skull. This is crucial for orthodontic planning, assessing jaw alignment, and understanding facial growth patterns.", path: "/services/lateral-cephalogram" },
              { title: "2D TMJ", image: "/images/tmj_scan.jpg", desc: "Detailed 2D views of the temporomandibular joint. Vital for diagnosing jaw alignment disorders, clicking sounds, and jaw pain.", path: "/services/tmj" }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(2,136,209,0.12)] border border-slate-100"
              >
                <div className="w-full aspect-[16/9] bg-slate-900 relative overflow-hidden">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                   <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                   
                   {/* Gradient overlay at bottom of image for seamless transition */}
                   <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent z-10"></div>
                </div>
                
                <div className="p-8 md:p-10 flex flex-col flex-grow bg-white relative z-20 -mt-6">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-slate-900 tracking-tight group-hover:text-[#0288D1] transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg flex-1 mb-8">{service.desc}</p>
                  
                  <Link href={service.path} className="inline-flex items-center text-[#0288D1] font-bold uppercase tracking-wider group-hover:text-[#01579B] transition-colors w-max">
                    Learn More 
                    <div className="ml-3 w-8 h-8 rounded-full bg-[#0288D1]/10 flex items-center justify-center group-hover:bg-[#0288D1] group-hover:text-white transition-colors duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#4FC3F7]/5 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0288D1]/5 rounded-full blur-3xl -z-0 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <span className="text-[#0288D1] font-semibold tracking-[0.25em] uppercase text-sm mb-4 block">Professionals</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight uppercase"
            >
              Our Dedicated Team
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-24 h-1.5 bg-gradient-to-r from-[#4FC3F7] to-[#0288D1] mx-auto rounded-full"
            ></motion.div>
          </div>
          
          {/* Elegant Masonry Gallery */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="columns-1 md:columns-2 gap-8 space-y-8"
          >
             {[
               { src: "/images/EMHI3301.JPG (1).jpeg", title: "Our Complete Team", subtitle: "United to deliver excellence in diagnostics" },
               { src: "/images/EKCP5670.JPG.jpeg", title: "Core Members", subtitle: "Dedicated professionals at your service" },
               { src: "/images/DSC_0392.JPG.jpeg", title: "Management & Staff", subtitle: "A collaborative approach to patient care" },
               { src: "/images/DSC00005.JPG (1).jpeg", title: "Founders & Directors", subtitle: "Visionaries of Imaging Dental Solutions" }
             ].map((item, index) => (
               <motion.div 
                 key={index}
                 variants={fadeInUp}
                 className="group relative rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 cursor-pointer break-inside-avoid hover:shadow-[0_20px_40px_rgba(2,136,209,0.15)] transition-all duration-500"
               >
                   <img 
                     src={item.src} 
                     alt={item.title} 
                     className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
                   />
                   
                   {/* Always-visible elegant gradient for text readability */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                   
                   {/* Content */}
                   <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                     <div className="w-12 h-1 bg-[#4FC3F7] rounded-full mb-4 opacity-70 group-hover:opacity-100 group-hover:w-16 transition-all duration-500"></div>
                     <h3 className="text-2xl md:text-3xl font-extrabold mb-2 text-white drop-shadow-md">{item.title}</h3>
                     <p className="text-white/80 font-medium text-sm md:text-base opacity-90 group-hover:text-white transition-colors duration-300">{item.subtitle}</p>
                   </div>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="py-32 bg-surface relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute right-0 top-1/3 w-[800px] h-[800px] bg-[#4FC3F7]/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-[#0288D1] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Find Us</span>
              <h2 className="text-4xl md:text-5xl font-black text-on-background uppercase mb-6 tracking-tight">Our 6 Locations</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#4FC3F7] to-[#0288D1] mx-auto rounded-full mb-8"></div>
              <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-outline/10 text-on-surface font-semibold">
                <Clock className="w-5 h-5 text-[#0288D1]" />
                Mon to Sun: 10:30 AM - 9:00 PM
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "WAKAD",
                image: "/images/wakad.png",
                address: "Office No. 309, 3rd Floor, Khinvasara Trade Centre (KTC), Datta Mandir Road, Infront of D-Mart, Wakad-57",
                phone: "7387907012",
                mapLink: "https://share.google/Z96wyeS40h1KOoqvJ",
              },
              {
                name: "CHINCHWAD",
                image: "/images/chinchwad.png",
                address: "Off. Q-222, 2nd Floor, Mayur Trade Center-Phase-1, Dawa Bazar, Old Pune-Mumbai Highway, Chinchwad-33",
                phone: "8208459727",
                mapLink: "https://share.google/wS8zlS85kpE0NYmf5",
              },
              {
                name: "HINJAWADI",
                image: "/images/hinjewadi.png",
                address: "Shop No. 210, 2nd Floor, Vantage Capital Mall, Phase No. 1 to Laxmi chowk, Above Rudra Tata Motors, Hinjawadi, Mulshi, Pune-411 057",
                phone: "8446231590",
                mapLink: "https://share.google/FENlLpqpUNkbQlzQf",
              },
              {
                name: "SANGAVI",
                image: "/images/Sangvi.png",
                address: "Office No. 101, 1st Floor, Shri Sai Building, Dyanesh Park, Shirode Road, Krushna Chowk, New Sangvi-411 061",
                phone: "8421211590",
                mapLink: "https://share.google/Vu3zMJHCiBDWBp164",
              },
              {
                name: "RAVET",
                image: "/images/ravet centre.png",
                address: "Office No. 209, 2nd Floor, Blueberry Biz Building, Above Axis Bank, Ravet Branch, D.Y.Patil College Road, Bhondve Chowk, Ravet-411 035",
                phone: "8983621590",
                mapLink: "https://share.google/ZYvhhWaCWvm7jtPUi",
              },
              {
                name: "DOMBIVALI",
                image: "/images/dombivali.png",
                address: "Shop No. 13, A Wing, Sai Arcade, Opposite Ujjivan Small Finance Bank, Adjacent to R Patel Mart Entrance, Ganesh Mandir Road, Dombivali East",
                phone: "9890378366",
                mapLink: "https://maps.app.goo.gl/N9r5aTXVCwHYkWzm6",
              }
            ].map((branch, i) => {
              const mapsUrl = branch.mapLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`;
              const whatsappUrl = `https://wa.me/91${branch.phone}`;

              return (
               <div key={i} className="group relative bg-white rounded-[2.5rem] p-2 hover:-translate-y-3 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(2,136,209,0.15)] border border-outline/5">
                 <div className="bg-surface-variant/20 rounded-[2rem] h-full flex flex-col overflow-hidden relative border border-white">
                   
                   {/* Image Header */}
                   <div className="h-64 bg-surface-variant relative overflow-hidden">
                      <img src={branch.image} alt={branch.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Floating Badge */}
                      <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 text-white text-[10px] font-black tracking-widest shadow-lg">
                         BRANCH {i + 1}
                      </div>

                      <h3 className="absolute bottom-6 left-6 text-3xl font-black text-white uppercase tracking-tight transform group-hover:-translate-y-1 transition-transform duration-500 drop-shadow-md">{branch.name}</h3>
                   </div>
                   
                   
                   {/* Card Body */}
                   <div className="p-6 md:p-8 flex flex-col flex-1 bg-white">
                     <div className="space-y-5 mb-8 md:mb-10 flex-1">
                       <div className="flex gap-4 items-start group/item">
                         <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#0288D1]/5 group-hover/item:bg-[#0288D1]/10 flex items-center justify-center shrink-0 text-[#0288D1] transition-colors">
                            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                         </div>
                         <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-medium mt-0.5 md:mt-1">{branch.address}</p>
                       </div>
                       <div className="flex gap-4 items-center group/item">
                         <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#0288D1]/5 group-hover/item:bg-[#0288D1]/10 flex items-center justify-center shrink-0 text-[#0288D1] transition-colors">
                            <Clock className="w-5 h-5 md:w-6 md:h-6" />
                         </div>
                         <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-medium">Mon - Sun : 10:30 AM to 9:00 PM</p>
                       </div>
                       <div className="flex gap-4 items-center group/item">
                         <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#25D366]/5 group-hover/item:bg-[#25D366]/10 flex items-center justify-center shrink-0 text-[#25D366] transition-colors">
                            <Phone className="w-5 h-5 md:w-6 md:h-6" />
                         </div>
                         <a href={`tel:+91${branch.phone}`} className="text-on-surface font-extrabold text-lg md:text-xl hover:text-[#0288D1] transition-colors tracking-tight">{branch.phone}</a>
                       </div>
                     </div>

                     {/* Action Buttons */}
                     <div className="flex gap-2 sm:gap-3">
                       <a href={`tel:+91${branch.phone}`} className="flex-1 bg-[#0288D1] text-white py-3 sm:py-4 px-1 sm:px-2 rounded-xl sm:rounded-2xl font-bold text-[11px] sm:text-sm hover:bg-[#01579B] hover:shadow-lg hover:shadow-[#0288D1]/30 transition-all duration-300 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 shadow-md">
                          <Phone className="w-4 h-4" /> <span>Call</span>
                       </a>
                       <a href={mapsUrl} className="flex-1 bg-surface border-2 border-outline/10 text-on-surface py-3 sm:py-4 px-1 sm:px-2 rounded-xl sm:rounded-2xl font-bold text-[11px] sm:text-sm hover:bg-[#0288D1] hover:border-[#0288D1] hover:text-white transition-all duration-300 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 shadow-sm">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#EA4335"/></svg> <span>Map</span>
                       </a>
                       <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] text-white py-3 sm:py-4 px-1 sm:px-2 rounded-xl sm:rounded-2xl font-bold text-[11px] sm:text-sm hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/30 transition-all duration-300 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 shadow-md">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg> <span>WhatsApp</span>
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section id="social" className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl font-bold text-primary uppercase mb-4">Stay Connected</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Follow our latest updates, dental tips, and behind-the-scenes on Instagram and YouTube.</p>
        </div>

        {/* Instagram Reels Section */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-pink-500/25">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
            <h3 className="text-3xl font-bold text-on-background">Latest Reels</h3>
            <a href="https://www.instagram.com/shri_sudantee/reels/" target="_blank" rel="noopener noreferrer" className="ml-auto text-primary hover:text-primary-container font-semibold transition-colors flex items-center gap-2">
              @shri_sudantee <span className="hidden md:inline">on Instagram</span> &rarr;
            </a>
          </div>
          
          {/* Mobile-friendly Horizontal Scroll Container */}
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              "reel1",
              "reel2",
              "reel3",
              "reel4"
            ].map((filename, i) => (
               <HoverVideo key={i} src={`/videos/${filename}.mp4`} poster={`/videos/${filename}.jpg`} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
