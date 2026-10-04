import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyWorkWithUs } from "@/components/sections/WhyWorkWithUs";
import { TechStack } from "@/components/sections/TechStack";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[#008080]/20 selection:text-[#008080]">
      <Navbar />
      <Hero />
      {/* <TrustedBy /> */}
      <Services />
      <WhyWorkWithUs />
      <TechStack />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
