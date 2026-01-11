import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer/footer";
import SocialSticky from "@/components/ui/social";
import Experience from "@/components/ui/experience";
import Projects from "@/components/ui/projects";
import About from "@/components/ui/about/about";
import Hero from "@/components/ui/hero/hero";

export default function HomePage() {
  return (
    <div className="bg-gray-900">
      <div className="min-h-screen flex flex-col">
        <Header />
        <Hero />
      </div>
      <main className="container mx-auto px-4 font-sans space-y-10">
        <Experience />
        <Projects />
        <About />
      </main>
      <SocialSticky />
      <Footer />
    </div>
  );
}