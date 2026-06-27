import React, { useState, useEffect } from 'react';
import { 
  Shield, Database, Code, Terminal, 
  Server, AlertTriangle, Lock, Activity, Moon, Sun, 
  QrCode, Download, Menu, X, FileText, CheckCircle, Zap, 
  Cpu, Wrench, PenTool, ShieldAlert, ShieldCheck, Search,
  Eye, Fingerprint, Network, BookOpen
} from 'lucide-react';

const Resumen = () => (
  <div className="animate-fade-in space-y-6 pb-8">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-[#86BBD8]/30 dark:bg-[#86BBD8]/20 text-[#33658A] dark:text-[#86BBD8] rounded-2xl shadow-sm border border-[#33658A]/30">
        <FileText size={32} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 dark:text-[#86BBD8]">
        Resumen de la Auditoría
      </h2>
    </div>
    
    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-[#33658A]/10 hover:-translate-y-1.5 transition-all duration-300 border border-[#33658A]/30 dark:border-slate-800 border-l-4 border-l-[#33658A] dark:border-l-[#86BBD8] group print:border-l-[#33658A] print:bg-white print:shadow-none">
      <div className="flex items-center justify-between mb-4 border-b border-[#33658A]/20 dark:border-slate-800 pb-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#33658A] dark:group-hover:text-[#86BBD8] transition-colors">AFP Horizonte</h3>
          <p className="text-[#33658A] dark:text-[#86BBD8] font-semibold text-sm mt-1 flex items-center gap-2">
            <Shield size={16} /> Sector Financiero / Previsión y Administración de Fondos
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-bold mt-2 mb-3 flex items-center gap-2 text-slate-800 dark:text-slate-200">
            <Server size={20} className="text-[#33658A] dark:text-[#86BBD8]" /> Descripción del Portal de Clientes
          </h4>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base print:text-black">
            AFP Horizonte administra los fondos de capitalización individual de miles de trabajadores. Su portal de clientes, o "Sucursal Virtual", es una plataforma transaccional crítica donde los afiliados inician sesión para revisar el saldo de sus fondos, descargar certificados de afiliación, visualizar su historial de datos laborales, verificar pagos de cotizaciones y gestionar sus rentas.
          </p>
          <div className="mt-3 p-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/50 rounded-xl print:bg-white print:border-slate-300">
            <p className="text-orange-800 dark:text-orange-300 text-sm font-medium flex items-start gap-2 print:text-slate-800">
              <AlertTriangle size={18} className="shrink-0 mt-0.5 print:text-orange-600" />
              Debido a la naturaleza de la información que procesa (RUT, nombres, salarios, historial laboral y montos acumulados de pensión), el portal maneja datos altamente sensibles y regulados por las normativas financieras y de protección de datos personales.
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-slate-800 dark:text-slate-200">
            <Activity size={20} className="text-[#33658A] dark:text-[#86BBD8]" /> Objetivo de la Auditoría
          </h4>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base print:text-black">
            El presente informe detalla las vulnerabilidades encontradas en un ambiente controlado (DVWA) que simula el portal de AFP Horizonte. Se evalúa el impacto que tendrían estos fallos según el contexto del negocio previsional, se construye la matriz de riesgos asociada y se proponen medidas de prevención y recuperación para proteger los ahorros e información de los afiliados.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const InyeccionSQL = () => (
  <div className="animate-fade-in space-y-6 pb-8">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 rounded-2xl shadow-sm border border-red-200 dark:border-red-800">
        <Database size={32} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight text-red-700 dark:text-red-400">
        Inyección SQL (SQLi)
      </h2>
    </div>

    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1.5 transition-all duration-300 border border-slate-200 dark:border-slate-800 border-t-4 border-t-red-600 print:shadow-none print:border-slate-300 print:border-t-red-600 print:bg-white group">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800 dark:text-slate-100 print:text-black">
        <Code className="text-red-600 dark:text-red-500" /> Evidencia del Ataque
      </h3>
      
      <div className="w-full bg-[#E0EEF5]/50 dark:bg-slate-950 rounded-xl border-2 border-dashed border-red-200 dark:border-slate-700 p-8 flex flex-col items-center justify-center mb-6 group-hover:border-red-400 transition-colors print:bg-white print:border-slate-300 print:p-4">
        <img src="/img/sqli_garmau.png" alt="Evidencia SQLi" className="max-w-full h-auto rounded shadow-lg group-hover:scale-[1.02] transition-transform duration-500 print:block print:shadow-none print:border print:border-slate-200" />
      </div>

      <div className="bg-slate-800 dark:bg-black p-4 rounded-xl font-mono text-sm mb-8 border border-slate-700 shadow-inner flex items-center gap-3 overflow-x-auto print:bg-slate-100 print:border-slate-300">
        <Terminal size={16} className="text-slate-400 print:text-slate-700" />
        <span className="text-slate-300 select-none print:text-slate-800">Payload:</span>
        <span className="text-red-400 font-bold print:text-red-700">' OR '1'='1</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-[#86BBD8]/10 dark:bg-slate-800/50 p-6 rounded-xl border border-[#33658A]/20 dark:border-slate-700/50 print:bg-white print:border-slate-300">
          <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-slate-800 dark:text-slate-100 print:text-black"><Zap size={20} className="text-red-500"/> Explicación Técnica</h4>
          <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed print:text-slate-800 mb-3">
            La aplicación toma la entrada del usuario y la concatena directamente dentro de la sentencia SQL sin validación. Al introducir el payload <code className="bg-white dark:bg-slate-700 px-1 rounded">' OR '1'='1</code>, el atacante "cierra" la consulta original y añade una condición siempre verdadera (`1=1`). Esto engaña a la base de datos para que ignore el resto de los filtros y devuelva todos los registros.
          </p>
        </div>
        
        <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-200 dark:border-red-900/30 print:bg-white print:border-slate-300 hover:shadow-md transition-shadow">
          <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-red-700 dark:text-red-400 print:text-red-700"><ShieldAlert size={20}/> Datos en Peligro (Impacto)</h4>
          <p className="text-red-800/80 dark:text-red-300/80 text-sm leading-relaxed mb-3 print:text-slate-800">Compromete el activo más crítico: la base de datos de afiliados.</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-red-800/90 dark:text-red-300/90 print:text-slate-800">
            <li><strong>Datos Personales:</strong> RUT, nombres, fechas de nacimiento, direcciones, teléfonos.</li>
            <li><strong>Info Financiera:</strong> Historial de cotizaciones, saldos totales en cuentas de capitalización y rentas declaradas.</li>
            <li><strong>Credenciales:</strong> Posibilidad de extraer contraseñas de acceso al portal y someterlas a fuerza bruta.</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-800 dark:bg-slate-950 p-6 rounded-xl border border-slate-700 mb-8 text-white print:bg-white print:border-slate-300 print:text-black shadow-inner">
        <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-400 print:text-red-700"><Activity size={24}/> Plan de Respuesta a Incidentes</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex gap-3 hover:translate-x-1 transition-transform">
            <div className="w-8 h-8 rounded bg-red-900/50 flex items-center justify-center font-bold text-red-300 shrink-0 border border-red-700/50 print:bg-slate-200 print:border-none print:text-slate-800">1</div>
            <p className="text-sm text-slate-300 print:text-slate-800"><strong>Aislar:</strong> Desconectar la app web de la base de datos o red externa para detener la exfiltración masiva de forma inmediata.</p>
          </div>
          <div className="flex gap-3 hover:translate-x-1 transition-transform">
            <div className="w-8 h-8 rounded bg-red-900/50 flex items-center justify-center font-bold text-red-300 shrink-0 border border-red-700/50 print:bg-slate-200 print:border-none print:text-slate-800">2</div>
            <p className="text-sm text-slate-300 print:text-slate-800"><strong>Investigar:</strong> Analizar los logs del servidor web y BD para identificar la IP del atacante, payload usado y alcance de datos fugados.</p>
          </div>
          <div className="flex gap-3 hover:translate-x-1 transition-transform">
            <div className="w-8 h-8 rounded bg-red-900/50 flex items-center justify-center font-bold text-red-300 shrink-0 border border-red-700/50 print:bg-slate-200 print:border-none print:text-slate-800">3</div>
            <p className="text-sm text-slate-300 print:text-slate-800"><strong>Parchear:</strong> Corregir la vulnerabilidad en el código fuente implementando consultas parametrizadas de emergencia.</p>
          </div>
          <div className="flex gap-3 hover:translate-x-1 transition-transform">
            <div className="w-8 h-8 rounded bg-red-900/50 flex items-center justify-center font-bold text-red-300 shrink-0 border border-red-700/50 print:bg-slate-200 print:border-none print:text-slate-800">4</div>
            <p className="text-sm text-slate-300 print:text-slate-800"><strong>Restaurar & Fortalecer:</strong> Cambiar credenciales de BD y evaluar notificación obligatoria a la Superintendencia.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="bg-red-50 dark:bg-red-900/10 text-red-800 dark:text-red-300 px-6 py-4 rounded-xl border border-red-200 dark:border-red-800/50 flex-1 min-w-[200px] shadow-sm print:bg-none print:bg-white print:border-slate-300 print:text-slate-900">
          <span className="block text-xs uppercase font-extrabold tracking-widest mb-1 opacity-80 print:text-slate-500">Puntaje CVSS 3.1</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black print:text-red-700">8.5</span>
            <span className="text-lg font-bold print:text-red-700">- ALTA</span>
          </div>
          <span className="block text-[10px] mt-2 opacity-70 font-mono print:text-slate-500">CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:N</span>
        </div>
        <div className="bg-[#86BBD8]/10 dark:bg-slate-800/30 px-6 py-4 rounded-xl border border-[#33658A]/30 dark:border-slate-700 flex-[2] min-w-[300px] shadow-sm print:bg-white print:border-slate-300 hover:shadow-md transition-shadow">
          <h4 className="text-[#33658A] dark:text-[#86BBD8] font-bold mb-2 flex items-center gap-2 print:text-slate-800"><ShieldCheck size={18}/> Medidas Preventivas (Defensa)</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300 print:text-slate-800">
            <li><strong>Consultas Parametrizadas (Prepared Statements):</strong> Los datos se envían separados del comando SQL, impidiendo ejecución maliciosa.</li>
            <li><strong>Validación Estricta:</strong> Implementar listas blancas (ej: rechazar IDs que no sean números).</li>
            <li><strong>Mínimo Privilegio:</strong> Usar cuentas de BD sin permisos administrativos (`DROP`, `ALTER`).</li>
            <li><strong>WAF Perimetral:</strong> Bloquear tráfico con firmas OWASP de Inyección SQL.</li>
          </ul>
        </div>
      </div>

      {/* Referencias Académicas */}
      <div className="bg-slate-50 dark:bg-slate-800/30 p-5 rounded-xl border border-slate-200 dark:border-slate-700 print:bg-white print:border-slate-300">
        <h4 className="text-sm font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200 mb-2 print:text-black">
          <BookOpen size={16} className="text-[#33658A] dark:text-[#86BBD8]" /> Fuentes y Referencias Académicas
        </h4>
        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 print:text-slate-800">
          <li><strong>OWASP Top 10 (2021):</strong> Base teórica para la Explicación Técnica (A03:2021-Injection) y estándar de mitigación <em>Prepared Statements</em> (SQL Injection Prevention Cheat Sheet).</li>
          <li><strong>NIST & FIRST:</strong> Cálculo de la Severidad (8.5 ALTA) basado en el Common Vulnerability Scoring System (CWE-89).</li>
          <li><strong>PortSwigger Web Security Academy:</strong> Referencia para modelar el impacto de negocio y la sección de exfiltración.</li>
        </ul>
      </div>
    </div>
  </div>
);

const XSS = () => (
  <div className="animate-fade-in space-y-6 pb-8">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 rounded-2xl shadow-sm border border-orange-200 dark:border-orange-800">
        <Code size={32} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight text-orange-600 dark:text-orange-400">
        Cross-Site Scripting (XSS)
      </h2>
    </div>

    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1.5 transition-all duration-300 border border-slate-200 dark:border-slate-800 border-t-4 border-t-orange-500 print:shadow-none print:border-slate-300 print:border-t-orange-600 print:bg-white group">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800 dark:text-slate-100 print:text-black">
        <Terminal className="text-orange-500" /> Evidencia del Ataque (Reflejado)
      </h3>
      
      <div className="w-full bg-[#E0EEF5]/50 dark:bg-slate-950 rounded-xl border-2 border-dashed border-orange-200 dark:border-slate-700 p-8 flex flex-col items-center justify-center mb-6 group-hover:border-orange-400 transition-colors print:bg-white print:border-slate-300 print:p-4">
        <img src="/img/xss_garmau.png" alt="Evidencia XSS" className="max-w-full h-auto rounded shadow-lg group-hover:scale-[1.02] transition-transform duration-500 print:block print:shadow-none print:border print:border-slate-200"/>
      </div>

      <div className="bg-slate-800 dark:bg-black p-4 rounded-xl font-mono text-sm mb-8 border border-slate-700 shadow-inner flex items-center gap-3 overflow-x-auto print:bg-slate-100 print:border-slate-300">
        <Terminal size={16} className="text-slate-400 shrink-0 print:text-slate-700" />
        <span className="text-slate-300 select-none shrink-0 print:text-slate-800">Payload:</span>
        <span className="text-orange-400 font-bold shrink-0 print:text-orange-700">&lt;script&gt;alert('XSS en AFP Horizonte')&lt;/script&gt;</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-[#86BBD8]/10 dark:bg-slate-800/50 p-6 rounded-xl border border-[#33658A]/20 dark:border-slate-700/50 print:bg-white print:border-slate-300">
          <h4 className="text-lg font-bold mb-3 text-slate-800 dark:text-slate-100 print:text-black">Explicación Técnica</h4>
          <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed print:text-slate-800">
            El servidor recibe el input del usuario y lo "refleja" inmediatamente en el HTML sin codificar (Output Encoding). El navegador de la víctima no distingue el código inyectado y lo ejecuta dentro del contexto de confianza del sitio de la AFP, pensando que proviene de una fuente legítima.
          </p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-xl border border-orange-200 dark:border-orange-900/30 print:bg-white print:border-slate-300 hover:shadow-md transition-shadow">
          <h4 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400 flex items-center gap-2 print:text-orange-700"><ShieldAlert size={20}/> Datos en Peligro (Impacto)</h4>
          <p className="text-orange-800/80 dark:text-orange-300/80 text-sm mb-3 print:text-slate-800">El atacante opera dentro de la sesión de confianza del afiliado:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-orange-800/90 dark:text-orange-300/90 print:text-slate-800">
            <li><strong>Cookies de Sesión:</strong> Secuestro total de la cuenta (Session Hijacking).</li>
            <li><strong>Info en Pantalla:</strong> Lectura y exfiltración de saldos y rentabilidades.</li>
            <li><strong>Almacenamiento Local:</strong> Robo de tokens en LocalStorage/SessionStorage.</li>
            <li><strong>Keylogging:</strong> Captura de teclas si el atacante inyecta un formulario falso en la página.</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-800 dark:bg-slate-950 p-6 rounded-xl border border-slate-700 mb-8 text-white print:bg-white print:border-slate-300 print:text-black shadow-inner">
        <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-400 print:text-orange-700"><Activity size={24}/> Plan de Respuesta a Incidentes</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex gap-3 hover:translate-x-1 transition-transform">
            <div className="w-8 h-8 rounded bg-orange-900/50 flex items-center justify-center font-bold text-orange-300 shrink-0 border border-orange-700/50 print:bg-slate-200 print:border-none print:text-slate-800">1</div>
            <p className="text-sm text-slate-300 print:text-slate-800"><strong>Identificar & Corregir:</strong> Localizar el punto de entrada y aplicar codificación de salida HTML de inmediato.</p>
          </div>
          <div className="flex gap-3 hover:translate-x-1 transition-transform">
            <div className="w-8 h-8 rounded bg-orange-900/50 flex items-center justify-center font-bold text-orange-300 shrink-0 border border-orange-700/50 print:bg-slate-200 print:border-none print:text-slate-800">2</div>
            <p className="text-sm text-slate-300 print:text-slate-800"><strong>Invalidar Sesiones:</strong> Forzar el cierre de sesión masivo o de sospechosos para inutilizar cookies robadas.</p>
          </div>
          <div className="flex gap-3 hover:translate-x-1 transition-transform">
            <div className="w-8 h-8 rounded bg-orange-900/50 flex items-center justify-center font-bold text-orange-300 shrink-0 border border-orange-700/50 print:bg-slate-200 print:border-none print:text-slate-800">3</div>
            <p className="text-sm text-slate-300 print:text-slate-800"><strong>Analizar Logs:</strong> Buscar peticiones en el servidor que contengan el payload para detectar campañas de phishing.</p>
          </div>
          <div className="flex gap-3 hover:translate-x-1 transition-transform">
            <div className="w-8 h-8 rounded bg-orange-900/50 flex items-center justify-center font-bold text-orange-300 shrink-0 border border-orange-700/50 print:bg-slate-200 print:border-none print:text-slate-800">4</div>
            <p className="text-sm text-slate-300 print:text-slate-800"><strong>Comunicación:</strong> Opcionalmente alertar a los usuarios sobre correos sospechosos y recomendar cambio de claves.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="bg-orange-50 dark:bg-orange-900/10 text-orange-800 dark:text-orange-300 px-6 py-4 rounded-xl border border-orange-200 dark:border-orange-800/50 flex-1 min-w-[200px] shadow-sm print:bg-none print:bg-white print:border-slate-300 print:text-slate-900">
          <span className="block text-xs uppercase font-extrabold tracking-widest mb-1 opacity-80 print:text-slate-500">Puntaje CVSS 3.1</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black print:text-orange-700">6.1</span>
            <span className="text-lg font-bold print:text-orange-700">- MEDIA</span>
          </div>
          <span className="block text-[10px] mt-2 opacity-70 font-mono print:text-slate-500">CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N</span>
        </div>
        <div className="bg-[#86BBD8]/10 dark:bg-slate-800/30 px-6 py-4 rounded-xl border border-[#33658A]/30 dark:border-slate-700 flex-[2] min-w-[300px] shadow-sm print:bg-white print:border-slate-300 hover:shadow-md transition-shadow">
          <h4 className="text-[#33658A] dark:text-[#86BBD8] font-bold mb-2 flex items-center gap-2 print:text-slate-800"><ShieldCheck size={18}/> Medidas Preventivas (Defensa)</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300 print:text-slate-800">
            <li><strong>Output Encoding Contextual:</strong> Convertir caracteres peligrosos en entidades HTML seguras (`&lt;`).</li>
            <li><strong>Content Security Policy (CSP):</strong> Cabeceras estrictas HTTP para bloquear ejecución de `inline-scripts`.</li>
            <li><strong>Cookies Seguras:</strong> Usar banderas `HttpOnly` (bloquea JS) y `Secure` (solo HTTPS) en cookies de sesión.</li>
          </ul>
        </div>
      </div>

      {/* Referencias Académicas */}
      <div className="bg-slate-50 dark:bg-slate-800/30 p-5 rounded-xl border border-slate-200 dark:border-slate-700 print:bg-white print:border-slate-300">
        <h4 className="text-sm font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200 mb-2 print:text-black">
          <BookOpen size={16} className="text-[#33658A] dark:text-[#86BBD8]" /> Fuentes y Referencias Académicas
        </h4>
        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 print:text-slate-800">
          <li><strong>OWASP:</strong> Mecanismo de ataque (A03:2021) y políticas de saneamiento dictadas en el <em>Cross Site Scripting Prevention Cheat Sheet</em>.</li>
          <li><strong>NIST & FIRST:</strong> Puntaje 6.1 (CWE-79). Refleja un vector remoto con interacción del usuario (`UI:R`) y cambio de alcance al navegador (`S:C`).</li>
          <li><strong>MDN Web Docs (Mozilla):</strong> Base técnica para la implementación de <em>Content-Security-Policy</em> como mitigación.</li>
        </ul>
      </div>
    </div>
  </div>
);

const Comandos = () => (
  <div className="animate-fade-in space-y-6 pb-8">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 rounded-2xl shadow-sm border border-red-200 dark:border-red-800">
        <Terminal size={32} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight text-red-700 dark:text-red-400">
        Inyección de Comandos
      </h2>
    </div>

    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1.5 transition-all duration-300 border border-slate-200 dark:border-slate-800 border-t-4 border-t-red-700 print:shadow-none print:border-slate-300 print:border-t-red-700 print:bg-white group">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800 dark:text-slate-100 print:text-black">
        <Server className="text-red-600 dark:text-red-500" /> Evidencia del Ataque (OS Command)
      </h3>
      
      <div className="w-full bg-[#E0EEF5]/50 dark:bg-slate-950 rounded-xl border-2 border-dashed border-red-200 dark:border-slate-700 p-8 flex flex-col items-center justify-center mb-6 group-hover:border-red-400 transition-colors print:bg-white print:border-slate-300 print:p-4">
        <img src="/img/comandos_garmau.png" alt="Evidencia Comandos" className="max-w-full h-auto rounded shadow-lg group-hover:scale-[1.02] transition-transform duration-500 print:block print:shadow-none print:border print:border-slate-200"/>
      </div>

      <div className="bg-slate-800 dark:bg-black p-4 rounded-xl font-mono text-sm mb-8 border border-slate-700 shadow-inner flex items-center gap-3 overflow-x-auto print:bg-slate-100 print:border-slate-300">
        <Terminal size={16} className="text-slate-400 shrink-0 print:text-slate-700" />
        <span className="text-slate-300 select-none shrink-0 print:text-slate-800">Payload:</span>
        <span className="text-red-400 font-bold shrink-0 print:text-red-700">127.0.0.1; cat /etc/passwd</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-[#86BBD8]/10 dark:bg-slate-800/50 p-6 rounded-xl border border-[#33658A]/20 dark:border-slate-700/50 print:bg-white print:border-slate-300">
          <h4 className="text-lg font-bold mb-3 text-slate-800 dark:text-slate-100 print:text-black">Explicación Técnica</h4>
          <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed print:text-slate-800">
            La web toma una dirección IP e invoca un comando del sistema (`ping`) sin filtrar metacaracteres. Usando el punto y coma (`;` - delimitador Unix), el atacante termina el comando esperado e inicia uno nuevo (`cat /etc/passwd`) con los privilegios del servidor web, exponiendo información.
          </p>
        </div>
        <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-200 dark:border-red-900/30 print:bg-white print:border-slate-300 hover:shadow-md transition-shadow">
          <h4 className="text-lg font-bold mb-3 text-red-700 dark:text-red-400 flex items-center gap-2 print:text-red-700"><ShieldAlert size={20}/> Daño Estructural (Impacto)</h4>
          <p className="text-red-800/80 dark:text-red-300/80 text-sm mb-3 print:text-slate-800">Es el escenario más destructivo. Compromete la infraestructura web y de red:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-red-800/90 dark:text-red-300/90 print:text-slate-800">
            <li><strong>Control Total (Root):</strong> Escalada de privilegios en el OS base.</li>
            <li><strong>Archivos Core:</strong> Robo de código y credenciales de Base de Datos hardcodeadas.</li>
            <li><strong>Pivoteo Interno:</strong> Uso del servidor de "puente" para atacar redes de back-office.</li>
            <li><strong>Ransomware:</strong> Despliegue de malware paralizando la Denegación de Servicio (DoS).</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-800 dark:bg-slate-950 p-6 rounded-xl border border-slate-700 mb-8 text-white print:bg-white print:border-slate-300 print:text-black shadow-inner">
        <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-400 print:text-red-700"><Activity size={24}/> Plan de Respuesta a Incidentes</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex gap-3 hover:translate-x-1 transition-transform">
            <div className="w-8 h-8 rounded bg-red-900/50 flex items-center justify-center font-bold text-red-300 shrink-0 border border-red-700/50 print:bg-slate-200 print:border-none print:text-slate-800">1</div>
            <p className="text-sm text-slate-300 print:text-slate-800"><strong>Aislar de Inmediato:</strong> Desconectar la máquina de la red sin apagarla (para guardar la memoria RAM).</p>
          </div>
          <div className="flex gap-3 hover:translate-x-1 transition-transform">
            <div className="w-8 h-8 rounded bg-red-900/50 flex items-center justify-center font-bold text-red-300 shrink-0 border border-red-700/50 print:bg-slate-200 print:border-none print:text-slate-800">2</div>
            <p className="text-sm text-slate-300 print:text-slate-800"><strong>Forense (IOCs):</strong> Buscar en el historial del shell, procesos no autorizados y backdoors creados.</p>
          </div>
          <div className="flex gap-3 hover:translate-x-1 transition-transform">
            <div className="w-8 h-8 rounded bg-red-900/50 flex items-center justify-center font-bold text-red-300 shrink-0 border border-red-700/50 print:bg-slate-200 print:border-none print:text-slate-800">3</div>
            <p className="text-sm text-slate-300 print:text-slate-800"><strong>Reconstrucción:</strong> El SO está perdido. Levantar nueva infraestructura desde una "Golden Image" limpia.</p>
          </div>
          <div className="flex gap-3 hover:translate-x-1 transition-transform">
            <div className="w-8 h-8 rounded bg-red-900/50 flex items-center justify-center font-bold text-red-300 shrink-0 border border-red-700/50 print:bg-slate-200 print:border-none print:text-slate-800">4</div>
            <p className="text-sm text-slate-300 print:text-slate-800"><strong>Rotación Masiva:</strong> Rotar contraseñas, tokens y llaves API que estaban en el servidor vulnerado.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="bg-red-50 dark:bg-red-900/10 text-red-800 dark:text-red-300 px-6 py-4 rounded-xl border border-red-200 dark:border-red-800/50 flex-1 min-w-[200px] shadow-sm print:bg-none print:bg-white print:border-slate-300 print:text-slate-900">
          <span className="block text-xs uppercase font-extrabold tracking-widest mb-1 opacity-80 print:text-slate-500">Puntaje CVSS 3.1</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black print:text-red-700">9.8</span>
            <span className="text-lg font-bold print:text-red-700">- CRÍTICA</span>
          </div>
          <span className="block text-[10px] mt-2 opacity-70 font-mono print:text-slate-500">CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</span>
        </div>
        <div className="bg-[#86BBD8]/10 dark:bg-slate-800/30 px-6 py-4 rounded-xl border border-[#33658A]/30 dark:border-slate-700 flex-[2] min-w-[300px] shadow-sm print:bg-white print:border-slate-300 hover:shadow-md transition-shadow">
          <h4 className="text-[#33658A] dark:text-[#86BBD8] font-bold mb-2 flex items-center gap-2 print:text-slate-800"><ShieldCheck size={18}/> Medidas Preventivas (Defensa)</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300 print:text-slate-800">
            <li><strong>No invocar el Shell:</strong> Evitar `os.system()` o `exec()`. Usar APIs nativas del lenguaje de programación.</li>
            <li><strong>Validación Allow-list:</strong> Obligar formato exacto de entradas (Regex estricto para IPs).</li>
            <li><strong>Sandboxing:</strong> Contenerizar la app (Docker) aislando la ejecución del sistema operativo Host.</li>
            <li><strong>Mínimo Privilegio OS:</strong> Correr el proceso web con usuario restringido (no root).</li>
          </ul>
        </div>
      </div>

      {/* Referencias Académicas */}
      <div className="bg-slate-50 dark:bg-slate-800/30 p-5 rounded-xl border border-slate-200 dark:border-slate-700 print:bg-white print:border-slate-300">
        <h4 className="text-sm font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200 mb-2 print:text-black">
          <BookOpen size={16} className="text-[#33658A] dark:text-[#86BBD8]" /> Fuentes y Referencias Académicas
        </h4>
        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 print:text-slate-800">
          <li><strong>OWASP:</strong> Métodos de prevención extraídos del <em>OS Command Injection Defense Cheat Sheet</em>, destacando la prohibición de APIs de shell.</li>
          <li><strong>NIST & FIRST:</strong> Puntaje Crítico 9.8 (CWE-78). Vector que resulta en compromiso catastrófico sin privilegios (`PR:N`) ni interacción (`UI:N`).</li>
          <li><strong>MITRE ATT&CK:</strong> Utilizado para modelar las Técnicas (TTPs) descritas en la sección de daño estructural (Movimiento lateral / Pivoteo).</li>
        </ul>
      </div>
    </div>
  </div>
);

const Activos = () => (
  <div className="animate-fade-in space-y-6 pb-8">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-[#86BBD8]/30 dark:bg-[#86BBD8]/20 text-[#33658A] dark:text-[#86BBD8] rounded-2xl shadow-sm border border-[#33658A]/30">
        <Server size={32} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 dark:text-[#86BBD8]">
        Activos de Información y Riesgos
      </h2>
    </div>

    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-[#33658A]/30 dark:border-slate-800 mb-6 print:shadow-none print:border-slate-300 print:bg-white hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-slate-800 dark:text-slate-100 print:text-black">
        <ShieldCheck className="text-[#33658A]"/> Clasificación de la Información (CIA Triad)
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed print:text-slate-800">
        De acuerdo al giro comercial de AFP Horizonte, los activos gestionados se consideran <strong>Críticos</strong>. Su compromiso afecta directamente la <strong>Confidencialidad</strong> (datos personales sensibles regidos por la Ley 19.628), la <strong>Integridad</strong> (exactitud de los saldos previsionales) y la <strong>Disponibilidad</strong> (acceso 24/7 a la Sucursal Virtual).
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-[#33658A]/30 dark:border-slate-800 border-t-4 border-t-red-600 flex flex-col print:shadow-none print:border-slate-300 print:border-t-red-600 print:bg-white group">
        <Database className="text-red-500 mb-4 drop-shadow-md group-hover:scale-110 transition-transform print:drop-shadow-none" size={32} />
        <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100 print:text-black">Base de Datos de Afiliados</h3>
        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="text-[10px] bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 px-2 py-1 rounded font-bold uppercase tracking-wider">Confidencialidad: Crítica</span>
          <span className="text-[10px] bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 px-2 py-1 rounded font-bold uppercase tracking-wider">Integridad: Alta</span>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed print:text-slate-800">Repositorio centralizado con RUT, historial laboral, rentas imponibles mensuales y saldos acumulados de pensión (A-E).</p>
        <div className="bg-[#E0EEF5]/50 dark:bg-slate-800 p-4 rounded-xl text-sm text-slate-800 dark:text-slate-300 border border-[#33658A]/20 dark:border-slate-700 print:bg-white print:border-slate-300">
          <strong className="block mb-1 text-red-600 dark:text-red-400 flex items-center gap-1 print:text-red-700">
            <AlertTriangle size={14}/> Amenaza SQLi:
          </strong> 
          <span className="print:text-slate-800">Extracción masiva. Daño reputacional irreparable y sanciones legales severas.</span>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-[#33658A]/30 dark:border-slate-800 border-t-4 border-t-orange-500 flex flex-col print:shadow-none print:border-slate-300 print:border-t-orange-600 print:bg-white group">
        <Fingerprint className="text-orange-500 mb-4 drop-shadow-md group-hover:scale-110 transition-transform print:drop-shadow-none" size={32} />
        <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100 print:text-black">Sesiones de Usuario</h3>
        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="text-[10px] bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 px-2 py-1 rounded font-bold uppercase tracking-wider">Confidencialidad: Alta</span>
          <span className="text-[10px] bg-[#86BBD8]/30 text-[#33658A] dark:bg-[#86BBD8]/30 dark:text-[#E0EEF5] px-2 py-1 rounded font-bold uppercase tracking-wider">Disponibilidad: Alta</span>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed print:text-slate-800">Tokens de autenticación (JWT) y cookies que mantienen la identidad confiable de un afiliado activo en el portal.</p>
        <div className="bg-[#E0EEF5]/50 dark:bg-slate-800 p-4 rounded-xl text-sm text-slate-800 dark:text-slate-300 border border-[#33658A]/20 dark:border-slate-700 print:bg-white print:border-slate-300">
          <strong className="block mb-1 text-orange-600 dark:text-orange-400 flex items-center gap-1 print:text-orange-700">
            <AlertTriangle size={14}/> Amenaza XSS:
          </strong> 
          <span className="print:text-slate-800">Robo de sesión (Hijacking). Suplantación para acceder a cartolas y modificar datos.</span>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-[#33658A]/30 dark:border-slate-800 border-t-4 border-t-red-700 flex flex-col print:shadow-none print:border-slate-300 print:border-t-red-700 print:bg-white group">
        <Server className="text-red-600 dark:text-red-500 mb-4 drop-shadow-md group-hover:scale-110 transition-transform print:drop-shadow-none" size={32} />
        <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100 print:text-black">Infraestructura Web</h3>
        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="text-[10px] bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 px-2 py-1 rounded font-bold uppercase tracking-wider">Integridad: Crítica</span>
          <span className="text-[10px] bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 px-2 py-1 rounded font-bold uppercase tracking-wider">Disponibilidad: Crítica</span>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed print:text-slate-800">El hardware (físico/virtual) y el sistema operativo central que aloja la aplicación web y procesa la lógica transaccional.</p>
        <div className="bg-[#E0EEF5]/50 dark:bg-slate-800 p-4 rounded-xl text-sm text-slate-800 dark:text-slate-300 border border-[#33658A]/20 dark:border-slate-700 print:bg-white print:border-slate-300">
          <strong className="block mb-1 text-red-600 dark:text-red-400 flex items-center gap-1 print:text-red-700">
            <AlertTriangle size={14}/> Amenaza Cmd OS:
          </strong> 
          <span className="print:text-slate-800">Toma de control total. Denegación de servicio transaccional o Ransomware.</span>
        </div>
      </div>
    </div>
  </div>
);

const Matriz = () => {
  const riesgosData = [
    {
      id: 'cmd',
      vuln: 'Inyección de Comandos',
      cvss: '9.8',
      iconDesktop: <Terminal size={16} className="text-red-600 opacity-50 group-hover:opacity-100 print:opacity-100"/>,
      iconMobile: <Terminal size={24} className="text-white drop-shadow-md"/>,
      iconHeatmap: <Terminal size={16} className="text-white drop-shadow-sm"/>,
      activo: 'Infraestructura Web',
      prob: 5,
      imp: 5,
      riesgo: '25 (Extremo)',
      colorClass: 'bg-red-700 text-white shadow-red-700/30 print:shadow-none print:border print:border-red-700 print:text-red-800 print:bg-red-50'
    },
    {
      id: 'sqli',
      vuln: 'Inyección SQL',
      cvss: '8.5',
      iconDesktop: <Database size={16} className="text-red-500 opacity-50 group-hover:opacity-100 print:opacity-100"/>,
      iconMobile: <Database size={24} className="text-white drop-shadow-md"/>,
      iconHeatmap: <Database size={16} className="text-white drop-shadow-sm"/>,
      activo: 'Base de Datos',
      prob: 4,
      imp: 5,
      riesgo: '20 (Crítico)',
      colorClass: 'bg-red-500 text-white shadow-red-500/30 print:shadow-none print:border print:border-red-500 print:text-red-700 print:bg-red-50'
    },
    {
      id: 'xss',
      vuln: 'Cross-Site Scripting',
      cvss: '6.1',
      iconDesktop: <Code size={16} className="text-orange-500 opacity-50 group-hover:opacity-100 print:opacity-100"/>,
      iconMobile: <Code size={24} className="text-white drop-shadow-md"/>,
      iconHeatmap: <Code size={16} className="text-white drop-shadow-sm"/>,
      activo: 'Sesiones (Navegador)',
      prob: 5,
      imp: 3,
      riesgo: '15 (Alto)',
      colorClass: 'bg-orange-500 text-white shadow-orange-500/30 print:shadow-none print:border print:border-orange-500 print:text-orange-700 print:bg-orange-50'
    }
  ];

  const getCellColor = (i, p) => {
    const score = i * p;
    if (score >= 20) return 'bg-red-600 dark:bg-red-700';
    if (score >= 15) return 'bg-orange-500 dark:bg-orange-600';
    if (score >= 10) return 'bg-amber-400 dark:bg-amber-500';
    // Modificado para usar verde esmeralda y destacar del fondo celeste
    if (score >= 5) return 'bg-emerald-400 dark:bg-emerald-600';
    return 'bg-emerald-200 dark:bg-emerald-800/50';
  };

  const grid = [];
  for (let i = 5; i >= 1; i--) {
    const row = [];
    for (let p = 1; p <= 5; p++) {
      const vulnsHere = riesgosData.filter(r => r.prob === p && r.imp === i);
      row.push({ i, p, vulnsHere });
    }
    grid.push(row);
  }

  return (
    <div className="animate-fade-in space-y-6 pb-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-[#86BBD8]/30 dark:bg-[#86BBD8]/20 text-[#33658A] dark:text-[#86BBD8] rounded-2xl shadow-sm border border-[#33658A]/30">
          <Activity size={32} />
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 dark:text-[#86BBD8]">
          Matriz de Riesgos
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 mb-6">
        
        {/* COLUMNA IZQUIERDA: Mapa de Calor Compacto */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-[#33658A]/30 dark:border-slate-800 flex flex-col items-center justify-center print:shadow-none print:border-slate-300 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-100 print:text-black">
            <Activity className="text-[#33658A]" size={20}/> Mapa de Calor
          </h3>
          <div className="relative inline-flex flex-col bg-[#E0EEF5]/50 dark:bg-slate-950 p-4 md:p-6 rounded-2xl border border-[#33658A]/20 dark:border-slate-800 shadow-inner print:bg-white print:border-slate-300">
            <span className="absolute top-1/2 -left-5 md:-left-6 -translate-y-1/2 -rotate-90 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Impacto</span>
            
            <div className="grid grid-cols-5 gap-1.5 md:gap-2">
              {grid.map((row) => row.map((cell) => {
                const color = getCellColor(cell.i, cell.p);
                return (
                  <div key={`${cell.i}-${cell.p}`} className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center ${color} shadow border border-black/10 dark:border-white/5 relative group transition-transform duration-300 hover:scale-110 hover:z-10 print:border-slate-300 print:shadow-none`}>
                    {cell.vulnsHere.map((v) => (
                      <div key={v.id} className="absolute inset-0 flex items-center justify-center drop-shadow-md animate-pulse" title={v.vuln}>
                        {v.iconMobile}
                      </div>
                    ))}
                    {cell.vulnsHere.length === 0 && <span className="text-black/20 dark:text-white/20 text-[10px] font-bold print:text-slate-400">{cell.i * cell.p}</span>}
                  </div>
                )
              }))}
            </div>
            <span className="text-center mt-4 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Probabilidad</span>
          </div>
        </div>

        {/* COLUMNA DERECHA: Análisis de Priorización */}
        <div className="lg:col-span-7 bg-[#E0EEF5] dark:bg-black text-slate-900 dark:text-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#33658A]/30 dark:border-slate-800 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] print:bg-white print:border-slate-300 print:shadow-none print:text-black flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 print:text-black"><Activity className="text-[#33658A] dark:text-[#86BBD8] print:text-slate-800"/> Análisis de Priorización</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-start group">
              <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-600/30 text-red-700 dark:text-red-400 flex items-center justify-center font-black shrink-0 border border-red-300 dark:border-red-500/50 print:bg-red-50 print:text-red-700 print:border-red-300 text-sm group-hover:scale-110 transition-transform">1</div>
              <div>
                <h4 className="font-bold text-base text-red-700 dark:text-red-400 print:text-red-700">Riesgo 25 (Comandos OS)</h4>
                <p className="text-slate-800 dark:text-slate-300 text-xs mt-1 leading-relaxed print:text-slate-800">Puntuación CVSS máxima (9.8). La toma total del servidor es inminente. Requiere despliegue urgente en contenedores y saneamiento de inputs.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start group">
              <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center font-black shrink-0 border border-red-300 dark:border-red-500/30 print:bg-red-50 print:text-red-700 print:border-red-300 text-sm group-hover:scale-110 transition-transform">2</div>
              <div>
                <h4 className="font-bold text-base text-red-600 dark:text-red-400 print:text-red-700">Riesgo 20 (SQLi)</h4>
                <p className="text-slate-800 dark:text-slate-300 text-xs mt-1 leading-relaxed print:text-slate-800">Amenaza existencial directa para los datos financieros (CVSS 8.5). Debe mitigarse el mismo día aplicando consultas parametrizadas y WAF.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start group">
              <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 flex items-center justify-center font-black shrink-0 border border-orange-300 dark:border-orange-500/30 print:bg-orange-50 print:text-orange-700 print:border-orange-300 text-sm group-hover:scale-110 transition-transform">3</div>
              <div>
                <h4 className="font-bold text-base text-orange-700 dark:text-orange-400 print:text-orange-700">Riesgo 15 (XSS)</h4>
                <p className="text-slate-800 dark:text-slate-300 text-xs mt-1 leading-relaxed print:text-slate-800">Alta probabilidad de phishing a usuarios (CVSS 6.1). Exige Output Encoding en el próximo ciclo de desarrollo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENEDOR INFERIOR: Tabla / Tarjetas Móviles */}
      <div className="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-2xl shadow-sm border border-[#33658A]/30 dark:border-slate-800 hover:shadow-md transition-shadow print:shadow-none print:border-slate-300 print:p-0 print:bg-white">
        
        {/* VISTA MÓVIL: Formato Tarjetas */}
        <div className="md:hidden space-y-4 print:hidden">
          {riesgosData.map((r) => (
            <div key={`mobile-${r.id}`} className="bg-[#E0EEF5]/30 dark:bg-slate-800/50 p-4 rounded-xl border border-[#33658A]/20 dark:border-slate-700/50 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-base text-slate-800 dark:text-slate-200 mb-3 border-b border-[#33658A]/20 dark:border-slate-700 pb-2">
                {r.iconMobile} {r.vuln}
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Activo Afectado</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold text-right">{r.activo}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Probabilidad</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">{r.prob}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Impacto</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">{r.imp}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#33658A]/20 dark:border-slate-700">
                  <span className="text-slate-600 dark:text-slate-400 font-bold">Riesgo (P×I)</span>
                  <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full font-bold text-xs shadow-sm ${r.colorClass}`}>
                    {r.riesgo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VISTA DESKTOP y PDF: Tabla Clásica */}
        <div className="hidden md:block overflow-x-auto print:block">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#E0EEF5]/50 dark:bg-slate-800/50 border-b-2 border-[#33658A]/30 dark:border-slate-700 print:bg-slate-100 print:border-slate-300">
                <th className="p-4 font-bold text-slate-800 dark:text-slate-200 print:text-slate-900">Vulnerabilidad</th>
                <th className="p-4 font-bold text-slate-800 dark:text-slate-200 print:text-slate-900">Activo Afectado</th>
                <th className="p-4 font-bold text-center text-slate-800 dark:text-slate-200 print:text-slate-900">Probabilidad</th>
                <th className="p-4 font-bold text-center text-slate-800 dark:text-slate-200 print:text-slate-900">Impacto</th>
                <th className="p-4 font-bold text-center text-slate-800 dark:text-slate-200 print:text-slate-900">Riesgo (P×I)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#33658A]/20 dark:divide-slate-800 print:divide-slate-300">
              {riesgosData.map((r) => (
                <tr key={`desktop-${r.id}`} className="hover:bg-[#86BBD8]/10 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="p-4 font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 print:text-slate-800">
                    {r.iconDesktop} {r.vuln}
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 print:text-slate-800">{r.activo}</td>
                  <td className="p-4 text-center font-medium text-slate-800 dark:text-slate-300 print:text-slate-800">{r.prob}</td>
                  <td className="p-4 text-center font-medium text-slate-800 dark:text-slate-300 print:text-slate-800">{r.imp}</td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full font-bold text-xs shadow-sm ${r.colorClass}`}>
                      {r.riesgo}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Controles = () => (
  <div className="animate-fade-in space-y-6 pb-8">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-[#86BBD8]/30 dark:bg-[#86BBD8]/20 text-[#33658A] dark:text-[#86BBD8] rounded-2xl shadow-sm border border-[#33658A]/30">
        <Shield size={32} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 dark:text-[#86BBD8]">
        Defensa en Profundidad
      </h2>
    </div>

    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-[#33658A]/30 dark:border-slate-800 mb-6 print:shadow-none print:border-slate-300 print:bg-white hover:shadow-md transition-shadow">
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed print:text-slate-800">
        Para asegurar la continuity operativa y la protección de los ahorros de AFP Horizonte, la estrategia de seguridad no debe depender de una sola barrera. Se implementa un modelo de <strong>Defensa en Profundidad</strong> distribuido en tres capas fundamentales.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
      {/* CAPA 1: PREVENCIÓN */}
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-[#33658A]/30 dark:border-slate-800 border-t-4 border-t-[#33658A] relative flex flex-col print:shadow-none print:border-slate-300 print:border-t-slate-500 print:bg-white group">
        <div className="p-3 bg-[#E0EEF5] dark:bg-[#86BBD8]/20 text-[#33658A] dark:text-[#86BBD8] rounded-xl border border-[#33658A]/20 w-fit mb-4 print:bg-white print:border print:border-slate-300 group-hover:scale-110 transition-transform">
          <Code size={24} />
        </div>
        <h3 className="text-lg font-extrabold mb-4 text-slate-800 dark:text-slate-100 print:text-black">1. Prevención en Código</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 print:text-slate-600">Políticas aplicadas durante el ciclo de desarrollo de software (SDLC).</p>
        <ul className="space-y-4 text-sm mt-auto relative z-10">
          <li className="flex items-start gap-3">
            <CheckCircle size={16} className="text-[#33658A] dark:text-[#86BBD8] mt-0.5 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300 print:text-black"><strong>Pipeline DevSecOps:</strong> Análisis SAST automatizado en Git antes de cada pase a producción.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={16} className="text-[#33658A] dark:text-[#86BBD8] mt-0.5 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300 print:text-black"><strong>Parametrización:</strong> Prohibición absoluta de concatenación manual SQL; uso exclusivo de ORM.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={16} className="text-[#33658A] dark:text-[#86BBD8] mt-0.5 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300 print:text-black"><strong>Output Encoding:</strong> Librerías modernas que sanitizan automáticamente el texto renderizado en el HTML.</span>
          </li>
        </ul>
      </div>

      {/* CAPA 2: MITIGACIÓN */}
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-[#33658A]/30 dark:border-slate-800 border-t-4 border-t-[#33658A] relative flex flex-col print:shadow-none print:border-slate-300 print:border-t-slate-500 print:bg-white group">
        <div className="p-3 bg-[#E0EEF5] dark:bg-[#86BBD8]/20 text-[#33658A] dark:text-[#86BBD8] rounded-xl border border-[#33658A]/20 w-fit mb-4 print:bg-white print:border print:border-slate-300 group-hover:scale-110 transition-transform">
          <Network size={24} />
        </div>
        <h3 className="text-lg font-extrabold mb-4 text-slate-800 dark:text-slate-100 print:text-black">2. Mitigación Perimetral</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 print:text-slate-600">Defensas en la red para contener ataques en tiempo real.</p>
        <ul className="space-y-4 text-sm mt-auto relative z-10">
          <li className="flex items-start gap-3">
            <CheckCircle size={16} className="text-[#33658A] dark:text-[#86BBD8] mt-0.5 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300 print:text-black"><strong>WAF Activo:</strong> Firewall configurado con firmas OWASP para bloquear tráfico malicioso entrante.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={16} className="text-[#33658A] dark:text-[#86BBD8] mt-0.5 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300 print:text-black"><strong>Políticas CSP:</strong> Cabeceras estrictas que impiden la ejecución de scripts XSS no verificados.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={16} className="text-[#33658A] dark:text-[#86BBD8] mt-0.5 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300 print:text-black"><strong>Mínimo Privilegio:</strong> La aplicación opera con un rol de BD restringido y en contenedores sin permisos `root`.</span>
          </li>
        </ul>
      </div>

      {/* CAPA 3: MONITOREO */}
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-[#33658A]/30 dark:border-slate-800 border-t-4 border-t-[#33658A] relative flex flex-col md:col-span-2 lg:col-span-1 print:shadow-none print:border-slate-300 print:border-t-slate-500 print:bg-white group">
        <div className="p-3 bg-[#E0EEF5] dark:bg-[#86BBD8]/20 text-[#33658A] dark:text-[#86BBD8] rounded-xl border border-[#33658A]/20 w-fit mb-4 print:bg-white print:border print:border-slate-300 group-hover:scale-110 transition-transform">
          <Eye size={24} />
        </div>
        <h3 className="text-lg font-extrabold mb-4 text-slate-800 dark:text-slate-100 print:text-black">3. Monitoreo y Respuesta</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 print:text-slate-600">Visibilidad continua y reacción ante comportamientos anómalos.</p>
        <ul className="space-y-4 text-sm mt-auto relative z-10">
          <li className="flex items-start gap-3">
            <CheckCircle size={16} className="text-[#33658A] dark:text-[#86BBD8] mt-0.5 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300 print:text-black"><strong>Integración SIEM:</strong> Centralización de logs de aplicación y base de datos para análisis.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={16} className="text-[#33658A] dark:text-[#86BBD8] mt-0.5 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300 print:text-black"><strong>Alertas Automatizadas:</strong> Disparadores al detectar múltiples intentos fallidos de inyección.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={16} className="text-[#33658A] dark:text-[#86BBD8] mt-0.5 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300 print:text-black"><strong>Auditoría Continua:</strong> Pentesting periódico y simulaciones de Respuesta a Incidentes (Tabletops).</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const Recuperacion = () => (
  <div className="animate-fade-in space-y-6 pb-8">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-[#86BBD8]/30 dark:bg-[#86BBD8]/20 text-[#33658A] dark:text-[#86BBD8] rounded-2xl shadow-sm border border-[#33658A]/30">
        <Activity size={32} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 dark:text-[#86BBD8]">
        Recuperación (DRP)
      </h2>
    </div>

    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#33658A]/30 dark:border-slate-800 print:shadow-none print:border-slate-300 print:bg-white">
      <h3 className="text-xl font-extrabold mb-8 flex items-center gap-2 text-slate-800 dark:text-slate-100 print:text-black">
        <AlertTriangle className="text-[#33658A] dark:text-[#86BBD8]" /> Plan de Respuesta: Compromiso de Servidor
      </h3>
      <div className="space-y-6">
        <div className="flex gap-5 items-start p-4 hover:bg-[#E0EEF5]/50 dark:hover:bg-slate-800/50 rounded-xl transition-colors print:p-0 group">
          <div className="bg-[#33658A] text-white w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0 shadow-md print:bg-none print:bg-white print:text-slate-700 print:border print:border-slate-300 print:shadow-none group-hover:scale-110 transition-transform">1</div>
          <div>
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 print:text-black">Contención Inmediata</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed print:text-slate-800">Aislar el servidor comprometido de la red interna y de internet. No se debe apagar para permitir el análisis forense, pero debe detenerse la exfiltración.</p>
          </div>
        </div>
        <div className="flex gap-5 items-start p-4 hover:bg-[#E0EEF5]/50 dark:hover:bg-slate-800/50 rounded-xl transition-colors print:p-0 group">
          <div className="bg-[#33658A] text-white w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0 shadow-md print:bg-none print:bg-white print:text-slate-700 print:border print:border-slate-300 print:shadow-none group-hover:scale-110 transition-transform">2</div>
          <div>
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 print:text-black">Erradicación y Análisis</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed print:text-slate-800">Analizar logs del WAF/SIEM, identificar y parchear la vulnerabilidad en el código fuente y revocar forzosamente todas las sesiones de usuarios y contraseñas de servicio.</p>
          </div>
        </div>
        <div className="flex gap-5 items-start p-4 hover:bg-[#E0EEF5]/50 dark:hover:bg-slate-800/50 rounded-xl transition-colors print:p-0 group">
          <div className="bg-[#33658A] text-white w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0 shadow-md print:bg-none print:bg-white print:text-slate-700 print:border print:border-slate-300 print:shadow-none group-hover:scale-110 transition-transform">3</div>
          <div>
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 print:text-black">Recuperación Base</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed print:text-slate-800">Desplegar instancia limpia automatizada vía Infraestructura como Código (IaC). Restaurar base de datos desde respaldos inmutables de la última ventana segura.</p>
          </div>
        </div>
        <div className="flex gap-5 items-start p-4 hover:bg-[#E0EEF5]/50 dark:hover:bg-slate-800/50 rounded-xl transition-colors print:p-0 group">
          <div className="bg-[#33658A] text-white w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0 shadow-md print:bg-none print:bg-white print:text-slate-700 print:border print:border-slate-300 print:shadow-none group-hover:scale-110 transition-transform">4</div>
          <div>
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 print:text-black">Validación de Seguridad</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed print:text-slate-800">Ejecutar análisis DAST sobre la nueva infraestructura para comprobar el cierre de la brecha antes de restablecer el acceso a los afiliados.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-[#33658A] dark:bg-slate-900 text-white p-8 rounded-2xl shadow-lg border border-[#33658A] dark:border-slate-800 relative overflow-hidden mt-8 hover:-translate-y-1 transition-transform duration-300 print:bg-none print:bg-white print:border-slate-300 print:shadow-none print:text-black">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E0EEF5]/10 rounded-full blur-3xl print:hidden"></div>
      <h3 className="text-2xl font-extrabold mb-4 flex items-center gap-3 relative z-10 print:text-black"><Server className="text-[#E0EEF5] dark:text-[#86BBD8] print:text-slate-700"/> Mejora Tecnológica Estructural</h3>
      <div className="relative z-10">
        <p className="text-[#E0EEF5]/90 dark:text-slate-300 leading-relaxed text-base mb-4 font-medium print:text-slate-800">
          Migración a <span className="text-[#33658A] font-bold bg-[#E0EEF5] px-2 py-0.5 rounded print:bg-slate-100 print:text-slate-800 print:border print:border-slate-300">Contenedores (Docker)</span> y <span className="text-[#33658A] font-bold bg-[#E0EEF5] px-2 py-0.5 rounded print:bg-slate-100 print:text-slate-800 print:border print:border-slate-300">Microservicios orquestados</span>.
        </p>
        <p className="text-[#E0EEF5]/70 dark:text-slate-400 text-sm leading-relaxed print:text-slate-600">
          Justificación: Si ocurre una Inyección de Comandos, el atacante solo comprometerá el interior de un contenedor efímero aislado sin conexión al sistema operativo principal. El contenedor infectado puede ser destruido automáticamente por el orquestador y reemplazado por uno limpio en segundos, minimizando el impacto masivo.
        </p>
      </div>
    </div>
  </div>
);

const Prompts = () => (
  <div className="animate-fade-in space-y-6 pb-8">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-[#86BBD8]/30 dark:bg-[#86BBD8]/20 text-[#33658A] dark:text-[#86BBD8] rounded-2xl shadow-sm border border-[#33658A]/30">
        <Terminal size={32} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 dark:text-[#86BBD8]">
        Bitácora de IA
      </h2>
    </div>

    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-[#33658A]/30 dark:border-slate-800 space-y-8 hover:shadow-md transition-shadow print:shadow-none print:border-slate-300 print:bg-white">
      
      <div className="border-l-4 border-[#33658A] pl-6 py-1">
        <h3 className="text-lg font-extrabold mb-4 text-slate-800 dark:text-slate-200 print:text-black flex items-center gap-2">
          <Wrench className="text-[#33658A] dark:text-[#86BBD8]" size={20}/> Fase 1: Errores y Configuración
        </h3>
        <div className="bg-[#E0EEF5]/30 dark:bg-slate-950 p-5 rounded-xl border border-[#33658A]/20 dark:border-slate-800 mb-4 font-mono text-sm text-slate-700 dark:text-slate-400 print:bg-white print:border-slate-300 print:text-slate-800">
          <span className="font-bold text-[#33658A] dark:text-[#86BBD8]">Prompt:</span> Consulta para la resolución del error de compilación `useState is not defined` y posterior falla en la renderización de los estilos de Tailwind CSS.
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 flex gap-2 print:text-slate-800">
          <CheckCircle size={18} className="text-[#33658A] dark:text-[#86BBD8] shrink-0 mt-0.5" />
          <span><strong>Ajustes:</strong> La IA identificó la ausencia de las importaciones de React y la falta de inicialización de Tailwind v4. Se ajustaron los archivos `vite.config.js` y `index.css`. Posteriormente, se corrigió un error de sintaxis específico de la versión 4 de Tailwind (`@custom-variant`) para habilitar correctamente el modo oscuro.</span>
        </p>
      </div>

      <div className="border-l-4 border-[#33658A] pl-6 py-1">
        <h3 className="text-lg font-extrabold mb-4 text-slate-800 dark:text-slate-200 print:text-black flex items-center gap-2">
          <PenTool className="text-[#33658A] dark:text-[#86BBD8]" size={20}/> Fase 2: Diseño UI/UX
        </h3>
        <div className="bg-[#E0EEF5]/30 dark:bg-slate-950 p-5 rounded-xl border border-[#33658A]/20 dark:border-slate-800 mb-4 font-mono text-sm text-slate-700 dark:text-slate-400 print:bg-white print:border-slate-300 print:text-slate-800">
          <span className="font-bold text-[#33658A] dark:text-[#86BBD8]">Prompt:</span> "Quiero que le agregues colores distintivos a las cajas, bordes, sombras y efectos para que se vea un poco más interactiva, quiero que la página sea diferente y profesional. También reubica el apartado del código QR y enlaces."
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 flex gap-2 print:text-slate-800">
          <CheckCircle size={18} className="text-[#33658A] dark:text-[#86BBD8] shrink-0 mt-0.5" />
          <span><strong>Ajustes:</strong> Se generó un diseño "Premium" aplicando gradientes, efectos de elevación (*hover*) y colores semánticos basados en la severidad de los riesgos. Se reubicó el panel del auditor hacia el menú lateral para maximizar el espacio de lectura.</span>
        </p>
      </div>

      <div className="border-l-4 border-[#33658A] pl-6 py-1">
        <h3 className="text-lg font-extrabold mb-4 text-slate-800 dark:text-slate-200 print:text-black flex items-center gap-2">
          <Cpu className="text-[#33658A] dark:text-[#86BBD8]" size={20}/> Fase 3: Exportación y Responsive
        </h3>
        <div className="bg-[#E0EEF5]/30 dark:bg-slate-950 p-5 rounded-xl border border-[#33658A]/20 dark:border-slate-800 mb-4 font-mono text-sm text-slate-700 dark:text-slate-400 print:bg-white print:border-slate-300 print:text-slate-800">
          <span className="font-bold text-[#33658A] dark:text-[#86BBD8]">Prompt:</span> "La descarga del PDF solo muestra una página, necesito el informe completo. Además, la matriz de riesgo se ve como una tabla con desplazamiento lateral en el celular y el menú se superpone."
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 flex gap-2 print:text-slate-800">
          <CheckCircle size={18} className="text-[#33658A] dark:text-[#86BBD8] shrink-0 mt-0.5" />
          <span><strong>Ajustes:</strong> Se implementó una solución nativa de impresión (`window.print()`) con clases de Tailwind ocultas. Además, se reprogramó la matriz de riesgos transformando la tabla en "Tarjetas" dinámicas en dispositivos móviles, eliminando el scroll horizontal.</span>
        </p>
      </div>

      <div className="bg-[#E0EEF5]/50 dark:bg-[#86BBD8]/10 p-6 rounded-2xl border border-[#33658A]/30 mt-8 print:bg-white print:border-slate-300">
        <h4 className="font-extrabold mb-3 text-[#33658A] dark:text-[#86BBD8] flex items-center gap-2 print:text-slate-800">
          <Terminal size={20} className="text-[#33658A] dark:text-[#86BBD8]"/> Reflexión del uso de IA
        </h4>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed print:text-slate-800">
          La Inteligencia Artificial ha demostrado ser un recurso invaluable para el desarrollo ágil de software, permitiendo materializar arquitecturas complejas de React y Tailwind CSS en tiempos reducidos. Sin embargo, este proceso también evidenció sus limitaciones: la IA generó conflictos de versionamiento (como la sintaxis obsoleta de Tailwind v4) y errores de dependencias (importaciones de íconos inexistentes que rompieron la vista). Estos incidentes reafirman que la IA no reemplaza al desarrollador, sino que actúa como copiloto; exige una revisión crítica constante y un manejo preciso (*Prompt Engineering*) para asegurar la calidad en un entorno real.
        </p>
      </div>

    </div>
  </div>
);


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
    { id: 'resumen', label: 'Resumen Ejecutivo', icon: <FileText size={20} /> },
    { id: 'sqli', label: 'Inyección SQL', icon: <Database size={20} /> },
    { id: 'xss', label: 'Cross-Site Scripting', icon: <Code size={20} /> },
    { id: 'comandos', label: 'Inyección Cmd (OS)', icon: <Terminal size={20} /> },
    { id: 'activos', label: 'Activos Críticos', icon: <Server size={20} /> },
    { id: 'matriz', label: 'Matriz de Riesgos', icon: <Activity size={20} /> },
    { id: 'controles', label: 'Controles y Defensas', icon: <Shield size={20} /> },
    { id: 'recuperacion', label: 'Plan DRP', icon: <Activity size={20} /> },
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
    <div className={`h-[100dvh] font-sans transition-colors duration-500 flex flex-col md:flex-row ${darkMode ? 'bg-[#0b1120] text-slate-100' : 'bg-[#E0EEF5] text-slate-900'} print:bg-white print:text-black print:h-auto`}>
      
      {/* Botón menú móvil (se oculta al imprimir) */}
      <div className="md:hidden p-4 flex justify-between items-center bg-white dark:bg-slate-900 shadow-md border-b border-[#33658A]/30 dark:border-slate-800 z-30 shrink-0 print:hidden">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight text-slate-800 dark:text-white">
          <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0">
            <img src="/img/logo.png" alt="Logo AFP" className="w-full h-full object-cover" />
          </div>
          Auditoría AFP
        </div>
        <button onClick={() => setSidebarOpen(true)} className="p-2 bg-[#E0EEF5] dark:bg-slate-800 rounded-lg text-[#33658A] dark:text-slate-300 transition-colors border border-[#33658A]/30 dark:border-slate-700">
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay oscuro para móvil al abrir el menú */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 dark:bg-black/60 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar de Navegación (se oculta al imprimir) */}
      <aside className={`
        print:hidden
        fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        bg-white dark:bg-slate-900 border-r border-[#33658A]/30 dark:border-slate-800 shadow-2xl md:shadow-none flex flex-col shrink-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 flex items-center justify-between md:justify-start gap-4 border-b border-[#33658A]/30 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-sm bg-[#E0EEF5] border border-[#33658A]/30">
              <img src="/img/logo.png" alt="Logo AFP" className="w-full h-full object-contain p-1" />
            </div>
            <div>
              <h1 className="font-extrabold text-xl tracking-tight leading-tight text-slate-800 dark:text-white">Auditoría Sec</h1>
              <p className="text-xs text-[#33658A] dark:text-[#86BBD8] font-bold uppercase tracking-widest mt-0.5">AFP Horizonte</p>
            </div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden p-2 text-[#33658A] hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-[#E0EEF5] dark:bg-slate-800 rounded-lg transition-colors">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false); // Cierra menú móvil al clickear
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 group
                  ${isActive 
                    ? 'bg-[#86BBD8]/20 text-[#33658A] dark:bg-[#86BBD8]/20 dark:text-[#E0EEF5] shadow-sm border-l-4 border-[#33658A]' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-[#86BBD8]/10 dark:hover:bg-slate-800/50 hover:pl-6'}
                `}
              >
                <span className={`${isActive ? 'scale-110' : 'group-hover:scale-110'} transition-transform duration-300`}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Zona inferior del menú: Info y Modo Oscuro */}
        <div className="p-4 border-t border-[#33658A]/30 dark:border-slate-800 bg-[#E0EEF5]/50 dark:bg-slate-900/50 flex flex-col gap-4 shrink-0">
          
          {/* Fila de Botones: Tema, GitHub, PDF */}
          <div className="flex gap-2 w-full">
            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
              className="flex-1 flex justify-center items-center p-2.5 bg-white dark:bg-slate-800 border border-[#33658A]/30 dark:border-slate-700 shadow-sm hover:shadow hover:bg-[#86BBD8]/20 text-[#33658A] dark:text-slate-300 rounded-xl dark:hover:text-[#86BBD8] transition-all duration-300"
            >
              {darkMode ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} className="text-[#33658A]" />}
            </button>

            <a href="https://github.com/mandresgarridoc-arch" target="_blank" rel="noreferrer" title="Mi perfil Github" className="flex-1 flex justify-center items-center p-2.5 bg-white dark:bg-slate-800 border border-[#33658A]/30 dark:border-slate-700 shadow-sm hover:shadow hover:bg-[#86BBD8]/20 text-[#33658A] dark:text-slate-300 rounded-xl dark:hover:text-[#86BBD8] transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
            
            <button 
              onClick={() => window.print()} 
              title="Descargar Informe PDF" 
              className="flex-1 flex justify-center items-center p-2.5 bg-white dark:bg-slate-800 border border-[#33658A]/30 dark:border-slate-700 shadow-sm hover:shadow hover:bg-[#86BBD8]/20 text-[#33658A] dark:text-slate-300 rounded-xl dark:hover:text-[#86BBD8] transition-all duration-300"
            >
              <Download size={18} />
            </button>
          </div>

          {/* Tarjeta de Info y QR Compacta */}
          <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800/80 border border-[#33658A]/30 dark:border-slate-700/80 shadow-inner rounded-xl w-full">
            <div className="flex flex-col overflow-hidden pr-2">
              <span className="text-[10px] font-extrabold text-[#33658A] dark:text-[#86BBD8] uppercase tracking-widest block mb-0.5">
                Auditor
              </span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                Mauricio Garrido
              </span>
              <span className="text-[10px] text-slate-600 dark:text-slate-500 flex items-center gap-1 mt-1">
                <QrCode size={10} /> Escanea la App
              </span>
            </div>
            <div className="shrink-0 p-1.5 bg-white dark:bg-slate-100 rounded-lg shadow-sm border border-[#33658A]/30 hover:scale-105 transition-transform duration-300">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://auditoria-garmau.vercel.app&color=33658A&bgcolor=ffffff`} 
                alt="QR Code" 
                className="w-12 h-12 md:w-14 md:h-14"
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Área Principal */}
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden relative print:overflow-visible print:block">
        
        {/* Contenedor del contenido escroleable interno */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 scroll-smooth relative z-10 print:overflow-visible print:p-0 print:m-0 custom-scrollbar">
          <div className="max-w-4xl mx-auto">
            
            {/* VISTA DE PANTALLA: Muestra solo la sección activa (Se oculta en el PDF) */}
            <div className="print:hidden">
              {renderContent()}
            </div>

            {/* VISTA DE PDF: Muestra todo el informe secuencial (Oculto en pantalla) */}
            <div className="hidden print:block print:text-black">
              {/* Portada del Documento PDF */}
              <div className="print:mb-12">
                <div className="text-center mb-16 border-b-4 border-[#33658A] pb-8 mt-12">
                  <img src="/img/logo.png" alt="Logo AFP Horizonte" className="w-24 h-24 mx-auto mb-6 object-contain" />
                  <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Informe de Auditoría de Seguridad</h1>
                  <h2 className="text-3xl font-bold text-slate-600">AFP Horizonte</h2>
                  <p className="mt-12 text-lg text-slate-500 font-bold uppercase tracking-widest">Auditor Asignado</p>
                  <p className="text-2xl font-semibold text-slate-800">Mauricio Garrido</p>
                </div>
                <Resumen />
              </div>
              
              {/* Cada sección fuerza un salto de página para verse ordenado */}
              <div className="print:break-before-page print:pt-8"><InyeccionSQL /></div>
              <div className="print:break-before-page print:pt-8"><XSS /></div>
              <div className="print:break-before-page print:pt-8"><Comandos /></div>
              <div className="print:break-before-page print:pt-8"><Activos /></div>
              <div className="print:break-before-page print:pt-8"><Matriz /></div>
              <div className="print:break-before-page print:pt-8"><Controles /></div>
              <div className="print:break-before-page print:pt-8"><Recuperacion /></div>
              <div className="print:break-before-page print:pt-8"><Prompts /></div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}