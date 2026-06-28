import React from 'react';
import Resumen from './components/Resumen';
import Activos from './components/Activos';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import Matriz from './components/Matriz';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#070a13] to-[#020408] flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 gap-8 overflow-y-auto">
      
      {/* 1. Contexto Global */}
      <Resumen />
      
      {/* 2. Activos Identificados */}
      <Activos />
      
      {/* 3. Matriz de Priorización y Calor */}
      <Matriz />
      
      {/* 4. Módulos Técnicos de Vulnerabilidad */}
      <InyeccionSQL />
      <XSS />
      <Comandos />
      
    </div>
  );
}

export default App;