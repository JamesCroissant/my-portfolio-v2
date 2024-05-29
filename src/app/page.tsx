import Navbar from "@/components/Navbar";
import HeroSection from '@/components/HeroSection';
import Works from "@/components/Works";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-20">
        <HeroSection />
        <Works />
        <About />
        <Contact />
      </div>
    </main>
  );
}
