interface ServicesSectionProps {
  language: "en" | "es";
}

export default function ServicesSection({ language }: ServicesSectionProps) {
  const isSpanish = language === "es";

  const services = [
    {
      icon: "🌐",
      titleEs: "Desarrollo Web",
      titleEn: "Web Development",
      descEs:
        "Sitios web corporativos y landing pages optimizadas para conversión.",
      descEn:
        "Corporate websites and high‑converting landing pages tailored to your brand.",
      bulletsEs: [
        "Diseño responsive",
        "SEO técnico",
        "Integraciones con herramientas de marketing",
      ],
      bulletsEn: ["Responsive design", "Technical SEO", "Marketing tools integrations"],
    },
    {
      icon: "📊",
      titleEs: "Sistemas PYMES",
      titleEn: "SME Systems",
      descEs: "Soluciones digitales personalizadas para automatizar tu negocio.",
      descEn: "Custom digital solutions to automate and streamline your operations.",
      bulletsEs: ["CRM integrado", "Facturación y reportes", "Automatización de tareas repetitivas"],
      bulletsEn: ["Integrated CRM", "Invoicing and reporting", "Automation of repetitive tasks"],
    },
    {
      icon: "📈",
      titleEs: "Funnels de Venta",
      titleEn: "Sales Funnels",
      descEs: "Embudos de conversión que transforman visitantes en clientes.",
      descEn: "Conversion funnels that turn visitors into paying customers.",
      bulletsEs: ["Landing pages", "Email sequences", "Automatización"],
      bulletsEn: ["Landing pages", "Email sequences", "Automation"],
    },
    {
      icon: "✉️",
      titleEs: "Outreach & Email",
      titleEn: "Outreach & Email",
      descEs:
        "Campañas de prospección B2B automatizadas y personalizadas.",
      descEn:
        "Automated, personalized B2B outbound campaigns.",
      bulletsEs: ["Cold email", "LinkedIn", "Seguimiento automático"],
      bulletsEn: ["Cold email", "LinkedIn", "Automated follow‑up"],
    },
    {
      icon: "🔍",
      titleEs: "SEO & Contenido",
      titleEn: "SEO & Content",
      descEs: "Posicionamiento orgánico para atraer tráfico cualificado.",
      descEn: "Organic growth to attract qualified traffic.",
      bulletsEs: ["Estrategia de contenidos", "Blog y recursos", "Optimización on‑page"],
      bulletsEn: ["Content strategy", "Blog & resources", "On‑page optimization"],
    },
  ];

  return (
    <section
      id="servicios"
      className="w-full bg-slate-50 py-20 px-4 scroll-reveal"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 scroll-reveal">
          <p className="text-sm font-semibold tracking-[0.25em] text-blue-600 mb-3">
            {isSpanish ? "NUESTROS SERVICIOS" : "OUR SERVICES"}
          </p>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            {isSpanish ? (
              <>
                Soluciones digitales para{" "}
                <span className="text-blue-600">escalar tu negocio</span>
              </>
            ) : (
              <>
                Digital solutions to{" "}
                <span className="text-blue-600">scale your business</span>
              </>
            )}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            {isSpanish
              ? "Combinamos tecnología de punta con estrategias probadas para impulsar el crecimiento de tu empresa."
              : "We combine cutting‑edge technology with proven strategies to accelerate your company’s growth."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.titleEs}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-shadow flex flex-col justify-between scroll-reveal"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {isSpanish ? service.titleEs : service.titleEn}
                </h3>
                <p className="text-slate-600 mb-4">
                  {isSpanish ? service.descEs : service.descEn}
                </p>
                <ul className="space-y-1 text-sm text-slate-600 mb-4">
                  {(isSpanish ? service.bulletsEs : service.bulletsEn).map(
                    (item) => (
                      <li key={item}>• {item}</li>
                    )
                  )}
                </ul>
              </div>
              <button className="mt-2 text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                {isSpanish ? "Saber más" : "Learn more"} <span>→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

