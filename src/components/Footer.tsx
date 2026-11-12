import { Mail, Phone, MapPin, Clock, ShieldCheck, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 relative overflow-hidden border-t border-slate-800/80">
      {/* إضاءات خلفية خفيفة */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo + Company (4 أعمدة) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3.5 group cursor-pointer inline-flex">
              <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg group-hover:border-cyan-500/50 transition-colors">
                <img src="/logo.png" alt="DSH Service GmbH" className="w-7 h-7 object-contain" />
              </div>
              <h3 className="text-xl font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                DSH Service GmbH
              </h3>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Ihr zuverlässiger Partner für moderne Lagerlogistik, nationales Transportmanagement und professionelle Gebäudereinigung in Lutherstadt Wittenberg.
            </p>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Zertifizierter Fachbetrieb</span>
            </div>
          </div>

          {/* Services (2 أعمدة) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-base text-white tracking-wide border-b border-cyan-500/20 pb-2.5 inline-block">
              Leistungen
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-sm font-light">
              <li>
                <button onClick={() => scrollToSection('logistik')} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Lagerlogistik
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('logistik')} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Transportmanagement
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reinigung')} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Hallenreinigung
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reinigung')} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Gebäudereinigung
                </button>
              </li>
            </ul>
          </div>

          {/* Opening hours (3 أعمدة) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-base text-white tracking-wide border-b border-cyan-500/20 pb-2.5 inline-block">
              Erreichbarkeit & Anfragen
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-sm font-light">
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Mo – Fr: 09:00 – 14:00 Uhr</span>
              </li>
              <li className="text-xs text-slate-500 pl-6">
                Telefonische & persönliche Beratung
              </li>
              <li className="pt-2">
                <span className="inline-block px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
                  24/7 Notfall- & Logistik-Support
                </span>
              </li>
            </ul>
          </div>

          {/* Contact (3 أعمدة) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-base text-white tracking-wide border-b border-cyan-500/20 pb-2.5 inline-block">
              Kontakt
            </h4>
            <ul className="space-y-3 text-slate-400 text-sm font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <span className="leading-snug">Am Alten Bahnhof 9<br />06886 Lutherstadt Wittenberg, Deutschland</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+491639023425" className="hover:text-cyan-400 transition-colors">+49 163 9023425</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:Aleleoue@dsh-s.de" className="hover:text-cyan-400 transition-colors">Aleleoue@dsh-s.de</a>
              </li>
              <li className="pt-1">
                <a 
                  href="https://wa.me/491639023425" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold hover:bg-emerald-500/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat starten</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-900 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
            <p className="text-slate-500">© {new Date().getFullYear()} DSH Service GmbH. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6 text-slate-400">
              <Link to="/impressum" className="hover:text-cyan-400 transition-colors">Impressum</Link>
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Datenschutz</Link>
              <Link to="/agb" className="hover:text-cyan-400 transition-colors">AGB</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}