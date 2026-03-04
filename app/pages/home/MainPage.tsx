'use client';

import { useState, useEffect } from "react";
import PrimeraVista from "../../components/PrimeraVista";
import FirstView from "../../components/FirstView";
import MainNavbar from "../../components/MainNavbar";

type Language = "en" | "es";

export default function MainPage() {

  const [language, setLanguage] = useState<Language>("en");

  // Cargar idioma guardado
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language | null;
    if (savedLang === "en" || savedLang === "es") {
      setLanguage(savedLang);
    }
  }, []);

  // Guardar idioma
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <main className="flex min-h-screen w-full flex-col bg-[#0A2540] items-center ">
      <MainNavbar language={language} setLanguage={setLanguage} />

      {language === "en" ? <FirstView /> : <PrimeraVista />}
    </main>
  );
}