import React from 'react';
import { Shield, Layers, AlertCircle, Server, Users, CreditCard, KeyRound } from 'lucide-react';

export default function Activos() {
  return (
    <div className="w-full max-w-4xl bg-[#0d1527]/80 backdrop-blur-md rounded-2xl border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15),inset_0_0_15px_rgba(6,182,212,0.1)] p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.3),inset_0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400 font-sans text-slate-100">
      
      {/* Detalle decorativo superior (Línea de energía de fondo) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />

      {/* Encabezado de la Tarjeta con Icono */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-cyan-950 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-950/50 rounded-xl border border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <Layers className="w-6 h-6 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              Gestión de Activos de Información
            </h2>
            <p className="text-xs text-cyan-400/60 font-mono mt-0.5">ASSET_VALUATION // ELECTRIC_SECTOR_CRITICAL</p>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
        
        {/* Descripción General */}
        <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/30 transition-colors duration-300">
          <p>
            Las empresas del sector eléctrico gestionan una gran cantidad de activos de información que son esenciales para la operación del negocio y la prestación continua de sus servicios. La identificación de los activos más relevantes y de las amenazas que pueden afectarlos constituye un paso fundamental para evaluar el nivel de riesgo y definir controles que permitan proteger la información y garantizar la continuidad de los servicios.
          </p>
        </div>

        {/* Desglose de Activos Identificados en el Documento */}
        <div>
          <h3 className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold mb-3 flex items-center gap-2">
            <span>01 / Inventario de Activos Esenciales</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#080d1a] p-4 rounded-xl border border-slate-800/60 flex items-start gap-3">
              <div className="text-cyan-400 mt-0.5"><Users className="w-5 h-5" /></div>
              <div>
                <h4 className="font-semibold text-slate-200 text-sm">Datos de Clientes</h4>
                <p className="text-xs text-slate-400 mt-1">Registros personales e información sensible de los usuarios del servicio eléctrico.</p>
              </div>
            </div>

            <div className="bg-[#080d1a] p-4 rounded-xl border border-slate-800/60 flex items-start gap-3">
              <div className="text-cyan-400 mt-0.5"><CreditCard className="w-5 h-5" /></div>
              <div>
                <h4 className="font-semibold text-slate-200 text-sm">Sistemas de Facturación y Portales</h4>
                <p className="text-xs text-slate-400 mt-1">Portales web y plataformas transaccionales para consultas y gestión de contratos.</p>
              </div>
            </div>

            <div className="bg-[#080d1a] p-4 rounded-xl border border-slate-800/60 flex items-start gap-3">
              <div className="text-cyan-400 mt-0.5"><Server className="w-5 h-5" /></div>
              <div>
                <h4 className="font-semibold text-slate-200 text-sm">Infraestructura Tecnológica</h4>
                <p className="text-xs text-slate-400 mt-1">Soporte central y servidores que procesan los registros operacionales del negocio.</p>
              </div>
            </div>

            <div className="bg-[#080d1a] p-4 rounded-xl border border-slate-800/60 flex items-start gap-3">
              <div className="text-cyan-400 mt-0.5"><KeyRound className="w-5 h-5" /></div>
              <div>
                <h4 className="font-semibold text-slate-200 text-sm">Credenciales de Acceso</h4>
                <p className="text-xs text-slate-400 mt-1">Identificadores y llaves que protegen las fronteras del entorno tecnológico.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Riesgos Expuestos */}
        <div className="bg-[#080d1a] p-5 rounded-xl border border-red-950/40 shadow-[inset_0_0_15px_rgba(239,68,68,0.03)]">
          <div className="flex items-center gap-2 mb-3 text-red-400 font-mono text-xs tracking-wider uppercase font-semibold">
            <AlertCircle className="w-4 h-4" />
            <span>02 / Exposición a Riesgos de Ciberseguridad</span>
          </div>
          <p className="mb-3 text-sm">
            Debido a la naturaleza crítica de la industria, estos activos están expuestos a diversos riesgos de ciberseguridad que comprometen su resiliencia operacional:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-mono text-slate-400 pl-2">
            <li className="flex items-center gap-2">
              <span className="text-red-500 font-bold">▪</span> Accesos no autorizados
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500 font-bold">▪</span> Filtración de información
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500 font-bold">▪</span> Manipulación de datos
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500 font-bold">▪</span> Ataques a aplicaciones web
            </li>
            <li className="flex items-center gap-2 sm:col-span-2">
              <span className="text-red-500 font-bold">▪</span> Denegación de servicio (DoS/DDoS)
            </li>
          </ul>
        </div>

      </div>

      {/* Pie de la tarjeta */}
      <div className="mt-6 pt-4 border-t border-cyan-950 flex items-center justify-between text-xs font-mono text-cyan-400/40">
        <span>ASSET_ID: ELEC-GRID-2026</span>
        <span>CRITICAL_INFRASTRUCTURE</span>
      </div>

    </div>
  );
}