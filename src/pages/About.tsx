import { useTranslation } from 'react-i18next';
import { Target, Users2, ShieldCheck, Rocket } from 'lucide-react';

export default function About() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className={`py-20 ${isAr ? 'text-right font-arabic' : 'text-left font-sans'}`}>
      <div className="container mx-auto px-4">
        
        {/* الجزء الأول: من نحن (الرؤية) */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t ('about_title')}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {t('about_vision_text', 'DSH Service GmbH ist ein modernes Dienstleistungsunternehmen mit klarem Fokus auf Exzellenz in Logistik und Reinigung. Als junges Unternehmen aus lutherstadt wittenberg bringen wir frischen Wind, modernste Standards und absolute Verlässlichkeit in die Branche.')}
          </p>
        </div>

        {/* الجزء الثاني: لماذا نحن؟ (قيم الشركة) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { icon: Rocket, title: t('val_modern', 'Modernität'), desc: t('val_modern_desc', 'Wir nutzen neueste Technik und effiziente Prozesse.') },
            { icon: ShieldCheck, title: t('val_trust', 'Vertrauen'), desc: t('val_trust_desc', 'Ehrlichkeit und Transparenz sind unser Fundament.') },
            { icon: Users2, title: t('val_client', 'Kundennähe'), desc: t('val_client_desc', 'Wir hören zu und finden individuelle Lösungen.') },
            { icon: Target, title: t('val_quality', 'Präzision'), desc: t('val_quality_desc', 'Logistik und Reinigung erfordern höchste Genauigkeit.') }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <item.icon className="w-12 h-12 text-cyan-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* الجزء الثالث: الوعد (الالتزام) */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('about_promise_title', 'Unser Versprechen an Sie')}
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              {t('about_promise_text', 'Obwohl wir ein neues Unternehmen sind, bringen wir jahrelange Erfahrung in unseren Teams zusammen. Wir garantieren Ihnen Flexibilität, die große Konzerne oft vermissen lassen, kombiniert mit der Professionalität, die Ihr Geschäft verdient.')}
            </p>
          </div>
          <div className="absolute right-0 bottom-0 opacity-20 hidden lg:block">
             <ShieldCheck className="w-96 h-96 text-cyan-500 -mb-20 -mr-20" />
          </div>
        </div>
      </div>
    </div>
  );
}