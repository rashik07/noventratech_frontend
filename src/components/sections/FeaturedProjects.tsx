"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  client: string;
  industry: string;
  duration: string;
  category: "retail" | "enterprise" | "edtech";
  categoryLabel: string;
  badge: string;
  badgeColor: string;
  image: string;
  demoUrl: string;
  description: string;
  tags: string[];
  metrics: {
    value: string;
    label: string;
    sub: string;
  }[];
  technologies: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "lfc",
    title: "LFC (Ladies Fashion Corner)",
    subtitle: "Omnichannel Retail & Smart POS Ecosystem",
    link: "/case-study/lfc",
    client: "Ladies Fashion Corner",
    industry: "Fashion Retail",
    duration: "4 Months",
    category: "retail",
    categoryLabel: "Retail & POS",
    badge: "+40% Checkout Velocity",
    badgeColor: "bg-emerald-500 text-white",
    image: "/Main/CaseStudy/LFC/1.png",
    demoUrl: "noventra.app/clients/lfc-pos",
    description:
      "Engineered an end-to-end cloud-based retail management platform integrating high-speed web POS, multi-branch inventory tracking, and automated supply replenishment.",
    tags: ["Retail", "Smart POS", "Inventory Sync"],
    metrics: [
      { value: "+40%", label: "Checkout Speed", sub: "Reduced register wait" },
      { value: "< 1%", label: "Stock Mismatch", sub: "Down from 12% loss" },
      { value: "100%", label: "Live Multi-Store", sub: "Central stock sync" },
    ],
    technologies: ["Next.js", "Node.js", "Tailwind CSS", "Cloud POS", "PostgreSQL"],
  },
  {
    id: "sbe",
    title: "SBE (S Brothers Limited)",
    subtitle: "Enterprise Resource Planning & Supply Suite",
    link: "/case-study/sbe",
    client: "S Brothers Limited",
    industry: "Manufacturing & Trade",
    duration: "6 Months",
    category: "enterprise",
    categoryLabel: "Enterprise ERP",
    badge: "-75% Reporting Overhead",
    badgeColor: "bg-[#FF6600] text-white",
    image: "/Main/CaseStudy/SBE/1.png",
    demoUrl: "noventra.app/clients/sbe-erp",
    description:
      "Centralized four fragmented legacy tools into a unified ERP platform harmonizing human resources (HRM), client relations (CRM), sales pipelines, and manufacturing inventory.",
    tags: ["Enterprise ERP", "HRM & CRM", "Supply Chain"],
    metrics: [
      { value: "-75%", label: "Reporting Time", sub: "Automated analytics" },
      { value: "99.8%", label: "Stock Accuracy", sub: "Zero manual audit lag" },
      { value: "4-in-1", label: "Unified Suite", sub: "Integrated modules" },
    ],
    technologies: ["React", "Next.js", "PostgreSQL", "Node.js", "Docker"],
  },
  {
    id: "eims",
    title: "EIMS (Education Institute Management)",
    subtitle: "Digital Campus Operating & Academic System",
    link: "/case-study/eims",
    client: "National Education Group",
    industry: "Education & EdTech",
    duration: "9 Months",
    category: "edtech",
    categoryLabel: "EdTech & Public",
    badge: "15-Min Fast Admissions",
    badgeColor: "bg-[#008080] text-white",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    demoUrl: "noventra.app/clients/eims-campus",
    description:
      "A complete digital campus infrastructure transforming school operations: online student admissions, automated result publication, biometric attendance, and staff payroll.",
    tags: ["EdTech", "Campus ERP", "Biometrics"],
    metrics: [
      { value: "15 min", label: "Admissions", sub: "Down from 3 days" },
      { value: "100%", label: "Biometric Sync", sub: "Automated payroll" },
      { value: "500+", label: "Faculty Managed", sub: "Staff & students" },
    ],
    technologies: ["Next.js", "PostgreSQL", "Docker", "AWS", "REST APIs"],
  },
];

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "retail", label: "Retail & POS" },
  { id: "enterprise", label: "Enterprise ERP" },
  { id: "edtech", label: "EdTech & Campus" },
] as const;

