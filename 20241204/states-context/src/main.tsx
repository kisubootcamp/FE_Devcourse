import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './css/index.css';
import CounterProvider from './context/provider/CounterProvider.tsx';
import AuthProvider from './context/provider/AuthProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </AuthProvider>
  </StrictMode>
);
