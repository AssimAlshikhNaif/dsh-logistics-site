import { useTranslation } from 'react-i18next';
import { ShieldCheck, Lock, EyeOff, FileText } from 'lucide-react';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-6 py-20 text-slate-800">
      <div className="flex items-center gap-4 mb-8 border-b pb-6">
        <ShieldCheck className="w-12 h-12 text-cyan-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          {t('privacy_title')}
        </h1>
      </div>

      <div className="space-y-10 leading-relaxed text-gray-600">
        {/* مقدمة */}
        <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <p>{t('privacy_intro')}</p>
        </section>

        {/* الأقسام القانونية */}
        <div className="grid gap-8">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-cyan-500" />
              1. {t('privacy_sec1_title')}
            </h2>
            <p>{t('privacy_sec1_desc')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-cyan-500" />
              2. {t('privacy_sec2_title')}
            </h2>
            <p>{t('privacy_sec2_desc')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-500" />
              3. {t('privacy_sec3_title')}
            </h2>
            <p>{t('privacy_sec3_desc')}</p>
          </section>
        </div>

        {/* تذييل قانوني */}
        <footer className="mt-12 pt-8 border-t text-sm text-gray-400 italic">
          <p>{t('privacy_update_note')}</p>
        </footer>
      </div>
    </div>
  );
}