import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './i18n'; // تأكد أن الاستيراد يتم قبل الـ App

import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* Suspense يضمن عدم ظهور شاشة بيضاء أو أخطاء أثناء تحميل ملفات اللغة */}
      <Suspense fallback={<div className="h-screen flex items-center justify-center font-sans">Loading...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);