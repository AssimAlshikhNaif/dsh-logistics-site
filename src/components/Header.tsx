import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* إضافة اللوجو هنا - تأكد من وجود الملف في مجلد public */}
            <img 
              src="/logo.png" 
              alt="DSH Service GmbH Logo" 
              className="w-[100px] h-[100px] object-contain"
              onError={(e) => {
                // في حال لم يجد الصورة، سيظهر أيقونة احتياطية
                e.currentTarget.style.display = 'none';
              }}
            />
            <div>
              <h1 className="text-2xl font-bold">DSH Service GmbH</h1>
              <p className="text-sm text-gray-300">Logistik & Spezialreinigung</p>
            </div>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <ul className="hidden md:flex gap-8 items-center">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="hover:text-cyan-400 transition-colors"
              >
                Startseite
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('logistik')}
                className="hover:text-cyan-400 transition-colors"
              >
                Logistik
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('reinigung')}
                className="hover:text-cyan-400 transition-colors"
              >
                Reinigungsservice
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('tracking')}
                className="hover:text-cyan-400 transition-colors"
              >
                Sendungsverfolgung
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('angebot')}
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-lg transition-colors font-semibold"
              >
                Angebot anfordern
              </button>
            </li>
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left hover:text-cyan-400 transition-colors py-2"
              >
                Startseite
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('logistik')}
                className="block w-full text-left hover:text-cyan-400 transition-colors py-2"
              >
                Logistik
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('reinigung')}
                className="block w-full text-left hover:text-cyan-400 transition-colors py-2"
              >
                Reinigungsservice
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('tracking')}
                className="block w-full text-left hover:text-cyan-400 transition-colors py-2"
              >
                Sendungsverfolgung
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('angebot')}
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-lg transition-colors font-semibold w-full"
              >
                Angebot anfordern
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}