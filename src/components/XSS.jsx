import React from 'react';
import { Code2, Terminal, ShieldAlert, CheckCircle, BarChart3 } from 'lucide-react';

export default function XSS() {
  return (
    <div className="w-full max-w-4xl bg-[#0d1527]/80 backdrop-blur-md rounded-2xl border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15),inset_0_0_15px_rgba(6,182,212,0.1)] p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.3),inset_0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400 font-sans text-slate-100">
      
      {/* Detalle decorativo superior (Línea de energía de fondo) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />

      {/* Encabezado de la Tarjeta con Icono */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-cyan-950 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-950/50 rounded-xl border border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <Code2 className="w-6 h-6 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              Cross-Site Scripting (XSS)
            </h2>
            <p className="text-xs text-cyan-400/60 font-mono mt-0.5">VULNERABILITY_REPORT // CLIENT_SIDE_SECURITY</p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto bg-amber-950/30 px-3 py-1.5 rounded-full border border-amber-500/30 text-xs font-mono text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.1)]">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span>MEDIUM // CVSS: 5.4</span>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
        
        {/* Descripción de la vulnerabilidad */}
        <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/30 transition-colors duration-300">
          <div className="flex items-center gap-2 mb-3 text-cyan-400 font-mono text-xs tracking-wider uppercase font-semibold">
            <Terminal className="w-4 h-4" />
            <span>01 / Análisis del XSS Reflejado</span>
          </div>
          <p className="mb-4">
            El XSS reflejado es cuando una aplicación web devuelve ("refleja") la entrada de un usuario. Esto puede ocurrir mediante formularios HTML, resultados de búsqueda, mensajes de error o cualquier otro tipo de respuesta que incluya la entrada del usuario. Cuando estos no se encuentran sanitizados el navegador lo interpretará como código, permitiendo a un atacante lograr la ejecución de scripts maliciosos, generalmente escritos en JavaScript.
          </p>
          <p className="mb-4">
            Un ejemplo clásico ocurre en los motores de búsqueda, donde el valor introducido queda reflejado en la URL como un parámetro (ej: <code className="text-cyan-300 font-mono bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-800/30">?name=script_malicioso</code>). Al no tratarse de forma segura, el código JavaScript incluido es ejecutado por el navegador, permitiendo alterar el contenido de la página o realizar acciones no autorizadas.
          </p>
          <p>
            Los atacantes comúnmente utilizan técnicas de phishing (como correos electrónicos o mensajes de chat) para distribuir estas URLs camufladas. Una vez que la víctima hace clic en el enlace, su propio navegador ejecuta el script dentro del contexto de la sesión activa.
          </p>
        </div>

        {/* Tabla Métrica CVSS v3.1 */}
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
                  <td className="p-3 text-slate-400">Ocurre mediante el navegador, usualmente vía URLs enviadas por emails o chats.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Complejidad (AC)</td>
                  <td className="p-3 text-cyan-400 font-mono">Baja (L)</td>
                  <td className="p-3 text-slate-400">Solo requiere un manejo de entrada inseguro para redactar el código malicioso.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Privilegios (PR)</td>
                  <td className="p-3 text-cyan-400 font-mono">Ninguno (N)</td>
                  <td className="p-3 text-slate-400">No se requiere cuenta previa; cualquiera que acceda al enlace puede ser víctima.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Interacción Usuario (UI)</td>
                  <td className="p-3 text-amber-400 font-mono">Requerida (R)</td>
                  <td className="p-3 text-slate-400">El usuario debe interactuar con la URL maliciosa para que el script se ejecute.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Alcance (S)</td>
                  <td className="p-3 text-slate-400 font-mono">Sin cambios (U)</td>
                  <td className="p-3 text-slate-400">El código ejecutado solo afecta al navegador local de la víctima.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Confidencialidad (C)</td>
                  <td className="p-3 text-amber-400 font-mono">Baja (L)</td>
                  <td className="p-3 text-slate-400">Acceso limitado a tokens, identificadores de sesión o lo que el usuario ve.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Integridad (I)</td>
                  <td className="p-3 text-amber-400 font-mono">Baja (L)</td>
                  <td className="p-3 text-slate-400">Cambios limitados al perfil de usuario basados en los permisos de la víctima.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Disponibilidad (A)</td>
                  <td className="p-3 text-slate-500 font-mono">Ninguna (N)</td>
                  <td className="p-3 text-slate-400">No afecta el sistema global; la aplicación continúa operando con normalidad.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Prevención y Mitigación */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Columna Prevención */}
          <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/30 transition-colors duration-300 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase font-semibold">
              <CheckCircle className="w-4 h-4" />
              <span>03 / Prácticas de Prevención</span>
            </div>
            <p className="text-sm">
              Adoptar el desarrollo seguro mediante la <strong className="text-cyan-400">validación y sanitización</strong> estricta de las entradas. Es crucial aplicar una codificación adecuada de la salida según el contexto de visualización en el HTML.
            </p>
          </div>

          {/* Columna Mitigación */}
          <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/30 transition-colors duration-300 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase font-semibold">
              <ShieldAlert className="w-4 h-4" />
              <span>04 / Controles de Mitigación</span>
            </div>
            <p className="text-sm">
              Implementar una <strong className="text-cyan-400">Política de Seguridad de Contenidos (CSP)</strong> robusta para restringir la ejecución de scripts no autorizados, y filtrar dinámicamente los datos en los puntos vulnerables.
            </p>
          </div>
        </div>

      </div>

      {/* Pie de la tarjeta */}
      <div className="mt-6 pt-4 border-t border-cyan-950 flex items-center justify-between text-xs font-mono text-cyan-400/40">
        <span>VULN_TYPE: OWASP_A03:2021</span>
        <span>CLIENT_SIDE_PROTECTION</span>
      </div>

    </div>
  );
}