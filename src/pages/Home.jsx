import AboutMe from "../components/AboutMe";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MatrixBackground from "../components/MatrixBackground";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* { Theme Toggle} */}
      {/* <ThemeToggle /> */}
      {/* { Background Effects} */}
      <MatrixBackground />

      {/* { Navbar} */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* { Footer} */}
      <Footer />
    </div>
  );
}

export default Home;
