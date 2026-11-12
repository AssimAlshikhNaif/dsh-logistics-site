import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight, MessageSquarePlus, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);

  const initialReviews = [
    { name: "Michael Schmidt", company: "Logistikfirma Leipzig", text: "DSH Service GmbH hat unsere Lagerlogistik extrem optimiert. Die Prozesse laufen reibungslos und absolut termingerecht.", rating: 5, date: "Vor 2 Wochen" },
    { name: "Stefan Weber", company: "Industriebau Wittenberg", text: "Zuverlässiger Partner für Transport und nationales Transportmanagement. Der Support ist rund um die Uhr erreichbar.", rating: 5, date: "Vor 1 Monat" },
   { name: "Uwe Hartmann", company: "Warenvertrieb Elbe", text: "Ein Logistikpartner, auf den man sich 24/7 verlassen kann. Klare Empfehlung für Industrie und Handel.", rating: 5, date: "Vor 1 Woche" }
  ];

  // تحميل التعليقات المحفوظة بلocalStorage دمجها مع التعليقات الأساسية بأمان
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('dsh_custom_reviews');
      if (saved) {
        const parsedCustomReviews = JSON.parse(saved);
        if (Array.isArray(parsedCustomReviews)) {
          return [...parsedCustomReviews, ...initialReviews];
        }
      }
    } catch (e) {
      console.error("Fehler beim Laden der Bewertungen aus localStorage:", e);
    }
    return initialReviews;
  });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const newReview = {
        name,
        company: company || 'Partner / Kunde',
        text,
        rating,
        date: "Gerade eben"
      };

      const updatedReviews = [newReview, ...reviews];
      setReviews(updatedReviews);

      // حفظ التقييمات المضافة من قبل المستخدمين فقط في localStorage
      const customOnly = updatedReviews.filter(r => !initialReviews.some(init => init.text === r.text));
      localStorage.setItem('dsh_custom_reviews', JSON.stringify(customOnly));

      setSuccess(true);
      setName('');
      setCompany('');
      setText('');
      setRating(5);
      setTimeout(() => {
        setSuccess(false);
        setShowForm(false);
      }, 3000);
    } catch (err) {
      console.error(err);
      setError('Fehler beim Speichern der Bewertung.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="testimonials" className="py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-lg mb-4">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              Kundenbewertungen (Logistik & Transport)
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Was unsere Logistik-Partner sagen
            </h2>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-bold hover:bg-cyan-500/25 transition-all cursor-pointer shadow-lg"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Bewertung abgeben</span>
            </button>

            <div className="flex gap-3">
              <button onClick={() => scroll('left')} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer shadow-lg">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scroll('right')} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer shadow-lg">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {showForm && (
          <div className="mb-12 bg-slate-900/95 p-8 sm:p-10 rounded-[2.5rem] border border-cyan-500/30 shadow-2xl backdrop-blur-xl max-w-2xl mx-auto animate-in fade-in">
            <h3 className="text-2xl font-extrabold text-white mb-6">Ihre Meinung ist uns wichtig</h3>
            
            {success && (
              <div className="mb-6 p-4 bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-medium">Vielen Dank! Ihre Bewertung wurde erfolgreich hinzugefügt.</span>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-rose-950/90 border border-rose-500/40 text-rose-300 rounded-xl flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                <span className="text-sm font-medium">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmitReview} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1 font-semibold uppercase">Ihr Name *</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Max Mustermann" className="w-full px-4 py-3 bg-slate-950 rounded-xl border border-slate-800 text-white text-sm focus:border-cyan-400 outline-none" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1 font-semibold uppercase">Unternehmen / Firma</label>
                  <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Musterfirma GmbH" className="w-full px-4 py-3 bg-slate-950 rounded-xl border border-slate-800 text-white text-sm focus:border-cyan-400 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1 font-semibold uppercase">Bewertung (Sterne)</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button type="button" key={star} onClick={() => setRating(star)} className="p-1 cursor-pointer focus:outline-none">
                      <Star className={`w-6 h-6 ${star <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1 font-semibold uppercase">Ihr Kommentar / Feedback *</label>
                <textarea required rows={4} value={text} onChange={(e) => setText(e.target.value)} placeholder="Schreiben Sie über Ihre Erfahrungen..." className="w-full px-4 py-3 bg-slate-950 rounded-xl border border-slate-800 text-white text-sm focus:border-cyan-400 outline-none resize-none"></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowForm(false)} className="px-6 py-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-sm hover:bg-slate-700 cursor-pointer">Abbrechen</button>
                <button type="submit" disabled={loading} className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 flex items-center gap-2 cursor-pointer">
                  {loading ? <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span> : <> <Send className="w-4 h-4" /> <span>Absenden</span> </>}
                </button>
              </div>
            </form>
          </div>
        )}

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none focus:outline-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {reviews.map((review, index) => (
            <div key={index} className="min-w-[320px] sm:min-w-[380px] max-w-[400px] bg-slate-900/90 p-8 rounded-[2rem] border border-slate-800 shadow-xl backdrop-blur-xl flex flex-col justify-between snap-start hover:border-cyan-500/40 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors" />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">"{review.text}"</p>
              </div>
              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-base flex items-center gap-1.5">
                    {review.name}
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </h4>
                  <p className="text-xs text-cyan-400 font-medium">{review.company}</p>
                </div>
                <span className="text-[11px] text-slate-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}