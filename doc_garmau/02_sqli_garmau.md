Inyección SQL (SQLi)

Evidencia del Ataque

Nota: Las capturas van en la carpeta docs.

Parámetro vulnerable: Campo de ID de usuario / Búsqueda.

Payload utilizado: ' OR '1'='1

¿Qué es y cómo funciona (Explicación Técnica)?

La Inyección SQL es una vulnerabilidad que permite a un atacante interferir en las consultas que una aplicación realiza a su base de datos. En el entorno DVWA (nivel Low), la aplicación toma la entrada del usuario y la concatena directamente dentro de la sentencia SQL sin ningún tipo de validación o limpieza (sanitización).

Al introducir el payload ' OR '1'='1, el atacante "cierra" la consulta original con la comilla simple (') y añade una condición lógica que siempre es verdadera (1=1). Esto engaña a la base de datos para que ignore el resto de los filtros y devuelva todos los registros existentes en la tabla, en lugar de solo uno.

Peligro para AFP Horizonte (Impacto)

Para AFP Horizonte, este ataque es devastador. Un atacante podría extraer la base de datos completa de los afiliados, exponiendo sus RUT, nombres, empleadores, rentas mensuales y saldos de fondos de pensión. Esta filtración masiva resultaría en robo de identidad, fraudes financieros, pérdida total de confianza de los clientes e infracciones gravísimas a las normativas de la Superintendencia de Pensiones (SP).

Puntaje y Severidad CVSS

Puntaje Base CVSS 3.1: 8.5

Severidad: ALTA

Vector: CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:N

Medidas de Defensa

Prevención: La solución definitiva es abandonar la concatenación de strings y utilizar Consultas Parametrizadas (Prepared Statements) o un ORM (Object-Relational Mapping). Esto asegura que la base de datos trate la entrada del usuario como "datos" y nunca como "código ejecutable".

Mitigación: Implementar un Web Application Firewall (WAF) configurado para detectar y bloquear firmas y patrones comunes de inyección SQL.

Fuentes:

OWASP Foundation. (2021). A03:2021 – Injection. OWASP Top 10.

PortSwigger. (s.f.). SQL injection. Web Security Academy.