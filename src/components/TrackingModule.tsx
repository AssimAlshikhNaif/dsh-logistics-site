import { useState } from 'react';
import { Search, Package, MapPin, Calendar, CheckCircle, Truck, AlertCircle } from 'lucide-react';
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

  // دالة لجلب اسم الحالة المترجم
  const getStatusLabel = (status: string) => {
    const s = status.toLowerCase();
    if (s === 'zugestellt' || s === 'delivered') return t('status_delivered');
    if (s === 'unterwegs' || s === 'in transit') return t('status_transit');
    if (s === 'erfasst' || s === 'registered') return t('status_registered');
    return status;
  };

  const getStatusColor = (status: string) => {
    const s = status.toLowerCase();
    if (s === 'zugestellt' || s === 'delivered') return 'text-green-600 bg-green-50 border-green-200';
    if (s === 'unterwegs' || s === 'in transit') return 'text-cyan-600 bg-cyan-50 border-cyan-200';
    return 'text-gray-600 bg-gray-50 border-gray-200';
  };

  const getStatusIcon = (status: string) => {
    const s = status.toLowerCase();
    if (s === 'zugestellt' || s === 'delivered') return <CheckCircle className="w-6 h-6" />;
    if (s === 'unterwegs' || s === 'in transit') return <Truck className="w-6 h-6" />;
    return <Package className="w-6 h-6" />;
  };

  return (
    <section id="tracking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t('track_title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('track_subtitle')}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder={t('track_placeholder')}
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none"
                />
                <Search className={`absolute ${i18n.language === 'ar' ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400`} />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                {loading ? t('track_btn_loading') : t('track_btn_search')}
              </button>
            </div>
          </form>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 flex items-center gap-3 text-red-700">
              <AlertCircle className="w-6 h-6 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}

          {shipment && (
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-300 mb-1">{t('track_num_label')}</p>
                    <p className="text-2xl font-bold">{shipment.tracking_number}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-lg border flex items-center gap-2 w-fit ${getStatusColor(shipment.status)}`}>
                    {getStatusIcon(shipment.status)}
                    <span className="font-semibold">{getStatusLabel(shipment.status)}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Package className="w-5 h-5 text-cyan-600" />
                      {t('track_sender')}
                    </h3>
                    <p className="text-gray-700 font-medium">{shipment.sender_name}</p>
                    <p className="text-gray-600 text-sm mt-1">{shipment.sender_address}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-cyan-600" />
                      {t('track_receiver')}
                    </h3>
                    <p className="text-gray-700 font-medium">{shipment.recipient_name}</p>
                    <p className="text-gray-600 text-sm mt-1">{shipment.recipient_address}</p>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-cyan-600" />
                        {t('track_current_loc')}
                      </h3>
                      <p className="text-gray-700">{shipment.current_location}</p>
                    </div>

                    {shipment.estimated_delivery && (
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-cyan-600" />
                          {t('track_est_delivery')}
                        </h3>
                        <p className="text-gray-700">
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