"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-6xl z-[100] transition-all duration-500">
      <div className="mx-4 md:mx-6 px-6 h-[72px] bg-slate-900/80 hover:bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-between transition-colors duration-500 shadow-2xl">
        
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 overflow-hidden shrink-0 relative">
            <Image src="/images/logo.png" alt="Imaging Dental Solutions Logo" fill sizes="40px" className="object-cover" />
          </div>
          <span className="font-semibold text-lg tracking-wide text-white/95 hidden sm:block">
            Imaging Dental <span className="font-light text-white/70">Solutions</span>
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 font-medium text-[15px] tracking-wide">
          <Link href="/" className="text-white relative after:content-[''] after:absolute after:w-0 hover:after:w-1/2 after:h-[1px] after:bg-white after:left-1/4 after:-bottom-1.5 after:transition-all after:duration-300">Home</Link>
          <Link href="/about" className="text-white/70 hover:text-white relative after:content-[''] after:absolute after:w-0 hover:after:w-1/2 after:h-[1px] after:bg-white after:left-1/4 after:-bottom-1.5 after:transition-all after:duration-300">About Us</Link>
          <Link href="/careers" className="text-white/70 hover:text-white relative after:content-[''] after:absolute after:w-0 hover:after:w-1/2 after:h-[1px] after:bg-white after:left-1/4 after:-bottom-1.5 after:transition-all after:duration-300">Careers</Link>
          <Link href="/#services" className="text-white/70 hover:text-white relative after:content-[''] after:absolute after:w-0 hover:after:w-1/2 after:h-[1px] after:bg-white after:left-1/4 after:-bottom-1.5 after:transition-all after:duration-300">Services</Link>
          <Link href="/#team" className="text-white/70 hover:text-white relative after:content-[''] after:absolute after:w-0 hover:after:w-1/2 after:h-[1px] after:bg-white after:left-1/4 after:-bottom-1.5 after:transition-all after:duration-300">Our Team</Link>
          
          <div className="w-[1px] h-4 bg-white/20 mx-2"></div>
          
          <Link href="/#branches" className="text-sm font-semibold text-slate-900 bg-white hover:bg-gray-100 px-6 py-2.5 rounded-full transition-all hover:scale-105">
            Find a Branch
          </Link>
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
            className="absolute top-[80px] left-4 right-4 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl lg:hidden"
          >
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white text-lg font-medium">Home</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-white/70 hover:text-white text-lg font-medium">About Us</Link>
            <Link href="/careers" onClick={() => setIsMenuOpen(false)} className="text-white/70 hover:text-white text-lg font-medium">Careers</Link>
            <Link href="/#services" onClick={() => setIsMenuOpen(false)} className="text-white/70 hover:text-white text-lg font-medium">Services</Link>
            <Link href="/#team" onClick={() => setIsMenuOpen(false)} className="text-white/70 hover:text-white text-lg font-medium">Our Team</Link>
            <div className="w-full h-[1px] bg-white/10"></div>
            <Link href="/#branches" onClick={() => setIsMenuOpen(false)} className="text-center font-semibold text-slate-900 bg-white py-3 rounded-full">
              Find a Branch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
