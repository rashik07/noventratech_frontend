"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Users,
  FolderKanban,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
  Star,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"arch" | "code" | "metrics">("arch");

  const stats = [
    {
      label: "Projects Delivered",
      value: "250+",
      sub: "Across 15+ countries",
      icon: FolderKanban,
      color: "text-[#008080]",
      bg: "bg-[#008080]/10",
      border: "border-[#008080]/20",
    },
    {
      label: "Client Satisfaction",
      value: "99.4%",
      sub: "5-Star average rating",
      icon: Star,
      color: "text-[#FF6600]",
      bg: "bg-[#FF6600]/10",
      border: "border-[#FF6600]/20",
    },
    {
      label: "Happy Clients",
      value: "120+",
      sub: "Startups to Enterprises",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      label: "Senior Engineers",
      value: "45+",
      sub: "Full-stack & AI experts",
      icon: Code2,
      color: "text-purple-600",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
  ];

  const benefits = [
    "Enterprise-Grade Scalability",
    "Agile 2-Week Sprints",
    "End-to-End Delivery",
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/80">
      {/* Dynamic Background Mesh Grids & Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Tech Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ambient Gradient Glows */}
        <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-[#008080]/15 rounded-full blur-[120px] mix-blend-multiply pointer-events-none animate-pulse" />
        <div
          className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[#FF6600]/12 rounded-full blur-[130px] mix-blend-multiply pointer-events-none"
          style={{ animation: "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
        />
        <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-teal-300/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm shadow-slate-100 mb-6 group hover:border-[#008080]/40 transition-colors"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008080] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008080]"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-wide flex items-center gap-1.5">
                Next-Gen Software & Digital Engineering Agency
                <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight text-slate-900 leading-[1.12] mb-6 font-heading"
            >
              Transforming Bold Ideas Into{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="bg-gradient-to-r from-[#008080] via-teal-700 to-[#FF6600] bg-clip-text text-transparent">
                  High-Impact
                </span>
              </span>{" "}
              Digital Solutions
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed"
            >
              We engineer scalable SaaS platforms, mission-critical custom web systems, mobile apps, and AI-powered workflows. From MVP to enterprise scale, we build software that accelerates growth.
            </motion.p>

            {/* Key Value Points */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-5 mb-8 text-sm font-medium text-slate-700"
            >
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#008080] shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF6600] to-[#e65c00] hover:from-[#e65c00] hover:to-[#cc5200] text-white font-semibold text-base transition-all duration-300 shadow-[0_8px_25px_-5px_rgba(255,102,0,0.45)] hover:shadow-[0_12px_30px_-5px_rgba(255,102,0,0.6)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
              <Link
                href="#case-study"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white/90 hover:bg-slate-50 border border-slate-200/90 text-slate-800 font-semibold text-base transition-all duration-200 shadow-sm hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <Layers className="mr-2 w-4 h-4 text-[#008080]" />
                <span>Explore Portfolio</span>
              </Link>
            </motion.div>

            {/* Client Ratings / Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 pt-6 border-t border-slate-200/70 flex items-center gap-4 text-xs sm:text-sm text-slate-600"
            >
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Happy Client"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-bold text-slate-900 ml-1 text-xs">4.9/5</span>
                </div>
                <span className="text-slate-500 text-xs">Trusted by 120+ fast-growing companies</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Tech Visual Hub & Mockup */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-lg"
            >
              {/* Glow Backdrop */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#008080]/30 to-[#FF6600]/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>

              {/* Main Window Container */}
              <div className="relative bg-slate-950/95 backdrop-blur-xl rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-slate-200">
                {/* Window Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-xs text-slate-400 font-mono ml-2 flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-[#008080]" /> noventra.engine.ts
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => setActiveTab("arch")}
                      className={`text-[11px] font-medium px-2 py-1 rounded transition-colors ${
                        activeTab === "arch"
                          ? "bg-[#008080] text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      System
                    </button>
                    <button
                      onClick={() => setActiveTab("code")}
                      className={`text-[11px] font-medium px-2 py-1 rounded transition-colors ${
                        activeTab === "code"
                          ? "bg-[#008080] text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Code
                    </button>
                    <button
                      onClick={() => setActiveTab("metrics")}
                      className={`text-[11px] font-medium px-2 py-1 rounded transition-colors ${
                        activeTab === "metrics"
                          ? "bg-[#008080] text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Metrics
                    </button>
                  </div>
                </div>

                {/* Window Body */}
                <div className="p-5 min-h-[300px]">
                  {activeTab === "arch" && (
                    <motion.div
                      key="arch"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {/* Architecture Blocks */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                        <div className="flex items-center space-x-3">
                          <div className="w-9 h-9 rounded-lg bg-[#008080]/20 flex items-center justify-center text-[#008080]">
                            <Zap className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-100">
                              Next.js 15 & Cloud Native
                            </div>
                            <div className="text-[11px] text-slate-400">
                              Sub-second edge rendering
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Active 99.99%
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                        <div className="flex items-center space-x-3">
                          <div className="w-9 h-9 rounded-lg bg-[#FF6600]/20 flex items-center justify-center text-[#FF6600]">
                            <ShieldCheck className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-100">
                              Zero-Trust Security Core
                            </div>
                            <div className="text-[11px] text-slate-400">
                              OWASP compliant & encrypted
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF6600]/10 text-[#FF6600] border border-[#FF6600]/20">
                          Verified
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                        <div className="flex items-center space-x-3">
                          <div className="w-9 h-9 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                            <Activity className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-100">
                              Real-Time AI & Data Sync
                            </div>
                            <div className="text-[11px] text-slate-400">
                              Automated business logic
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          Synced
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "code" && (
                    <motion.div
                      key="code"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-mono text-xs leading-relaxed text-slate-300 space-y-1.5"
                    >
                      <p className="text-slate-500">// Initialize Noventra High-Scale Core</p>
                      <p>
                        <span className="text-purple-400">import</span> &#123;{" "}
                        <span className="text-teal-400">NoventraStack</span> &#125;{" "}
                        <span className="text-purple-400">from</span>{" "}
                        <span className="text-emerald-400">&quot;@noventra/core&quot;</span>;
                      </p>
                      <p className="pt-2">
                        <span className="text-blue-400">const</span>{" "}
                        <span className="text-yellow-300">project</span> ={" "}
                        <span className="text-purple-400">await</span>{" "}
                        <span className="text-teal-400">NoventraStack</span>.
                        <span className="text-blue-300">deploy</span>(&#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">client:</span>{" "}
                        <span className="text-emerald-400">&quot;Global Enterprise&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">architecture:</span>{" "}
                        <span className="text-emerald-400">&quot;Microservices + AI&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">velocity:</span>{" "}
                        <span className="text-[#FF6600]">&quot;2x Market Speed&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">slaGuarantee:</span>{" "}
                        <span className="text-emerald-400">&quot;99.99% Uptime&quot;</span>,
                      </p>
                      <p>&#125;);</p>
                      <p className="pt-2 text-emerald-400 font-semibold">
                        ✔ Status: Production Ready & Scaled
                      </p>
                    </motion.div>
                  )}

                  {activeTab === "metrics" && (
                    <motion.div
                      key="metrics"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-2 gap-3"
                    >
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                        <div className="text-[11px] text-slate-400">Lighthouse Score</div>
                        <div className="text-xl font-bold text-emerald-400 mt-1">100 / 100</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Top-tier Core Web Vitals</div>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                        <div className="text-[11px] text-slate-400">Avg. Response Time</div>
                        <div className="text-xl font-bold text-[#008080] mt-1">18ms</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Edge CDN Cached</div>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                        <div className="text-[11px] text-slate-400">Test Coverage</div>
                        <div className="text-xl font-bold text-[#FF6600] mt-1">96.8%</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Automated CI/CD suite</div>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                        <div className="text-[11px] text-slate-400">Deploy Frequency</div>
                        <div className="text-xl font-bold text-blue-400 mt-1">Daily</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Zero-downtime releases</div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Footer Status Strip */}
                <div className="px-4 py-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>All Systems Operational</span>
                  </div>
                  <span className="font-mono text-slate-500">v3.4.0-stable</span>
                </div>
              </div>

              {/* Floating Satellite Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 hidden sm:flex items-center space-x-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200 text-xs font-semibold text-slate-800"
              >
                <span className="p-1.5 rounded-lg bg-[#008080]/15 text-[#008080]">
                  <Zap className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-slate-900 font-bold">Ultra Fast Speed</div>
                  <div className="text-[10px] text-slate-500">99+ Performance Index</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 hidden sm:flex items-center space-x-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200 text-xs font-semibold text-slate-800"
              >
                <span className="p-1.5 rounded-lg bg-[#FF6600]/15 text-[#FF6600]">
                  <ShieldCheck className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-slate-900 font-bold">Enterprise Grade</div>
                  <div className="text-[10px] text-slate-500">ISO & OWASP Compliant</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Key Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-16 pt-10 border-t border-slate-200/80"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-5 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}
                  >
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <span className={`text-2xl sm:text-3xl font-black text-slate-900 tracking-tight`}>
                    {stat.value}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
