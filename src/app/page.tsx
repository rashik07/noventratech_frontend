import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TechStack } from "@/components/sections/TechStack";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Blog } from "@/components/sections/Blog";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[#008080]/100/30 selection:text-blue-200">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <WhyChooseUs />
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
