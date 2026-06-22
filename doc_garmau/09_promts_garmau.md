Bitácora de Uso de IA en el Desarrollo

Registro de Interacciones y Desarrollo Asistido

Durante la creación y formateo de esta plataforma de auditoría, se utilizó Inteligencia Artificial (Gemini / GitHub Copilot) bajo el modelo de asistencia de programación (Pair Programming). El objetivo fue acelerar la maquetación, depurar errores estructurales y elevar la calidad de la experiencia de usuario (UI/UX) a un estándar profesional.

A continuación, se detallan las interacciones ordenadas por fase de desarrollo:

Fase 1: Arquitectura Inicial y Configuración del Entorno

Objetivo: Establecer la base del proyecto en React y configurar el marco de diseño CSS.

Prompt principal: "Consulta para la resolución del error de compilación useState is not defined y posterior falla en la renderización de los estilos de Tailwind CSS v4."

Resultado implementado: La IA identificó la ausencia de las importaciones fundamentales de React y la falta de inicialización correcta de Tailwind. Se estructuraron los archivos vite.config.js y index.css, corrigiendo una directiva obsoleta (@custom-variant) para habilitar el soporte nativo de "Modo Oscuro" sin dependencias externas.

Fase 2: Diseño de Interfaz (UI) y Formateo Profesional

Objetivo: Estructurar el formato de la página y crear una identidad visual diferenciada.

Prompt principal: "Para ir terminando con el formato de la página, quiero que le agregues colores distintivos a las cajas, bordes, sombras y efectos para que se vea un poco más interactiva, quiero que la página sea diferente y profesional."

Resultado implementado: Se migró de una estructura plana a un diseño Premium. La IA generó un sistema de "Tarjetas" (Cards) aplicando gradientes dinámicos, efectos de elevación por interacción (hover:translate) y una paleta de colores semántica basada en la severidad de las vulnerabilidades (Ej: Rojo para riesgos críticos). Adicionalmente, se reorganizó el panel lateral para integrar la información del auditor y un código QR funcional.

Fase 3: Adaptabilidad Móvil (Responsive) y Motor de Exportación

Objetivo: Garantizar la legibilidad en teléfonos móviles y permitir la generación de informes físicos.

Prompt principal: "La descarga del PDF solo muestra una página, necesito el informe completo. Además, me gustaría que la tabla de la matriz de riesgo tuviera un formato más legible para celular, se me hace incómodo tener que hacer scroll lateral."

Resultado implementado:

Exportación: Se implementó una solución algorítmica utilizando la API nativa window.print() combinada con modificadores de impresión CSS (print:hidden, print:block, print:break-before-page). Esto transforma la página web única (SPA) en un documento PDF multipágina y secuencial, ocultando elementos interactivos innecesarios en papel.

Matriz Híbrida: Se reprogramó la matriz de riesgos utilizando metodologías Mobile-First. En resolución de escritorio se renderiza una tabla técnica, mientras que en dispositivos móviles los datos mutan automáticamente a tarjetas apiladas, erradicando el scroll horizontal.

Fase 4: Identidad Visual y Resolución de Conflictos

Objetivo: Personalizar la aplicación con isotipos institucionales y solucionar problemas de dependencias.

Prompt principal: "Quiero utilizar esta imagen como logo de mi página y como la imagen que se muestra arriba en el navegador... La página se ve blanca ahora, no se ve nada."

Resultado implementado: Se instruyó el formateo del favicon modificando el archivo raíz index.html e integrando el logotipo de seguridad en los componentes React. Adicionalmente, la IA analizó el fallo de renderizado ("pantalla en blanco"), diagnosticando que se debía a la importación de un ícono de lucide-react inexistente en la versión local del paquete, procediendo a purgar la referencia y estabilizar la compilación.

Reflexión Técnica sobre el uso de la IA

La Inteligencia Artificial demostró ser un recurso de alto valor para el desarrollo ágil de interfaces (Front-end), logrando materializar un maquetado complejo con Tailwind CSS en tiempos reducidos. Propuso soluciones elegantes, como el diseño híbrido de la matriz de riesgos y barras de desplazamiento personalizadas.

No obstante, el proceso también desnudó sus limitaciones: propensión a introducir código con sintaxis de versiones obsoletas y la generación de vulnerabilidades de compilación al invocar dependencias no validadas (conflictos con librerías de íconos). Esto reafirma que la IA funge como un excelente copiloto, pero exige del desarrollador un conocimiento sólido de la arquitectura, una revisión crítica estricta y un Prompt Engineering asertivo para transformar fragmentos de código en un producto robusto y profesional.