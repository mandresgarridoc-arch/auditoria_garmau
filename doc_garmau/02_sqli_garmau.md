Inyección SQL (SQLi)

Evidencia del Ataque

Nota: Se omite captura visual.

Parámetro vulnerable: Campo de ID de usuario / Búsqueda.

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

Credenciales (Potencialmente): Si las contraseñas de acceso al portal se almacenan en la misma base de datos (incluso si están "hasheadas", podrían ser objeto de ataques de fuerza bruta offline).

Esta filtración masiva resultaría en robo de identidad a gran escala, fraudes financieros, pérdida total de confianza de los clientes e infracciones gravísimas a las normativas de la Superintendencia de Pensiones (SP) y leyes de protección de datos.

Qué hacer en caso de ataque (Respuesta a Incidentes)

Si se detecta una explotación activa de SQLi:

Aislar: Desconectar temporalmente la aplicación web afectada de la base de datos o de la red externa para detener la exfiltración de datos.

Investigar: Analizar los logs del servidor web y del motor de base de datos para identificar la IP del atacante, el punto exacto de inyección, el payload utilizado y el alcance de los datos comprometidos.

Parchear de Emergencia: Corregir la vulnerabilidad en el código fuente implementando consultas parametrizadas (ver "Cómo evitarlo").

Restaurar y Fortalecer: Si hubo modificación de datos, restaurar desde un backup limpio y seguro. Cambiar las credenciales de acceso de la aplicación a la base de datos.

Notificar: Evaluar la necesidad de informar a las autoridades reguladoras (SP) y a los afiliados afectados, siguiendo los protocolos legales y de comunicación de la empresa.

Puntaje y Severidad CVSS

Puntaje Base CVSS 3.1: 8.5

Severidad: ALTA

Vector: CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:N

Medidas de Defensa

Cómo evitarlo (Prevención)

Uso de Consultas Parametrizadas (Prepared Statements): Esta es la solución más efectiva. En lugar de construir cadenas de consulta con datos del usuario, se utilizan marcadores de posición (? o :nombre) y los datos se envían por separado. El motor de base de datos trata los datos del usuario solo como valores, nunca como comandos ejecutables, neutralizando la inyección.

Validación de Entrada Estricta: Implementar una "lista blanca" de caracteres permitidos para cada campo de entrada. Si un campo espera un número (como un ID), rechazar cualquier entrada que no sea numérica.

Principio de Mínimo Privilegio: La cuenta de base de datos que utiliza la aplicación web debe tener solo los permisos absolutamente necesarios para su función (por ejemplo, solo SELECT, INSERT, UPDATE en tablas específicas) y nunca permisos administrativos (DROP, ALTER, acceso a tablas del sistema).

Mitigación

Web Application Firewall (WAF): Implementar y configurar un WAF para detectar y bloquear patrones comunes de ataques de inyección SQL en el tráfico entrante.

Fuentes:

OWASP Foundation. (2021). A03:2021 – Injection. OWASP Top 10.

PortSwigger. (s.f.). SQL injection. Web Security Academy.