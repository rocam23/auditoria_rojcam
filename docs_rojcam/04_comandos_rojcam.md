![Comando](img_rojcam/comandos_rojcam.png)

# Descripción

La inyección de comandos es una vulnerabilidad donde una aplicación utiliza datos proporcionados por el usuario para construir y ejecutar comandos del sistema operativo sin una validación adecuada. De presentarse esta vulnerabilidad, un atacante puede insertar caracteres especiales o comandos adicionales que el intérprete de comandos ejecutará junto con el comando legítimo. Esto puede permitir la lectura o modificación de archivos, la ejecución de programas no autorizados o incluso el compromiso total del servidor, dependiendo de los permisos con los que se ejecute la aplicación.

Como se observa en la captura, aceptar datos del usuario sin aplicar medidas de validación o filtrado permite realizar ataques de inyección de comandos. Al introducir `127.0.0.1; cat /etc/passwd` en el campo de entrada, la aplicación ejecuta el comando ping sobre la dirección IP indicada y, a continuación, ejecuta `cat /etc/passwd`, mostrando el contenido de ese archivo del sistema, el cual contiene información sobre las cuentas de usuario. En este caso, el carácter `;` actúa como un separador de comandos, permitiendo que ambos se ejecuten de forma consecutiva. Además, la aplicación no valida correctamente que la entrada sea únicamente una dirección IP, por lo que acepta caracteres especiales y comandos adicionales, lo que hace posible explotar esta vulnerabilidad.

# CVSS

Usando la calculadora versión 3.1 de CVSS (Sistema de Puntuación de Vulnerabilidades Comunes). La vulnerabilidad XSS ve la siguiente calificación:

- Vector de ataque (AV): Red (N)
  - Se explota a través de una aplicación web accesible por red.

- Complejidad del ataque (AC): Baja (L)
  - No requiere condiciones especiales ni una secuencia compleja de acciones.

- Privilegios requeridos (PR): Ninguno (N)
  - El atacante no necesita una cuenta o permisos existente en la aplicación.

- Interacción de usuario (UI): Ninguna (N)
  - El atacante puede enviar directamente la entrada maliciosa.

- Alcance (S): Sin cambios (U)
  - El impacto permanece dentro del sistema vulnerable.

- Confidencialidad (C): Alta (H)
  - Permite acceder a información almacenada en la base de datos.

- Integridad (I): Alta (H)
  - Potencialmente permite modificar o eliminar datos.  

- Disponibilidad (A): Alta (N)
  - Puede enviar comandos que interrumpan el sistema o borren archivos.

Puntuación final: 9.8

# Prevención

Para prevenir vulnerabilidades de inyección de comandos, es fundamental no ejecutar comandos del sistema utilizando datos proporcionados directamente por el usuario. Toda entrada debe validarse y restringirse a los formatos esperados, por ejemplo comprobando que el valor introducido corresponda únicamente a una dirección IP válida. Además, cuando sea posible, se deben utilizar funciones o bibliotecas que eviten la invocación del intérprete de comandos del sistema. Como medida adicional, la aplicación debe ejecutarse con los mínimos privilegios necesarios, reduciendo el impacto en caso de que un atacante consiga explotar la vulnerabilidad.

# Controles de Mitigación

Se recomienda la ejecución de la aplicación con el principio de mínimos privilegios, limitando los permisos del usuario que ejecuta el servidor web. La implementación de mecanismos de registro y monitorización para detectar intentos de explotación y el uso de herramientas de seguridad, como sistemas de detección o prevención de intrusiones (IDS/IPS) y cortafuegos de aplicaciones web (WAF), capaces de identificar y bloquear patrones de inyección de comandos. Asimismo, mantener el sistema operativo y las aplicaciones actualizadas contribuye a reducir el riesgo de explotación de vulnerabilidades conocidas.