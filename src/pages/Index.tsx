import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <ContactForm />
    </div>
  );
};

export default Index;
