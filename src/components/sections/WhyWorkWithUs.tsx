"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Zap,
  Users,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Code2,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const keyPillars = [
  {
    id: "expertise",
    icon: Code2,
    title: "Elite Engineering & Modern Stack",
    description:
      "We build robust, maintainable, and high-performance software using battle-tested modern frameworks like Next.js, React, Node.js, and cloud-native services.",
    badge: "Tech Excellence",
    color: "from-teal-500/10 to-teal-500/5",
    accentColor: "text-[#008080]",
    borderColor: "hover:border-[#008080]/30",
    iconBg: "bg-[#008080]/10",
  },
  {
    id: "velocity",
    icon: Rocket,
    title: "Rapid Agile Velocity & On-Time Delivery",
    description:
      "Iterative sprint cycles with fast turnaround times, continuous feedback loops, and bi-weekly milestone demos ensure your project launches on schedule without surprises.",
    badge: "Fast Turnaround",
    color: "from-orange-500/10 to-orange-500/5",
    accentColor: "text-[#FF6600]",
    borderColor: "hover:border-[#FF6600]/30",
    iconBg: "bg-[#FF6600]/10",
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Enterprise-Grade Security & Reliability",
    description:
      "Security by design with OWASP best practices, automated testing suites, data privacy compliance, and rigorous code audits safeguarding every release.",
    badge: "Security-First",
    color: "from-emerald-500/10 to-emerald-500/5",
    accentColor: "text-emerald-600",
    borderColor: "hover:border-emerald-500/30",
    iconBg: "bg-emerald-500/10",
  },
  {
    id: "transparency",
    icon: Users,
    title: "Direct Collaboration & Full Transparency",
    description:
      "Work directly with senior engineers and product managers. Transparent progress tracking, open Slack channels, and zero hidden costs keep you fully in control.",
    badge: "Client-Centric",
    color: "from-blue-500/10 to-blue-500/5",
    accentColor: "text-blue-600",
    borderColor: "hover:border-blue-500/30",
    iconBg: "bg-blue-500/10",
  },
  {
    id: "scalability",
    icon: TrendingUp,
    title: "Future-Proof Architecture & Scalability",
    description:
      "Engineered to scale from your first 1,000 users to millions seamlessly with modular microservices, optimized database schemas, and cloud resilience.",
    badge: "Built to Scale",
    color: "from-purple-500/10 to-purple-500/5",
    accentColor: "text-purple-600",
    borderColor: "hover:border-purple-500/30",
    iconBg: "bg-purple-500/10",
  },
  {
    id: "support",
    icon: Headphones,
    title: "Dedicated 24/7 Post-Launch Support",
    description:
      "Our partnership doesn't end at deployment. We provide continuous monitoring, uptime guarantees, proactive security patches, and ongoing performance tuning.",
    badge: "Long-term Partner",
    color: "from-cyan-500/10 to-cyan-500/5",
    accentColor: "text-cyan-600",
    borderColor: "hover:border-cyan-500/30",
    iconBg: "bg-cyan-500/10",
  },
];

const metrics = [
  { value: "99.4%", label: "On-Time Project Delivery", subtext: "Strict adherence to milestones" },
  { value: "98%", label: "Client Retention Rate", subtext: "Long-term client partnerships" },
  { value: "50+", label: "Successful Products Built", subtext: "Across diverse global industries" },
  { value: "24/7", label: "Proactive Monitoring & SLA", subtext: "Round-the-clock reliability" },
];

const advantages = [
  {
    noventra: "Dedicated Senior Engineering Squad",
    others: "Junior outsourced freelancers",
  },
  {
    noventra: "100% Full IP & Code Ownership",
    others: "Vendor lock-in & proprietary restrictions",
  },
  {
    noventra: "Transparent Sprint Milestones & Weekly Demos",
    others: "Opaque development & surprise delays",
  },
  {
    noventra: "Modern Cloud-Native & Scalable Stack",
    others: "Outdated legacy templates & boilerplate",
  },
];

export function WhyWorkWithUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-slate-50/80">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#008080]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF6600]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008080]/10 text-[#008080] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#008080]/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Work With Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight leading-tight"
          >
            Your Trusted Partner in{" "}
            <span className="text-[#008080]">Engineering Excellence</span> &amp;{" "}
            <span className="text-[#FF6600]">Innovation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-base md:text-lg leading-relaxed"
          >
            We combine high-caliber software engineering, business acumen, and agile velocity to transform ambitious ideas into secure, scalable, market-leading digital products.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {keyPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${pillar.borderColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-13 h-13 rounded-xl flex items-center justify-center ${pillar.iconBg} ${pillar.accentColor} transition-transform duration-300 group-hover:scale-110 p-3`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#008080] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-500 group-hover:text-[#008080] transition-colors">
                  <span>Guaranteed Standard</span>
                  <CheckCircle2 className="w-4 h-4 ml-auto text-[#008080]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats & Trust Metrics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-slate-200/80 p-8 md:p-10 shadow-sm mb-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className={`text-center ${idx > 0 ? "pt-6 md:pt-0" : ""}`}
              >
                <div className="text-3xl md:text-4xl font-extrabold text-[#008080] mb-1.5 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500">{metric.subtext}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Comparison / The Noventra Advantage Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
        >
          {/* Subtle Glow inside dark card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#008080]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF6600]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF6600] mb-3">
                <Zap className="w-4 h-4 text-[#FF6600]" />
                The Noventra Advantage
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                How We Deliver More Value Than Traditional Agencies
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                From initial scoping to long-term scaling, we operate as an extension of your in-house team with radical transparency, dedicated engineering focus, and guaranteed IP ownership.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF6600] hover:bg-[#e65c00] text-white font-semibold text-sm transition-all shadow-lg shadow-[#FF6600]/20"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all backdrop-blur-sm"
                >
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>

            {/* Differentiator Comparison Rows */}
            <div className="w-full lg:max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4 pb-2 border-b border-white/10">
                NoventraTech vs. Traditional Agencies
              </h4>
              <div className="space-y-4">
                {advantages.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-xs md:text-sm">
                    <div className="mt-0.5 rounded-full bg-[#008080]/30 text-[#00b3b3] p-1 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-semibold text-white block">
                        {item.noventra}
                      </span>
                      <span className="text-slate-400 text-xs line-through opacity-80 block mt-0.5">
                        {item.others}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Retain alias for existing consumers
export { WhyWorkWithUs as WhyChooseUs };
