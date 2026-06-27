Inyección SQL (SQLi)

Evidencia del Ataque

Nota: Se omite captura visual en este formato.

Parámetro vulnerable: Campo de ID de usuario / Búsqueda en la Sucursal Virtual.

Payload utilizado: ' OR '1'='1

¿Qué es y cómo funciona (Explicación Técnica)?

La Inyección SQL es una vulnerabilidad que permite a un atacante interferir en las consultas que una aplicación realiza a su base de datos. En el entorno DVWA (nivel Low), la aplicación toma la entrada del usuario y la concatena directamente dentro de la sentencia SQL sin ningún tipo de validación o limpieza (sanitización).

Al introducir el payload ' OR '1'='1, el atacante "cierra" la consulta original con la comilla simple (') y añade una condición lógica que siempre es verdadera (1=1). Esto engaña a la base de datos para que ignore el resto de los filtros y devuelva todos los registros existentes en la tabla, en lugar de solo uno.

Peligro para AFP Horizonte (Impacto y Datos Expuestos)

Para AFP Horizonte, este ataque es devastador ya que compromete directamente el activo más crítico: la base de datos de afiliados.

¿Qué datos pueden robar?

Un atacante podría volcar tablas completas de la base de datos, obteniendo acceso a:

Datos Personales: RUT, nombres completos, fechas de nacimiento, direcciones, teléfonos y correos electrónicos de todos los afiliados.

Información Financiera y Previsional: Historial de cotizaciones, rentas imponibles declaradas por los empleadores, tipo de fondo (A-E) y saldos totales acumulados en las cuentas de capitalización individual.

Credenciales (Potencialmente): Si las contraseñas de acceso al portal se almacenan en la misma base de datos, podrían ser objeto de ataques de fuerza bruta offline.

Qué hacer en caso de ataque (Respuesta a Incidentes)

Aislar: Desconectar temporalmente la aplicación web afectada de la base de datos para detener la exfiltración masiva de datos.

Investigar: Analizar los logs del servidor web y del motor de base de datos para identificar la IP del atacante, el payload utilizado y el alcance de la fuga de datos.

Parchear de Emergencia: Corregir la vulnerabilidad en el código fuente implementando consultas parametrizadas inmediatamente.

Restaurar y Fortalecer: Cambiar las credenciales de acceso de la aplicación a la base de datos.

Puntaje y Severidad CVSS

Puntaje Base CVSS 3.1: 8.5

Severidad: ALTA

Vector: CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:N

Medidas de Defensa (Prevención y Mitigación)

Uso de Consultas Parametrizadas (Prepared Statements): Es la defensa absoluta. Los datos se envían por separado del comando SQL, impidiendo que el motor de base de datos trate la entrada del usuario como código ejecutable.

Web Application Firewall (WAF): Implementar un WAF para detectar y bloquear el tráfico que contenga patrones comunes de inyección SQL.

Principio de Mínimo Privilegio: La cuenta de BD de la aplicación solo debe tener permisos SELECT, INSERT, UPDATE estrictamente necesarios.

Fuentes y Referencias Académicas

La información técnica, métricas y estrategias de mitigación presentadas se fundamentan en los siguientes estándares de la industria:

OWASP (Open Worldwide Application Security Project) - Top 10 (2021):

Origen de la información: Proporcionó la base teórica para la "Explicación Técnica" (A03:2021-Injection) y definió el estándar de uso de Prepared Statements dictado en el SQL Injection Prevention Cheat Sheet.

Documentación: OWASP Injection (https://owasp.org/www-community/attacks/xss/)

NIST & FIRST - Calculadora CVSS v3.1:

Origen de la información: El cálculo de la Severidad (8.5 ALTA) y el vector de ataque se construyó utilizando el estándar oficial del Common Vulnerability Scoring System, modelando un ataque a través de la red, de baja complejidad y con alto impacto en la confidencialidad.

CWE Asociado: CWE-89: Improper Neutralization of Special Elements used in an SQL Command (https://cwe.mitre.org/data/definitions/79.html)

PortSwigger Web Security Academy:

Origen de la información: Se utilizó como referencia principal para estructurar el modelo de impacto y la sección de "Peligro y Datos Expuestos", basándose en sus casos prácticos de exfiltración de bases de datos.