import { useTranslation } from 'react-i18next';

export default function Impressum() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-6 py-20 text-slate-800">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4 text-slate-900">
        {t('imprint_title')}
      </h1>
      
      <div className="space-y-8 leading-relaxed">
        {/* معلومات الشركة */}
        <section>
          <h2 className="text-xl font-semibold mb-3">{t('imprint_section_1')}</h2>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
            <p className="text-lg font-bold text-slate-900 mb-1">DSH Service GmbH</p>
            <p>
              Am Alten Bahnhof 11a<br />
              06886 lutherstadt wittenberg<br />
              {t('germany')}
            </p>
          </div>
        </section>

        {/* التواصل والسجل التجاري */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-3">{t('imprint_contact')}</h2>
            <p className="space-y-1">
              <strong>{t('phone')}:</strong> +49 1522 4761498<br />
              <strong>{t('email')}:</strong> info@dsh-s.de
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">{t('imprint_registry')}</h2>
            <p className="text-slate-600">
              Registergericht: Amtsgericht Stendal<br />
              Registernummer: [HRB الرقم هنا]<br />
              USt-IdNr.: [الرقم الضريبي هنا]
            </p>
          </div>
        </section>

        {/* ملاحظة قانونية */}
        <section className="text-sm text-gray-500 border-t pt-6 italic">
          <p>{t('imprint_legal_note')}</p>
        </section>
      </div>

      <footer className="mt-20 text-center text-xs text-gray-400">
        © 2026 DSH Service GmbH | Wittenberg
      </footer>
    </div>
  );
}