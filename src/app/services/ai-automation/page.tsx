import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AIAutomationPage() {
  const features = [
    "Machine Learning Models",
    "Natural Language Processing (NLP)",
    "Robotic Process Automation (RPA)",
    "Predictive Analytics",
    "Intelligent Chatbots & Assistants",
    "Data Pipelines & AI Integration"
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
              Our Services
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              AI Automation
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Unlock the power of artificial intelligence to automate repetitive tasks, gain deeper insights from your data, and create smarter products. We help you integrate cutting-edge AI technologies to stay ahead of the curve and boost operational efficiency.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Offerings</h3>
                <ul className="space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mr-3 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Ready to automate?</h3>
                <p className="text-slate-600 mb-6 text-sm">
                  Let's explore how AI can transform your business processes and unlock new value.
                </p>
                <Link 
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#FF6600] hover:bg-[#e65c00] text-white rounded-xl font-medium transition-colors"
                >
                  Get a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
