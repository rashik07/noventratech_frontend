"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Startup",
      price: "$5,000+",
      description: "Perfect for early-stage startups needing a solid MVP.",
      features: [
        "MVP Development",
        "UI/UX Design",
        "Frontend & Backend",
        "Basic QA Testing",
        "1 Month Support",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "$15,000+",
      description: "Comprehensive solutions for growing companies.",
      features: [
        "Full-Stack Development",
        "Advanced Architecture",
        "Cloud Deployment",
        "Automated Testing (CI/CD)",
        "SEO Optimization",
        "3 Months Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Dedicated teams and enterprise-grade software.",
      features: [
        "Dedicated Development Team",
        "Microservices Architecture",
        "AI & Machine Learning",
        "Advanced Security Audits",
        "24/7 Priority Support",
        "SLA Guarantee",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative bg-white">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Flexible engagement models designed to scale with your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-3xl p-8 relative flex flex-col transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-blue-500 shadow-[0_10px_40px_-10px_rgba(37,99,235,0.2)] transform md:-translate-y-4' 
                  : 'border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#008080] to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-6 min-h-[48px]">{plan.description}</p>
                <div className="text-4xl font-extrabold text-slate-900">{plan.price}</div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-700">
                    <Check className="w-5 h-5 text-[#008080] mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                  plan.popular 
                    ? 'bg-[#FF6600] hover:bg-[#e65c00] text-white shadow-lg shadow-[#FF6600]/20' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                Choose {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
