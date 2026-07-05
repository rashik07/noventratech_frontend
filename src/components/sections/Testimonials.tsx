"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CTO, TechFlow",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      text: "NoventraTech completely transformed our digital infrastructure. Their team delivered a robust, scalable solution ahead of schedule. The quality of their code and communication is unmatched.",
    },
    {
      name: "David Chen",
      role: "Founder, ScaleUp AI",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      text: "Working with NoventraTech was a game-changer for our startup. They built our SaaS platform from the ground up, implementing complex AI features flawlessly.",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Engineering, GlobalCorp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
      text: "Their cloud and DevOps expertise saved us thousands in infrastructure costs while significantly improving our application's performance and reliability.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Client <span className="text-[#008080]">Testimonials</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Don't just take our word for it. Here's what our partners have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-700 mb-8 italic leading-relaxed">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                />
                <div>
                  <h4 className="text-slate-900 font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
