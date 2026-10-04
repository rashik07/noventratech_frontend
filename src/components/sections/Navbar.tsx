"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Case Study", href: "/#case-study" },
    { name: "Process", href: "/#process" },
    { name: "Contact", href: "/#contact" },
  ];

  const services = [
    { name: "Website Development", href: "/services/website-development", description: "Build scalable and performant websites." },
    { name: "Ecommerce Development", href: "/services/ecommerce-development", description: "Robust platforms for online retail." },
    { name: "Custom Software Development", href: "/services/custom-software-development", description: "Tailored enterprise solutions." },
    { name: "AI Automation", href: "/services/ai-automation", description: "Smart workflows and integrations." },
    { name: "Cloud Service", href: "/services/cloud-service", description: "Infrastructure and DevOps." },
    { name: "Cyber Security", href: "/services/cyber-security", description: "Protect your digital assets." },
    { name: "UI/UX Design", href: "/services/ui-ux-design", description: "Intuitive user experiences." },
    { name: "Digital Marketing Solution", href: "/services/digital-marketing", description: "Grow your online presence." },
  ];

  const products = [
    { name: "NovenPOS", href: "/products/novenpos", description: "Advanced Point of Sale System" },
    { name: "EIMS", href: "/products/eims", description: "Education Institute Management System" },
    { name: "NovenHRM", href: "/products/novenhrm", description: "Comprehensive HR Management" },
    { name: "NovenCommerce", href: "/products/novencommerce", description: "E-Commerce Solution With POS Integration" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center relative w-40 h-14 md:w-56 md:h-20">
            <Image src="/nlogo.png" alt="NoventraTech Logo" fill priority className="object-contain" sizes="(max-width: 768px) 160px, 224px" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center space-x-1 text-sm font-medium text-slate-600 hover:text-[#008080] transition-colors py-4">
              <span>Services</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-[80%] left-0 w-80 pt-4 hidden group-hover:block">
              <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-2 gap-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="p-3 hover:bg-slate-50 rounded-lg transition-colors group/item"
                    >
                      <div className="text-sm font-bold text-slate-900 group-hover/item:text-[#008080]">
                        {service.name}
                      </div>
                      {/* <div className="text-xs text-slate-500 mt-0.5">
                        {service.description}
                      </div> */}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-1 text-sm font-medium text-slate-600 hover:text-[#008080] transition-colors py-4">
              <span>Products</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-[80%] left-0 w-64 pt-4 hidden group-hover:block">
              <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                {products.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    className="p-3 hover:bg-slate-50 rounded-lg transition-colors group/item"
                  >
                    <div className="text-sm font-bold text-slate-900 group-hover/item:text-[#008080]">
                      {product.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {product.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-[#008080] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-[#FF6600] hover:bg-[#e65c00] text-white font-medium transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] inline-block"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-card m-4 rounded-xl overflow-hidden flex flex-col md:hidden shadow-lg border border-slate-200"
          >
            <div className="border-b border-slate-100">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="px-6 py-4 w-full flex justify-between items-center text-slate-600 hover:text-[#008080] transition-colors"
              >
                <span className="font-medium">Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-slate-50 overflow-hidden"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-8 py-3 text-slate-600 hover:text-[#008080] hover:bg-slate-100 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="text-sm font-bold">{service.name}</div>
                        <div className="text-xs opacity-70 mt-0.5">{service.description}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="border-b border-slate-100">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="px-6 py-4 w-full flex justify-between items-center text-slate-600 hover:text-[#008080] transition-colors"
              >
                <span className="font-medium">Products</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-slate-50 overflow-hidden"
                  >
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="block px-8 py-3 text-slate-600 hover:text-[#008080] hover:bg-slate-100 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="text-sm font-bold">{product.name}</div>
                        <div className="text-xs opacity-70 mt-0.5">{product.description}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-6 py-4 border-b border-slate-100 text-slate-600 hover:text-[#008080] hover:bg-slate-50 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="p-6 bg-slate-50">
              <Link
                href="#contact"
                className="block w-full text-center px-6 py-3 rounded-full bg-[#FF6600] text-white font-medium shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
