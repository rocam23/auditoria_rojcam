import React from 'react';
import { Shield, Globe } from 'lucide-react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import Activos from './components/Activos';
import Matriz from './components/Matriz';
import Controles from './components/Controles';
import Recuperacion from './components/Recuperacion';
import Prompts from './components/Prompts';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#070a13] to-[#020408] flex flex-col font-sans text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* BARRA DE NAVEGACIÓN (Sticky Navbar) */}
      <nav className="sticky top-0 z-50 w-full bg-[#070a13]/80 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo / Título del Dashboard */}
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-cyan-950/40 rounded-lg border border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
              <Shield className="w-5 h-5 drop-shadow-[0_0_3px_rgba(6,182,212,0.5)]" />
            </div>
            <div>
              <span className="font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-sm sm:text-base uppercase">
                EnergíaViva
              </span>
              <span className="text-[10px] block font-mono text-cyan-400/50 leading-none tracking-wider">SecOps_Dashboard // v1.0</span>
            </div>
          </div>

          {/* Menú de enlaces rápidos superiores */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scrollToSection('prompts')}
              className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors duration-200 px-2 py-1 border border-transparent hover:border-cyan-500/20 rounded"
            >
              [ Prompts_Log ]
            </button>
            <a
              href="https://github.com/rocam23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 bg-slate-950/40 px-3 py-1.5 rounded-lg transition-all duration-300 shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_10px_rgba(6,182,212,0.1)]"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">Repository</span>
            </a>
          </div>

        </div>
      </nav>

      {/* CONTENEDOR PRINCIPAL DE REPORTES SEQUENCIALES */}
      <main className="flex-1 w-full flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 gap-8 overflow-y-auto">
        
        {/* 1. Resumen */}
        <div id="resumen" className="w-full max-w-4xl">
          <Resumen />
        </div>
        
        {/* 2. Inyección SQL */}
        <div id="sqli" className="w-full max-w-4xl">
          <InyeccionSQL />
        </div>
        
        {/* 3. XSS */}
        <div id="xss" className="w-full max-w-4xl">
          <XSS />
        </div>
        
        {/* 4. Inyección de Comandos */}
        <div id="comandos" className="w-full max-w-4xl">
          <Comandos />
        </div>
        
        {/* 5. Activos */}
        <div id="activos" className="w-full max-w-4xl">
          <Activos />
        </div>
        
        {/* 6. Matriz */}
        <div id="matriz" className="w-full max-w-4xl">
          <Matriz />
        </div>
        
        {/* 7. Controles */}
        <div id="controles" className="w-full max-w-4xl">
          <Controles />
        </div>
        
        {/* 8. Recuperación */}
        <div id="recuperacion" className="w-full max-w-4xl">
          <Recuperacion />
        </div>

        {/* 9. Registro e Ingeniería de Prompts (Último Componente) */}
        <div id="prompts" className="w-full max-w-4xl">
          <Prompts />
        </div>
        
      </main>

      {/* PIE DE PÁGINA (Footer) */}
      <footer className="w-full bg-[#040711] border-t border-cyan-950/60 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-4 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} ENERGÍAVIVA SEC-AUDIT.</span>
            <span className="text-cyan-500/40 hidden sm:inline">|</span>
            <span className="text-slate-600">PROJECT_CODE: ROJCAM</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/rocam23" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors duration-200 group"
            >
              <Globe className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors duration-200" />
              <span>Ver en GitHub</span>
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;