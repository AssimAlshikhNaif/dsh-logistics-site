import { Warehouse, Truck, Zap, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function LogistikServices() {
  const { t, i18n } = useTranslation();

const services = [
  {
    icon: <Warehouse className="w-12 h-12" />,
    title: t('log_serv1_title'),
    description: t('log_serv1_desc'),
    features: t('log_serv1_features', { returnObjects: true }) as string[],
    // Lagerlogistik - صورة مخازن احترافية
    image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    icon: <Truck className="w-12 h-12" />,
    title: t('log_serv2_title'),
    description: t('log_serv2_desc'),
    features: t('log_serv2_features', { returnObjects: true }) as string[],
    // Transport - شاحنة نقل حديثة
    image: 'https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: t('log_serv3_title'),
    description: t('log_serv3_desc'),
    features: t('log_serv3_features', { returnObjects: true }) as string[],
    // Expressversand - طرود وشحن سريع
    image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

  return (
    <section id="logistik" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('log_header_title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            {t('log_header_subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              <div className="h-56 overflow-hidden relative">
                {/* تأثير طبقة زرقاء خفيفة على الصورة */}
                <div className="absolute inset-0 bg-cyan-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 relative">
                <div className="bg-white w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center text-cyan-600 absolute -top-10 left-8 z-20 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">
                    {service.description}
                  </p>
                  <ul className="space-y-3 border-t border-slate-200 pt-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-700">
                        <CheckCircle className={`w-4 h-4 text-cyan-500 ${i18n.language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Section (بقي كما هو مع تحسين بسيط في الظلال) */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-12 text-center md:text-left">
              {t('log_why_us')}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="space-y-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{t(`log_adv${num}_title`)}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{t(`log_adv${num}_desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}