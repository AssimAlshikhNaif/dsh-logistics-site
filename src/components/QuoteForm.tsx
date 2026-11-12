import { Send, CheckCircle, AlertCircle, User, Building, Mail, Phone, MessageSquare, ShieldCheck, Clock, Headphones, Truck, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function QuoteForm() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [selectedService, setSelectedService] = useState('Logistik');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "f117a64d-c62e-4d87-9f93-6d145ccf2f5b");
    formData.set("service", selectedService);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError(t('form_error_msg') + ": " + res.message);
      }
    } catch {
      setError(t('form_network_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="angebot" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      {/* إضاءات خلفية حيوية ومتطورة */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* القسم الجانبي التوضيحي (يسار) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-cyan-950/50">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Unverbindliche Anfrage
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t('form_title')}
            </h2>

            <p className="text-slate-300 text-base font-light leading-relaxed">
              Füllen Sie das Formular aus und profitieren Sie von maßgeschneiderten Logistik- und Reinigungslösungen. Unser Team meldet sich umgehend bei Ihnen.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-4 text-slate-300 text-sm group">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5" />
                </div>
                <span>Schnelle Bearbeitung innerhalb von 24 Stunden</span>
              </div>

              <div className="flex items-center gap-4 text-slate-300 text-sm group">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Headphones className="w-5 h-5" />
                </div>
                <span>Persönliche Beratung durch Experten in Deutschland</span>
              </div>
            </div>
          </div>

          {/* نموذج الإدخال (يمين) */}
          <div className="lg:col-span-7">
            
            {/* رسالة النجاح */}
            {success && (
              <div className="mb-8 p-6 bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 rounded-2xl flex items-center gap-4 shadow-2xl backdrop-blur-md animate-in fade-in">
                <CheckCircle className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                <p className="font-bold text-base">{t('form_success_msg')}</p>
              </div>
            )}

            {/* رسالة الخطأ */}
            {error && (
              <div className="mb-8 p-6 bg-rose-950/90 border border-rose-500/40 text-rose-300 rounded-2xl flex items-center gap-4 shadow-2xl backdrop-blur-md animate-in fade-in">
                <AlertCircle className="w-8 h-8 text-rose-400 flex-shrink-0" />
                <p className="font-bold text-sm">{error}</p>
              </div>
            )}

            {/* النموذج الفاخر */}
            <form onSubmit={handleSubmit} className="bg-slate-900/90 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-cyan-950/30 space-y-6 border border-slate-800 backdrop-blur-xl">
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* الاسم */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input 
                    name="name" 
                    type="text" 
                    placeholder={t('form_name') + " *"} 
                    required 
                    className="w-full pl-12 pr-4 py-4 bg-slate-950/70 rounded-xl border border-slate-800 focus:bg-slate-950 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white text-sm font-medium placeholder-slate-500 shadow-inner" 
                  />
                </div>

                {/* اسم الشركة */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Building className="w-5 h-5" />
                  </div>
                  <input 
                    name="company" 
                    type="text" 
                    placeholder={t('form_company')} 
                    className="w-full pl-12 pr-4 py-4 bg-slate-950/70 rounded-xl border border-slate-800 focus:bg-slate-950 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white text-sm font-medium placeholder-slate-500 shadow-inner" 
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* البريد الإلكتروني */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input 
                    name="email" 
                    type="email" 
                    placeholder={t('form_email') + " *"} 
                    required 
                    className="w-full pl-12 pr-4 py-4 bg-slate-950/70 rounded-xl border border-slate-800 focus:bg-slate-950 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white text-sm font-medium placeholder-slate-500 shadow-inner" 
                  />
                </div>

                {/* رقم الهاتف */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input 
                    name="phone" 
                    type="tel" 
                    placeholder={t('form_phone') + " *"} 
                    required 
                    className="w-full pl-12 pr-4 py-4 bg-slate-950/70 rounded-xl border border-slate-800 focus:bg-slate-950 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white text-sm font-medium placeholder-slate-500 shadow-inner" 
                  />
                </div>
              </div>

              {/* اختيار الخدمة بشكل أزرار تفاعلية متناسقة */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block px-1">
                  Gewünschter Service *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedService('Logistik')}
                    className={`flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl border font-semibold text-sm transition-all cursor-pointer ${
                      selectedService === 'Logistik'
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-950/50'
                        : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <Truck className="w-4 h-4 text-cyan-400" />
                    <span>{t('nav_logistics')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedService('Reinigungservice')}
                    className={`flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl border font-semibold text-sm transition-all cursor-pointer ${
                      selectedService === 'Reinigungservice'
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-950/50'
                        : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>{t('nav_cleaning')}</span>
                  </button>
                </div>
              </div>

              {/* نص الرسالة */}
              <div className="relative">
                <div className="absolute top-4 left-4 pointer-events-none text-slate-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <textarea 
                  name="message" 
                  placeholder={t('form_message')} 
                  rows={4} 
                  required 
                  className="w-full pl-12 pr-4 py-4 bg-slate-950/70 rounded-xl border border-slate-800 focus:bg-slate-950 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white text-sm font-medium resize-none placeholder-slate-500 shadow-inner"
                ></textarea>
              </div>

              {/* زر الإرسال المتطور */}
              <button 
                type="submit" 
                disabled={loading} 
                className="w-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white p-4.5 rounded-xl font-bold text-base transition-all shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    {t('sending')}
                  </span>
                ) : (
                  <>
                    <Send className={`w-5 h-5 ${i18n.language === 'ar' ? 'rotate-180' : ''}`} /> 
                    <span>{t('form_submit_btn')}</span>
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}