export default function Footer() {
  return (
    <footer className="w-full bg-[#020617] text-slate-200 py-12 px-4 scroll-reveal">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.4fr,1fr,1fr]">
        <div>
          <h3 className="text-xl font-bold mb-3">
            <span className="text-[#3b82f6]">Scale Up</span> IA
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            Transformamos empresas PYMES en líderes de su industria con
            tecnología, marketing digital e inteligencia artificial.
          </p>
          <div className="flex gap-3 mt-2">
            <span className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 text-sm">
              in
            </span>
            <span className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 text-sm">
              X
            </span>
            <span className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 text-sm">
              IG
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Servicios</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Desarrollo Web</li>
            <li>Sistemas PYMES</li>
            <li>Funnels de Venta</li>
            <li>SEO &amp; Contenido</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Scaleup-AI@outlook.com</li>
            <li>Masaya, Nicaragua</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} Scale Up IA. Todos los derechos reservados.</span>
        <span className="text-slate-600">Hecho con tecnología e inteligencia artificial.</span>
      </div>
    </footer>
  );
}

