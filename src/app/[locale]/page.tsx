import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer/footer";
import TypingHero from "@/components/ui/hero/typing-hero";
import SocialSticky from "@/components/ui/social";
import Experience from "@/components/ui/experience";
import Projects from "@/components/ui/projects";
import About from "@/components/ui/about";

export default function HomePage() {
  return (
    <div className="bg-gray-900">
      <div className="min-h-screen flex flex-col">
        <Header />
        <TypingHero />
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