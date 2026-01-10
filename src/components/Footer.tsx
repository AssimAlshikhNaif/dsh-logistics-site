import { Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* الشركة واللوجو */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="DSH Service GmbH" className="w-10 h-10 object-contain" />
              <h3 className="text-xl font-bold">DSH Service GmbH</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ihr zuverlässiger Partner für professionelle Logistik und industrielle Spezialreinigung. Qualität und Präzision seit über 20 Jahren.
            </p>
            <div className="flex items-center gap-2 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">Zertifizierter Fachbetrieb</span>
            </div>
          </div>

          {/* الخدمات */}
          <div>
            <h4 className="font-semibold text-lg mb-6 border-b border-cyan-500/30 pb-2 inline-block">Leistungen</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li onClick={() => scrollToSection('logistik')} className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2">
                <div className="w-1 h-1 bg-cyan-500 rounded-full"></div> Logistiklösungen
              </li>
              <li onClick={() => scrollToSection('logistik')} className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2">
                <div className="w-1 h-1 bg-cyan-500 rounded-full"></div> Expressversand
              </li>
              <li onClick={() => scrollToSection('reinigung')} className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2">
                <div className="w-1 h-1 bg-cyan-500 rounded-full"></div> Industriereinigung
              </li>
              <li onClick={() => scrollToSection('reinigung')} className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2">
                <div className="w-1 h-1 bg-cyan-500 rounded-full"></div> Baureinigung
              </li>
            </ul>
          </div>

          {/* ساعات العمل (مستوحاة من كودك القديم) */}
          <div>
            <h4 className="font-semibold text-lg mb-6 border-b border-cyan-500/30 pb-2 inline-block">Öffnungszeiten</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Mo - Fr: 08:00 - 18:00 Uhr</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Sa: 09:00 - 14:00 Uhr</span>
              </li>
              <li className="text-cyan-400 font-bold mt-2">24/7 Notfall-Support</li>
            </ul>
          </div>

          {/* معلومات التواصل الجديدة */}
          <div>
            <h4 className="font-semibold text-lg mb-6 border-b border-cyan-500/30 pb-2 inline-block">Kontakt</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Am Alten Bahnhof 11a , <br />
                  06886 Wittenberg, Deutschland
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="tel:+491522476198" className="text-sm hover:text-cyan-400 transition-colors">
                  +49 1522 4761498
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="mailto:info@dsh-s.de" className="text-sm hover:text-cyan-400 transition-colors">
                  info@dsh-s.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* الشريط السفلي والقوانين */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide">
            <p className="text-gray-500">
              © {new Date().getFullYear()} DSH Service GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-8 text-gray-400">
              <button onClick={() => window.scrollTo(0,0)} className="hover:text-cyan-400 transition-colors">Impressum</button>
              <button onClick={() => window.scrollTo(0,0)} className="hover:text-cyan-400 transition-colors">Datenschutz</button>
              <button onClick={() => window.scrollTo(0,0)} className="hover:text-cyan-400 transition-colors">AGB</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}