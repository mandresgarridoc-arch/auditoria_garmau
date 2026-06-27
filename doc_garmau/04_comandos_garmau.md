Inyección de Comandos (Command Injection)

Evidencia del Ataque

Nota: Se omite captura visual en este formato.

Parámetro vulnerable: Formulario de testeo de conectividad (IP / Ping).

Payload utilizado: 127.0.0.1; cat /etc/passwd

¿Qué es y cómo funciona (Explicación Técnica)?

Esta es una vulnerabilidad crítica que permite a un atacante ejecutar comandos arbitrarios directamente en el sistema operativo del servidor web. En DVWA, la aplicación recibe una IP y la usa para construir un comando del sistema (como ping) sin filtrar metacaracteres.

El atacante utiliza el punto y coma (;), que es un delimitador de comandos en sistemas Unix/Linux. Al enviar 127.0.0.1; cat /etc/passwd, el servidor termina de ejecutar el primer comando e inicia el segundo inmediatamente, exponiendo información confidencial del sistema.

Peligro para AFP Horizonte (Impacto y Datos Expuestos)

Este es el escenario más destructivo posible. Compromete la infraestructura principal del portal previsional.

¿Qué datos y activos pueden comprometer?

Control Total (Root): Ejecución de código con permisos del servidor, facilitando la escalada a superusuario.

Archivos Core: Robo de código fuente, llaves de encriptación (API Keys) y credenciales de acceso a la base de datos principal (hardcodeadas en archivos de configuración).

Pivoteo a la Red Interna: Uso del servidor web como "puente" para infiltrarse en la red corporativa de la AFP, alcanzando sistemas contables y administrativos de back-office.

Ransomware: Posibilidad de cifrar el disco del servidor, causando una caída total de las operaciones (Denegación de Servicio extrema).

Qué hacer en caso de ataque (Respuesta a Incidentes)

Aislar de Inmediato: Desconectar la máquina física/virtual de la red corporativa de la AFP y de Internet. NO APAGAR la máquina para poder realizar un análisis forense de la memoria RAM.

Análisis Forense (IOCs): Buscar Indicadores de Compromiso en el historial del shell, procesos no autorizados corriendo en segundo plano y puertas traseras (backdoors) inyectadas en los archivos web.

Reconstrucción: Dada la severidad, el SO debe considerarse perdido. Debe eliminarse la máquina y levantar una nueva infraestructura desde una imagen limpia ("Golden Image").

Rotación Masiva: Cambiar obligatoriamente todas las contraseñas, tokens y llaves API que se encontraban en el servidor vulnerado.

Puntaje y Severidad CVSS

Puntaje Base CVSS 3.1: 9.8

Severidad: CRÍTICA

Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H

Medidas de Defensa (Prevención y Mitigación)

No llamar al Shell: La regla fundamental es evitar usar funciones de programación que invoquen intérpretes de comandos del SO (os.system(), exec(), shell_exec()). Se deben usar APIs nativas del lenguaje.

Validación por Lista Blanca (Allow-list): Si ejecutar un comando es inevitable, el input debe ser estrictamente validado. Por ejemplo, si se pide una IP, aplicar una expresión regular (Regex) que solo permita números y puntos en el formato correcto.

Contenedores y Sandboxing: Aislar la aplicación web usando Docker con el principio de mínimo privilegio. Si el comando se ejecuta, solo afectará el interior de un contenedor efímero y no el SO host subyacente.

Fuentes y Referencias Académicas

La información técnica, métricas y estrategias de mitigación presentadas se fundamentan en los siguientes estándares de la industria:

OWASP (Open Worldwide Application Security Project):

Origen de la información: Se extrajeron los métodos de prevención fundamentales del OS Command Injection Defense Cheat Sheet, destacando la importancia de evitar llamadas directas al shell del SO y priorizar APIs parametrizadas.

Documentación: OWASP Command Injection (https://owasp.org/www-community/attacks/Command_Injection)

NIST & FIRST - Calculadora CVSS v3.1:

Origen de la información: Permitió establecer el puntaje máximo crítico (9.8). Este vector demuestra que un ataque no requiere privilegios (PR:N), ni interacción del usuario (UI:N), y resulta en un compromiso catastrófico de Confidencialidad (C:H), Integridad (I:H) y Disponibilidad (A:H).

CWE Asociado: CWE-78: Improper Neutralization of Special Elements used in an OS Command (https://cwe.mitre.org/data/definitions/78.html)

MITRE ATT&CK Framework:

Origen de la información: Referencia utilizada para modelar las Tácticas, Técnicas y Procedimientos (TTPs) descritos en la sección de "Peligro", específicamente el Pivoteo (Movimiento Lateral) y el despliegue potencial de malware/ransomware tras la explotación inicial.