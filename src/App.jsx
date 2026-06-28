import React from 'react';
import Resumen from './components/Resumen';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#070a13] to-[#020408] flex items-center justify-center p-4 sm:p-6 md:p-8">
      
      {/* Llamada al componente Resumen */}
      <Resumen />
      
    </div>
  );
}

export default App;