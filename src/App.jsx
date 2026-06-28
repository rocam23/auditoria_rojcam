import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React from 'react';
import { Shield, Cpu, Zap, Terminal } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#070a13] to-[#020408] text-slate-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      
      {/* Contenedor Principal Responsivo con Efecto Neón */}
      <div className="w-full max-w-4xl bg-[#0d1527]/80 backdrop-blur-md rounded-2xl border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15),inset_0_0_15px_rgba(6,182,212,0.1)] p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.3),inset_0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400">
        
        {/* Detalle decorativo superior (Línea de energía de fondo) */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />

        {/* Encabezado */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 border-b border-cyan-950 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-950/50 rounded-xl border border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                Core_Interface.bin
              </h1>
              <p className="text-xs text-cyan-400/60 font-mono mt-0.5">STATUS: SYSTEM_ONLINE</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 self-start sm:self-auto bg-cyan-950/30 px-3 py-1.5 rounded-full border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>NODE_01 // SECURE</span>
          </div>
        </div>

        {/* Grid de Tarjetas / Contenido Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Tarjeta 1 */}
          <div className="group bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] flex flex-col gap-3">
            <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              <Cpu className="w-5 h-5 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
            </div>
            <h3 className="font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">Procesamiento</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Módulos cuánticos optimizados para renderizado en tiempo real.</p>
          </div>

          {/* Tarjeta 2 */}
          <div className="group bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] flex flex-col gap-3">
            <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
            </div>
            <h3 className="font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">Vite + Tailwind</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Velocidad de respuesta instantánea con HMR de última generación.</p>
          </div>

          {/* Tarjeta 3 (Ocupa 2 columnas en pantallas sm para balancear, o 1 en md) */}
          <div className="group bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] flex flex-col gap-3 sm:col-span-2 md:col-span-1">
            <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-5 h-5 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
            </div>
            <h3 className="font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">Cortafuegos</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Protección de datos cifrada mediante hashes de flujo continuo.</p>
          </div>

        </div>

        {/* Botón de Acción con Efecto de Brillo Completo */}
        <div className="mt-8 pt-6 border-t border-cyan-950 flex justify-end">
          <button className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 font-medium text-sm rounded-lg tracking-wider text-slate-950 font-mono transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] hover:from-cyan-400 hover:to-blue-500 active:scale-98">
            INICIAR_PROCESO
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;