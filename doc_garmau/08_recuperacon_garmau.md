Mejora Tecnológica y Plan de Recuperación (DRP)

Plan de Recuperación ante Desastres (DRP)

Ante la eventual materialización de un ataque crítico en AFP Horizonte (por ejemplo, una inyección de comandos que comprometa el servidor web principal), se debe ejecutar el siguiente plan:

Contención: Aislar el servidor web comprometido de la red transaccional interna inmediatamente. No se debe apagar para permitir el posterior análisis forense, pero debe desconectarse de Internet para detener la exfiltración de datos.

Erradicación: Analizar los logs del WAF y del sistema (SIEM) para identificar exactamente la brecha, parchear la vulnerabilidad en el repositorio de código y revocar todas las sesiones y contraseñas de los usuarios potencialmente afectados.

Recuperación: Desplegar una nueva instancia del servidor web limpia y segura. Si se comprometieron datos, restaurar la base de datos desde los respaldos (backups) inmutables generados en la última ventana segura.

Validación: Ejecutar un análisis dinámico de seguridad (DAST) sobre la nueva infraestructura antes de anunciar a los afiliados el restablecimiento del servicio.

Propuesta de Mejora Tecnológica (Aislamiento)

Para evolucionar la seguridad de la infraestructura previsional, se propone migrar la arquitectura actual basada en servidores monolíticos a Contenedores (ej. Docker) y Microservicios.

Justificación de Seguridad: Si un atacante logra ejecutar una Inyección de Comandos en una arquitectura de microservicios, solo obtendrá acceso al interior de un contenedor efímero altamente restringido, sin conexión directa al sistema operativo principal ni a otros servicios. Ese contenedor infectado puede ser detectado, destruido automáticamente por el orquestador (Kubernetes) y reemplazado por uno limpio en cuestión de segundos, limitando el "radio de explosión" del ataque.