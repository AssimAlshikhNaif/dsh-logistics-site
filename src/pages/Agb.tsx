import { useTranslation } from 'react-i18next';
import { FileCheck, ShieldAlert, BadgeCheck } from 'lucide-react';

export default function AGB() {
  const { t, i18n } = useTranslation();

  return (
    <div className={`max-w-4xl mx-auto p-6 py-20 leading-relaxed ${i18n.language === 'ar' ? 'text-right font-arabic' : 'text-left font-sans'}`}>
      <div className="flex items-center gap-4 mb-10 border-b pb-6">
        <FileCheck className="w-12 h-12 text-cyan-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{t('agb_title')}</h1>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-cyan-500" />
            1. {t('agb_sec1_title')}
          </h2>
          <p className="text-slate-600 bg-slate-50 p-4 rounded-lg">{t('agb_sec1_desc')}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-cyan-500" />
            2. {t('agb_sec2_title')}
          </h2>
          <p className="text-slate-600 bg-slate-50 p-4 rounded-lg">{t('agb_sec2_desc')}</p>
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t text-sm text-gray-400 italic">
        <p>DSH Service GmbH | Am Alten Bahnhof 11a, 06886 Wittenberg</p>
      </footer>
    </div>
  );
}