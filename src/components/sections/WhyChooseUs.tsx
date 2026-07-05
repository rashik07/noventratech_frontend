"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Clock, Shield, Award, Users } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      title: "Expert Team",
      description: "Our developers are vetted industry experts with years of experience in enterprise systems.",
      icon: Users,
    },
    {
      title: "Modern Technology Stack",
      description: "We utilize the latest frameworks and cloud technologies to ensure scalability.",
      icon: Zap,
    },
    {
      title: "Agile Development",
      description: "Iterative delivery and transparent communication throughout the project lifecycle.",
      icon: CheckCircle2,
    },
    {
      title: "24/7 Support",
      description: "Dedicated maintenance and support teams available round the clock.",
      icon: Clock,
    },
    {
      title: "Security First Approach",
      description: "Security is baked into our development lifecycle from day one.",
      icon: Shield,
    },
    {
      title: "Award-Winning Quality",
      description: "Consistently recognized for delivering high-quality, bug-free software.",
      icon: Award,
    },
  ];

  return (
    <section className="py-24 relative bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-slate-900">
              Why Partner With <span className="text-[#008080]">NoventraTech?</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Choosing the right technology partner is critical to your success. We combine technical excellence with business acumen to deliver solutions that drive real results. Our commitment to quality, security, and transparency sets us apart.
            </p>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4 bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#008080]/20 flex items-center justify-center">
                  <span className="text-[#008080] font-bold text-xl">99%</span>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold">Client Retention Rate</h4>
                  <p className="text-sm text-slate-500">Our clients stay with us for the long term.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-xl">5★</span>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold">Top Rated Agency</h4>
                  <p className="text-sm text-slate-500">Recognized on Clutch and Upwork.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm hover:shadow-md"
              >
                <feature.icon className="w-8 h-8 text-[#008080] mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
