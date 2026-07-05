"use client";

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
            <a href="#" className="flex items-center space-x-2">
              <img src="/nlogo.png" alt="NoventraTech Logo" className="h-12 md:h-16 w-auto object-contain" />
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-6">
              A premium software development agency specializing in enterprise solutions, mobile applications, and AI integrations.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#FF6600]/20 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-slate-700">
                  <span className="sr-only">{social}</span>
                  {/* Placeholder for icons */}
                  <div className="w-4 h-4 bg-current opacity-50 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Apps', 'SaaS Solutions', 'AI Automation', 'Cloud & DevOps'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">{item}</a>
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
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">{item}</a>
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
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
