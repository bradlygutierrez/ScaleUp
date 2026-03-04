'use client';

type Language = "en" | "es";

interface MainNavbarProps {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

export default function MainNavbar({ language, setLanguage }: MainNavbarProps) {

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "es" : "en"));
  };

  return (
    <nav className="w-full text-white p-13 flex items-center justify-between h-[60px]">
      
      {/* Logo */}
      <div className="container mx-auto flex items-center gap-2">
        <h1 className="text-3xl font-bold text-[#1D4ED8]">ScaleUp</h1>
        <h1 className="text-3xl font-bold">AI</h1>
      </div>

      <ul className="flex gap-5 items-center text-lg font-bold">

        <li>
          <a href="#" className="hover:bg-gray-600 px-5 py-4 rounded-full transition">
            {language === "en" ? "Home" : "Inicio"}
          </a>
        </li>

        <li>
          <a href="#" className="hover:bg-gray-600 px-5 py-4 rounded-full transition">
            {language === "en" ? "Services" : "Servicios"}
          </a>
        </li>

        <li>
          <a href="#" className="hover:bg-gray-600 px-5 py-4 rounded-full transition">
            {language === "en" ? "Pricing" : "Precios"}
          </a>
        </li>

        <li>
          <a href="#" className="hover:bg-gray-600 px-5 py-4 rounded-full transition">
            {language === "en" ? "Contact" : "Contacto"}
          </a>
        </li>

        {/* 🌍 Toggle */}
        <li className="flex items-center gap-2">
          <span className={language === "es" ? "text-blue-500" : "text-gray-400"}>
            ES
          </span>

          <button
            onClick={toggleLanguage}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300
            ${language === "en" ? "bg-[#1D4ED8]" : "bg-gray-500"}`}
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md
              transition-transform duration-300
              ${language === "en" ? "translate-x-7" : ""}`}
            />
          </button>

          <span className={language === "en" ? "text-blue-500" : "text-gray-400"}>
            EN
          </span>
        </li>

      </ul>
    </nav>
  );
}