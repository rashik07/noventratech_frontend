"use client";

import { motion } from "framer-motion";
import { Lightbulb, FileText, PenTool, Code2, Bug, Rocket, Wrench } from "lucide-react";

export function Process() {
  const steps = [
    { title: "Discovery", description: "Understanding your vision, goals, and requirements.", icon: Lightbulb },
    { title: "Planning", description: "Architecting the solution and defining the roadmap.", icon: FileText },
    { title: "Design", description: "Creating intuitive UI/UX and wireframes.", icon: PenTool },
    { title: "Development", description: "Writing clean, scalable, and secure code.", icon: Code2 },
    { title: "Testing", description: "Rigorous QA to ensure a bug-free experience.", icon: Bug },
    { title: "Deployment", description: "Launching the product to production.", icon: Rocket },
    { title: "Maintenance", description: "Ongoing support and feature enhancements.", icon: Wrench },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Our Development <span className="text-[#008080]">Process</span>
          </h2>
          <p className="text-slate-600 text-lg">
            A proven, agile methodology that ensures we deliver high-quality software on time and within budget.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200/0 via-blue-300 to-blue-200/0 -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-[#008080] items-center justify-center z-10 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  <span className="text-[#008080] font-bold">{index + 1}</span>
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-2xl hover:border-blue-300 transition-colors border border-slate-200 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#008080]/10 flex items-center justify-center text-[#008080] border border-blue-100">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-slate-600">{step.description}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
