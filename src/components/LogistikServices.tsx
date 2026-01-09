import { Warehouse, Truck, Zap, CheckCircle } from 'lucide-react';

export default function LogistikServices() {
  // دمج الخدمات من مشروعك القديم مع التصميم الجديد
  const services = [
    {
      icon: <Warehouse className="w-12 h-12" />,
      title: 'Lagerlogistik',
      description: 'Professionelle Lagerverwaltung mit modernen Systemen für optimale Warenwirtschaft und Bestandskontrolle.',
      features: ['Kommissionierung', 'Bestandsmanagement', 'Cross-Docking', 'Qualitätskontrolle'],
      image: '/warehouse-storage-systems.jpg' // الصورة التي أضفتها في مجلد public
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: 'Transportmanagement',
      description: 'Zuverlässige Transportsolutions für nationale und internationale Sendungen mit Echtzeit-Tracking.',
      features: ['Nationale Transporte', 'Internationale Logistik', 'Spezialfahrzeuge', 'Gefahrguttransport'],
      image: '/hero-logistics-warehouse.jpg'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Expressversand',
      description: 'Schnelle und sichere Expresslieferungen für zeitkritische Sendungen – deutschlandweit und international.',
      features: ['Same-Day Delivery', '24h Express', 'Overnight Service', 'Kurierdienst'],
      image: '/construction-cleaning.jpg' // يمكنك تغييرها لاحقاً بصورة مناسبة
    }
  ];

  return (
    <section id="logistik" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header - DSH Service GmbH Style */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Logistik-Dienstleistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maßgeschneiderte Logistiklösungen für Ihr Unternehmen – von der Lagerung bis zur Auslieferung.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Header for each service */}
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
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Section - Re-styled for DSH */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-3xl font-bold mb-8">
              Warum DSH Service GmbH?
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Moderne Lagertechnik</h4>
                  <p className="text-slate-400 text-sm">Optimale Transparenz durch digitale Bestandskontrolle.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Pünktliche Lieferung</h4>
                  <p className="text-slate-400 text-sm">Deutschlandweites Netzwerk für schnellste Zustellung.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Flexible Lösungen</h4>
                  <p className="text-slate-400 text-sm">Individuelle Konzepte für jede Warenmenge.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">24/7 Professionalität</h4>
                  <p className="text-slate-400 text-sm">Erfahrenes Team, das rund um die Uhr für Sie da ist.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}