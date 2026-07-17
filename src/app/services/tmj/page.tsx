"use client";

import { ArrowLeft, CheckCircle2, Bone, Stethoscope, Activity } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const benefits = [
  "Detailed views of the joint in open and closed positions",
  "Identifies bone erosion, fractures, or structural deformities",
  "Essential for diagnosing chronic jaw pain and clicking",
  "Aids in planning complex restorative treatments"
];

const useCases = [
  "TMJ Disorder (TMD) Diagnosis",
  "Evaluating Jaw Clicking or Locking",
  "Assessing Joint Degeneration/Arthritis",
  "Pre-surgical Planning for Jaw Surgery",
  "Diagnosing Causes of Chronic Headaches",
  "Evaluating Trauma to the Jaw"
];

export default function TMJService() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-[#0288D1]/20">
      
      {/* Hero Section */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#4FC3F7] rounded-full blur-[120px] mix-blend-screen"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0288D1] rounded-full blur-[120px] mix-blend-screen"></div>
        </div>



        <div className="max-w-6xl mx-auto px-6 pt-12 pb-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-md">
              <Bone className="w-4 h-4 text-[#4FC3F7]" />
              <span className="text-white/90">Joint Health Assessment</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              TMJ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#0288D1]">
                Scan
              </span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Specialized imaging focusing purely on your temporomandibular joints (where your jaw meets your skull). Crucial for diagnosing the root cause of jaw pain, clicking, and restricted movement.
            </p>
            <div className="flex gap-4">
              <a href="#book" className="bg-[#0288D1] text-white px-8 py-4 rounded-full font-bold hover:bg-[#01579B] transition-all duration-300 shadow-lg shadow-[#0288D1]/30">
                Book a TMJ Scan
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black flex items-center justify-center p-8"
          >
            <img src="/images/tmj_scan.jpg" alt="TMJ Scan Example" className="w-full h-auto max-h-full object-contain rounded-lg shadow-xl ring-1 ring-white/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is a TMJ Scan?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              A Temporomandibular Joint (TMJ) scan is an imaging procedure designed specifically to view the hinge joints that connect your lower jaw to your skull. These scans are often taken in multiple positions (e.g., mouth fully open and fully closed) to observe how the joint components function and articulate dynamically.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-6 mt-12">Primary Use Cases</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((useCase, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <Activity className="w-5 h-5 text-[#0288D1]" />
                  <span className="font-semibold text-slate-700">{useCase}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#0288D1]/20 rounded-full blur-[80px]"></div>
               <h3 className="text-2xl font-bold mb-8 relative z-10">Key Benefits</h3>
               <div className="space-y-6 relative z-10">
                 {benefits.map((benefit, i) => (
                   <div key={i} className="flex items-start gap-4">
                     <div className="mt-1 bg-white/10 rounded-full p-1">
                       <CheckCircle2 className="w-5 h-5 text-[#4FC3F7]" />
                     </div>
                     <p className="text-white/80 leading-relaxed">{benefit}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* Preparation Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Stethoscope className="w-12 h-12 text-[#0288D1] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Accurate Diagnosis</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            TMJ disorders can cause severe discomfort and negatively impact your quality of life. By obtaining precise, high-definition images of your joint structures, your dental specialist can identify the exact cause of your pain and formulate a highly targeted, effective treatment plan.
          </p>
          <a id="book" href="/#branches" className="inline-block bg-[#0288D1] text-white px-10 py-4 rounded-full font-bold hover:bg-[#01579B] transition-colors shadow-lg shadow-[#0288D1]/20">
            Find a Center Near You
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
