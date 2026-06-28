import React from 'react';
import Resumen from './components/Resumen';
import Activos from './components/Activos';
import Matriz from './components/Matriz';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import Controles from './components/Controles';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#070a13] to-[#020408] flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 gap-8 overflow-y-auto">
      
      {/* 1. Contexto Operacional */}
      <Resumen />
      
      {/* 2. Activos Eléctricos Críticos */}
      <Activos />
      
      {/* 3. Matriz de Calor y Gravedad */}
      <Matriz />
      
      {/* 4. Especificaciones de Vulnerabilidades Técnicas */}
      <InyeccionSQL />
      <XSS />
      <Comandos />
      
      {/* 5. Plan de Acción, Políticas y Controles */}
      <Controles />
      
    </div>
  );
}

export default App;