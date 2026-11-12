import { useState } from 'react';
import { Search, Package, MapPin, Calendar, CheckCircle, Truck, AlertCircle, Compass } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';
import { useTranslation } from 'react-i18next';

type Shipment = Database['public']['Tables']['shipments']['Row'];

export default function TrackingModule() {
  const { t, i18n } = useTranslation();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setShipment(null);

    if (!trackingNumber.trim()) {
      setError(t('track_err_empty'));
      return;
    }

    setLoading(true);

    try {
      const { data, error: dbError } = await supabase
        .from('shipments')
        .select('*')
        .eq('tracking_number', trackingNumber.trim())
        .maybeSingle();

      if (dbError) throw dbError;

      if (!data) {
        setError(t('track_err_not_found'));
      } else {
        setShipment(data);
      }
    } catch (err) {
      console.error('Tracking-Fehler:', err);
      setError(t('track_err_general'));
    } finally {
      setLoading(false);
    }
  };

  const getStatusLabel = (status: string) => {
    const s = status.toLowerCase();
    if (s === 'zugestellt' || s === 'delivered') return t('status_delivered');
    if (s === 'unterwegs' || s === 'in transit') return t('status_transit');
    if (s === 'erfasst' || s === 'registered') return t('status_registered');
    return status;
  };

  const getStatusColor = (status: string) => {
    const s = status.toLowerCase();
    if (s === 'zugestellt' || s === 'delivered') return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
    if (s === 'unterwegs' || s === 'in transit') return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
    return 'text-slate-400 bg-slate-800 border-slate-700';
  };

  const getStatusIcon = (status: string) => {
    const s = status.toLowerCase();
    if (s === 'zugestellt' || s === 'delivered') return <CheckCircle className="w-5 h-5 text-emerald-400" />;
    if (s === 'unterwegs' || s === 'in transit') return <Truck className="w-5 h-5 text-cyan-400" />;
    return <Package className="w-5 h-5 text-slate-400" />;
  };

  return (
    <section id="tracking" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      {/* إضاءات خلفية حيوية متطورة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-lg mb-4">
            <Compass className="w-4 h-4 text-cyan-400" />
            Sendungsverfolgung
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t('track_title')}
          </h2>
          <p className="text-slate-300 text-base font-light max-w-xl mx-auto leading-relaxed">
            {t('track_subtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* نموذج البحث */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder={t('track_placeholder')}
                  className="w-full pl-6 pr-14 py-4 bg-slate-900/90 border border-slate-800 rounded-2xl text-white placeholder-slate-500 focus:bg-slate-900 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-base font-medium shadow-inner"
                />
                <div className={`absolute ${i18n.language === 'ar' ? 'left-5' : 'right-5'} top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none`}>
                  <Search className="w-5 h-5" />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-500 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 cursor-pointer shrink-0"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    {t('track_btn_loading')}
                  </span>
                ) : (
                  t('track_btn_search')
                )}
              </button>
            </div>
          </form>

          {/* رسالة الخطأ */}
          {error && (
            <div className="bg-rose-950/90 border border-rose-500/40 rounded-2xl p-5 mb-8 flex items-center gap-3 text-rose-300 shadow-xl backdrop-blur-md animate-in fade-in">
              <AlertCircle className="w-6 h-6 flex-shrink-0 text-rose-400" />
              <p className="font-medium text-sm">{error}</p>
            </div>
          )}

          {/* نتيجة البحث */}
          {shipment && (
            <div className="bg-slate-900/90 rounded-[2rem] border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-xl animate-in fade-in">
              
              <div className="bg-gradient-to-r from-slate-950 to-slate-900 p-6 sm:p-8 border-b border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">{t('track_num_label')}</p>
                    <p className="text-xl sm:text-2xl font-extrabold text-white">{shipment.tracking_number}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-xl border flex items-center gap-2.5 w-fit ${getStatusColor(shipment.status)}`}>
                    {getStatusIcon(shipment.status)}
                    <span className="font-bold text-sm">{getStatusLabel(shipment.status)}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <h3 className="font-bold text-slate-200 mb-2 flex items-center gap-2 text-sm">
                      <Package className="w-4 h-4 text-cyan-400" />
                      {t('track_sender')}
                    </h3>
                    <p className="text-white font-medium text-sm">{shipment.sender_name}</p>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">{shipment.sender_address}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <h3 className="font-bold text-slate-200 mb-2 flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      {t('track_receiver')}
                    </h3>
                    <p className="text-white font-medium text-sm">{shipment.recipient_name}</p>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">{shipment.recipient_address}</p>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-slate-300 mb-1.5 flex items-center gap-2 text-xs uppercase tracking-wider">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        {t('track_current_loc')}
                      </h3>
                      <p className="text-white font-medium text-sm">{shipment.current_location}</p>
                    </div>

                    {shipment.estimated_delivery && (
                      <div>
                        <h3 className="font-semibold text-slate-300 mb-1.5 flex items-center gap-2 text-xs uppercase tracking-wider">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          {t('track_est_delivery')}
                        </h3>
                        <p className="text-white font-medium text-sm">
                          {new Date(shipment.estimated_delivery).toLocaleDateString(i18n.language === 'ar' ? 'ar-EG' : (i18n.language === 'en' ? 'en-US' : 'de-DE'), {
                            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                          })}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}