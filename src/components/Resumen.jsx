import React from 'react';
import { ShieldCheck, FileText, AlertTriangle } from 'lucide-react';

export default function Resumen() {
  return (
    <div className="w-full max-w-4xl bg-[#0d1527]/80 backdrop-blur-md rounded-2xl border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15),inset_0_0_15px_rgba(6,182,212,0.1)] p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.3),inset_0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400 font-sans text-slate-100">
      
      {/* Detalle decorativo superior (Línea de energía de fondo) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />

      {/* Encabezado de la Tarjeta con Icono */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-cyan-950 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-950/50 rounded-xl border border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <ShieldCheck className="w-6 h-6 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              Evaluación de Seguridad: Portales Eléctricos
            </h2>
            <p className="text-xs text-cyan-400/60 font-mono mt-0.5">DOCUMENT_SUMMARY // CIBERSEGURIDAD</p>
          </div>
        </div>
      </div>

      {/* Contenido del Documento en un formato de cuadrícula/lectura fluida */}
      <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
        
        {/* Sección 1: Contexto */}
        <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/30 transition-colors duration-300">
          <div className="flex items-center gap-2 mb-2 text-cyan-400 font-mono text-xs tracking-wider uppercase font-semibold">
            <FileText className="w-4 h-4" />
            <span>01 / Importancia de los Portales</span>
          </div>
          <p>
            En el sector eléctrico los portales de clientes constituyen un componente esencial para la prestación de servicios, permitiendo realizar operaciones como la consulta de consumos, pago de cuentas, actualización de datos personales y gestión de contratos. Debido a la naturaleza crítica de estos servicios y al volumen de información sensible que administran, estos sistemas representan un objetivo atractivo para actores maliciosos que buscan obtener acceso no autorizado o afectar la continuidad operacional.
          </p>
        </div>

        {/* Sección 2: El Riesgo */}
        <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/30 transition-colors duration-300">
          <div className="flex items-center gap-2 mb-2 text-cyan-400 font-mono text-xs tracking-wider uppercase font-semibold">
            <AlertTriangle className="w-4 h-4" />
            <span>02 / Impacto de Vulnerabilidades</span>
          </div>
          <p>
            La seguridad de una aplicación web en este contexto resulta fundamental para proteger la confidencialidad de los datos de los clientes, garantizar la integridad de la información procesada y mantener la disponibilidad de los servicios ofrecidos. Una vulnerabilidad explotada con éxito puede derivar en filtraciones de información, alteraciones de registros, interrupción del servicio e impactos tanto económicos como reputacionales para la organización.
          </p>
        </div>

        {/* Sección 3: Mitigación */}
        <div className="bg-[#080d1a] p-5 rounded-xl border border-cyan-950/40 bg-gradient-to-r from-[#080d1a] to-[#0a182c]/30">
          <p className="text-slate-200 font-medium">
            La evaluación de seguridad de este tipo de plataformas permite identificar debilidades antes de que puedan ser explotadas, facilitando la implementación de controles y medidas de mitigación con buenas prácticas de ciberseguridad.
          </p>
        </div>

      </div>

      {/* Pie de la tarjeta */}
      <div className="mt-6 pt-4 border-t border-cyan-950 flex items-center justify-between text-xs font-mono text-cyan-400/40">
        <span>REP_ID: ELEC-SEC-2026</span>
        <span>CONFIDENTIAL_DATA</span>
      </div>

    </div>
  );
}