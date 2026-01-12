import Header from "@/components/ui/content/header/header";
import Footer from "@/components/ui/content/footer";
import SocialSticky from "@/components/ui/social";
import Experience from "@/components/ui/content/experience";
import About from "@/components/ui/content/about/about";
import Hero from "@/components/ui/content/hero";
import Projects from "@/components/ui/content/projects";

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