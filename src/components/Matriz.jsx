import React from 'react';
import { Grid, ShieldAlert, AlertTriangle, Info, Shield, HelpCircle } from 'lucide-react';

export default function Matriz() {
  return (
    <div className="w-full max-w-4xl bg-[#0d1527]/80 backdrop-blur-md rounded-2xl border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15),inset_0_0_15px_rgba(6,182,212,0.1)] p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.3),inset_0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400 font-sans text-slate-100">
      
      {/* Detalle decorativo superior (Línea de energía de fondo) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />

      {/* Encabezado de la Tarjeta con Icono */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-cyan-950 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-950/50 rounded-xl border border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <Grid className="w-6 h-6 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              Matriz de Priorización de Riesgos
            </h2>
            <p className="text-xs text-cyan-400/60 font-mono mt-0.5">RISK_MATRIX // PROBABILITY_VS_IMPACT</p>
          </div>
        </div>
      </div>

      {/* Descripción de la Metodología */}
      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
        Matriz de calor de riesgo elaborada siguiendo la metodología <strong className="text-cyan-400">Probabilidad × Impacto</strong>. Permite clasificar y priorizar las amenazas identificadas en la evaluación de seguridad del portal de clientes de EnergíaViva, considerando la facilidad de explotación y el impacto sobre la Tríada CID.
      </p>

      {/* Representación Visual de la Matriz de Calor (Responsiva) */}
      <div className="bg-[#080d1a] p-4 sm:p-6 rounded-xl border border-slate-800/80 mb-8 overflow-x-auto">
        <div className="min-w-[600px]">
          {/* Tabla de la Matriz */}
          <table className="w-full text-center border-collapse font-mono text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="p-2 text-left text-cyan-400 font-semibold uppercase tracking-wider">Prob. \ Imp.</th>
                <th className="p-2 font-medium">Bajo</th>
                <th className="p-2 font-medium">Medio</th>
                <th className="p-2 font-medium">Alto</th>
                <th className="p-2 font-medium">Crítico</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900/40">
              {/* FILA: ALTA */}
              <tr>
                <td className="p-3 text-left font-bold text-slate-300 border-r border-slate-850">Alta</td>
                <td className="p-2"><div className="mx-auto w-8 h-8 rounded bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold shadow-[0_0_5px_rgba(245,158,11,0.1)]">🟨</div></td>
                <td className="p-2"><div className="mx-auto w-8 h-8 rounded bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 font-bold shadow-[0_0_5px_rgba(249,115,22,0.1)]">🟧</div></td>
                <td className="p-2"><div className="mx-auto w-8 h-8 rounded bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 font-bold shadow-[0_0_5px_rgba(239,68,68,0.1)]">🟥</div></td>
                <td className="p-2">
                  <div className="mx-auto px-2 py-1 rounded bg-red-950/40 border border-red-500 text-red-400 font-bold flex flex-col gap-1 items-center shadow-[0_0_10px_rgba(239,68,68,0.2)] text-[10px] sm:text-xs">
                    <span>🟥 SQLi</span>
                    <span>🟥 Comandos</span>
                  </div>
                </td>
              </tr>
              {/* FILA: MEDIA */}
              <tr>
                <td className="p-3 text-left font-bold text-slate-300 border-r border-slate-850">Media</td>
                <td className="p-2"><div className="mx-auto w-8 h-8 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">🟩</div></td>
                <td className="p-2">
                  <div className="mx-auto px-2 py-1 rounded bg-amber-950/40 border border-amber-500 text-amber-400 font-bold flex items-center gap-1 shadow-[0_0_10px_rgba(245,158,11,0.2)] text-[10px] sm:text-xs">
                    <span>🟨 XSS Reflejado</span>
                  </div>
                </td>
                <td className="p-2"><div className="mx-auto w-8 h-8 rounded bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 font-bold">🟧</div></td>
                <td className="p-2"><div className="mx-auto w-8 h-8 rounded bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 font-bold">🟥</div></td>
              </tr>
              {/* FILA: BAJA */}
              <tr>
                <td className="p-3 text-left font-bold text-slate-300 border-r border-slate-850">Baja</td>
                <td className="p-2"><div className="mx-auto w-8 h-8 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">🟩</div></td>
                <td className="p-2"><div className="mx-auto w-8 h-8 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">🟩</div></td>
                <td className="p-2"><div className="mx-auto w-8 h-8 rounded bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">🟨</div></td>
                <td className="p-2"><div className="mx-auto w-8 h-8 rounded bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 font-bold">🟧</div></td>
              </tr>
              {/* FILA: MÍNIMA */}
              <tr>
                <td className="p-3 text-left font-bold text-slate-300 border-r border-slate-850">Mínima</td>
                <td className="p-2"><div className="mx-auto w-8 h-8 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">🟩</div></td>
                <td className="p-2"><div className="mx-auto w-8 h-8 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">🟩</div></td>
                <td className="p-2"><div className="mx-auto w-8 h-8 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">🟩</div></td>
                <td className="p-2"><div className="mx-auto w-8 h-8 rounded bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">🟨</div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Justificaciones Técnicas */}
      <div className="space-y-4 text-sm sm:text-base text-slate-300 font-normal">
        <h3 className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold mb-2">
          01 / Justificación de Niveles de Riesgo
        </h3>

        {/* Justificación 1: Inyección de comandos */}
        <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-red-500/30 transition-colors duration-300">
          <div className="flex items-center justify-between gap-2 mb-2 border-b border-slate-900 pb-2">
            <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase">
              <ShieldAlert className="w-4 h-4" />
              <span>Inyección de Comandos (CVSS 9.8)</span>
            </div>
            <span className="text-[10px] font-mono bg-red-950/40 border border-red-500/40 px-2 py-0.5 rounded text-red-400">CRÍTICO</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            <strong className="text-slate-200">Probabilidad Alta:</strong> Ocurre si la aplicación ejecuta entradas directamente en la shell sin sanitización. Es simple de explotar de forma remota y sin autenticación previa.<br />
            <strong className="text-slate-200">Impacto Crítico:</strong> Permite ejecutar comandos arbitrarios, tomar control absoluto del servidor e instalar software malicioso, afectando simultáneamente la confidencialidad, integridad y disponibilidad del sistema.
          </p>
        </div>

        {/* Justificación 2: Inyección SQL */}
        <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-red-500/30 transition-colors duration-300">
          <div className="flex items-center justify-between gap-2 mb-2 border-b border-slate-900 pb-2">
            <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase">
              <ShieldAlert className="w-4 h-4" />
              <span>Inyección de SQL (CVSS 9.1)</span>
            </div>
            <span className="text-[10px] font-mono bg-red-950/40 border border-red-500/40 px-2 py-0.5 rounded text-red-400">CRÍTICO</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            <strong className="text-slate-200">Probabilidad Alta:</strong> Es una de las fallas más comunes si las consultas se construyen dinámicamente con entradas directas del usuario.<br />
            <strong className="text-slate-200">Impacto Crítico:</strong> Permite la extracción masiva de datos personales, credenciales o información de consumo eléctrico, manipulación o borrado de registros, y puede usarse como puente para comprometer otros sistemas internos.
          </p>
        </div>

        {/* Justificación 3: XSS */}
        <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-amber-500/30 transition-colors duration-300">
          <div className="flex items-center justify-between gap-2 mb-2 border-b border-slate-900 pb-2">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
              <AlertTriangle className="w-4 h-4" />
              <span>XSS Reflejado (CVSS 5.4)</span>
            </div>
            <span className="text-[10px] font-mono bg-amber-950/40 border border-amber-500/40 px-2 py-0.5 rounded text-amber-400">MEDIO</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            <strong className="text-slate-200">Probabilidad Media:</strong> Requiere que el atacante use ingeniería social (phishing) para que la víctima interactúe con una URL maliciosa específica.<br />
            <strong className="text-slate-200">Impacto Medio:</strong> Afecta de forma individual a los navegadores de los usuarios (no compromete al servidor directamente). Permite el robo de cookies de sesión, tokens de acceso o desvío a sitios fraudulentos.
          </p>
        </div>
      </div>

      {/* Pie de la tarjeta */}
      <div className="mt-6 pt-4 border-t border-cyan-950 flex items-center justify-between text-xs font-mono text-cyan-400/40">
        <span>METHODOLOGY: PROBABILITY_IMPACT</span>
        <span>REMEDIATION_PRIORITIZATION</span>
      </div>

    </div>
  );
}