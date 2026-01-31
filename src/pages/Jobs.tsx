import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export default function Jobs() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Logistikmitarbeiter',
    message: '',
    file: null as File | null,
  });

  // التحكم التلقائي في اتجاه الصفحة وسلوك الخطوط
  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.body.dir = dir;
  }, [i18n.language]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let cvUrl = t('no_cv_uploaded');
      if (formData.file) {
        const fileData = new FormData();
        fileData.append('file', formData.file);
        const uploadRes = await fetch('https://file.io/?expires=1w', {
          method: 'POST',
          body: fileData
        });
        const uploadResult = await uploadRes.json();
        cvUrl = uploadResult.link;
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        message: formData.message,
        cv_link: cvUrl,
      };

      await emailjs.send(
        'service_mi5hbwo', 
        'template_7nfzccb', 
        templateParams, 
        'GVycQUkRb47R0wmCP'
      );

      alert(t('job_success'));
    } catch (error) {
      console.error('Fehler:', error);
      alert(t('job_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="jobs" className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">{t('job_title')}</h1>
          <p className="text-gray-600 text-lg">{t('job_subtitle')}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">{t('form_name')}</label>
              <input name="name" placeholder={t('name_placeholder')} required onChange={handleChange} className="w-full border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">{t('form_email')}</label>
              <input type="email" name="email" placeholder="example@mail.com" required onChange={handleChange} className="w-full border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">{t('form_phone')}</label>
              <input name="phone" placeholder="+49..." required onChange={handleChange} className="w-full border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">{t('job_select_label')}</label>
              <select name="position" onChange={handleChange} className="w-full border border-gray-200 p-4 rounded-xl bg-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all appearance-none">
                <option value="Logistikmitarbeiter">{t('job_opt_1')}</option>
                <option value="Reinigungskraft">{t('job_opt_2')}</option>
                <option value="Fahrer">{t('job_opt_3')}</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">{t('form_message')}</label>
            <textarea name="message" placeholder={t('job_msg_placeholder')} rows={4} onChange={handleChange} className="w-full border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all resize-none" />
          </div>
          
          <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100">
            <label className="block text-sm font-bold text-cyan-800 mb-2">{t('cv_label')}</label>
            <input type="file" accept=".pdf" onChange={handleFileChange} className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-600 file:text-white hover:file:bg-cyan-700 cursor-pointer" />
            <p className="mt-2 text-xs text-cyan-700">{t('cv_hint')}</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-lg transition-all transform hover:-translate-y-1 disabled:bg-gray-400"
          >
            {loading ? t('sending') : t('job_submit_btn')}
          </button>
        </form>
      </div>
    </section>
  );
}