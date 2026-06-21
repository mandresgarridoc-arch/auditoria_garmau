import React, { useState, useEffect } from 'react';
import { 
  Shield, BookOpen, Database, Code, Terminal, 
  Server, AlertTriangle, Lock, Activity, Moon, Sun, 
  Github, QrCode, Download, Menu, X, FileText, CheckCircle
} from 'lucide-react';

// --- COMPONENTES DE SECCIÓN ---

const Resumen = () => (
  <div className="animate-fade-in space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <FileText className="text-blue-600 dark:text-blue-400" size={32} />
      <h2 className="text-3xl font-bold">Resumen de la Empresa Auditada</h2>
    </div>
    
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors">
      <h3 className="text-xl font-semibold mb-2">AFP Horizonte</h3>
      <p className="text-slate-600 dark:text-slate-300 font-medium mb-4">Rubro: Sector Financiero / Previsión y Administración de Fondos de Pensiones</p>
      
      <h4 className="text-lg font-semibold mt-6 mb-2">Descripción del Portal de Clientes</h4>
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
        AFP Horizonte administra los fondos de capitalización individual de miles de trabajadores. Su portal de clientes, o "Sucursal Virtual", es una plataforma transaccional crítica donde los afiliados inician sesión para revisar el saldo de sus fondos, descargar certificados de afiliación, visualizar su historial de datos laborales, verificar pagos de cotizaciones y gestionar sus rentas.
      </p>
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
        Debido a la naturaleza de la información que procesa (RUT, nombres, salarios, historial laboral y montos acumulados de pensión), el portal maneja datos altamente sensibles y regulados por las normativas financieras y de protección de datos personales.
      </p>

      <h4 className="text-lg font-semibold mt-6 mb-2">Objetivo de la Auditoría</h4>
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
        El presente informe detalla las vulnerabilidades encontradas en un ambiente controlado (DVWA) que simula el portal de AFP Horizonte. Se evalúa el impacto que tendrían estos fallos según el contexto del negocio previsional, se construye la matriz de riesgos asociada y se proponen medidas de prevención y recuperación para proteger los ahorros e información de los afiliados.
      </p>
    </div>
  </div>
);

const InyeccionSQL = () => (
  <div className="animate-fade-in space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <Database className="text-red-500" size={32} />
      <h2 className="text-3xl font-bold">Inyección SQL (SQLi)</h2>
    </div>

    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-semibold mb-4 border-b pb-2 dark:border-slate-700">Evidencia del Ataque</h3>
      
      {/* ESPACIO PARA LA IMAGEN */}
      <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 p-8 flex flex-col items-center justify-center mb-6 min-h-[300px]">
        <img 
          src="/img/sqli_apeno.png" 
          alt="Evidencia SQLi" 
          className="max-w-full h-auto rounded shadow-md hidden" // Quita el "hidden" cuando tengas la imagen real
        />
        <span className="text-slate-400 dark:text-slate-500 font-medium text-center">
          [Espacio para captura: /img/sqli_apeno.png] <br/>
          Demuestra la extracción no autorizada de la base de datos de clientes.
        </span>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md font-mono text-sm mb-6 border dark:border-slate-700 overflow-x-auto">
        <span className="text-slate-500 select-none">Payload utilizado: </span>
        <span className="text-red-600 dark:text-red-400">' OR '1'='1</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-2 flex items-center gap-2"><Code size={20}/> Explicación Técnica</h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            La Inyección SQL permite interferir en las consultas a la base de datos. En el entorno, la aplicación toma la entrada del usuario y la concatena directamente. Al introducir el payload, el atacante "cierra" la consulta original y añade una condición siempre verdadera (1=1), engañando a la base de datos para que devuelva todos los registros.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 flex items-center gap-2 text-red-600 dark:text-red-400"><AlertTriangle size={20}/> Impacto en AFP Horizonte</h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            Un atacante podría extraer la base de datos completa exponiendo RUT, nombres, rentas mensuales y saldos de fondos de pensión. Resultaría en robo de identidad, fraudes financieros y pérdida total de confianza, además de sanciones de la Superintendencia de Pensiones.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <div className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 px-4 py-3 rounded-lg border border-red-200 dark:border-red-800 flex-1 min-w-[200px]">
          <span className="block text-xs uppercase font-bold tracking-wider mb-1">Puntaje CVSS 3.1</span>
          <span className="text-2xl font-black">8.5 - ALTA</span>
          <span className="block text-xs mt-1 opacity-80">CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:N</span>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-4 py-3 rounded-lg border border-green-200 dark:border-green-800 flex-1 min-w-[200px]">
          <span className="block text-xs uppercase font-bold tracking-wider mb-1">Defensa Principal</span>
          <span className="text-lg font-bold">Consultas Parametrizadas</span>
        </div>
      </div>
    </div>
  </div>
);

