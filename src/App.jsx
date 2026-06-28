import React from 'react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#070a13] to-[#020408] flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 gap-8 overflow-y-auto">
      
      {/* Primer componente */}
      <Resumen />
      
      {/* Nuevo componente de Inyección SQL */}
      <InyeccionSQL />
      
    </div>
  );
}

export default App;