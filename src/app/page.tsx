import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 lg:py-20 min-h-screen">
      <Header />
      <div className="lg:w-1/2 lg:ml-auto">
        <main>
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
