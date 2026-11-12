import { Warehouse, ClipboardCheck, CheckCircle2, ShieldCheck, Truck, Clock, Globe, ArrowUpRight } from 'lucide-react';

export default function LogistikServices() {
  const handleLearnMore = () => {
    const element = document.getElementById('angebot');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Warehouse className="w-7 h-7 text-cyan-400" />,
      title: "Moderne Lagerlogistik & Hallenmanagement",
      description: "Professionelle Einlagerung, Kommissionierung und sicheres Bestandsmanagement in unseren hochmodernen Logistikhallen in Lutherstadt Wittenberg.",
      features: ["Echtzeit-Bestandsführung", "Barcode-Kommissionierung", "24/7 Videoüberwachung"]
    },
    {
      icon: <ClipboardCheck className="w-7 h-7 text-cyan-400" />,
      title: "Nationales & Internationales Transportmanagement",
      description: "Zuverlässige Transportlösungen für Industrie und Handel mit termingerechter Zustellung und lückenloser Sendungsverfolgung.",
      features: ["FTL / LTL Komplett- & Teilladungen", "Express- & Sonderfahrten", "Erfahrene Berufskraftfahrer"]
    }
  ];

  const advantages = [
    {
      icon: <Truck className="w-5 h-5 text-cyan-400" />,
      title: "Termintreue & Pünktlichkeit",
      desc: "Absolute Verlässlichkeit bei jeder Auslieferung."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      title: "Höchste Sicherheit",
      desc: "Sorgfältiger Umgang mit sensibler Fracht."
    },
    {
      icon: <Clock className="w-5 h-5 text-cyan-400" />,
      title: "24/7 Kundenservice",
      desc: "Ständige Erreichbarkeit für Ihre Anliegen."
    },
    {
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      title: "Strategischer Standort",
      desc: "Zentraler Hauptsitz in Lutherstadt Wittenberg."
    }
  ];

  return (
    <section id="logistik" className="py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      {/* تأثيرات إضاءة خلفية محيطية فاخرة */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header العنوان الرئيسي */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-xl shadow-cyan-950/50 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            Exzellenz in Logistik & Transport
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            Logistiklösungen, die <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Beweisen</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Wir verbinden modernste Lagertechnik mit präzisem Transportmanagement für Ihren maximalen geschäftlichen Erfolg.
          </p>
        </div>

        {/* القسم الرئيسي: صورة الشاحنات الفعلية للشركة + بطاقات الخدمات الاحترافية */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* الصورة الحقيقية للأسطول (6 أعمدة) */}
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur-2xl opacity-25 group-hover:opacity-45 transition duration-700"></div>
            <div className="relative h-[480px] sm:h-[560px] rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
              <img 
                src="/dsh1.jpeg" 
                alt="DSH Service GmbH Fahrzeugflotte" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              
              {/* بطاقة عائمة داخل الصورة بتصميم زجاجي فاخر */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/60 shadow-2xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-extrabold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    Eigener Fuhrpark
                  </span>
                  <p className="text-white font-extrabold text-lg mt-2">DSH Service GmbH Wittenberg</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
                  <Truck className="w-6 h-6" />
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
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <button 
                onClick={handleLearnMore}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 transition-all duration-300 cursor-pointer group"
              >
                <span>Jetzt unverbindliches Angebot anfordern</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Advantages Section (المميزات الأربع بتصميم متطور) */}
        <div className="bg-slate-900/90 rounded-[2.5rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800 backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-8 text-center sm:text-left tracking-tight">
              Warum Unternehmen auf DSH Service vertrauen
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((adv, index) => (
                <div key={index} className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 space-y-4 group">
                  <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    {adv.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1.5 text-white">{adv.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-light">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}