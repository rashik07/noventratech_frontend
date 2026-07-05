"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What is your typical software development process?",
      answer: "We follow an Agile methodology. Our process starts with a Discovery phase to understand your requirements, followed by Planning, Design, Development, Testing, and Deployment. We ensure continuous communication with weekly sprint reviews.",
    },
    {
      question: "How long does it take to build a custom application?",
      answer: "The timeline varies greatly depending on the complexity of the project. A simple MVP might take 4-8 weeks, while an enterprise-level platform could take 3-6 months. We provide a detailed timeline during the planning phase.",
    },
    {
      question: "Do you provide support after the project is launched?",
      answer: "Absolutely. We offer various maintenance and support packages, including 24/7 SLA-backed support, bug fixes, performance monitoring, and feature enhancements to ensure your application runs smoothly.",
    },
    {
      question: "Will I own the source code?",
      answer: "Yes, once the project is completed and all invoices are settled, the intellectual property and full source code are transferred to you.",
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web and mobile stacks, including React, Next.js, Node.js, Python, AWS, and React Native. However, we are technology agnostic and always choose the best tool for your specific requirements.",
    },
  ];

  return (
    <section className="py-24 relative bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Frequently Asked <span className="text-[#008080]">Questions</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Got questions? We've got answers. If you don't see your question here, feel free to reach out.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-100 last:border-0">
                <AccordionTrigger className="text-left text-lg font-bold text-slate-900 hover:text-[#008080] hover:no-underline py-6 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
