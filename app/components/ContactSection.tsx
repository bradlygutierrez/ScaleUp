interface ContactSectionProps {
  language: "en" | "es";
}

export default function ContactSection({ language }: ContactSectionProps) {
  const isSpanish = language === "es";

  return (
    <section
      id="contacto"
      className="w-full bg-[#1d4ed8] py-20 px-4 scroll-reveal"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto text-center text-slate-50">
        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          {isSpanish
            ? "¿Listo para escalar tu negocio?"
            : "Ready to scale your business?"}
        </h2>
        <p className="text-slate-100 mb-8 text-base md:text-lg">
          {isSpanish
            ? "Agenda una llamada estratégica gratuita y descubre cómo podemos ayudarte a crecer con tecnología e inteligencia artificial."
            : "Book a free strategy call and discover how we can help you grow with technology and artificial intelligence."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-[#1d4ed8] font-semibold text-sm md:text-base shadow-md hover:bg-slate-100 transition">
            {isSpanish ? "Agenda una llamada →" : "Book a call →"}
          </button>
          <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-100 text-slate-50 font-semibold text-sm md:text-base hover:bg-[#1e40af] transition">
            {isSpanish ? "WhatsApp directo" : "Direct WhatsApp"}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-100/90">
          <span>Scaleup-AI@outlook.com</span>
          <span>•</span>
          <span>+505 8487 6604/ +505 8532 3370 (Nicaragua)</span>
        </div>
      </div>
    </section>
  );
}

