Durante la revisión del portal de clientes de **EnergíaViva** se identificaron vulnerabilidades relacionadas con inyección de comandos, inyección SQL y ataques XSS. Para reducir el riesgo de ataques, se recomienda implementar las siguientes políticas y controles:

# Prevención y mitigación

- **Inyección de comandos**
  - Validar estrictamente todas las entradas del usuario mediante *listas blancas*.
  - Evitar la ejecución de comandos del sistema con datos proporcionados por el usuario. Cuando sea indispensable, utilizar APIs o bibliotecas específicas en lugar de invocar la terminal.
  - Ejecutar los servicios con el principio de mínimo privilegio y restringir el acceso a comandos críticos.
  - Registrar y monitorear intentos de ejecución anómalos.

- **Inyección SQL**
  - Utilizar consultas parametrizadas o procedimientos almacenados seguros.
  - Validar y sanitizar los datos de entrada antes de procesarlos.
  - Restringir los privilegios de las cuentas de base de datos al mínimo necesario.
  - Implementar monitoreo y registros de consultas sospechosas para facilitar la detección temprana.

- **Cross-Site Scripting (XSS)**

  - Validar y codificar (output encoding) toda la información que se presenta al usuario.
  - Aplicar políticas de seguridad como **Content Security Policy (CSP)** para limitar la ejecución de scripts.
  - Utilizar bibliotecas y frameworks que incorporen mecanismos de protección contra XSS.

# Medidas generales

Como complemento a las medidas anteriores, se recomienda:

* Mantener actualizados el sistema operativo, frameworks y dependencias.
* Implementar revisiones periódicas de código y pruebas de seguridad.
* Incorporar un **Web Application Firewall (WAF)** para detectar y bloquear patrones de ataque conocidos.
* Centralizar registros de eventos y establecer alertas para actividades sospechosas.
* Capacitar periódicamente al equipo de desarrollo en prácticas de programación segura y en las recomendaciones de **OWASP Top 10**.
