import { Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
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
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo + Company */}
          <div className="space-y-4">
            <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer">
              <img src="/logo.png" alt="DSH Service GmbH" className="w-10 h-10 object-contain" />
              <h3 className="text-xl font-bold">DSH Service GmbH</h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">{t('footer_desc')}</p>
            <div className="flex items-center gap-2 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">{t('footer_certified')}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 border-b border-cyan-500/30 pb-2 inline-block">{t('footer_services')}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li onClick={() => scrollToSection('logistik')} className="hover:text-cyan-400 cursor-pointer">• {t('serv_logistics')}</li>
              <li onClick={() => scrollToSection('logistik')} className="hover:text-cyan-400 cursor-pointer">• {t('serv_express')}</li>
              <li onClick={() => scrollToSection('reinigung')} className="hover:text-cyan-400 cursor-pointer">• {t('serv_industrial')}</li>
              <li onClick={() => scrollToSection('reinigung')} className="hover:text-cyan-400 cursor-pointer">• {t('serv_construction')}</li>
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h4 className="font-semibold text-lg mb-6 border-b border-cyan-500/30 pb-2 inline-block">{t('footer_hours')}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-cyan-400" />{t('hours_weekday')}</li>
              <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-cyan-400" />{t('hours_sat')}</li>
              <li className="text-cyan-400 font-bold mt-2">{t('hours_247')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 border-b border-cyan-500/30 pb-2 inline-block">{t('footer_contact')}</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <span className="text-sm">Am Alten Bahnhof 11a<br />06886 lutherstadt wittenberg, {t('germany')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+4915224761498" className="hover:text-cyan-400">+49 1522 4761498</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:info@dsh-s.de" className="hover:text-cyan-400">info@dsh-s.de</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p className="text-gray-500">© {new Date().getFullYear()} DSH Service GmbH. {t('footer_rights')}</p>
            <div className="flex gap-8 text-gray-400">
              <Link to="/impressum" className="hover:text-cyan-400">{t('link_impressum')}</Link>
              <Link to="/privacy" className="hover:text-cyan-400">{t('link_privacy')}</Link>
              <Link to="/agb" className="hover:text-cyan-400">AGB</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}