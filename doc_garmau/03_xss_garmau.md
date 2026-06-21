Cross-Site Scripting (XSS Reflejado)

Evidencia del Ataque

Nota: Capturas van en carpeta docs.

Parámetro vulnerable: Campo de nombre / Búsqueda.

Payload utilizado: <script>alert('XSS en AFP Horizonte')</script>

¿Qué es y cómo funciona (Explicación Técnica)?

Cross-Site Scripting (XSS) ocurre cuando una aplicación incluye datos no confiables en una página web sin la debida validación. En su variante "Reflejada" (DVWA Low), el servidor recibe el input del usuario (el payload con etiquetas <script>) y lo "refleja" o devuelve inmediatamente en el código HTML de la respuesta.

Como el texto no está codificado (Output Encoding), el navegador de la víctima no puede distinguir entre el código legítimo de la AFP y el código inyectado, por lo que ejecuta el script malicioso en el contexto del navegador del usuario.

Peligro para AFP Horizonte (Impacto)

Aunque el ataque ocurre en el navegador de la víctima, el riesgo es altísimo. Un atacante podría enviar un enlace engañoso a un afiliado (phishing). Al hacer clic, el script se ejecuta y podría robar las cookies de sesión del afiliado (Session Hijacking). Con esa cookie, el atacante puede entrar a la "Sucursal Virtual" haciéndose pasar por el afiliado, ver sus datos laborales o, en el peor de los casos, solicitar cambios de claves o modificar cuentas bancarias para el retiro de excedentes.

Puntaje y Severidad CVSS

Puntaje Base CVSS 3.1: 6.1

Severidad: MEDIA

Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N

Medidas de Defensa

Prevención: Implementar Codificación de Salida (Output Encoding) antes de renderizar cualquier entrada del usuario en el HTML (convertir < en &lt;). Validar y sanitizar estrictamente las entradas.

Mitigación: Configurar cabeceras HTTP de seguridad, específicamente Content-Security-Policy (CSP), para restringir los dominios desde los cuales se pueden cargar y ejecutar scripts.

Fuentes:

OWASP Foundation. (2021). Cross Site Scripting (XSS).

PortSwigger. (s.f.). Cross-site scripting. Web Security Academy.