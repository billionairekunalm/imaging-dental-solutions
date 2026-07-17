"use client";

import { ArrowLeft, Briefcase, MapPin, Clock, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const openPositions: any[] = [];

const benefits = [
  "State-of-the-art Technology",
  "Professional Growth & Training",
  "Competitive Salary Package",
  "Excellent Work Environment",
  "Health Benefits",
  "Flexible Shifts"
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-[#0288D1]/20">
      
      {/* Hero Section */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#4FC3F7] rounded-full blur-[120px] mix-blend-screen"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0288D1] rounded-full blur-[120px] mix-blend-screen"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-50">
          <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors gap-2 font-medium">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <div className="font-semibold text-lg tracking-wide hidden sm:block">
              Imaging Dental <span className="font-light text-white/70">Solutions</span>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-8 backdrop-blur-md">
              <Briefcase className="w-4 h-4 text-[#4FC3F7]" />
              <span className="text-white/90">We are Hiring!</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Build your career in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#0288D1]">
                advanced diagnostics
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Join Pune's premier dental imaging network. We are always looking for passionate, skilled professionals who care about precision and patient comfort.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Why work with us?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">We invest in our team as much as we invest in our technology.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div className="w-8 h-8 rounded-full bg-[#0288D1]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#0288D1]" />
                </div>
                <span className="font-semibold text-slate-700 text-sm md:text-base">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Current Opportunities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Find a role that fits your expertise.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((job, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                key={i} 
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(2,136,209,0.12)] transition-all duration-300 flex flex-col group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#0288D1] transition-colors">{job.title}</h3>
                
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                    <MapPin className="w-4 h-4 text-[#0288D1]" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                    <Clock className="w-4 h-4 text-[#25D366]" />
                    {job.type} • {job.experience}
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-8">
                  {job.description}
                </p>

                <a 
                  href={`mailto:careers@imagingdentalsolutions.com?subject=Application for ${job.title}`}
                  className="w-full py-4 rounded-xl bg-slate-50 text-slate-700 font-bold flex items-center justify-center gap-2 group-hover:bg-[#0288D1] group-hover:text-white transition-all duration-300"
                >
                  Apply Now <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto bg-[#0288D1]/5 rounded-3xl p-8 border border-[#0288D1]/10">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Don't see a fit?</h3>
            <p className="text-slate-600 mb-6">We are always eager to meet talented people. Send us your resume anyway!</p>
            <a href="mailto:careers@imagingdentalsolutions.com" className="inline-block bg-white text-[#0288D1] px-8 py-3 rounded-xl font-bold hover:bg-[#0288D1] hover:text-white transition-colors border-2 border-[#0288D1]/20 hover:border-[#0288D1]">
              Submit Resume
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
