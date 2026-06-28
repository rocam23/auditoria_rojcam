import React from 'react';
import { RefreshCw, HardDriveDownload, ShieldCheck, HeartHandshake, Eye, Target, FileText } from 'lucide-react';

export default function Recuperacion() {
  return (
    <div className="w-full max-w-4xl bg-[#0d1527]/80 backdrop-blur-md rounded-2xl border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15),inset_0_0_15px_rgba(6,182,212,0.1)] p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.3),inset_0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400 font-sans text-slate-100">
      
      {/* Detalle decorativo superior (Línea de energía de fondo) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />

      {/* Encabezado de la Tarjeta con Icono */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-cyan-950 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-950/50 rounded-xl border border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <RefreshCw className="w-6 h-6 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              Plan de Recuperación ante Desastres
            </h2>
            <p className="text-xs text-cyan-400/60 font-mono mt-0.5">DISASTER_RECOVERY // RESILIENCE_STRATEGY</p>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
        
        {/* Introducción y Plan de Mejora Tecnológica */}
        <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/30 transition-colors duration-300">
          <div className="flex items-center gap-2 mb-3 text-cyan-400 font-mono text-xs tracking-wider uppercase font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>01 / Fortalecimiento Operacional y Tecnológico</span>
          </div>
          <p className="mb-4">
            Con el objetivo de fortalecer la disponibilidad y operación del portal de clientes, se recomienda implementar un plan de mejora tecnológica acompañado de un manejo de recuperación ante desastres.
          </p>
          <p>
            Se sugiere actualizar periódicamente el sistema operativo, servidores, frameworks, bibliotecas y componentes de terceros para reducir la exposición a vulnerabilidades conocidas. Asimismo, es recomendable incorporar herramientas de monitoreo continuo, gestión de registros y controles de seguridad en el ciclo de desarrollo. Estas medidas permitirán detectar y corregir riesgos de forma temprana.
          </p>
        </div>

        {/* Desglose de los Planes de Recuperación */}
        <div>
          <h3 className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold mb-3 flex items-center gap-2">
            <HeartHandshake className="w-4 h-4" />
            <span>02 / Estrategias de Continuidad y Resiliencia</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Medida 1: Respaldos */}
            <div className="bg-[#080d1a] p-4 rounded-xl border border-slate-800/60 hover:border-cyan-500/20 transition-all duration-200 flex items-start gap-3">
              <div className="text-cyan-400 mt-0.5"><HardDriveDownload className="w-5 h-5" /></div>
              <div>
                <h4 className="font-semibold text-slate-200 text-sm">Respaldos Periódicos</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Generación de copias de seguridad de forma automatizada y periódica para las bases de datos, configuraciones del entorno y archivos de la aplicación.
                </p>
              </div>
            </div>

            {/* Medida 2: Objetivos de negocio */}
            <div className="bg-[#080d1a] p-4 rounded-xl border border-slate-800/60 hover:border-cyan-500/20 transition-all duration-200 flex items-start gap-3">
              <div className="text-cyan-400 mt-0.5"><Target className="w-5 h-5" /></div>
              <div>
                <h4 className="font-semibold text-slate-200 text-sm">Métricas de Recuperación</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Definición explícita de los objetivos de tiempo de recuperación (RTO) y de pérdida de datos aceptable (RPO), alineados con los requerimientos esenciales del negocio.
                </p>
              </div>
            </div>

            {/* Medida 3: Documentación */}
            <div className="bg-[#080d1a] p-4 rounded-xl border border-slate-800/60 hover:border-cyan-500/20 transition-all duration-200 flex items-start gap-3">
              <div className="text-cyan-400 mt-0.5"><FileText className="w-5 h-5" /></div>
              <div>
                <h4 className="font-semibold text-slate-200 text-sm">Procedimientos Documentados</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Protocolos formales para la restauración de los servicios, asignando responsables claros, jerarquías de prioridad y canales de comunicación para contingencias.
                </p>
              </div>
            </div>

            {/* Medida 4: Pruebas y Monitoreo */}
            <div className="bg-[#080d1a] p-4 rounded-xl border border-slate-800/60 hover:border-cyan-500/20 transition-all duration-200 flex items-start gap-3">
              <div className="text-cyan-400 mt-0.5"><Eye className="w-5 h-5" /></div>
              <div>
                <h4 className="font-semibold text-slate-200 text-sm">Simulacros y Alertas</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Ejecución periódica de pruebas del plan para validar su efectividad, sumado a un monitoreo continuo de infraestructura para alertar fallas de inmediato.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Conclusión de resiliencia */}
        <p className="text-xs sm:text-sm font-sans text-slate-400 bg-[#040711] p-4 rounded-lg border border-cyan-950/40 text-center">
          La implementación integral de estas medidas permitirá mejorar la resiliencia del portal de clientes, reducir de forma drástica el impacto de incidentes tecnológicos o brechas de seguridad, y asegurar la continuidad ininterrumpida de los servicios comerciales y eléctricos prestados.
        </p>

      </div>

      {/* Pie de la tarjeta */}
      <div className="mt-6 pt-4 border-t border-cyan-950 flex items-center justify-between text-xs font-mono text-cyan-400/40">
        <span>FRAMEWORK: ISO_22301_DRP</span>
        <span>BUSINESS_CONTINUITY</span>
      </div>

    </div>
  );
}