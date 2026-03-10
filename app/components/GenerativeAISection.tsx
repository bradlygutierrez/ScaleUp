interface GenerativeAISectionProps {
  language: "en" | "es";
}

export default function GenerativeAISection({ language }: GenerativeAISectionProps) {
  const isSpanish = language === "es";

  return (
    <section
      id="ia-generativa"
      className="w-full bg-[#020f2a] py-20 px-4 scroll-reveal"
      aria-labelledby="ia-heading"
    >
      <div className="max-w-6xl mx-auto text-white">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-900/60 border border-blue-500/40 text-xs font-medium text-blue-100 mb-4">
            {isSpanish ? "Inteligencia Artificial" : "Artificial Intelligence"}
          </span>
          <h2
            id="ia-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            {isSpanish ? (
              <>
                Potencia tu marketing con{" "}
                <span className="text-[#3b82f6]">Generative AI</span>
              </>
            ) : (
              <>
                Boost your marketing with{" "}
                <span className="text-[#3b82f6]">Generative AI</span>
              </>
            )}
          </h2>
          <p className="text-slate-200 max-w-3xl text-base md:text-lg">
            {isSpanish
              ? "Aprovecha el poder de la inteligencia artificial para crear contenido único, automatizar procesos y escalar tus resultados de marketing sin aumentar tu equipo."
              : "Leverage artificial intelligence to create unique content, automate processes and scale your marketing results without growing your team."}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] items-start mb-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-8 text-slate-100">
              <div>
                <p className="text-3xl md:text-4xl font-bold">10x</p>
                <p className="text-sm text-slate-300">
                  {isSpanish ? "Más rápido" : "Faster"}
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">70%</p>
                <p className="text-sm text-slate-300">
                  {isSpanish ? "Menos costos" : "Lower costs"}
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">∞</p>
                <p className="text-sm text-slate-300">
                  {isSpanish ? "Variaciones" : "Variations"}
                </p>
              </div>
            </div>

            <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-sm md:text-base font-semibold text-white shadow-lg shadow-blue-700/40 transition">
              {isSpanish
                ? "Implementar IA en mi negocio"
                : "Implement AI in my business"}
            </button>
          </div>

          <div className="grid gap-4">
            <div className="bg-[#02081a]/80 border border-slate-800 rounded-2xl p-5 md:p-6">
              <p className="text-sm font-semibold text-slate-300 mb-1">
                {isSpanish ? "Creación de Anuncios" : "Ad Creation"}
              </p>
              <p className="text-sm text-slate-400">
                {isSpanish
                  ? "Genera creativos publicitarios únicos para tus campañas con IA."
                  : "Generate unique ad creatives for your campaigns with AI."}
              </p>
            </div>
            <div className="bg-[#02081a]/80 border border-slate-800 rounded-2xl p-5 md:p-6">
              <p className="text-sm font-semibold text-slate-300 mb-1">
                {isSpanish ? "Copywriting IA" : "AI Copywriting"}
              </p>
              <p className="text-sm text-slate-400">
                {isSpanish
                  ? "Textos persuasivos para ads, emails y landing pages."
                  : "Persuasive copy for ads, emails and landing pages."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

