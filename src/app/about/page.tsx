"use client";

import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full flex flex-col min-h-screen bg-background">
      <main className="flex-grow pt-32 pb-24 max-w-7xl mx-auto px-6 w-full">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-container font-semibold transition-colors">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary leading-[1.1] uppercase">About Us</h1>
            <div className="space-y-4 text-on-surface-variant leading-relaxed text-base md:text-lg">
              <p>
                Imaging dental solutions was inaugurated by Auspicious hands of Padmashri Dr. Prakash Amte on 9 june 2018. We are a 6 year old dental diagnostic Centre and have reported more than 11000 patients.
              </p>
              <p>
                Imaging dental Solutions is a state of the art dental imaging and diagnostics Centre. We offer 2D and 3D Dental X rays with immediate and precise reporting at highly competitive rates. We take X ray (radiographs) of the Face region.
              </p>
              <p>
                There are mainly two services OPG X ray and CBCT (Dental CT scan). OPG is a screening X ray which shows all teeth and jaws in 2 dimensions. CBCT is 3 Dimensional high clarity scan of both jaws and teeth. With the help of CBCT surgeries like implant surgery, root canal surgery and oral surgeries can be planned.
              </p>
              <p>
                We have catered our best services to more than 300 dentists and helped them to deliver their service precisely. We are a dedicated team and thus we are open 365 days. We believe in patient first and whole team works for service of the patient.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-surface-variant rounded-3xl aspect-[4/5] flex items-center justify-center text-on-surface-variant/50 relative overflow-hidden shadow-xl"
          >
            <img src="/images/inauguration.jpg" alt="Inauguration by Dr. Prakash Amte" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
