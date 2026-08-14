import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function EIMSPage() {
  const features = [
    "Centralized Data Repository",
    "Automated Workflow Engine",
    "Advanced Document Management",
    "Granular Access Controls",
    "Comprehensive Audit Trails",
    "Custom Reporting & Dashboards"
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            <div className="inline-block px-4 py-1.5 bg-[#008080]/10 text-[#008080] rounded-full text-sm font-bold mb-6">
              Enterprise Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              EIMS
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Our Enterprise Information Management System (EIMS) is a powerful platform that connects 
              your people, processes, and information. Break down data silos, automate complex workflows, 
              and ensure compliance across your entire organization with a secure, unified digital workspace.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#008080] shrink-0 mr-3 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Ready to transform your business?</h3>
                <p className="text-slate-600 mb-6 text-sm">
                  Get in touch with our team to schedule a personalized demo of EIMS and see how it fits your workflow.
                </p>
                <Link 
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#FF6600] hover:bg-[#e65c00] text-white rounded-xl font-medium transition-colors"
                >
                  Request a Demo <ArrowRight className="ml-2 w-4 h-4" />
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