export function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeFilter);

  return (
    <section id="case-study" className="py-24 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[350px] bg-[#008080]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-[#FF6600]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#008080]/10 text-[#008080] border border-[#008080]/20 tracking-wide uppercase mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Business Impact</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight"
            >
              Featured <span className="text-[#008080]">Case Studies</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-600 text-base md:text-lg leading-relaxed"
            >
              Explore how we engineer mission-critical enterprise software, smart retail platforms, and scalable digital solutions that deliver measurable ROI.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200 shadow-sm transition-all hover:border-[#008080]/30"
            >
              Have a Project in Mind?
              <ArrowRight className="w-4 h-4 text-[#008080]" />
            </Link>
          </motion.div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-xl mb-12">
          {filterCategories.map((tab) => {
            const count =
              tab.id === "all"
                ? caseStudies.length
                : caseStudies.filter((c) => c.category === tab.id).length;
            const isActive = activeFilter === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#008080] text-white shadow-md shadow-[#008080]/20"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Case Studies Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#008080]/30 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
              >
                {/* Top Section */}
                <div>
                  {/* Browser Mockup Top Bar */}
                  <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-800/90 text-slate-400 text-[11px] font-mono border border-slate-700/60 max-w-[200px] truncate">
                      <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{project.demoUrl}</span>
                    </div>

                    <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">
                      LIVE
                    </span>
                  </div>

                  {/* Project Screenshot Container */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Top Right Badge */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-md ${project.badgeColor}`}
                      >
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{project.badge}</span>
                      </span>
                    </div>

                    {/* Floating Bottom Left Info */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between text-white text-xs">
                      <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-medium">
                        {project.industry}
                      </span>
                      <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-slate-300 font-medium">
                        <Clock className="w-3 h-3 text-[#FF6600]" />
                        <span>{project.duration}</span>
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 md:p-7">
                    {/* Tags row */}
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-semibold px-2.5 py-0.5 bg-[#008080]/10 text-[#008080] rounded-md border border-[#008080]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Title & Subtitle */}
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#008080] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Business Impact Metrics Grid */}
                    <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80 mb-6">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-[#008080]" />
                        <span>Verified Outcomes</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 divide-x divide-slate-200/80">
                        {project.metrics.map((m, mi) => (
                          <div key={mi} className={mi > 0 ? "pl-2" : ""}>
                            <div className="text-base md:text-lg font-black text-slate-900 tracking-tight">
                              {m.value}
                            </div>
                            <div className="text-[11px] font-semibold text-slate-700 truncate">
                              {m.label}
                            </div>
                            <div className="text-[10px] text-slate-400 truncate hidden sm:block">
                              {m.sub}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="mb-6">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Technologies Deployed
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, ti) => (
                          <span
                            key={ti}
                            className="text-[11px] font-medium text-slate-600 bg-slate-100/80 px-2 py-0.5 rounded border border-slate-200/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 md:px-7 pb-6 pt-0">
                  <Link
                    href={project.link}
                    className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-[#FF6600] hover:bg-[#e65c00] text-white font-bold text-sm shadow-md shadow-[#FF6600]/25 transition-all duration-200 group/btn"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner Reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden border border-slate-800 shadow-xl"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#008080]/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6600] uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                Tailored Architecture & End-to-End Delivery
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Want Similar High-Impact Results for Your Company?
              </h3>
              <p className="text-slate-400 text-sm md:text-base mt-1.5 max-w-2xl">
                Whether you need a full enterprise ERP, a smart omnichannel retail POS, or an AI-automated platform, we engineer solutions built to scale.
              </p>
            </div>

            <Link
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#008080] hover:bg-[#006666] text-white font-bold text-sm shadow-lg shadow-[#008080]/30 transition-all hover:scale-105"
            >
              <span>Schedule Free Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
