Matriz de Riesgos y Mapa de Calor

La siguiente matriz evalúa las vulnerabilidades encontradas en el portal de AFP Horizonte en función de su Probabilidad de ocurrencia (1: Rara - 5: Casi Cierta) y el Impacto para el negocio (1: Insignificante - 5: Desastroso).

Vulnerabilidad

Activo Afectado

Probabilidad

Impacto

Nivel de Riesgo (PxI)

Inyección de Comandos

Infraestructura Web

3 (Media)

5 (Desastroso)

15 (Riesgo Alto)

Inyección SQL

Base de Datos (Fondos y RUT)

4 (Alta)

5 (Desastroso)

20 (Riesgo Crítico)

Cross-Site Scripting (XSS)

Sesiones de Afiliados

5 (Casi Cierta)

3 (Moderado)

15 (Riesgo Alto)

Análisis de Priorización

Prioridad 1 (Riesgo Crítico - SQLi): La capacidad de acceder a la base de datos de rentas y RUTs de forma remota representa una amenaza existencial para AFP Horizonte. Debe parchearse de inmediato en el código fuente (Consultas parametrizadas) y bloquearse en el firewall (WAF) el mismo día del reporte.

Prioridad 2 (Riesgo Alto - Inyección de Comandos): Aunque la probabilidad técnica de encontrar el punto de inyección es un poco menor, el impacto de perder el servidor es total. Requiere revisión de privilegios de ejecución e implementación urgente de contenedores seguros.

Prioridad 3 (Riesgo Alto - XSS): Debido a que requiere la interacción del usuario (phishing), el impacto directo en la base de datos masiva es menor, pero la probabilidad de que un afiliado caiga en un engaño es altísima. Requiere saneamiento de entradas en el próximo ciclo (sprint) de desarrollo.