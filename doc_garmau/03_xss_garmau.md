Cross-Site Scripting (XSS Reflejado)

Evidencia del Ataque

Nota: Se omite captura visual en este formato.

Parámetro vulnerable: Campo de nombre / Búsqueda (Input HTTP GET).

Payload utilizado: <script>alert('XSS en AFP Horizonte')</script>

¿Qué es y cómo funciona (Explicación Técnica)?

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

Puntaje y Severidad CVSS

Puntaje Base CVSS 3.1: 6.1

Severidad: MEDIA

Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N

Medidas de Defensa (Prevención y Mitigación)

Codificación de Salida (Output Encoding): Es la defensa primaria. Los caracteres especiales (<, >, &, ", ') deben convertirse en sus entidades HTML seguras (&lt;, &gt;, etc.) antes de mostrarse en pantalla.

Content Security Policy (CSP): Implementar cabeceras HTTP que limiten desde dónde se pueden cargar y ejecutar scripts (bloqueando scripts en línea inline-scripts).

Cookies Seguras: Aplicar las banderas HttpOnly y Secure a los JWT/Cookies para que JavaScript no pueda acceder a ellas por diseño.

Fuentes y Referencias Académicas

La información técnica, métricas y estrategias de mitigación presentadas se fundamentan en los siguientes estándares de la industria:

OWASP (Open Worldwide Application Security Project):

Origen de la información: Definió el mecanismo del ataque reflejado (categorizado en A03:2021-Injection) y dictó las políticas de saneamiento descritas en el documento Cross Site Scripting Prevention Cheat Sheet, específicamente las reglas de Output Encoding y uso de cookies HttpOnly.

Documentación: OWASP XSS (https://owasp.org/www-community/attacks/xss/)

NIST & FIRST - Calculadora CVSS v3.1:

Origen de la información: Permitió calcular la severidad exacta (6.1 Media). El vector refleja claramente un ataque remoto que requiere de Interacción del Usuario (UI:R) y donde hay un cambio de alcance (S:C), ya que la falla en la web compromete un entorno secundario (el navegador de la víctima).

CWE Asociado: CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') (https://cwe.mitre.org/data/definitions/79.html) 

MDN Web Docs (Mozilla):

Origen de la información: Base técnica para la recomendación e implementación de las cabeceras Content-Security-Policy (CSP) como mitigación en el navegador.