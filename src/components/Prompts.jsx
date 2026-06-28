import React from 'react';
import { Terminal, MessageSquareCode, Cpu, Layers, HelpCircle } from 'lucide-react';

export default function Prompts() {
  return (
    <div className="w-full max-w-4xl bg-[#0d1527]/80 backdrop-blur-md rounded-2xl border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15),inset_0_0_15px_rgba(6,182,212,0.1)] p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.3),inset_0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400 font-sans text-slate-100">
      
      {/* Detalle decorativo superior */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />

      {/* Encabezado de la Tarjeta */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-cyan-950 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-950/50 rounded-xl border border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <MessageSquareCode className="w-6 h-6 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              Registro de Prompts e Ingeniería Inversa
            </h2>
            <p className="text-xs text-cyan-400/60 font-mono mt-0.5">AI_GENERATION_LOG // MODEL: GEMINI_3.5_FLASH</p>
          </div>
        </div>
      </div>

      {/* Bloque de Metadatos del Modelo */}
      <div className="mb-6 flex items-center gap-3 p-3 bg-cyan-950/20 rounded-xl border border-cyan-500/10 font-mono text-xs text-slate-400">
        <Cpu className="w-4 h-4 text-cyan-400" />
        <span>Motor de IA Utilizado: <strong className="text-cyan-400">Google Gemini (Tipo 3.5 Flash)</strong></span>
      </div>

      {/* Contenido Secuencial de Prompts */}
      <div className="space-y-6 text-sm sm:text-base text-slate-300 font-normal">
        
        {/* Sección: Manejo de CSS */}
        <div>
          <h3 className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold mb-3 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>01 / Estructuración Base y CSS</span>
          </h3>
          <div className="bg-[#080d1a] rounded-xl border border-slate-800/80 p-4 font-mono text-xs sm:text-sm shadow-inner">
            <span className="text-cyan-500 font-bold block mb-1">PROMPT:</span>
            <p className="text-slate-300 italic bg-[#040711] p-3 rounded border border-slate-900 leading-relaxed">
              "Me encuentro desarrollando una aplicación web en React Vite con Tailwind CSS y Lucide React. Necesito que desarrolles un diseño CSS oscuro con azul neon para bordes y sombreado, debe ser responsivo. Como prueba, solo crea un contenedor que irá en App.jsx para visualizarlo."
            </p>
            <span className="text-emerald-500 font-bold block mt-3 mb-1">RESULTADO:</span>
            <p className="text-slate-400 text-xs font-sans">
              El diseño base de contenedores con gradientes responsivos y sombreados neón funcionó de forma correcta desde su primera iteración.
            </p>
          </div>
        </div>

        {/* Sección: Creación de Componentes */}
        <div>
          <h3 className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold mb-3 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>02 / Flujo de Modularización Técnico</span>
          </h3>
          <p className="text-xs text-slate-400 mb-3 font-sans">
            La creación de los módulos web se realizó adjuntando secuencialmente los reportes técnicos en formato Markdown (`.md`) bajo instrucciones estandarizadas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
            <div className="bg-[#080d1a] p-3 rounded-lg border border-slate-850">
              <span className="text-cyan-500 block font-bold">Módulo Resumen:</span>
              <p className="text-slate-400 mt-1">"Siguiendo este diseño, crea un componente llamado Resumen de acuerdo al siguiente documento .md..."</p>
            </div>
            <div className="bg-[#080d1a] p-3 rounded-lg border border-slate-850">
              <span className="text-cyan-500 block font-bold">Módulo SQLi:</span>
              <p className="text-slate-400 mt-1">"Necesito que realices el mismo trabajo ahora con el componente InyeccionSQL.jsx."</p>
            </div>
            <div className="bg-[#080d1a] p-3 rounded-lg border border-slate-850">
              <span className="text-cyan-500 block font-bold">Módulo XSS:</span>
              <p className="text-slate-400 mt-1">"Creación de componente XSS.jsx"</p>
            </div>
            <div className="bg-[#080d1a] p-3 rounded-lg border border-slate-850">
              <span className="text-cyan-500 block font-bold">Módulo Comandos:</span>
              <p className="text-slate-400 mt-1">"Creación de componente Comandos.jsx"</p>
            </div>
            <div className="bg-[#080d1a] p-3 rounded-lg border border-slate-850">
              <span className="text-cyan-500 block font-bold">Módulo Activos:</span>
              <p className="text-slate-400 mt-1">"Creación de componente Activos.jsx"</p>
            </div>
            <div className="bg-[#080d1a] p-3 rounded-lg border border-slate-850">
              <span className="text-cyan-500 block font-bold">Módulo Matriz:</span>
              <p className="text-slate-400 mt-1">"Creación de componente Matriz.jsx"</p>
            </div>
            <div className="bg-[#080d1a] p-3 rounded-lg border border-slate-850">
              <span className="text-cyan-500 block font-bold">Módulo Controles:</span>
              <p className="text-slate-400 mt-1">"Creación de componente Controles.jsx"</p>
            </div>
            <div className="bg-[#080d1a] p-3 rounded-lg border border-slate-850">
              <span className="text-cyan-500 block font-bold">Módulo Recuperación:</span>
              <p className="text-slate-400 mt-1">"Creación de componente Recuperación.jsx"</p>
            </div>
          </div>
        </div>

        {/* Sección: Estructura e Integración Global */}
        <div>
          <h3 className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold mb-3 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>03 / Ajustes de Arquitectura e Integración</span>
          </h3>
          <div className="bg-[#080d1a] rounded-xl border border-slate-800/80 p-4 font-mono text-xs sm:text-sm">
            <span className="text-cyan-500 font-bold block mb-1">PROMPT DE ENRUTAMIENTO:</span>
            <p className="text-slate-300 italic bg-[#040711] p-3 rounded border border-slate-900 leading-relaxed">
              "Necesito que añadas a App.jsx una barra de navegación y footer que tenga enlace a github. Además, el orden de los componentes debe ser cambiada a Resumen-&gt;Inyeccion SQL-&gt;XSS-&gt;Inyeccion Comandos-&gt;Activos-&gt;Matriz-&gt;Controles-&gt;Recuperación"
            </p>
          </div>
        </div>

      </div>

      {/* Pie de la tarjeta */}
      <div className="mt-6 pt-4 border-t border-cyan-950 flex items-center justify-between text-xs font-mono text-cyan-400/40">
        <span>LOG_STATUS: AUDITED</span>
        <span>PROMPT_ENG_COMPLETE</span>
      </div>

    </div>
  );
}