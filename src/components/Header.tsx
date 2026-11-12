import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl py-3' 
        : 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-4'
    }`}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo + Company - تصميم مندمج ونظيف بدون مربعات، مع تأثير إضاءة خلفي يبرز الشعار بوضوح */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3.5 group cursor-pointer">
            <div className="relative flex items-center justify-center p-1 rounded-xl bg-slate-900/60 border border-slate-800/80 group-hover:border-cyan-500/40 transition-all duration-300">
              <img 
                src="/logo.png" 
                alt="DSH Service GmbH Logo" 
                className="w-11 h-11 object-contain relative z-10 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]" 
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors leading-snug">
                DSH Service GmbH
              </span>
              <span className="text-[11px] font-semibold tracking-widest text-cyan-400 uppercase mt-0.5">
                {t('nav_subtitle')}
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            <ul className="flex gap-6 items-center text-sm font-medium">
              <li>
                <button onClick={() => handleNavClick('home')} className="text-slate-200 hover:text-cyan-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all cursor-pointer">
                  {t('nav_home')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('logistik')} className="text-slate-200 hover:text-cyan-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all cursor-pointer">
                  {t('nav_logistics')}
                </button>
              </li>
              <li>
                <Link to="/jobs" className="text-slate-200 hover:text-cyan-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all">
                  {t('nav_careers')}
                </Link>
              </li>
              <li>
                <button onClick={() => handleNavClick('reinigung')} className="text-slate-200 hover:text-cyan-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all cursor-pointer">
                  {t('nav_cleaning')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('tracking')} className="text-slate-200 hover:text-cyan-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all cursor-pointer">
                  {t('nav_tracking')}
                </button>
              </li>
              <li>
                <Link to="/about" className="text-slate-200 hover:text-cyan-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all">
                  {t('about_title')}
                </Link>
              </li>
            </ul>

            {/* Quote Button */}
            <button 
              onClick={() => handleNavClick('angebot')} 
              className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              {t('nav_quote')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-slate-200 hover:text-white p-2.5 rounded-xl bg-slate-900 border border-slate-800 shadow-md cursor-pointer" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 pt-3 border-t border-slate-800 animate-in fade-in slide-in-from-top-4">
            <ul className="space-y-2 mb-6 text-slate-200 text-sm">
              <li><button onClick={() => handleNavClick('home')} className="block w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-900 hover:text-cyan-400 font-medium">{t('nav_home')}</button></li>
              <li><button onClick={() => handleNavClick('logistik')} className="block w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-900 hover:text-cyan-400 font-medium">{t('nav_logistics')}</button></li>
              <li><Link to="/jobs" className="block w-full py-2.5 px-3 rounded-xl hover:bg-slate-900 hover:text-cyan-400 font-medium" onClick={() => setIsMenuOpen(false)}>{t('nav_careers')}</Link></li>
              <li><button onClick={() => handleNavClick('reinigung')} className="block w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-900 hover:text-cyan-400 font-medium">{t('nav_cleaning')}</button></li>
              <li><button onClick={() => handleNavClick('tracking')} className="block w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-900 hover:text-cyan-400 font-medium">{t('nav_tracking')}</button></li>
              <li><Link to="/about" className="block w-full py-2.5 px-3 rounded-xl hover:bg-slate-900 hover:text-cyan-400 font-medium" onClick={() => setIsMenuOpen(false)}>{t('about_title')}</Link></li>
            </ul>

            <button 
              onClick={() => handleNavClick('angebot')} 
              className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 text-center cursor-pointer text-sm"
            >
              {t('nav_quote')}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}