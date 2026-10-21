"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#FF6600]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-12 md:h-16 w-32">
                <Image src="/nlogo.png" alt="NoventraTech Logo" fill className="object-contain" sizes="(max-width: 768px) 128px, 160px" />
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-6">
              A premium software development agency specializing in enterprise solutions, mobile applications, and AI integrations.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  name: "Facebook",
                  href: "https://www.facebook.com/profile.php?id=61588787775268",
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  href: "#",
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                    </svg>
                  ),
                },
                {
                  name: "Twitter",
                  href: "#",
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#FF6600]/20 hover:border-[#FF6600]/50 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-slate-700"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Apps', 'SaaS Solutions', 'AI Automation', 'Cloud & DevOps'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Blog', 'Case Studies', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to get the latest tech insights and news.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors w-full placeholder-slate-500"
              />
              <button
                type="submit"
                className="bg-[#FF6600] hover:bg-[#e65c00] text-white rounded-lg px-4 py-3 text-sm font-bold transition-colors w-full shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} NoventraTech. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
