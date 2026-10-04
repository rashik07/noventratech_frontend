"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function FeaturedProjects() {
  const projects = [
    {
      title: "LFC (Ladies Fashion Corner)",
      link: "/case-study/lfc",
      description: "A comprehensive retail management platform integrating POS, supply chain management, and robust inventory tracking.",
      image: "/Main/CaseStudy/LFC/1.png",
      tags: ["Retail", "POS", "Inventory Management"],
    },
    {
      title: "SBE (S Brothers Limited)",
      link: "/case-study/sbe",
      description: "A centralized Enterprise Resource Planning system integrating HRM, CRM, Sales, and Inventory Management.",
      image: "/Main/CaseStudy/SBE/1.png",
      tags: ["ERP", "HRM & CRM", "Inventory Management"],
    },
    {
      title: "EIMS (Education Institute Management System)",
      link: "/case-study/eims",
      description: "A comprehensive EdTech solution covering everything from admissions and enrollment to exams, attendance, results, and teacher HRM.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["EdTech", "School Management", "HRM"],
    },
  ];

  return (
    <section id="case-study" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Featured <span className="text-[#008080]">Case Study</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Explore some of our recent work where we've helped businesses transform their digital presence and operations.
            </p>
          </div>
          <Link href="#" className="hidden md:flex items-center text-[#008080] hover:text-[#006666] transition-colors font-medium">
            View All Case Studies <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold px-2.5 py-1 bg-[#008080]/10 text-[#008080] rounded-full border border-blue-100">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-6">{project.description}</p>
                
                <div className="flex items-center gap-4">
                  <Link href={project.link} className="flex-1 flex items-center justify-center py-2.5 bg-[#FF6600] hover:bg-[#e65c00] text-white rounded-lg font-medium transition-colors shadow-sm">
                    View Case Study
                  </Link>
                  <Link href={project.link} className="flex items-center justify-center p-2.5 bg-white hover:bg-slate-50 text-slate-700 rounded-lg transition-colors border border-slate-200 shadow-sm">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
