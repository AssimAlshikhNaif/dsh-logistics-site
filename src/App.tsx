import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

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
import Agb from './pages/Agb';
import About from './pages/About';
import LocationMap from './components/LocationMap';
import Testimonials from './components/Testimonials';

function App() {
  const { pathname } = useLocation();

  // ضبط العنوان الثابت باللغة الألمانية حصرياً وضبط اتجاه الصفحة LTR
  useEffect(() => {
    document.title = "DSH Service GmbH";
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'de';
  }, []);

  // العودة لأعلى الصفحة عند التنقل بين الروابط
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen font-sans">
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
              <LocationMap />
              <Testimonials />
            </>
          }
        />

        {/* Legal & Careers */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/agb" element={<Agb />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;