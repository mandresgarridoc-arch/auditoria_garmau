Activos de Información y Riesgos del Negocio

De acuerdo al giro comercial de AFP Horizonte (administración de fondos de pensiones), la organización procesa y custodia activos de información altamente sensibles. Se identifican los siguientes activos críticos:

1. Base de Datos de Afiliados y Rentas

Descripción: Repositorio centralizado que contiene los datos personales (RUT, nombres, contacto), el historial laboral, las rentas imponibles mensuales y los saldos acumulados en los distintos fondos (A, B, C, D, E).

Riesgo asociado (Inyección SQL): Extracción masiva y exposición de datos financieros de la población. Daño reputacional irreparable y sanciones legales severas por parte de los reguladores financieros.

2. Sesiones de Usuario en la "Sucursal Virtual"

Descripción: Tokens de autenticación y cookies que validan la identidad de un afiliado mientras navega en el portal.

Riesgo asociado (XSS Reflejado): Robo de sesión. Un atacante podría suplantar a un afiliado, acceder a sus certificados de renta o modificar sus datos de contacto para interceptar comunicaciones oficiales.

3. Infraestructura del Servidor Web

Descripción: El hardware físico o virtual y el sistema operativo que aloja la aplicación web del portal de la AFP y procesa la lógica de negocios.

Riesgo asociado (Inyección de Comandos): Toma de control de la infraestructura. El atacante podría paralizar los servicios (Denegación de Servicio), usar el servidor para infiltrarse en redes financieras más profundas o secuestrar los sistemas mediante Ransomware.