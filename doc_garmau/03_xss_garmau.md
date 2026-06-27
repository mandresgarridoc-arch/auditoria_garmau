Cross-Site Scripting (XSS Reflejado)

Evidencia del Ataque

<<<<<<< HEAD
Nota: Se omite captura visual en este formato.
=======
Nota: Se omite captura visual.
>>>>>>> c6c2d7d55fbe5bfb91d95891bc3ea55d70f776ff

Parámetro vulnerable: Campo de nombre / Búsqueda (Input HTTP GET).

Payload utilizado: <script>alert('XSS en AFP Horizonte')</script>

¿Qué es y cómo funciona (Explicación Técnica)?

<<<<<<< HEAD
Cross-Site Scripting (XSS) ocurre cuando una aplicación incluye datos no confiables en una página web sin la debida validación o codificación. En su variante "Reflejada" (DVWA Low), el servidor recibe el input del usuario y lo devuelve inmediatamente dentro del código HTML de la respuesta.

Como el texto no está codificado de forma segura antes de ser insertado (Output Encoding), el navegador de la víctima confía en el contenido proveniente del sitio oficial y ejecuta el script malicioso en su propio equipo.

Peligro para AFP Horizonte (Impacto y Datos Expuestos)

Aunque el script se ejecuta en el navegador del usuario y no en el servidor, el riesgo es crítico porque el atacante opera dentro de la sesión de confianza del afiliado.

¿Qué datos pueden robar?

Cookies de Sesión: Permiten el secuestro total de la sesión (Session Hijacking).

Información en Pantalla: Lectura de datos renderizados en el DOM, como saldos, rentabilidades y cartolas históricas.

Captura de Teclas (Keylogging): Intercepción de nuevas contraseñas si el atacante manipula el DOM para mostrar formularios falsos de inicio de sesión dentro de la página real de la AFP.

Qué hacer en caso de ataque (Respuesta a Incidentes)

Identificar y Corregir: Localizar el punto de entrada (parámetro de URL vulnerable) e implementar inmediatamente una librería de codificación de salida HTML.

Invalidar Sesiones: Forzar el cierre de sesión de los usuarios sospechosos o de forma masiva para invalidar cualquier cookie de sesión que ya haya sido robada.

Analizar Logs: Buscar peticiones en el servidor que contengan el payload malicioso, identificando potenciales campañas de phishing activas contra los afiliados.
=======
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
>>>>>>> c6c2d7d55fbe5bfb91d95891bc3ea55d70f776ff

Puntaje y Severidad CVSS

Puntaje Base CVSS 3.1: 6.1

Severidad: MEDIA

Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N

Medidas de Defensa (Prevención y Mitigación)

<<<<<<< HEAD
Codificación de Salida (Output Encoding): Es la defensa primaria. Los caracteres especiales (<, >, &, ", ') deben convertirse en sus entidades HTML seguras (&lt;, &gt;, etc.) antes de mostrarse en pantalla.

Content Security Policy (CSP): Implementar cabeceras HTTP que limiten desde dónde se pueden cargar y ejecutar scripts (bloqueando scripts en línea inline-scripts).
=======
Cómo evitarlo (Prevención)

Codificación de Salida Dependiente del Contexto (Context-Aware Output Encoding): Es la defensa más importante. Antes de renderizar cualquier dato no confiable en el navegador, este debe ser codificado según dónde se colocará (HTML body, atributo HTML, JavaScript, CSS). Por ejemplo, los caracteres peligrosos como < y > se convierten en sus entidades HTML seguras (&lt; y &gt;), evitando que el navegador los interprete como código.

Validación y Sanitización de Entrada: Validar que los datos de entrada cumplan con el formato esperado. Si se permite HTML limitado, utilizar una librería de sanitización robusta para eliminar etiquetas y atributos peligrosos (como <script>, onerror, onload).

Mitigación

Política de Seguridad de Contenido (CSP - Content Security Policy): Implementar una cabecera HTTP Content-Security-Policy estricta. Esto instruye al navegador sobre qué fuentes de contenido (scripts, estilos, imágenes) son confiables, bloqueando la ejecución de scripts en línea y scripts cargados desde dominios no autorizados, lo que neutraliza la mayoría de los ataques XSS incluso si la aplicación es vulnerable.

Cookies Seguras: Utilizar las banderas HttpOnly (impide que JavaScript acceda a la cookie) y Secure (solo se envía sobre HTTPS) para las cookies de sesión.
>>>>>>> c6c2d7d55fbe5bfb91d95891bc3ea55d70f776ff

Cookies Seguras: Aplicar las banderas HttpOnly y Secure a los JWT/Cookies para que JavaScript no pueda acceder a ellas por diseño.

Fuentes y Referencias Académicas

La información técnica, métricas y estrategias de mitigación presentadas se fundamentan en los siguientes estándares de la industria:

OWASP (Open Worldwide Application Security Project):

Origen de la información: Definió el mecanismo del ataque reflejado (categorizado en A03:2021-Injection) y dictó las políticas de saneamiento descritas en el documento Cross Site Scripting Prevention Cheat Sheet, específicamente las reglas de Output Encoding y uso de cookies HttpOnly.

Documentación: OWASP XSS

NIST & FIRST - Calculadora CVSS v3.1:

Origen de la información: Permitió calcular la severidad exacta (6.1 Media). El vector refleja claramente un ataque remoto que requiere de Interacción del Usuario (UI:R) y donde hay un cambio de alcance (S:C), ya que la falla en la web compromete un entorno secundario (el navegador de la víctima).

CWE Asociado: CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')

MDN Web Docs (Mozilla):

Origen de la información: Base técnica para la recomendación e implementación de las cabeceras Content-Security-Policy (CSP) como mitigación en el navegador.