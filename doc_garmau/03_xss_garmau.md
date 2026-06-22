Cross-Site Scripting (XSS Reflejado)

Evidencia del Ataque

Nota: Se omite captura visual.

Parámetro vulnerable: Campo de nombre / Búsqueda.

Payload utilizado: <script>alert('XSS en AFP Horizonte')</script>

¿Qué es y cómo funciona (Explicación Técnica)?

Cross-Site Scripting (XSS) ocurre cuando una aplicación incluye datos no confiables en una página web sin la debida validación o codificación. En su variante "Reflejada" (DVWA Low), el servidor recibe el input del usuario (el payload con etiquetas <script>) como parte de una petición (ej. en un parámetro de URL) y lo "refleja" o devuelve inmediatamente dentro del código HTML de la respuesta.

Como el texto no está codificado de forma segura antes de ser insertado en el HTML (Output Encoding), el navegador de la víctima interpreta el payload como código legítimo de la página y ejecuta el script malicioso.

Peligro para AFP Horizonte (Impacto y Datos Expuestos)

Aunque el script se ejecuta en el navegador del usuario y no directamente en el servidor, el riesgo es alto porque el atacante opera dentro de la sesión de confianza del afiliado en la "Sucursal Virtual".

¿Qué datos pueden robar?

El script malicioso puede acceder a cualquier información disponible para el navegador en el contexto del dominio de la AFP:

Cookies de Sesión: Permiten el secuestro de la sesión activa del usuario.

Información en Pantalla: Datos sensibles que se estén mostrando actualmente al usuario (saldos, cartolas, datos personales).

Almacenamiento Local/Sesión (LocalStorage/SessionStorage): Si la aplicación guarda tokens u otros datos sensibles en el almacenamiento del navegador, el script puede leerlos y exfiltrarlos.

Captura de Teclas (Keylogging): Registrar lo que el usuario escribe, como contraseñas o respuestas a preguntas de seguridad, si se le redirige a formularios falsos dentro del mismo sitio.

Con estos datos, un atacante puede suplantar completamente al afiliado, realizar transacciones no autorizadas (ej. retiros, cambios de cuenta bancaria) y acceder a su historial laboral y previsional.

Qué hacer en caso de ataque (Respuesta a Incidentes)

Si se confirma un ataque de XSS activo (ej. campaña de phishing detectada):

Identificar y Corregir: Localizar el punto de entrada y reflejo del script en la aplicación y aplicar la codificación de salida necesaria (ver "Cómo evitarlo").

Invalidar Sesiones: De manera preventiva, forzar el cierre de sesión de los usuarios que pudieron haber sido afectados durante el periodo del ataque para invalidar cualquier cookie de sesión robada.

Analizar Logs de Acceso: Revisar los logs del servidor web en busca de peticiones inusuales que coincidan con los patrones del ataque XSS reflejado o accesos sospechosos a cuentas de usuarios tras el incidente.

Comunicación (Opcional): Dependiendo del alcance, alertar a los afiliados sobre posibles correos o enlaces sospechosos y recomendar el cambio de contraseñas.

Puntaje y Severidad CVSS

Puntaje Base CVSS 3.1: 6.1

Severidad: MEDIA

Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N

Medidas de Defensa

Cómo evitarlo (Prevención)

Codificación de Salida Dependiente del Contexto (Context-Aware Output Encoding): Es la defensa más importante. Antes de renderizar cualquier dato no confiable en el navegador, este debe ser codificado según dónde se colocará (HTML body, atributo HTML, JavaScript, CSS). Por ejemplo, los caracteres peligrosos como < y > se convierten en sus entidades HTML seguras (&lt; y &gt;), evitando que el navegador los interprete como código.

Validación y Sanitización de Entrada: Validar que los datos de entrada cumplan con el formato esperado. Si se permite HTML limitado, utilizar una librería de sanitización robusta para eliminar etiquetas y atributos peligrosos (como <script>, onerror, onload).

Mitigación

Política de Seguridad de Contenido (CSP - Content Security Policy): Implementar una cabecera HTTP Content-Security-Policy estricta. Esto instruye al navegador sobre qué fuentes de contenido (scripts, estilos, imágenes) son confiables, bloqueando la ejecución de scripts en línea y scripts cargados desde dominios no autorizados, lo que neutraliza la mayoría de los ataques XSS incluso si la aplicación es vulnerable.

Cookies Seguras: Utilizar las banderas HttpOnly (impide que JavaScript acceda a la cookie) y Secure (solo se envía sobre HTTPS) para las cookies de sesión.

Fuentes:

OWASP Foundation. (2021). Cross Site Scripting (XSS).

PortSwigger. (s.f.). Cross-site scripting. Web Security Academy.