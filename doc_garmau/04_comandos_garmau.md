Inyección de Comandos (Command Injection)

Evidencia del Ataque

Nota: Capturas van en carpeta docs.

Parámetro vulnerable: Formulario de testeo de conectividad (ping).

Payload utilizado: 127.0.0.1; cat /etc/passwd

¿Qué es y cómo funciona (Explicación Técnica)?

La inyección de comandos OS es una vulnerabilidad crítica que permite a un atacante ejecutar comandos arbitrarios en el sistema operativo del servidor que aloja la aplicación. En DVWA, la aplicación toma una dirección IP e invoca directamente un comando del sistema (como ping) sin filtrar caracteres especiales.

El atacante abusa de operadores de control del shell, como el punto y coma (;), el pipe (|) o el ampersand (&&). Al enviar 127.0.0.1; cat /etc/passwd, el servidor primero hace ping a la IP, pero inmediatamente después ejecuta el comando cat, leyendo y devolviendo la lista de usuarios del sistema operativo.

Peligro para AFP Horizonte (Impacto)

Este es el escenario más destructivo. Si el portal de AFP Horizonte es vulnerable a esto, el atacante obtiene control sobre el servidor web. Desde ahí, podría instalar puertas traseras (backdoors), modificar el código fuente del portal para capturar las contraseñas de los afiliados en tiempo real, pivotar hacia las bases de datos internas que guardan los fondos de pensión, o incluso desplegar un Ransomware que secuestre toda la infraestructura de la AFP, paralizando la entrega de pensiones a nivel nacional.

Puntaje y Severidad CVSS

Puntaje Base CVSS 3.1: 9.8

Severidad: CRÍTICA

Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H

Medidas de Defensa

Prevención: La regla de oro es nunca hacer llamadas directas al sistema operativo a través de funciones como exec(), system() o shell_exec(). Se deben utilizar las APIs integradas del lenguaje de programación (ej. librerías HTTP para hacer peticiones en lugar de curl en consola).

Mitigación: Aplicar el principio de Mínimo Privilegio: el servidor web (ej. Apache o Nginx) no debe ejecutarse como administrador o root. Además, la aplicación debe estar "enjaulada" (chroot) o ejecutarse en un contenedor aislado.

Fuentes:

OWASP Foundation. (s.f.). Command Injection.

MITRE. (s.f.). CWE-78: Improper Neutralization of Special Elements used in an OS Command.