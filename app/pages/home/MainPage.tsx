'use client';

import { useState, useEffect } from "react";
import PrimeraVista from "../../components/PrimeraVista";
import FirstView from "../../components/FirstView";
import MainNavbar from "../../components/MainNavbar";
import ServicesSection from "../../components/ServicesSection";
import GenerativeAISection from "../../components/GenerativeAISection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

type Language = "en" | "es";

export default function MainPage() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language | null;
    if (savedLang === "en" || savedLang === "es") {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col bg-[#0A2540] items-center page-enter">
      <MainNavbar language={language} setLanguage={setLanguage} />

      {language === "en" ? <FirstView /> : <PrimeraVista />}

      <ServicesSection language={language} />
      <GenerativeAISection language={language} />
      <ContactSection language={language} />
      <Footer />
    </main>
  );
}
