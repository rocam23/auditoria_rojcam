# Cross-Site Scripting (XSS)

![XSS](img_rojcam/xss_rojcam.png)

# Descripción 
El XSS reflejado es cuando una aplicación web devuelve ("refleja") la entrada de un usuario. Esto puede ocurrir mediante formularios HTML, resultado de búsqueda, mensajes de error o cualquier otro tipo de respuesta que incluya la entrada del usuario. Cuando estos no se encuentran sanitizados el navegador lo interpretará como código, permitiendo a un atacante lograr la ejecución de scripts maliciosos, generalmente escritos en JavaScript.

Un ejemplo clásico es al realizar una búsqueda en un sitio web. Usualmente, lo que el usuario escribió estará como parte de la URL una vez que se realiza la búsqueda. De no sanitizarse correctamente esta entrada, existe una vulnerabilidad de XSS. Atacantes pueden posteriormente afectar a usuarios mediante técnicas de phishing (ej: mensajes email) que incluyan la URL con el script camuflada. Una vez que un usuario haga clic, su navegador abrirá la página junto a la ejecución del script.

Como se ve en la captura adjunta. El valor introduci al campo de entrada luego de "What is your name?" queda como parte de la URL luego del parámetro `name`. La aplicación este valor en la respuesta mostrada después del mensaje "Hello". Dado que la entrada no es tratada de forma segura, el código JavaScript incluido en la URL es ejecutado por el navegador. Como resultado, el script modifica el contenido de la página, resultando en el texto de color azul.

# CVSS

Usando la calculadora versión 3.1 de CVSS (Sistema de Puntuación de Vulnerabilidades Comunes). La vulnerabilidad XSS ve la siguiente calificación:

- Vector de ataque (AV): Red (N)
  - El ataque ocurre mediante el navegador, generalmente una URL enviada a través de emails o mensajes de chat.

- Complejidad del ataque (AC): Baja (L)
  - El ataque solo requiere manejo de entrada inseguro para posteriormente redactar el código malicioso.

- Privilegios requeridos (PR): Ninguno (N)
  - El atacante no necesita una cuenta o permisos existente en la aplicación. Cualquiera que acceda a la URL puede ser víctima.

- Interacción de usuario (UI): Requerida (R)
  - Un usuario debe interactuar con la URL maliciosa. Sin interacción del usuario, el script jamás se ejecuta.

- Alcance (S): Sin cambios (U)
  - El código ejecutado solo afecta el navegador del usuario y no funcionamento mayor de la aplicación

- Confidencialidad (C): Baja (L)
  - El acceso del atacante a información sensible es limitada
    - Identificadores de sesión.
    - Información de perfil.
    - Tokens.
    - Información limitada a lo que el usuario ve dentro de la aplicación.

- Integridad (I): Baja (L)
  - El atacante puede realizar cambios limitados al perfil del usuario. El impacto está reducido a los permisos de la víctima.

- Disponibilidad (A): Ninguna (N)
  - La vulnerabilidad no afecta la disponibilidad del sistema, a diferencia de ataques tipo DDoS.
  - El sistema continúa funcionando de manera normal.

Puntuación final: 5.4

# Prevención

Se recomienda adoptar prácticas de desarrollo seguro que incluyan la validación y sanitización de todas las entradas de usuario, la codificación adecuada de la salida según el contexto de visualización y la implementación de controles de seguridad.

# Controles de Mitigación

Implementar mecanismos de filtrado y sanitización de datos en los puntos vulnerables, aplicar una Política de Seguridad de Contenidos (Content Security Policy - CSP) para limitar la ejecución de scripts no autorizados y realizar una revisión de las funcionalidades afectadas