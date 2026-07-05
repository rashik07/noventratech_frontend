"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Users, FolderKanban } from "lucide-react";

export function Hero() {
  const stats = [
    { label: "Projects Delivered", value: "250+", icon: FolderKanban },
    { label: "Happy Clients", value: "120+", icon: Users },
    { label: "Team Members", value: "45+", icon: Code2 },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm border border-slate-200"
            >
              <span className="w-2 h-2 rounded-full bg-[#008080]/100 animate-pulse"></span>
              <span className="text-sm font-medium text-[#006666]">
                Premium Software Development Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900"
            >
              Transforming Ideas Into <br className="hidden md:block" />
              <span className="text-[#008080]">Powerful Digital Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
            >
              We build scalable SaaS products, innovative mobile apps, and enterprise-grade software. Partner with us to accelerate your digital transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="group flex items-center justify-center px-8 py-4 rounded-full bg-[#FF6600] hover:bg-[#e65c00] text-white font-medium transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)]"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="flex items-center justify-center px-8 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-medium transition-all shadow-sm"
              >
                View Portfolio
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 grid grid-cols-3 gap-6 w-full max-w-2xl pt-8 border-t border-slate-200"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center space-x-2 text-[#008080] mb-2">
                    <stat.icon className="w-5 h-5" />
                    <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
                  </div>
                  <span className="text-sm text-slate-600">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Illustration / Graphic */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-square max-w-[600px] mx-auto"
            >
              {/* Abstract decorative elements forming a tech structure */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-3xl transform rotate-3 scale-105 blur-xl"></div>
              <div className="absolute inset-0 bg-white rounded-3xl border border-slate-200 flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10 grid grid-cols-2 gap-4 p-8 w-full">
                  {/* Dummy code / tech representation */}
                  <div className="bg-slate-50 p-4 rounded-xl flex flex-col space-y-3 transform -translate-y-4 border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded bg-[#008080]/20 flex items-center justify-center"><Code2 className="w-4 h-4 text-[#008080]" /></div>
                    <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                    <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl flex flex-col space-y-3 transform translate-y-8 border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center"><Users className="w-4 h-4 text-purple-600" /></div>
                    <div className="h-2 w-full bg-slate-200 rounded"></div>
                    <div className="h-2 w-2/3 bg-slate-200 rounded"></div>
                  </div>
                  <div className="col-span-2 bg-slate-900 p-4 rounded-xl flex flex-col space-y-3 transform translate-y-4 shadow-lg">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="font-mono text-xs text-[#008080]/60 mt-2">
                      <span className="text-pink-400">const</span> <span className="text-[#008080]/60">buildFuture</span> = <span className="text-yellow-300">async</span> () {`=>`} {'{'}
                      <br />&nbsp;&nbsp;<span className="text-pink-400">await</span> noventra.deploy();
                      <br />{'}'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
