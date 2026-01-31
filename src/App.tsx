import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from './components/Header';
import Hero from './components/Hero';
import LogistikServices from './components/LogistikServices';
import ReinigungServices from './components/ReinigungServices';
import TrackingModule from './components/TrackingModule';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Impressum from './pages/Impressum';
import Jobs from './pages/Jobs';

function App() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  // 1. تحديث العنوان والاتجاه عند تغيير اللغة أو المسار
  useEffect(() => {
    // تحديث عنوان المتصفح ليكون مترجماً
    document.title = t('site_title');
    
    // ضبط اتجاه الصفحة (RTL للعربية و LTR للباقي)
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language, t]);

  // 2. العودة لأعلى الصفحة عند التنقل بين الروابط
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`min-h-screen ${i18n.language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      <Header />

      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <LogistikServices />
              <ReinigungServices />
              <TrackingModule />
              <QuoteForm />
            </>
          }
        />

        {/* Legal & Careers */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;