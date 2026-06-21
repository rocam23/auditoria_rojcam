# Inyección de SQL

![SQLi](img_rojcam/sqli_rojcam.png)

# Descripción
La inyección de SQL es un tipo de ataque en donde consultas de SQL maliciosas a través de entrada de usuario son enviados para su ejecución, ejemplos suelen ser mediante un elemento input de HTML. Este tipo de ataques explotan vulnerabilidades en la aplicación como lo es el manejo de entrada del usuario.

En la captura adjunta, la inyección ocurre al escribir lo siguiente en el campo de entrada User ID: `'  OR  '1'='1`. Una consulta para buscar usuarios como la presente podría tener una estructura como:

`SELECT * FROM users WHERE id = '$id';`

Donde `$id` es lo que ingresó el usuario. Al introducir la cadena maliciosa, la consulta resultante puede convertirse en:

`SELECT * FROM users WHERE user_id = '' OR '1'='1';`

La expresión `'1'='1'` siempre evalúa como verdadera. Debido al operador lógico `OR` la condición completa de la cláusula `WHERE` también resulta verdadera para todos los registros de la tabla. Como consecuencia la aplicación devuelve toda la información almacenada en lugar de mostrar únicamente el usuario solicitado.

Una vez la vulnerabilidad SQL es identificada, un atacante podría acceder a información sensible, evadir mecanismos de autenticación, modificar registros, eliminar datos o, dependiendo de los privilegios disponibles y de las medidas de seguridad implementadas, comprometer parcial o totalmente la base de datos.

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

- Disponibilidad (A): Ninguna (N)
  - Puede ser de baja a alta dependiendo de la consulta insertada. De verse afectada la disponibilidad e incrementar esta métrica, la puntuación final puede ser 9.4 o 9.8

Puntuación final: 9.1

# Prevención

La principal medida de prevención contra ataques de inyección SQL es el uso de **consultas parametrizadas**, las cuales separan los datos proporcionados por el usuario de la lógica de la consulta SQL. De esta manera, la entrada del usuario es tratada únicamente como datos y no como instrucciones ejecutables.

Adicionalmente, es recomendable implementar validación de entradas, permitiendo únicamente los formatos de datos esperados (por ejemplo, números enteros para campos de identificación), así como aplicar prácticas de desarrollo seguro y revisiones periódicas de código para identificar posibles vulnerabilidades antes de que la aplicación sea puesta en producción.

# Controles de Mitigación

En caso de que una vulnerabilidad de inyección SQL exista o sea explotada, diversos controles pueden reducir su impacto. Entre ellos se encuentra el principio de **mínimo privilegio**, donde las cuentas utilizadas por la aplicación tienen únicamente los permisos estrictamente necesarios sobre la base de datos, limitando así las acciones que un atacante podría realizar.

Otros controles incluyen la implementación de registros y monitoreo de actividad, el uso de sistemas de detección de intrusiones, la protección mediante firewalls de aplicaciones web (WAF) y la realización periódica de pruebas de seguridad y análisis de vulnerabilidades. Estas medidas ayudan a detectar comportamientos anómalos y a responder oportunamente ante intentos de explotación.