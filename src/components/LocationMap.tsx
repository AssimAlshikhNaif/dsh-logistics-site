import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export default function LocationMap() {
  return (
    <section id="location" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* عنوان القسم */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-lg mb-4">
            <MapPin className="w-4 h-4 text-cyan-400" />
            Standort & Kontakt
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Besuchen Sie uns in Wittenberg
          </h2>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            DSH Service GmbH hat ihren Hauptsitz in Lutherstadt Wittenberg. Wir sind jederzeit für Sie erreichbar.
          </p>
        </div>

        {/* محتوى الخريطة ومعلومات العنوان */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* معلومات العنوان والاتصال (5 أعمدة) */}
          <div className="lg:col-span-5 bg-slate-900/90 p-8 sm:p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl backdrop-blur-xl space-y-6">
            <h3 className="text-2xl font-extrabold text-white mb-2">DSH Service GmbH</h3>
            
            <div className="space-y-4 text-slate-300 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400 shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Hauptsitz:</p>
                  <p className="text-slate-400 leading-relaxed">Am Alten Bahnhof 9<br />06886 Lutherstadt Wittenberg, Deutschland</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Telefon:</p>
                  <a href="tel:+491639023425" className="text-cyan-400 hover:underline">+49 163 9023425</a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">E-Mail:</p>
                  <a href="mailto:Aleleoue@dsh-s.de" className="text-cyan-400 hover:underline">Aleleoue@dsh-s.de</a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <a 
                href="https://maps.google.com/?q=Am+Alten+Bahnhof+9+06886+Lutherstadt+Wittenberg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <span>In Google Maps öffnen</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* خريطة جوجل (7 أعمدة) */}
          <div className="lg:col-span-7 h-[420px] rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl relative group">
            <iframe 
              title="DSH Service GmbH Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.5!2d12.645!3d51.865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVWutherstadt Wittenberg!5e0!3m2!1sde!2sde!4v1650000000000!5m2!1sde!2sde" 
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-125 opacity-90 group-hover:opacity-100 transition-opacity" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}