const XSS = () => (
  <div className="animate-fade-in space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <Code className="text-orange-500" size={32} />
      <h2 className="text-3xl font-bold">Cross-Site Scripting (XSS Reflejado)</h2>
    </div>

    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-semibold mb-4 border-b pb-2 dark:border-slate-700">Evidencia del Ataque</h3>
      
      {/* ESPACIO PARA LA IMAGEN */}
      <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 p-8 flex flex-col items-center justify-center mb-6 min-h-[300px]">
        <img 
          src="/img/xss_apeno.png" 
          alt="Evidencia XSS" 
          className="max-w-full h-auto rounded shadow-md hidden"
        />
        <span className="text-slate-400 dark:text-slate-500 font-medium text-center">
          [Espacio para captura: /img/xss_apeno.png] <br/>
          Evidencia de la ejecución de código JavaScript arbitrario.
        </span>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md font-mono text-sm mb-6 border dark:border-slate-700 overflow-x-auto">
        <span className="text-slate-500 select-none">Payload utilizado: </span>
        <span className="text-orange-600 dark:text-orange-400">&lt;script&gt;alert('XSS en AFP Horizonte')&lt;/script&gt;</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-2">Explicación Técnica</h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            El servidor recibe el input del usuario y lo "refleja" inmediatamente en el HTML sin codificar. El navegador de la víctima no puede distinguir entre el código legítimo y el inyectado, ejecutando el script malicioso.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-orange-600 dark:text-orange-400">Impacto en AFP Horizonte</h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            Permite el Robo de Sesión (Session Hijacking). Un atacante podría suplantar al afiliado mediante phishing, acceder a la "Sucursal Virtual", ver sus datos laborales o modificar cuentas para el retiro de excedentes.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <div className="bg-orange-50 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300 px-4 py-3 rounded-lg border border-orange-200 dark:border-orange-800 flex-1 min-w-[200px]">
          <span className="block text-xs uppercase font-bold tracking-wider mb-1">Puntaje CVSS 3.1</span>
          <span className="text-2xl font-black">6.1 - MEDIA</span>
          <span className="block text-xs mt-1 opacity-80">CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N</span>
        </div>
      </div>
    </div>
  </div>
);

const Comandos = () => (
  <div className="animate-fade-in space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <Terminal className="text-purple-500" size={32} />
      <h2 className="text-3xl font-bold">Inyección de Comandos</h2>
    </div>

    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-semibold mb-4 border-b pb-2 dark:border-slate-700">Evidencia del Ataque</h3>
      
      {/* ESPACIO PARA LA IMAGEN */}
      <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 p-8 flex flex-col items-center justify-center mb-6 min-h-[300px]">
        <img 
          src="/img/comandos_apeno.png" 
          alt="Evidencia Comandos" 
          className="max-w-full h-auto rounded shadow-md hidden"
        />
        <span className="text-slate-400 dark:text-slate-500 font-medium text-center">
          [Espacio para captura: /img/comandos_apeno.png] <br/>
          Muestra la toma de control del sistema operativo.
        </span>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md font-mono text-sm mb-6 border dark:border-slate-700 overflow-x-auto">
        <span className="text-slate-500 select-none">Payload utilizado: </span>
        <span className="text-purple-600 dark:text-purple-400">127.0.0.1; cat /etc/passwd</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-2">Explicación Técnica</h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            La aplicación invoca directamente un comando del sistema (como ping) sin filtrar caracteres especiales. Usando el punto y coma (;), el atacante termina el comando esperado e inicia uno nuevo con privilegios del servidor web.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">Impacto en AFP Horizonte</h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            Toma total de control de la infraestructura. El atacante podría instalar backdoors, pivotar hacia bases de datos de fondos de pensión, o desplegar Ransomware paralizando las operaciones a nivel nacional.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <div className="bg-purple-50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 px-4 py-3 rounded-lg border border-purple-200 dark:border-purple-800 flex-1 min-w-[200px]">
          <span className="block text-xs uppercase font-bold tracking-wider mb-1">Puntaje CVSS 3.1</span>
          <span className="text-2xl font-black">9.8 - CRÍTICA</span>
          <span className="block text-xs mt-1 opacity-80">CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</span>
        </div>
      </div>
    </div>
  </div>
);

