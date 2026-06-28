import React from 'react';
import Resumen from './components/Resumen';
import Activos from './components/Activos';
import Matriz from './components/Matriz';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import Controles from './components/Controles';
import Recuperacion from './components/Recuperacion';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#070a13] to-[#020408] flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 gap-8 overflow-y-auto">
      
      {/* 1. Contexto y Objetivos Operacionales */}
      <Resumen />
      
      {/* 2. Inventario de Activos Críticos del Sector Eléctrico */}
      <Activos />
      
      {/* 3. Matriz de Priorización de Riesgos (Probabilidad x Impacto) */}
      <Matriz />
      
      {/* 4. Módulos Técnicos de Vulnerabilidades Identificadas */}
      <InyeccionSQL />
      <XSS />
      <Comandos />
      
      {/* 5. Directrices Técnicas, Políticas y Controles de Hardening */}
      <Controles />
      
      {/* 6. Estrategia y Plan de Recuperación ante Desastres (DRP) */}
      <Recuperacion />
      
    </div>
  );
}

export default App;