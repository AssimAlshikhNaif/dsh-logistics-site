import { useTranslation } from 'react-i18next';

export default function Impressum() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-6 py-20 text-slate-800">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4 text-slate-900">
        {t('imprint_title')}
      </h1>
      
      <div className="space-y-8 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-3">{t('imprint_section_1')}</h2>
          <p className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
            <strong className="text-slate-900">DSH Service GmbH</strong><br />
            Musterstraße 123<br />
            12345 Berlin<br />
            {t('germany')}
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-3">{t('imprint_contact')}</h2>
            <p>
              {t('phone')}: +49 (0) 123 456789<br />
              {t('email')}: info@dsh-service.de
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">{t('imprint_registry')}</h2>
            <p>
              Registergericht: Amtsgericht Berlin<br />
              Registernummer: HRB 123456<br />
              USt-IdNr.: DE 123456789
            </p>
          </div>
        </section>

        <section className="text-sm text-gray-500 border-t pt-6">
          <p>{t('imprint_legal_note')}</p>
        </section>
      </div>
    </div>
  );
}