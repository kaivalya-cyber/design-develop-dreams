import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import HandwrittenName from "@/components/HandwrittenName";

const Index = () => {
  const [introDone, setIntroDone] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("introPlayed") === "1";
  });

  useEffect(() => {
    if (introDone) sessionStorage.setItem("introPlayed", "1");
  }, [introDone]);

  return (
    <div className="min-h-screen">
      {!introDone && <HandwrittenName onComplete={() => setIntroDone(true)} />}
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
