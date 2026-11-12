import { ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
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
    <section id="home" className="relative bg-slate-950 text-white py-24 lg:py-32 overflow-hidden">
      {/* خلفية الصورة مع تدرجات مظللة واحترافية */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-logistics-warehouse.jpg" 
          alt="DSH Service GmbH Logistics Warehouse" 
          className="w-full h-full object-cover object-center scale-105 transform opacity-25 filter brightness-90" 
        />
        {/* تدرجات لكي تندمج النصوص وتصبح مريحة للعين */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/70"></div>
        <div className="absolute inset-0 bg-radial-gradient from-cyan-500/10 via-transparent to-transparent pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* شارة صغيرة علوية تعطي طابعاً احترافياً */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-lg shadow-cyan-950/50">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Ihr zuverlässiger Partner in Deutschland
          </div>

          {/* العنوان الرئيسي */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-white">
            DSH Service GmbH<br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent text-2xl sm:text-4xl lg:text-5xl mt-2 block">
              {t('hero_subtitle')}
            </span>
          </h1>

          {/* الوصف */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
            {t('hero_description')}
          </p>

          {/* الأزرار بتصميم عائم وتفاعلي */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('angebot')}
              className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span>{t('hero_btn_quote')}</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollToSection('tracking')}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-200 bg-slate-900/60 hover:bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 hover:border-cyan-500/50 shadow-lg transition-all duration-300 cursor-pointer"
            >
              {t('hero_btn_track')}
            </button>
          </div>

          {/* المميزات الثلاث بتصميم بطاقات زجاجية عصرية */}
          <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-slate-800/80">
            
            <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform shadow-inner border border-cyan-500/20">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold mb-2 text-white">{t('feat_delivery_title')}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{t('feat_delivery_desc')}</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform shadow-inner border border-cyan-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold mb-2 text-white">{t('feat_support_title')}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{t('feat_support_desc')}</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform shadow-inner border border-cyan-500/20">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold mb-2 text-white">{t('feat_standards_title')}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{t('feat_standards_desc')}</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}