const Activos = () => (
  <div className="animate-fade-in space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <Server className="text-emerald-500" size={32} />
      <h2 className="text-3xl font-bold">Activos de Información y Riesgos</h2>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
        <Database className="text-emerald-500 mb-4" size={32} />
        <h3 className="text-xl font-bold mb-2">Base de Datos de Afiliados</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">Contiene RUT, nombres, historial laboral, rentas imponibles y saldos de fondos (A-E).</p>
        <div className="bg-red-50 dark:bg-red-900/10 p-3 rounded text-sm text-red-800 dark:text-red-300 border border-red-100 dark:border-red-900/30">
          <strong>Riesgo (SQLi):</strong> Extracción masiva. Daño reputacional y sanciones legales de la Superintendencia.
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
        <Lock className="text-blue-500 mb-4" size={32} />
        <h3 className="text-xl font-bold mb-2">Sesiones de Usuario</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">Tokens de autenticación y cookies de la Sucursal Virtual.</p>
        <div className="bg-orange-50 dark:bg-orange-900/10 p-3 rounded text-sm text-orange-800 dark:text-orange-300 border border-orange-100 dark:border-orange-900/30">
          <strong>Riesgo (XSS):</strong> Robo de sesión. Suplantación de identidad para acceso a certificados o robo de excedentes.
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
        <Server className="text-purple-500 mb-4" size={32} />
        <h3 className="text-xl font-bold mb-2">Infraestructura Web</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">Servidor físico/virtual y sistema operativo que procesa la lógica de negocios.</p>
        <div className="bg-purple-50 dark:bg-purple-900/10 p-3 rounded text-sm text-purple-800 dark:text-purple-300 border border-purple-100 dark:border-purple-900/30">
          <strong>Riesgo (Cmd Inject):</strong> Toma de control. Denegación de servicio, Ransomware o infiltración a redes internas.
        </div>
      </div>
    </div>
  </div>
);

const Matriz = () => (
  <div className="animate-fade-in space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <Activity className="text-rose-500" size={32} />
      <h2 className="text-3xl font-bold">Matriz de Riesgos y Mapa de Calor</h2>
    </div>

    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
            <th className="p-4 font-semibold">Vulnerabilidad</th>
            <th className="p-4 font-semibold">Activo Afectado</th>
            <th className="p-4 font-semibold text-center">Probabilidad (1-5)</th>
            <th className="p-4 font-semibold text-center">Impacto (1-5)</th>
            <th className="p-4 font-semibold text-center">Nivel de Riesgo (PxI)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
          <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <td className="p-4 font-medium">Inyección de Comandos</td>
            <td className="p-4 text-slate-600 dark:text-slate-300">Infraestructura Web</td>
            <td className="p-4 text-center">3 (Media)</td>
            <td className="p-4 text-center">5 (Desastroso)</td>
            <td className="p-4 text-center">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm">15 (Alto)</span>
            </td>
          </tr>
          <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <td className="p-4 font-medium">Inyección SQL</td>
            <td className="p-4 text-slate-600 dark:text-slate-300">Base de Datos</td>
            <td className="p-4 text-center">4 (Alta)</td>
            <td className="p-4 text-center">5 (Desastroso)</td>
            <td className="p-4 text-center">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">20 (Crítico)</span>
            </td>
          </tr>
          <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <td className="p-4 font-medium">Cross-Site Scripting</td>
            <td className="p-4 text-slate-600 dark:text-slate-300">Sesiones (Navegador)</td>
            <td className="p-4 text-center">5 (Casi Cierta)</td>
            <td className="p-4 text-center">3 (Moderado)</td>
            <td className="p-4 text-center">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm">15 (Alto)</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-bold mb-4">Análisis de Priorización</h3>
      <ol className="space-y-4 list-decimal list-inside text-slate-700 dark:text-slate-300">
        <li><strong>Prioridad 1 (Crítico - SQLi):</strong> Amenaza existencial para AFP Horizonte. Debe parchearse en código y bloquearse en el WAF inmediatamente.</li>
        <li><strong>Prioridad 2 (Alto - Comandos):</strong> Pérdida total del servidor. Requiere revisión de privilegios y contenedores urgentes.</li>
        <li><strong>Prioridad 3 (Alto - XSS):</strong> Requiere interacción (phishing), pero la probabilidad de éxito es altísima. Saneamiento de entradas en el próximo sprint.</li>
      </ol>
    </div>
  </div>
);

