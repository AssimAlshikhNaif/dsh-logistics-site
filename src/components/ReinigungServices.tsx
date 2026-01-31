import { Factory, Warehouse, HardHat, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ReinigungServices() {
  const { t, i18n } = useTranslation();

  const services = [
    {
      icon: <Factory className="w-12 h-12" />,
      title: t('clean_serv1_title'),
      description: t('clean_serv1_desc'),
      features: t('clean_serv1_features', { returnObjects: true }) as string[],
      image: '/industrial-cleaning-facility.jpg'
    },
    {
      icon: <Warehouse className="w-12 h-12" />,
      title: t('clean_serv2_title'),
      description: t('clean_serv2_desc'),
      features: t('clean_serv2_features', { returnObjects: true }) as string[],
      image: '/warehouse-cleaning-service.jpg'
    },
    {
      icon: <HardHat className="w-12 h-12" />,
      title: t('clean_serv3_title'),
      description: t('clean_serv3_desc'),
      features: t('clean_serv3_features', { returnObjects: true }) as string[],
      image: '/construction-cleaning.jpg'
    }
  ];

  return (
    <section id="reinigung" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('clean_header_title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('clean_header_subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <div className="text-cyan-600 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 gap-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-700">
                      <div className={`w-1.5 h-1.5 bg-cyan-500 rounded-full ${i18n.language === 'ar' ? 'ml-2' : 'mr-2'}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Section */}
        <div className="bg-cyan-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold mb-4">{t('clean_quality_title')}</h3>
              <p className="text-cyan-50 opacity-90">
                {t('clean_quality_desc')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-white" />
                <span className="text-xs font-bold uppercase tracking-wider">ISO 9001</span>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-white" />
                <span className="text-xs font-bold uppercase tracking-wider">{t('clean_staff')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}