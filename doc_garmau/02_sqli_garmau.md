Inyección SQL (SQLi)

Evidencia del Ataque

<<<<<<< HEAD
Nota: Se omite captura visual en este formato.
=======
Nota: Se omite captura visual.
>>>>>>> c6c2d7d55fbe5bfb91d95891bc3ea55d70f776ff

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

<<<<<<< HEAD
Credenciales (Potencialmente): Si las contraseñas de acceso al portal se almacenan en la misma base de datos, podrían ser objeto de ataques de fuerza bruta offline.

Qué hacer en caso de ataque (Respuesta a Incidentes)

Aislar: Desconectar temporalmente la aplicación web afectada de la base de datos para detener la exfiltración masiva de datos.

Investigar: Analizar los logs del servidor web y del motor de base de datos para identificar la IP del atacante, el payload utilizado y el alcance de la fuga de datos.

Parchear de Emergencia: Corregir la vulnerabilidad en el código fuente implementando consultas parametrizadas inmediatamente.

Restaurar y Fortalecer: Cambiar las credenciales de acceso de la aplicación a la base de datos.
=======
Credenciales (Potencialmente): Si las contraseñas de acceso al portal se almacenan en la misma base de datos (incluso si están "hasheadas", podrían ser objeto de ataques de fuerza bruta offline).

Esta filtración masiva resultaría en robo de identidad a gran escala, fraudes financieros, pérdida total de confianza de los clientes e infracciones gravísimas a las normativas de la Superintendencia de Pensiones (SP) y leyes de protección de datos.

Qué hacer en caso de ataque (Respuesta a Incidentes)

Si se detecta una explotación activa de SQLi:

Aislar: Desconectar temporalmente la aplicación web afectada de la base de datos o de la red externa para detener la exfiltración de datos.

Investigar: Analizar los logs del servidor web y del motor de base de datos para identificar la IP del atacante, el punto exacto de inyección, el payload utilizado y el alcance de los datos comprometidos.

Parchear de Emergencia: Corregir la vulnerabilidad en el código fuente implementando consultas parametrizadas (ver "Cómo evitarlo").

Restaurar y Fortalecer: Si hubo modificación de datos, restaurar desde un backup limpio y seguro. Cambiar las credenciales de acceso de la aplicación a la base de datos.

Notificar: Evaluar la necesidad de informar a las autoridades reguladoras (SP) y a los afiliados afectados, siguiendo los protocolos legales y de comunicación de la empresa.
>>>>>>> c6c2d7d55fbe5bfb91d95891bc3ea55d70f776ff

Puntaje y Severidad CVSS

Puntaje Base CVSS 3.1: 8.5

Severidad: ALTA

Vector: CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:N

Medidas de Defensa (Prevención y Mitigación)

<<<<<<< HEAD
Uso de Consultas Parametrizadas (Prepared Statements): Es la defensa absoluta. Los datos se envían por separado del comando SQL, impidiendo que el motor de base de datos trate la entrada del usuario como código ejecutable.

Web Application Firewall (WAF): Implementar un WAF para detectar y bloquear el tráfico que contenga patrones comunes de inyección SQL.
=======
Cómo evitarlo (Prevención)

Uso de Consultas Parametrizadas (Prepared Statements): Esta es la solución más efectiva. En lugar de construir cadenas de consulta con datos del usuario, se utilizan marcadores de posición (? o :nombre) y los datos se envían por separado. El motor de base de datos trata los datos del usuario solo como valores, nunca como comandos ejecutables, neutralizando la inyección.

Validación de Entrada Estricta: Implementar una "lista blanca" de caracteres permitidos para cada campo de entrada. Si un campo espera un número (como un ID), rechazar cualquier entrada que no sea numérica.

Principio de Mínimo Privilegio: La cuenta de base de datos que utiliza la aplicación web debe tener solo los permisos absolutamente necesarios para su función (por ejemplo, solo SELECT, INSERT, UPDATE en tablas específicas) y nunca permisos administrativos (DROP, ALTER, acceso a tablas del sistema).

Mitigación

Web Application Firewall (WAF): Implementar y configurar un WAF para detectar y bloquear patrones comunes de ataques de inyección SQL en el tráfico entrante.
>>>>>>> c6c2d7d55fbe5bfb91d95891bc3ea55d70f776ff

Principio de Mínimo Privilegio: La cuenta de BD de la aplicación solo debe tener permisos SELECT, INSERT, UPDATE estrictamente necesarios.

Fuentes y Referencias Académicas

La información técnica, métricas y estrategias de mitigación presentadas se fundamentan en los siguientes estándares de la industria:

OWASP (Open Worldwide Application Security Project) - Top 10 (2021):

Origen de la información: Proporcionó la base teórica para la "Explicación Técnica" (A03:2021-Injection) y definió el estándar de uso de Prepared Statements dictado en el SQL Injection Prevention Cheat Sheet.

Documentación: OWASP Injection

NIST & FIRST - Calculadora CVSS v3.1:

Origen de la información: El cálculo de la Severidad (8.5 ALTA) y el vector de ataque se construyó utilizando el estándar oficial del Common Vulnerability Scoring System, modelando un ataque a través de la red, de baja complejidad y con alto impacto en la confidencialidad.

CWE Asociado: CWE-89: Improper Neutralization of Special Elements used in an SQL Command

PortSwigger Web Security Academy:

Origen de la información: Se utilizó como referencia principal para estructurar el modelo de impacto y la sección de "Peligro y Datos Expuestos", basándose en sus casos prácticos de exfiltración de bases de datos.