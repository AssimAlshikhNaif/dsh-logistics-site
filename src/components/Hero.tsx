import { ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-slate-900 text-white py-32 overflow-hidden">
      {/* خلفية الصورة */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-logistics-warehouse.jpg" 
          alt="DSH Service GmbH Logistics Warehouse" 
          className="w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            DSH Service GmbH<br />
            <span className="text-cyan-400 text-4xl md:text-5xl">{t('hero_subtitle')}</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-light">
            {t('hero_description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('angebot')}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1"
            >
              {t('hero_btn_quote')}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </button>
            <button
              onClick={() => scrollToSection('tracking')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              {t('hero_btn_track')}
            </button>
          </div>

          {/* المميزات الثلاث */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 border-t border-white/10 pt-12">
            <div className="flex flex-col items-center group">
              <CheckCircle className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">{t('feat_delivery_title')}</h3>
              <p className="text-gray-400 text-sm">{t('feat_delivery_desc')}</p>
            </div>
            <div className="flex flex-col items-center group">
              <CheckCircle className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">{t('feat_support_title')}</h3>
              <p className="text-gray-400 text-sm">{t('feat_support_desc')}</p>
            </div>
            <div className="flex flex-col items-center group">
              <CheckCircle className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">{t('feat_standards_title')}</h3>
              <p className="text-gray-400 text-sm">{t('feat_standards_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}