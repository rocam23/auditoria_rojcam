import React from 'react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import Activos from './components/Activos';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#070a13] to-[#020408] flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 gap-8 overflow-y-auto">
      
      {/* 1. Introducción y Evaluación de Seguridad */}
      <Resumen />
      
      {/* 2. Inventario de Activos Críticos del Sector */}
      <Activos />
      
      {/* 3. Reporte de Vulnerabilidad: SQLi */}
      <InyeccionSQL />
      
      {/* 4. Reporte de Vulnerabilidad: XSS */}
      <XSS />
      
      {/* 5. Reporte de Vulnerabilidad: Inyección de Comandos */}
      <Comandos />
      
    </div>
  );
}

export default App;