import { Factory, Warehouse, HardHat, CheckCircle } from 'lucide-react';

export default function ReinigungServices() {
  const services = [
    {
      icon: <Factory className="w-12 h-12" />,
      title: 'Industriereinigung',
      description: 'Professionelle Reinigung von Produktionsanlagen, Maschinen und Industriehallen mit Spezialausrüstung.',
      features: ['Maschinenreinigung', 'Hallenreinigung', 'Produktionsreinigung', 'Spezialreinigung'],
      image: '/industrial-cleaning-facility.jpg'
    },
    {
      icon: <Warehouse className="w-12 h-12" />,
      title: 'Lagerreinigung',
      description: 'Gründliche Reinigung von Lagerhallen, Hochregallagern und Logistikzentren für optimale Hygiene.',
      features: ['Bodenreinigung', 'Regalreinigung', 'Entstaubung', 'Desinfektionsservice'],
      image: '/warehouse-cleaning-service.jpg'
    },
    {
      icon: <HardHat className="w-12 h-12" />,
      title: 'Baureinigung',
      description: 'Endreinigung nach Baumaßnahmen – von der Grobreinigung bis zur finalen Übergabe.',
      features: ['Baugrobreinigung', 'Bauendreinigung', 'Fassadenreinigung', 'Fensterreinigung'],
      image: '/construction-cleaning.jpg'
    }
  ];

  return (
    <section id="reinigung" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Spezialisierte Reinigung
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Höchste Standards für Industrie und Logistik – DSH Service GmbH sorgt für Sauberkeit und Sicherheit.
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
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></div>
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
              <h3 className="text-3xl font-bold mb-4">Qualität & Zertifizierung</h3>
              <p className="text-cyan-50 opacity-90">
                Unsere Prozesse sind ISO-zertifiziert und werden von geschultem Fachpersonal mit modernster Spezialausrüstung durchgeführt.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-white" />
                <span className="text-xs font-bold uppercase tracking-wider">ISO 9001</span>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-white" />
                <span className="text-xs font-bold uppercase tracking-wider">Fachpersonal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}