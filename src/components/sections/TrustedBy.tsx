export function TrustedBy() {
  const partners = [
    "TechCorp",
    "InnovateHub",
    "CloudSync",
    "DataFlow",
    "NextGen Systems",
    "AppSphere",
  ];

  return (
    <section className="py-12 border-y border-slate-200 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-wider">
          Trusted by innovative companies worldwide
        </p>
        
        {/* Simple Marquee / Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="text-xl md:text-2xl font-bold font-sans tracking-tighter text-slate-400 hover:text-[#008080] transition-colors"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
