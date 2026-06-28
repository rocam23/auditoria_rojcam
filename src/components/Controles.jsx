import React from 'react';
import { ShieldCheck, Terminal, Database, Code2, Sliders, CheckSquare, ShieldAlert } from 'lucide-react';

export default function Controles() {
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
              Políticas y Controles de Seguridad
            </h2>
            <p className="text-xs text-cyan-400/60 font-mono mt-0.5">MITIGATION_POLICIES // ENERGIAVIVA_HARDENING</p>
          </div>
        </div>
      </div>

      {/* Introducción Contextual */}
      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
        Durante la revisión del portal de clientes de <strong className="text-cyan-400">EnergíaViva</strong> se identificaron vulnerabilidades relacionadas con inyección de comandos, inyección SQL y ataques XSS. Para reducir el riesgo de compromisos operacionales, se recomienda implementar de manera estricta las siguientes políticas y controles técnicos:
      </p>

      {/* Bloque 01: Prevención y Mitigación Específica */}
      <div className="space-y-4 mb-8">
        <h3 className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold flex items-center gap-2 mb-2">
          <Sliders className="w-4 h-4" />
          <span>01 / Controles Específicos por Vector de Ataque</span>
        </h3>

        {/* Control 1: Inyección de comandos */}
        <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/20 transition-colors duration-300">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase mb-3 border-b border-slate-900 pb-2">
            <Terminal className="w-4 h-4 text-red-400" />
            <span>Mitigación: Inyección de Comandos</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-400 pl-1 list-none">
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">▪</span> <span>Validar estrictamente todas las entradas del usuario mediante <strong>listas blancas</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">▪</span> <span>Evitar la ejecución de comandos del sistema con datos proporcionados por el usuario. Cuando sea indispensable, utilizar APIs o bibliotecas específicas en lugar de invocar la terminal directamente.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">▪</span> <span>Ejecutar los servicios con el principio de <strong>mínimo privilegio</strong> y restringir el acceso a comandos críticos.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">▪</span> <span>Registrar y monitorear permanentemente intentos de ejecución anómalos.</span>
            </li>
          </ul>
        </div>

        {/* Control 2: Inyección SQL */}
        <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/20 transition-colors duration-300">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase mb-3 border-b border-slate-900 pb-2">
            <Database className="w-4 h-4" />
            <span>Mitigación: Inyección de SQL</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-400 pl-1 list-none">
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">▪</span> <span>Utilizar <strong>consultas parametrizadas</strong> o procedimientos almacenados seguros en todas las interacciones con la base de datos.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">▪</span> <span>Validar y sanitizar minuciosamente los datos de entrada antes de procesarlos.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">▪</span> <span>Restringir los privilegios de las cuentas de base de datos al mínimo operacional estrictamente necesario.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">▪</span> <span>Implementar monitoreo y registros detallados de consultas sospechosas para facilitar la detección temprana.</span>
            </li>
          </ul>
        </div>

        {/* Control 3: XSS */}
        <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/20 transition-colors duration-300">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase mb-3 border-b border-slate-900 pb-2">
            <Code2 className="w-4 h-4 text-amber-400" />
            <span>Mitigación: Cross-Site Scripting (XSS)</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-400 pl-1 list-none">
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">▪</span> <span>Validar y codificar adecuadamente (<strong>output encoding</strong>) toda la información que se presenta de vuelta al usuario final.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">▪</span> <span>Aplicar políticas de seguridad avanzadas como <strong>Content Security Policy (CSP)</strong> para restringir y limitar la ejecución de scripts no autorizados.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">▪</span> <span>Utilizar entornos, bibliotecas y frameworks modernos que incorporen de forma nativa mecanismos de protección contra XSS.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bloque 02: Medidas Generales (Estilo Checklist Tecnológico) */}
      <div className="bg-[#080d1a] p-5 rounded-xl border border-cyan-950/40 shadow-[inset_0_0_15px_rgba(6,182,212,0.02)]">
        <h3 className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold flex items-center gap-2 mb-4">
          <CheckSquare className="w-4 h-4" />
          <span>02 / Directrices y Medidas Generales de Seguridad</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 font-mono">
          <div className="flex items-center gap-3 p-2 bg-[#040711] rounded border border-slate-900 hover:border-cyan-500/20 transition-colors duration-200">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Mantener actualizados el S.O., frameworks y dependencias.</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-[#040711] rounded border border-slate-900 hover:border-cyan-500/20 transition-colors duration-200">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Revisiones periódicas de código seguro y auditorías.</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-[#040711] rounded border border-slate-900 hover:border-cyan-500/20 transition-colors duration-200">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Implementar un Web Application Firewall (WAF).</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-[#040711] rounded border border-slate-900 hover:border-cyan-500/20 transition-colors duration-200">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Centralizar logs y generar alertas inmediatas.</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-[#040711] rounded border border-slate-900 hover:border-cyan-500/20 transition-colors duration-200 md:col-span-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Capacitar al equipo en desarrollo seguro bajo el marco OWASP Top 10.</span>
          </div>
        </div>
      </div>

      {/* Pie de la tarjeta */}
      <div className="mt-6 pt-4 border-t border-cyan-950 flex items-center justify-between text-xs font-mono text-cyan-400/40">
        <span>SECURITY_FRAMEWORK: OWASP_TOP_10</span>
        <span>DEFENSE_IN_DEPTH</span>
      </div>

    </div>
  );
}