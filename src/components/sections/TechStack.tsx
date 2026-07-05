"use client";

import { motion } from "framer-motion";

export function TechStack() {
  const technologies = [
    { name: "React.js", color: "text-[#008080]" },
    { name: "Next.js", color: "text-slate-900" },
    { name: "TypeScript", color: "text-[#006666]" },
    { name: "Node.js", color: "text-green-600" },
    { name: "NestJS", color: "text-red-600" },
    { name: "Express.js", color: "text-slate-600" },
    { name: "MongoDB", color: "text-green-700" },
    { name: "PostgreSQL", color: "text-blue-500" },
    { name: "Docker", color: "text-[#008080]" },
    { name: "AWS", color: "text-orange-500" },
    { name: "GraphQL", color: "text-pink-600" },
    { name: "Tailwind CSS", color: "text-cyan-600" },
    { name: "Python", color: "text-yellow-600" },
    { name: "AI & ML", color: "text-purple-600" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#008080]/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
          Our <span className="text-[#008080]">Technology Stack</span>
        </h2>
        <p className="text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
          We use modern, battle-tested technologies to build scalable and maintainable digital solutions.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors cursor-default border border-slate-200 shadow-sm hover:shadow-md"
            >
              <span className={`font-bold text-lg ${tech.color}`}>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
