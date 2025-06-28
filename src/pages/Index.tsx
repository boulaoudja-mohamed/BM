import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// import BackgroundAnimation from "@/components/BackgroundAnimation";
import ThemeToggle from "@/components/ThemeToggle";
import AnimatedIconsBackground from "@/components/AnimatedIconsBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 relative">
      <AnimatedIconsBackground />
      <ThemeToggle />
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
