import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Building2, Calendar, Target, Zap } from "lucide-react";

export default function SBECaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 md:px-8 py-6">
        <Link href="/#case-study" className="inline-flex items-center text-slate-500 hover:text-[#008080] transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="flex flex-wrap gap-2 mb-6">
                {["ERP", "HRM & CRM", "Inventory Management"].map((tag, i) => (
                  <span key={i} className="text-xs font-semibold px-3 py-1 bg-[#008080]/10 text-[#008080] rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                SBE (S Brothers Limited)
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                A robust Enterprise Resource Planning system tailored for S Brothers Limited. It unifies Human Resource Management (HRM), Customer Relationship Management (CRM), Sales tracking, and Inventory Management into a single powerful platform.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-sm text-slate-500 mb-1 flex items-center gap-1.5"><Building2 className="w-4 h-4" /> Client</div>
                  <div className="font-semibold text-slate-900">S Brothers Limited</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1 flex items-center gap-1.5"><Target className="w-4 h-4" /> Industry</div>
                  <div className="font-semibold text-slate-900">Manufacturing & Trade</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1 flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Duration</div>
                  <div className="font-semibold text-slate-900">6 Months</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/Main/CaseStudy/SBE/1.png" 
                  alt="SBE Case Study"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#FF6600]/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#008080]/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </span>
                The Challenge
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-lg text-slate-600 leading-relaxed">
                  S Brothers Limited was managing operations using disconnected legacy systems for HR, sales, and inventory. This fragmentation caused severe data silos, delayed sales reporting, and inefficient workforce management, hindering their ability to scale effectively.
                </p>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5" />
                </span>
                Our Solution
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-lg text-slate-600 leading-relaxed">
                  We built a bespoke, centralized ERP solution tailored to their operational workflows. The platform features an integrated HRM suite for employee tracking, a dynamic CRM to manage client relationships, and automated Sales and Inventory synchronization to ensure real-time visibility across all departments.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                The Results
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Unified 4 disparate systems into a single dashboard",
                    "Reduced monthly reporting time by 75%",
                    "Improved inventory accuracy to 99.8%",
                    "Enhanced employee productivity through automated workflows"
                  ].map((result, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#008080] shrink-0 mt-0.5" />
                      <p className="text-lg text-slate-700 font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900">Project Gallery</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">A closer look at the S Brothers Limited ERP system.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/Main/CaseStudy/SBE/2.png" alt="SBE Platform View 1" fill className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/Main/CaseStudy/SBE/3.png" alt="SBE Platform View 2" fill className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#008080] text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results. Our team of experts is ready to build your next big thing.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6600] hover:bg-[#e65c00] text-white rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
