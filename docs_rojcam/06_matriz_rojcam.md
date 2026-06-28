Matriz de calor elaborada siguiendo la metodología **Probabilidad × Impacto**. Esta permite permite clasificar y priorizar las vulnerabilidades identificadas, siguiendo la evaluación de seguridad del portal de clientes de EnergíaViva. Esta matriz considera la probabilidad de explotación de cada vulnerabilidad y el impacto potencial que tendría sobre los pilares de la Tríada CID y sistemas afectados. De esta forma, es posible establecer un orden de prioridad para la implementación de medidas de mitigación y remediación.

| Probabilidad \ Impacto | Bajo |    Medio   | Alto |                 Crítico                 |
| ---------------------- | :--: | :--------: | :--: | :-------------------------------------: |
| **Alta**               |  🟨  |     🟧     |  🟥  | **🟥 Inyección SQL**<br>**🟥 Inyección de comandos** |
| **Media**              |  🟩  | **🟨 XSS reflejado** |  🟧  |                    🟥                   |
| **Baja**               |  🟩  |     🟩     |  🟨  |                    🟧                   |
| **Mínima**             |  🟩  |     🟩     |  🟩  |                    🟨                   |

# Justificaciones

## Inyección de comandos (CVSS 9.8)

**Probabilidad: Alta**

La inyección de comandos presenta una probabilidad alta porque, si la aplicación no valida o sanitiza adecuadamente las entradas del usuario, un atacante puede introducir comandos que el sistema operativo ejecutará directamente. Este tipo de vulnerabilidad suele ser relativamente sencillo de explotar cuando existe un punto de entrada vulnerable y, en muchos casos, puede realizarse de forma remota sin necesidad de autenticación o con privilegios mínimos, dependiendo de la implementación del portal.

**Impacto: Crítico**

El impacto es crítico debido a que la explotación exitosa puede otorgar al atacante la capacidad de ejecutar comandos arbitrarios en el servidor. Esto podría permitir el acceso a información sensible, la modificación o eliminación de archivos, la instalación de software malicioso, la creación de cuentas con privilegios elevados o incluso la toma de control completa del servidor. Además, compromete simultáneamente la confidencialidad, integridad y disponibilidad de los sistemas afectados, lo que justifica su clasificación como un riesgo crítico.

## Inyección de SQL (CVSS 9.1)

**Probabilidad: Alta**

La probabilidad se considera alta porque la inyección SQL es una de las vulnerabilidades más comunes en aplicaciones web que interactúan con bases de datos. Si las consultas SQL se construyen utilizando entradas del usuario sin mecanismos adecuados de validación o consultas parametrizadas, un atacante puede manipular dichas consultas con relativa facilidad.

**Impacto: Crítico**

El impacto es crítico debido a que la explotación puede permitir acceder, modificar o eliminar información almacenada en la base de datos del portal de clientes. Dependiendo de los privilegios de la cuenta utilizada por la aplicación, el atacante podría obtener datos personales, credenciales, información de consumo eléctrico u otros datos sensibles. En escenarios más graves, también podría alterar registros, afectar la continuidad del servicio o utilizar la base de datos como punto de partida para comprometer otros sistemas relacionados.

## XSS Reflejado (CVSS 5.4)

**Probabilidad: Media**

La probabilidad se clasifica como media porque, aunque la vulnerabilidad puede ser explotada si la aplicación refleja datos proporcionados por el usuario sin codificarlos correctamente, generalmente requiere que la víctima interactúe con un enlace o solicitud especialmente diseñada por el atacante. Esto implica un componente de ingeniería social que reduce la facilidad de explotación en comparación con una inyección SQL o una inyección de comandos.

**Impacto: Medio**

El impacto se considera medio porque normalmente afecta a usuarios individuales y no compromete directamente el servidor o la base de datos. Un atacante podría ejecutar código JavaScript en el navegador de la víctima para robar cookies de sesión, redirigir al usuario a sitios fraudulentos, modificar el contenido visual de la página o capturar información introducida por el usuario. Aunque estas acciones pueden afectar la confidencialidad y la integridad de la sesión del usuario, su alcance suele ser más limitado que el de las vulnerabilidades clasificadas como críticas.