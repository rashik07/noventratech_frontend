"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Bot, Code, Cloud, ShieldCheck, Megaphone, PenTool, LayoutTemplate } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Web Development",
      description: "High-performance, responsive web applications built with modern frameworks like React and Next.js.",
      icon: Globe,
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-[#008080]/20",
      iconColor: "text-[#008080]",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile experiences for iOS and Android that users love.",
      icon: Smartphone,
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "AI Automation",
      description: "Intelligent AI agents and workflow automation to scale your operations efficiently.",
      icon: Bot,
      color: "from-indigo-500 to-indigo-700",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      title: "Custom Software",
      description: "Tailor-made software solutions designed specifically for your unique business needs.",
      icon: Code,
      color: "from-cyan-500 to-cyan-700",
      bgColor: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
    {
      title: "SaaS Development",
      description: "End-to-end SaaS architecture, development, and scaling for subscription businesses.",
      icon: LayoutTemplate,
      color: "from-[#008080] to-indigo-600",
      bgColor: "bg-[#008080]/20",
      iconColor: "text-[#008080]",
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated CI/CD pipelines on AWS, Azure, and GCP.",
      icon: Cloud,
      color: "from-[#00b3b3] to-[#008080]",
      bgColor: "bg-sky-100",
      iconColor: "text-sky-600",
    },
    {
      title: "Cyber Security",
      description: "Comprehensive security audits, penetration testing, and secure development lifecycle.",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to accelerate growth and maximize ROI.",
      icon: Megaphone,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      title: "UI/UX Design",
      description: "User-centric design systems, wireframes, and high-fidelity prototypes.",
      icon: PenTool,
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-100",
      iconColor: "text-violet-600",
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-white">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Our <span className="text-[#008080]">Services</span>
          </h2>
          <p className="text-slate-600 text-lg">
            We provide end-to-end software development and digital transformation services tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-white rounded-2xl hover:bg-slate-50 transition-all duration-300 border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center ${service.bgColor}`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#008080] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
