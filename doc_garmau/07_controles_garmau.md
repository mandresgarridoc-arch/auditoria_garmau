Políticas de Prevención y Controles de Mitigación

Para proteger los ahorros de los afiliados y la integridad operativa de AFP Horizonte, se proponen las siguientes normativas y controles de seguridad:

Políticas de Prevención (Nivel Estratégico y de Desarrollo)

Ciclo de Desarrollo Seguro (DevSecOps): Implementar como política obligatoria la revisión de código automatizada (SAST - Static Application Security Testing) antes de que cualquier actualización del portal se pase a producción.

Programación Defensiva (Consultas Parametrizadas): Establecer el estándar de desarrollo que prohíba estrictamente la concatenación de variables en consultas SQL. Todo desarrollo nuevo o actualización debe utilizar ORM o Prepared Statements.

Mínimo Privilegio de Bases de Datos: La aplicación web debe autenticarse en la base de datos con un usuario que solo tenga permisos limitados (lectura y escritura específica), sin privilegios de administrador (DBA) ni acceso para eliminar tablas (DROP).

Controles de Mitigación (Nivel Técnico y Operativo)

Web Application Firewall (WAF): Instalar y afinar un WAF en el borde de la red para que actúe como un escudo. Este identificará y bloqueará tráfico malicioso que contenga patrones de inyección SQL (como OR 1=1) o etiquetas <script> características de XSS.

Encabezados de Seguridad HTTP: Forzar la implementación de Content-Security-Policy (CSP) estricto para evitar que el navegador del afiliado ejecute código de fuentes no autorizadas, mitigando drásticamente el XSS.

Sanitización y Codificación de Salidas: Incorporar librerías de codificación (Output Encoding) para que cualquier dato introducido por un afiliado se convierta en texto seguro al visualizarse, neutralizando inyecciones HTML y JavaScript.