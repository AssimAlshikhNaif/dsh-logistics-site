import { Warehouse, Building2, Sparkles, ArrowUpRight, ShieldCheck, Check } from 'lucide-react';

export default function ReinigungServices() {
  const handleLearnMore = () => {
    const element = document.getElementById('angebot');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Warehouse className="w-6 h-6 text-cyan-400" />,
      title: "Lager- & Hallenreinigung",
      description: "Gründliche und zuverlässige professionelle Reinigung von Lager- und Industriehallen für höchste Hygiene- und Sicherheitsstandards in Wittenberg."
    },
    {
      icon: <Building2 className="w-6 h-6 text-cyan-400" />,
      title: "Gebäudereinigung & Gewerbe",
      description: "Professionelle Unterhalts- und Endreinigung für Gewerbeobjekte, Büros und Betriebsstätten mit modernsten Reinigungsmethoden."
    }
  ];

  const highlights = [
    "Boden- & Regalreinigung",
    "Unterhalts- & Endreinigung",
    "Besenreine Übergabe",
    "Zertifiziertes Fachpersonal"
  ];

  return (
    <section id="reinigung" className="py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      {/* إضاءات خلفية محيطية فاخرة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* العنوان الرئيسي للقسم */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-lg mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Spezialreinigung
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
            Professionelle <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Reinigungslösungen</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Höchste Sauberkeitsstandards für Industrie, Logistik und Gewerbeobjekte – DSH Service GmbH sorgt für makellose Ergebnisse.
          </p>
        </div>

        {/* القسم الرئيسي: صورة التنظيف + تفاصيل الخدمات */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* الصورة المحلية (6 أعمدة) */}
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur-2xl opacity-25 group-hover:opacity-45 transition duration-700"></div>
            <div className="relative h-[480px] sm:h-[560px] rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
              <img 
                src="/Reinigungsservice.webp" 
                alt="DSH Professionelle Reinigung" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
              
              {/* بطاقة عائمة داخل الصورة */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/60 shadow-2xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-extrabold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    Höchste Standards
                  </span>
                  <p className="text-white font-extrabold text-lg mt-2">DSH Service GmbH Wittenberg</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* تفاصيل الخدمات والبطاقات (6 أعمدة) */}
          <div className="lg:col-span-6 space-y-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-slate-900/80 p-8 rounded-[2rem] border border-slate-800 hover:border-cyan-500/40 shadow-2xl backdrop-blur-xl transition-all duration-500 group hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-inner">
                    {service.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* قائمة سريعة بالميزات */}
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
              <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">Unsere Reinigungs-Garantie:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={handleLearnMore}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 transition-all duration-300 cursor-pointer group"
              >
                <span>Angebot für Reinigung anfordern</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}