import React from 'react';
import { Database, Terminal, ShieldAlert, CheckCircle, BarChart3 } from 'lucide-react';

export default function InyeccionSQL() {
  return (
    <div className="w-full max-w-4xl bg-[#0d1527]/80 backdrop-blur-md rounded-2xl border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15),inset_0_0_15px_rgba(6,182,212,0.1)] p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.3),inset_0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400 font-sans text-slate-100">
      
      {/* Detalle decorativo superior (Línea de energía de fondo) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />

      {/* Encabezado de la Tarjeta con Icono */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-cyan-950 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-950/50 rounded-xl border border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <Database className="w-6 h-6 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              Inyección de SQL (SQLi)
            </h2>
            <p className="text-xs text-cyan-400/60 font-mono mt-0.5">VULNERABILITY_REPORT // DATABASE_SECURITY</p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto bg-red-950/30 px-3 py-1.5 rounded-full border border-red-500/30 text-xs font-mono text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.1)]">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>CRITICAL // CVSS: 9.1</span>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
        
        {/* Descripción e Inyección de Código */}
        <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/30 transition-colors duration-300">
          <div className="flex items-center gap-2 mb-3 text-cyan-400 font-mono text-xs tracking-wider uppercase font-semibold">
            <Terminal className="w-4 h-4" />
            <span>01 / Mecanismo de Explotación</span>
          </div>
          <p className="mb-4">
            La inyección de SQL es un tipo de ataque en donde consultas de SQL maliciosas a través de entrada de usuario son enviadas para su ejecución, ejemplos suelen ser mediante un elemento input de HTML. Este tipo de ataques explotan vulnerabilidades en la aplicación como lo es el manejo de entrada del usuario.
          </p>
          <p className="mb-4">
            Al escribir la cadena maliciosa <code className="text-cyan-300 font-mono bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-800/30">' OR '1'='1</code> en el campo de entrada, la estructura original cambia drásticamente:
          </p>

          {/* Bloques de Código Estilo Terminal */}
          <div className="space-y-3 font-mono text-xs sm:text-sm my-4">
            <div className="bg-[#040711] rounded-lg p-3 border border-slate-900">
              <span className="text-slate-500 block text-[10px] uppercase mb-1">// Consulta Estructurada Original:</span>
              <span className="text-blue-400">SELECT</span> <span className="text-slate-300">*</span> <span className="text-blue-400">FROM</span> <span className="text-slate-300">users</span> <span className="text-blue-400">WHERE</span> <span className="text-slate-300">id =</span> <span className="text-amber-400">'$id'</span><span className="text-slate-300">;</span>
            </div>
            <div className="bg-[#040711] rounded-lg p-3 border border-red-950/40 shadow-[inset_0_0_10px_rgba(239,68,68,0.05)]">
              <span className="text-red-400/60 block text-[10px] uppercase mb-1">// Consulta Alterada Resultante:</span>
              <span className="text-blue-400">SELECT</span> <span className="text-slate-300">*</span> <span className="text-blue-400">FROM</span> <span className="text-slate-300">users</span> <span className="text-blue-400">WHERE</span> <span className="text-slate-300">user_id =</span> <span className="text-amber-400">''</span> <span className="text-red-400">OR</span> <span className="text-amber-400">'1'</span><span className="text-red-400">=</span><span className="text-amber-400">'1'</span><span className="text-slate-300">;</span>
            </div>
          </div>

          <p className="mb-4">
            La expresión <code className="text-cyan-300 font-mono bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-800/30">'1'='1</code> siempre evalúa como verdadera. Debido al operador lógico <code className="text-cyan-400 font-mono">OR</code> la condición completa de la cláusula <code className="text-blue-400 font-mono">WHERE</code> también resulta verdadera para todos los registros de la tabla. Como consecuencia la aplicación devuelve toda la información almacenada en lugar de mostrar únicamente el usuario solicitado.
          </p>
          <p>
            Una vez identificada, un atacante podría acceder a información sensible, evadir mecanismos de autenticación, modificar registros, eliminar datos o, dependiendo de los privilegios disponibles y de las medidas de seguridad, comprometer parcial o totalmente la base de datos.
          </p>
        </div>

        {/* Tabla Métrica CVSS 3.1 */}
        <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/30 transition-colors duration-300 overflow-hidden">
          <div className="flex items-center gap-2 mb-4 text-cyan-400 font-mono text-xs tracking-wider uppercase font-semibold">
            <BarChart3 className="w-4 h-4" />
            <span>02 / Calificación CVSS v3.1</span>
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-900">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-950 text-cyan-400 font-mono border-b border-cyan-950">
                  <th className="p-3 font-semibold">Métrica</th>
                  <th className="p-3 font-semibold">Valor</th>
                  <th className="p-3 font-semibold">Impacto / Descripción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900/60 font-sans">
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Vector de ataque (AV)</td>
                  <td className="p-3 text-cyan-400 font-mono">Red (N)</td>
                  <td className="p-3 text-slate-400">Se explota a través de una aplicación web accesible por red.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Complejidad (AC)</td>
                  <td className="p-3 text-cyan-400 font-mono">Baja (L)</td>
                  <td className="p-3 text-slate-400">No requiere condiciones especiales ni acciones complejas.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Privilegios (PR)</td>
                  <td className="p-3 text-cyan-400 font-mono">Ninguno (N)</td>
                  <td className="p-3 text-slate-400">El atacante no necesita una cuenta o permisos existentes.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Interacción Usuario (UI)</td>
                  <td className="p-3 text-cyan-400 font-mono">Ninguna (N)</td>
                  <td className="p-3 text-slate-400">El atacante puede enviar directamente la entrada maliciosa.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Alcance (S)</td>
                  <td className="p-3 text-cyan-400 font-mono">Sin cambios (U)</td>
                  <td className="p-3 text-slate-400">El impacto permanece dentro del sistema vulnerable.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Confidencialidad (C)</td>
                  <td className="p-3 text-red-400 font-mono">Alta (H)</td>
                  <td className="p-3 text-slate-400">Permite acceder a información almacenada en la base de datos.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Integridad (I)</td>
                  <td className="p-3 text-red-400 font-mono">Alta (H)</td>
                  <td className="p-3 text-slate-400">Potencialmente permite modificar o eliminar datos.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Disponibilidad (A)</td>
                  <td className="p-3 text-slate-400 font-mono">Ninguna (N)</td>
                  <td className="p-3 text-slate-400">Variable según la consulta. Si se afecta, la puntuación final puede subir a 9.4 o 9.8.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Prevención y Mitigación en 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Columna Prevención */}
          <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/30 transition-colors duration-300 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase font-semibold">
              <CheckCircle className="w-4 h-4" />
              <span>03 / Prevención Principal</span>
            </div>
            <p className="text-sm">
              La principal medida es el uso de <strong className="text-cyan-400">consultas parametrizadas</strong>, separando los datos del usuario de la lógica SQL. Adicionalmente se recomienda la validación estricta de entradas y revisiones periódicas de código seguro.
            </p>
          </div>

          {/* Columna Mitigación */}
          <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/30 transition-colors duration-300 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase font-semibold">
              <ShieldAlert className="w-4 h-4" />
              <span>04 / Controles de Mitigación</span>
            </div>
            <p className="text-sm">
              Implementar el principio de <strong className="text-cyan-400">mínimo privilegio</strong> en base de datos. Complementar con firewalls de aplicaciones web (WAF), registros de auditoría (monitoreo) y análisis continuo de vulnerabilidades.
            </p>
          </div>
        </div>

      </div>

      {/* Pie de la tarjeta */}
      <div className="mt-6 pt-4 border-t border-cyan-950 flex items-center justify-between text-xs font-mono text-cyan-400/40">
        <span>VULN_TYPE: OWASP_A03</span>
        <span>SECURE_CODE_REVIEW</span>
      </div>

    </div>
  );
}