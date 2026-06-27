Matriz de Riesgos y Mapa de Calor (Basado en CVSS)

La siguiente matriz evalúa las vulnerabilidades encontradas en el portal de AFP Horizonte. Para alinear el mapa de calor con el estándar internacional CVSS v3.1, se han ajustado los valores de Probabilidad (Exploitability) e Impacto en una escala de 1 a 5, generando un modelo visual coherente con la criticidad real de cada hallazgo.

Vulnerabilidad

Activo Afectado

CVSS 3.1

Probabilidad

Impacto

Nivel de Riesgo (PxI)

Inyección de Comandos

Infraestructura Web

9.8 (Crítica)

5

5

25 (Crítico - Extremo)

Inyección SQL

Base de Datos (Fondos y RUT)

8.5 (Alta)

4

5

20 (Crítico)

Cross-Site Scripting (XSS)

Sesiones de Afiliados

6.1 (Media)

5

3

15 (Riesgo Alto)

Interpretación del Mapa de Calor

El Mapa de Calor visualiza la intersección de estas variables, donde la zona roja oscura (Puntuación 20-25) exige un apagado inmediato de los servicios afectados hasta su mitigación, la zona naranja (15-19) exige parches urgentes (hotfixes) y la zona amarilla (10-14) exige integración en el próximo ciclo de desarrollo seguro.

Análisis de Priorización

Prioridad 1 (Riesgo 25 - Comandos OS): Posee la puntuación CVSS máxima (9.8). La toma total del servidor es inminente. Requiere despliegue urgente en contenedores aislados y saneamiento de todos los inputs que interactúan con el SO operativo.

Prioridad 2 (Riesgo 20 - SQLi): Amenaza existencial directa para los datos financieros de los afiliados de AFP Horizonte. Debe mitigarse el mismo día aplicando consultas parametrizadas y bloqueos en el WAF.

Prioridad 3 (Riesgo 15 - XSS): Aunque el impacto técnico en el servidor es moderado (3), la probabilidad de que los usuarios sean víctimas de phishing para robar sus sesiones es altísima (5). Requiere codificación de salidas estricta (Output Encoding).