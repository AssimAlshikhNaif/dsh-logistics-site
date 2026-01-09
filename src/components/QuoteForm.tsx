import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.target);
    
    // هذا هو المفتاح الصحيح والنهائي من صورتك
    formData.append("access_key","f117a64d-c62e-4d87-9f93-6d145ccf2f5b");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        setSuccess(true);
        e.target.reset();
      } else {
        setError("Fehler: " + res.message);
      }
    } catch  {
      setError("Netzwerkfehler.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="angebot" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Angebot anfordern</h2>
        
        {success && (
          <div className="mb-8 p-6 bg-green-100 border border-green-200 text-green-800 rounded-2xl flex items-center gap-4">
            <CheckCircle className="w-8 h-8" />
            <p className="font-bold text-lg">Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.</p>
          </div>
        )}

        {error && (
          <div className="mb-8 p-6 bg-red-100 border border-red-200 text-red-800 rounded-2xl flex items-center gap-4">
            <AlertCircle className="w-8 h-8" />
            <p className="font-bold">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-2xl space-y-6 border border-slate-100">
          <div className="grid md:grid-cols-2 gap-6">
            <input name="name" type="text" placeholder="Ansprechpartner *" required className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none" />
            <input name="company" type="text" placeholder="Firma" className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <input name="email" type="email" placeholder="E-Mail *" required className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none" />
            <input name="phone" type="tel" placeholder="Telefon *" required className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none" />
          </div>

          <select name="service" className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none">
            <option value="Logistik">Logistik-Dienstleistungen</option>
            <option value="Reinigung">Spezialreinigung</option>
          </select>

          <textarea name="message" placeholder="Ihre Nachricht..." rows={4} required className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none resize-none"></textarea>

          <button type="submit" disabled={loading} className="w-full bg-slate-900 hover:bg-cyan-600 text-white p-5 rounded-xl font-bold text-xl transition-all flex items-center justify-center gap-3">
            {loading ? "Wird gesendet..." : <><Send className="w-6 h-6 text-cyan-400" /> Anfrage jetzt senden</>}
          </button>
        </form>
      </div>
    </section>
  );
}