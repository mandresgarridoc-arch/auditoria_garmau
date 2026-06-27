Inyección de Comandos (Command Injection)

Evidencia del Ataque

<<<<<<< HEAD
Nota: Se omite captura visual en este formato.
=======
Nota: Se omite captura visual.
>>>>>>> c6c2d7d55fbe5bfb91d95891bc3ea55d70f776ff

Parámetro vulnerable: Formulario de testeo de conectividad (IP / Ping).

Payload utilizado: 127.0.0.1; cat /etc/passwd

¿Qué es y cómo funciona (Explicación Técnica)?

<<<<<<< HEAD
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
=======
La inyección de comandos OS es una vulnerabilidad crítica que permite a un atacante ejecutar comandos arbitrarios en el sistema operativo del servidor que aloja la aplicación web. En el caso de DVWA, la aplicación recibe una dirección IP del usuario y la utiliza para construir un comando del sistema (probablemente usando ping) que luego ejecuta directamente en el shell del servidor, sin validar ni filtrar adecuadamente los caracteres especiales.

El atacante aprovecha metacaracteres del shell, como el punto y coma (;), que permite concatenar comandos. Al enviar 127.0.0.1; cat /etc/passwd, el servidor ejecuta primero ping 127.0.0.1 y, al finalizar, ejecuta inmediatamente después cat /etc/passwd, devolviendo el contenido de este archivo sensible.

Peligro para AFP Horizonte (Impacto y Datos Expuestos)

Este es el escenario más destructivo, ya que compromete la infraestructura misma del portal, otorgando al atacante un punto de apoyo directo en la red interna de la AFP.

¿Qué datos y activos pueden comprometer?

Control Total del Servidor: El atacante puede ejecutar comandos con los mismos privilegios que el usuario que corre el servidor web. Esto puede llevar a la escalada de privilegios para obtener control total (root/administrador) del sistema.

Archivos del Sistema y de la Aplicación: Acceso a archivos sensibles como /etc/passwd (usuarios del sistema), archivos de configuración de la aplicación que pueden contener credenciales de base de datos, claves de API, código fuente y lógica de negocio.

Pivoteo a la Red Interna: Utilizar el servidor comprometido como plataforma para explorar y atacar otros sistemas dentro de la red interna de la AFP, incluyendo bases de datos de producción, servidores de archivos y sistemas de gestión core.

Instalación de Malware: Despliegue de puertas traseras (backdoors) para acceso persistente, herramientas de exfiltración de datos, o incluso Ransomware para cifrar el servidor y paralizar las operaciones.

Qué hacer en caso de ataque (Respuesta a Incidentes)

Si se detecta una Inyección de Comandos exitosa:

Aislar Inmediatamente: Desconectar el servidor comprometido de la red para evitar el movimiento lateral hacia otros sistemas y la exfiltración de datos. No apagarlo si es posible, para permitir el análisis forense de la memoria y estado del sistema.

Análisis Forense: Examinar el servidor en busca de indicadores de compromiso (IOCs): comandos ejecutados en el historial del shell, archivos creados o modificados recientemente, procesos sospechosos en ejecución, conexiones de red inusuales, y logs del sistema y aplicación.

Considerar el Sistema Comprometido: Debido a la gravedad, lo más seguro es considerar el servidor como totalmente comprometido y no confiable. Se debe reconstruir desde cero utilizando una imagen limpia y segura ("Golden Image") y restaurar los datos desde un backup confiable previo al ataque.

Parchear y Revisar: Corregir la vulnerabilidad en el código (ver "Cómo evitarlo") y realizar una revisión de seguridad exhaustiva de toda la aplicación y la infraestructura antes de volver a producción. Rotar todas las credenciales que pudieron estar expuestas en el servidor.
>>>>>>> c6c2d7d55fbe5bfb91d95891bc3ea55d70f776ff

Puntaje y Severidad CVSS

Puntaje Base CVSS 3.1: 9.8

Severidad: CRÍTICA

Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H

Medidas de Defensa (Prevención y Mitigación)

<<<<<<< HEAD
No llamar al Shell: La regla fundamental es evitar usar funciones de programación que invoquen intérpretes de comandos del SO (os.system(), exec(), shell_exec()). Se deben usar APIs nativas del lenguaje.

Validación por Lista Blanca (Allow-list): Si ejecutar un comando es inevitable, el input debe ser estrictamente validado. Por ejemplo, si se pide una IP, aplicar una expresión regular (Regex) que solo permita números y puntos en el formato correcto.
=======
Cómo evitarlo (Prevención)

Evitar Llamadas Directas al Shell: La regla de oro es nunca utilizar funciones que pasen datos a un intérprete de comandos del sistema (como os.system(), exec(), shell_exec(), backticks, etc.) si se puede evitar. Utilizar las APIs integradas equivalentes del lenguaje de programación que no invocan un shell (por ejemplo, usar librerías específicas para hacer ping o peticiones HTTP en lugar de llamar a los comandos de consola ping o curl).

Validación de Entrada Rigurosa: Si es absolutamente inevitable pasar datos de usuario a un comando, la entrada debe ser validada contra una lista blanca muy estricta de caracteres y formatos permitidos (ej. para una IP, solo permitir dígitos y puntos, con un formato específico). Nunca intentar solo "filtrar" caracteres malos ("lista negra"), ya que es fácil de eludir.

Mitigación y Aislamiento

Principio de Mínimo Privilegio en el Servidor: El proceso del servidor web debe ejecutarse con el usuario con los menores privilegios posibles en el sistema operativo, limitando lo que un atacante puede hacer si logra ejecutar comandos.

Contenerización y Aislamiento (Sandboxing): Ejecutar la aplicación dentro de contenedores (como Docker) o entornos restringidos (chroot, AppArmor, SELinux). Esto limita significativamente el acceso del atacante al sistema operativo host y a otros recursos de la red en caso de compromiso, reduciendo el "radio de explosión" del ataque.
>>>>>>> c6c2d7d55fbe5bfb91d95891bc3ea55d70f776ff

Contenedores y Sandboxing: Aislar la aplicación web usando Docker con el principio de mínimo privilegio. Si el comando se ejecuta, solo afectará el interior de un contenedor efímero y no el SO host subyacente.

Fuentes y Referencias Académicas

La información técnica, métricas y estrategias de mitigación presentadas se fundamentan en los siguientes estándares de la industria:

OWASP (Open Worldwide Application Security Project):

Origen de la información: Se extrajeron los métodos de prevención fundamentales del OS Command Injection Defense Cheat Sheet, destacando la importancia de evitar llamadas directas al shell del SO y priorizar APIs parametrizadas.

Documentación: OWASP Command Injection

NIST & FIRST - Calculadora CVSS v3.1:

Origen de la información: Permitió establecer el puntaje máximo crítico (9.8). Este vector demuestra que un ataque no requiere privilegios (PR:N), ni interacción del usuario (UI:N), y resulta en un compromiso catastrófico de Confidencialidad (C:H), Integridad (I:H) y Disponibilidad (A:H).

CWE Asociado: CWE-78: Improper Neutralization of Special Elements used in an OS Command

MITRE ATT&CK Framework:

Origen de la información: Referencia utilizada para modelar las Tácticas, Técnicas y Procedimientos (TTPs) descritos en la sección de "Peligro", específicamente el Pivoteo (Movimiento Lateral) y el despliegue potencial de malware/ransomware tras la explotación inicial.