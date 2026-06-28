import React from 'react';
import { TerminalSquare, Terminal, ShieldAlert, CheckCircle, BarChart3 } from 'lucide-react';

export default function Comandos() {
  return (
    <div className="w-full max-w-4xl bg-[#0d1527]/80 backdrop-blur-md rounded-2xl border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15),inset_0_0_15px_rgba(6,182,212,0.1)] p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.3),inset_0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400 font-sans text-slate-100">
      
      {/* Detalle decorativo superior (Línea de energía de fondo) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />

      {/* Encabezado de la Tarjeta con Icono */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-cyan-950 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-950/50 rounded-xl border border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <TerminalSquare className="w-6 h-6 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              Inyección de Comandos
            </h2>
            <p className="text-xs text-cyan-400/60 font-mono mt-0.5">VULNERABILITY_REPORT // OS_COMMAND_INJECTION</p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto bg-red-950/30 px-3 py-1.5 rounded-full border border-red-500/30 text-xs font-mono text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.1)]">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>CRITICAL // CVSS: 9.8</span>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
        
        {/* Descripción de la vulnerabilidad */}
        <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/30 transition-colors duration-300">
          <div className="flex items-center gap-2 mb-3 text-cyan-400 font-mono text-xs tracking-wider uppercase font-semibold">
            <Terminal className="w-4 h-4" />
            <span>01 / Mecanismo del Ataque al Sistema</span>
          </div>
          <p className="mb-4">
            La inyección de comandos es una vulnerabilidad donde una aplicación utiliza datos proporcionados por el usuario para construir y ejecutar comandos del sistema operativo sin una validación adecuada. De presentarse esta vulnerabilidad, un atacante puede insertar caracteres especiales o comandos adicionales que el intérprete de comandos ejecutará junto con el comando legítimo. Esto puede permitir la lectura o modificación de archivos, la ejecución de programas no autorizados o incluso el compromiso total del servidor, dependiendo de los privilegios con los que se ejecute la aplicación.
          </p>
          <p className="mb-4">
            Al introducir la cadena <code className="text-cyan-300 font-mono bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-800/30">127.0.0.1; cat /etc/passwd</code> en un campo destinado a realizar un *ping*, el carácter <code className="text-cyan-400 font-mono">;</code> actúa como un separador de comandos. Como consecuencia, la aplicación ejecuta de manera consecutiva tanto la instrucción interna como el comando inyectado, exponiendo las cuentas de usuario del sistema operativo:
          </p>

          {/* Bloque de Consola / Terminal Unix simulada */}
          <div className="font-mono text-xs sm:text-sm my-4 bg-[#040711] rounded-lg p-3 border border-red-950/40 shadow-[inset_0_0_10px_rgba(239,68,68,0.05)]">
            <span className="text-slate-500 block text-[10px] uppercase mb-1">// Ejecución en el Servidor (Intérprete de Comandos):</span>
            <span className="text-slate-400">$ ping -c 1 </span><span className="text-cyan-400">127.0.0.1</span><span className="text-red-400">;</span> <span className="text-blue-400">cat</span> <span className="text-amber-400">/etc/passwd</span>
            <span className="block text-slate-500 mt-2 text-[11px] leading-tight">
              64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.03 ms<br />
              root:x:0:0:root:/root:/bin/bash<br />
              daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
            </span>
          </div>

          <p>
            La causa raíz radica en que la aplicación no valida correctamente que la entrada sea única y exclusivamente una dirección IP válida, aceptando indiscriminadamente caracteres especiales que modifican la lógica de ejecución en el servidor web.
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
                  <td className="p-3 text-slate-400">Se explota a través de una aplicación web accesible por red.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Complejidad (AC)</td>
                  <td className="p-3 text-cyan-400 font-mono">Baja (L)</td>
                  <td className="p-3 text-slate-400">No requiere condiciones especiales ni una secuencia compleja de acciones.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Privilegios (PR)</td>
                  <td className="p-3 text-cyan-400 font-mono">Ninguno (N)</td>
                  <td className="p-3 text-slate-400">El atacante no necesita una cuenta o permisos existentes en la aplicación.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Interacción Usuario (UI)</td>
                  <td className="p-3 text-cyan-400 font-mono">Ninguna (N)</td>
                  <td className="p-3 text-slate-400">El atacante puede enviar directamente la entrada maliciosa al backend.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Alcance (S)</td>
                  <td className="p-3 text-slate-400 font-mono">Sin cambios (U)</td>
                  <td className="p-3 text-slate-400">El impacto directo permanece dentro del sistema afectado.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Confidencialidad (C)</td>
                  <td className="p-3 text-red-400 font-mono">Alta (H)</td>
                  <td className="p-3 text-slate-400">Permite acceder a archivos críticos del sistema operativo o bases de datos.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Integridad (I)</td>
                  <td className="p-3 text-red-400 font-mono">Alta (H)</td>
                  <td className="p-3 text-slate-400">Potencialmente permite modificar configuraciones, alterar o borrar archivos.</td>
                </tr>
                <tr className="hover:bg-cyan-950/10">
                  <td className="p-3 font-medium text-slate-200">Disponibilidad (A)</td>
                  <td className="p-3 text-red-400 font-mono">Alta (H)</td>
                  <td className="p-3 text-slate-400">Puede enviar comandos destructivos que interrumpan el sistema o destruyan datos.</td>
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
              <span>03 / Métodos de Prevención</span>
            </div>
            <p className="text-sm">
              Es fundamental evitar la construcción de comandos del sistema utilizando datos crudos del usuario. Restrinja las entradas a formatos específicos (como regex de IPs válidas) y use API incorporadas en lenguajes de programación que eviten invocar directamente el intérprete de comandos de la shell.
            </p>
          </div>

          {/* Columna Mitigación */}
          <div className="bg-[#080d1a] p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/30 transition-colors duration-300 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase font-semibold">
              <ShieldAlert className="w-4 h-4" />
              <span>04 / Controles de Mitigación</span>
            </div>
            <p className="text-sm">
              Aplique de manera rígida el principio de <strong className="text-cyan-400">mínimos privilegios</strong> al usuario que levanta el proceso del servidor web. Complemente con sistemas IDS/IPS, reglas en el WAF para interceptar secuencias de concatenación y mantenga actualizados los parches del sistema operativo.
            </p>
          </div>
        </div>

      </div>

      {/* Pie de la tarjeta */}
      <div className="mt-6 pt-4 border-t border-cyan-950 flex items-center justify-between text-xs font-mono text-cyan-400/40">
        <span>VULN_TYPE: OWASP_A03:CWE-78</span>
        <span>OS_LEVEL_PROTECTION</span>
      </div>

    </div>
  );
}