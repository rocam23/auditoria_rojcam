import React from 'react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#070a13] to-[#020408] flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 gap-8 overflow-y-auto">
      
      {/* Componente 1: Introducción */}
      <Resumen />
      
      {/* Componente 2: SQLi */}
      <InyeccionSQL />
      
      {/* Componente 3: XSS */}
      <XSS />
      
    </div>
  );
}

export default App;