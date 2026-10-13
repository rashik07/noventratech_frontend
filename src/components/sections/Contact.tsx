"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const result = await sendContactEmail(formData);
    
    setIsSubmitting(false);
    if (result?.success) {
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      alert(result?.error || "Failed to send message.");
    }
  }
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-multiply pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Let's Build Something <span className="text-[#008080]">Amazing Together</span>
            </h2>
            <p className="text-slate-600 text-lg mb-12">
              Ready to start your next big project? Get in touch with our team of experts to discuss your ideas and requirements.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#008080]/20 flex items-center justify-center text-[#008080] shrink-0 border border-blue-200">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-slate-600">info@noventratech.net</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0 border border-purple-200">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-slate-600">+88017-67090707</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-200">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg mb-1">Visit Us</h4>
                  <p className="text-slate-600">Road:2, Kallyanpur, Dhaka-1207</p>
                  <p className="text-slate-600">Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-slate-200 p-8 rounded-3xl shadow-lg shadow-slate-200/50"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder-slate-400"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder-slate-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder-slate-400"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Project Details</label>
                  <textarea 
                    rows={4}
                    name="projectDetails"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none placeholder-slate-400"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-[#FF6600] hover:bg-[#e65c00] disabled:bg-[#FF6600]/50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold transition-colors shadow-md shadow-[#FF6600]/20"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  {!isSubmitting && <Send className="w-5 h-5" />}
                </button>

                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 text-green-700 rounded-xl flex items-start space-x-3 border border-green-200"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Message sent successfully!</p>
                      <p className="text-sm opacity-90">We'll get back to you as soon as possible.</p>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