const Controles = () => (
  <div className="animate-fade-in space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <Shield className="text-indigo-500" size={32} />
      <h2 className="text-3xl font-bold">Controles de Prevención y Mitigación</h2>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-t-4 border-indigo-500">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle className="text-indigo-500" size={24} /> 
          Políticas de Prevención (Estratégico)
        </h3>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 mt-1">•</span>
            <span><strong>Ciclo DevSecOps:</strong> Revisión de código automatizada (SAST) obligatoria antes de producción.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 mt-1">•</span>
            <span><strong>Programación Defensiva:</strong> Uso exclusivo de ORM o Prepared Statements, prohibiendo la concatenación.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 mt-1">•</span>
            <span><strong>Mínimo Privilegio:</strong> La App Web usará un usuario de DB limitado, sin acceso DBA.</span>
          </li>
        </ul>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-t-4 border-teal-500">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Shield className="text-teal-500" size={24} /> 
          Controles de Mitigación (Técnico)
        </h3>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-teal-500 mt-1">•</span>
            <span><strong>WAF Perimetral:</strong> Despliegue de un escudo para bloquear tráfico con patrones SQLi y XSS.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-500 mt-1">•</span>
            <span><strong>Cabeceras de Seguridad:</strong> Implementación estricta de Content-Security-Policy (CSP).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-500 mt-1">•</span>
            <span><strong>Sanitización (Output Encoding):</strong> Librerías que codifiquen cualquier dato del afiliado al renderizarse.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const Recuperacion = () => (
  <div className="animate-fade-in space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <Activity className="text-sky-500" size={32} />
      <h2 className="text-3xl font-bold">Mejora y Recuperación (DRP)</h2>
    </div>

    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-bold mb-4">Plan de Respuesta ante Desastres (Inyección de Comandos)</h3>
      <div className="space-y-4">
        <div className="flex gap-4 items-start">
          <div className="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
          <div>
            <h4 className="font-semibold text-lg">Contención</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">Aislar el servidor comprometido de la red interna sin apagarlo (para análisis forense), deteniendo la exfiltración.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
          <div>
            <h4 className="font-semibold text-lg">Erradicación</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">Analizar logs del WAF/SIEM, parchear vulnerabilidad y revocar todas las sesiones de usuarios afectados.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
          <div>
            <h4 className="font-semibold text-lg">Recuperación</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">Desplegar instancia limpia vía IaC. Restaurar DB desde respaldos inmutables de la última ventana segura.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
          <div>
            <h4 className="font-semibold text-lg">Validación</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">Ejecutar análisis DAST sobre la nueva infraestructura antes de restablecer el servicio.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-slate-800 dark:bg-slate-900 text-white p-6 rounded-xl shadow-sm mt-6">
      <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Server size={20}/> Propuesta de Mejora Tecnológica</h3>
      <p className="text-slate-300 leading-relaxed text-sm mb-4">
        Migrar la arquitectura actual a <strong>Contenedores (Docker) y Microservicios (Kubernetes)</strong>.
      </p>
      <p className="text-slate-400 text-sm">
        Si ocurre una inyección de comandos, el atacante solo comprometerá un contenedor efímero aislado sin conexión al SO principal. Este puede ser destruido y reemplazado en segundos, limitando drásticamente el "radio de explosión".
      </p>
    </div>
  </div>
);

const Prompts = () => (
  <div className="animate-fade-in space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <Terminal className="text-green-500" size={32} />
      <h2 className="text-3xl font-bold">Bitácora de Uso de IA</h2>
    </div>

    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 space-y-6">
      <div>
        <h3 className="text-lg font-bold mb-3 border-b pb-2 dark:border-slate-700">Sección: Componente React InyeccionSQL.jsx</h3>
        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li><strong>Herramienta:</strong> GitHub Copilot / ChatGPT</li>
          <li><strong>Prompt:</strong> "Crea un componente React con JSX llamado InyeccionSQL que documente el hallazgo de SQLi. Debe mostrar el título 'Inyección SQL', la captura desde /img/sqli_apeno.png, el payload ' OR '1'='1 en un bloque de código, y usar Tailwind CSS y un ícono de Lucide (Database)."</li>
          <li><strong>Ajustes:</strong> La IA generó el código base, pero se ajustó la ruta de la imagen en la etiqueta img porque inicialmente no apuntaba correctamente a la carpeta public/img/.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-3 border-b pb-2 dark:border-slate-700">Sección: Explicación Técnica XSS</h3>
        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li><strong>Herramienta:</strong> Gemini</li>
          <li><strong>Prompt:</strong> "Explica brevemente y de forma técnica por qué funciona el ataque Cross-Site Scripting reflejado en DVWA nivel low."</li>
          <li><strong>Ajustes:</strong> La respuesta fue resumida y adaptada al contexto del negocio de AFP Horizonte para el informe.</li>
        </ul>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mt-4 border dark:border-slate-700">
        <h4 className="font-bold mb-2">Reflexión sobre el uso de la IA</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          La IA resultó sumamente útil para acelerar la creación de la estructura de componentes en React y Tailwind, evitando escribir el código repetitivo desde cero. Sin embargo, demostró fallos menores en rutas de assets locales y a veces extendía demasiado las explicaciones teóricas. Es vital revisar y adaptar el código generado para asegurar que cumpla con los estándares de la rúbrica y no introduzca errores de integración.
        </p>
      </div>
    </div>
  </div>
);


// --- APLICACIÓN PRINCIPAL ---

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('resumen');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Manejo del modo oscuro en el elemento HTML raíz
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const menuItems = [
    { id: 'resumen', label: 'Resumen', icon: <FileText size={20} /> },
    { id: 'sqli', label: 'Inyección SQL', icon: <Database size={20} /> },
    { id: 'xss', label: 'Cross-Site Scripting', icon: <Code size={20} /> },
    { id: 'comandos', label: 'Inyección de Cmd', icon: <Terminal size={20} /> },
    { id: 'activos', label: 'Activos de Info.', icon: <Server size={20} /> },
    { id: 'matriz', label: 'Matriz de Riesgos', icon: <Activity size={20} /> },
    { id: 'controles', label: 'Controles de Prev.', icon: <Shield size={20} /> },
    { id: 'recuperacion', label: 'Recuperación DRP', icon: <Activity size={20} /> },
    { id: 'prompts', label: 'Bitácora IA', icon: <Terminal size={20} /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'resumen': return <Resumen />;
      case 'sqli': return <InyeccionSQL />;
      case 'xss': return <XSS />;
      case 'comandos': return <Comandos />;
      case 'activos': return <Activos />;
      case 'matriz': return <Matriz />;
      case 'controles': return <Controles />;
      case 'recuperacion': return <Recuperacion />;
      case 'prompts': return <Prompts />;
      default: return <Resumen />;
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 flex flex-col md:flex-row ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Botón menú móvil */}
      <div className="md:hidden p-4 flex justify-between items-center bg-white dark:bg-slate-900 shadow-sm border-b dark:border-slate-800 z-20 sticky top-0">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Shield className="text-blue-600 dark:text-blue-400" />
          AFP Auditoría
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-md">
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar de Navegación */}
      <aside className={`
        fixed inset-y-0 left-0 z-10 w-64 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-sm flex flex-col
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 hidden md:flex items-center gap-3 border-b border-slate-100 dark:border-slate-800">
          <Shield className="text-blue-600 dark:text-blue-400" size={32} />
          <div>
            <h1 className="font-bold text-lg leading-tight">Auditoría web</h1>
            <p className="text-xs text-slate-500 font-medium">AFP Horizonte</p>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setSidebarOpen(false); // Cierra menú móvil al clickear
              }}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                ${activeSection === item.id 
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 shadow-sm' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}
              `}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Toggle Theme Bottom */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
        </div>
      </aside>

      {/* Área Principal */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Contenedor del contenido escroleable */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 scroll-smooth">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>

          {/* Footer incorporado al final del scroll */}
          <footer className="max-w-4xl mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 dark:text-slate-400 pb-8">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-sm font-semibold mb-2">Desarrollado por [Tu Apellido Nombre]</span>
              <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github size={20} />
                <span className="text-sm font-medium">Ver repositorio en GitHub</span>
              </a>
              <button className="flex items-center gap-2 mt-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Download size={20} />
                <span className="text-sm font-medium">Descargar Informe PDF</span>
              </button>
            </div>
            
            <div className="flex flex-col items-center bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              {/* QR Falso autogenerado usando una API gratuita que apunta a tu github, puedes cambiar la url en el param 'data=' */}
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://github.com&color=${darkMode ? 'ffffff' : '0f172a'}&bgcolor=${darkMode ? '0f172a' : 'ffffff'}`} 
                alt="QR Code" 
                className="w-24 h-24 mb-2 rounded"
              />
              <span className="text-xs font-medium flex items-center gap-1">
                <QrCode size={14} /> Escanear en móvil
              </span>
            </div>
          </footer>
        </div>
      </main>

    </div>
  );
}