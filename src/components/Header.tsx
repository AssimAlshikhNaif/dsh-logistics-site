import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  // تغيير اتجاه الموقع عند تغيير اللغة
  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer">
            <img src="/logo.png" alt="Logo" className="w-[60px] h-[60px] object-contain" />
            <div>
              <h1 className="text-xl font-bold leading-none">DSH Service GmbH</h1>
              <p className="text-xs text-gray-400 mt-1">{t('nav_subtitle')}</p>
            </div>
          </Link>

          {/* Desktop Menu & Lang Switcher */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6 items-center">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-cyan-400 transition-colors">{t('nav_home')}</button></li>
              <li><button onClick={() => scrollToSection('logistik')} className="hover:text-cyan-400 transition-colors">{t('nav_logistics')}</button></li>
              <li><Link to="/jobs" className="hover:text-cyan-400 transition-colors">{t('nav_careers')}</Link></li>
              <li><button onClick={() => scrollToSection('reinigung')} className="hover:text-cyan-400 transition-colors">{t('nav_cleaning')}</button></li>
              <li><button onClick={() => scrollToSection('tracking')} className="hover:text-cyan-400 transition-colors">{t('nav_tracking')}</button></li>
            </ul>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l border-gray-700 pl-6 ml-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <select 
                value={i18n.language} 
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-transparent text-sm focus:outline-none cursor-pointer"
              >
                <option className="text-black" value="de">DE</option>
                <option className="text-black" value="en">EN</option>
                <option className="text-black" value="ar">AR</option>
              </select>
            </div>

            <button onClick={() => scrollToSection('angebot')} className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg transition-colors font-semibold text-sm">
              {t('nav_quote')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in fade-in slide-in-from-top-4">
            <ul className="space-y-4 mb-4">
              <li><button onClick={() => scrollToSection('home')} className="block w-full text-left py-2">{t('nav_home')}</button></li>
              <li><button onClick={() => scrollToSection('logistik')} className="block w-full text-left py-2">{t('nav_logistics')}</button></li>
              <li><Link to="/jobs" className="block w-full py-2" onClick={() => setIsMenuOpen(false)}>{t('nav_careers')}</Link></li>
              <li><button onClick={() => scrollToSection('reinigung')} className="block w-full text-left py-2">{t('nav_cleaning')}</button></li>
              <li><button onClick={() => scrollToSection('tracking')} className="block w-full text-left py-2">{t('nav_tracking')}</button></li>
            </ul>
            
            {/* Mobile Lang Buttons */}
            <div className="flex gap-4 py-3 border-t border-gray-800">
              <button onClick={() => changeLanguage('de')} className={`text-sm ${i18n.language === 'de' ? 'text-cyan-400' : ''}`}>Deutsch</button>
              <button onClick={() => changeLanguage('en')} className={`text-sm ${i18n.language === 'en' ? 'text-cyan-400' : ''}`}>English</button>
              <button onClick={() => changeLanguage('ar')} className={`text-sm ${i18n.language === 'ar' ? 'text-cyan-400' : ''}`}>العربية</button>
            </div>

            <button onClick={() => scrollToSection('angebot')} className="bg-cyan-500 w-full py-3 rounded-lg font-bold">
              {t('nav_quote')}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}