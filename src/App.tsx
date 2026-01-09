import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogistikServices from './components/LogistikServices';
import ReinigungServices from './components/ReinigungServices';
import TrackingModule from './components/TrackingModule';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'DSH Service GmbH - Logistik & Spezialreinigung';
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LogistikServices />
      <ReinigungServices />
      <TrackingModule />
      <QuoteForm />
      <Footer />
    </div>
  );
}

export default App;
