import React, { useState, useEffect } from 'react';
import { 
  Shield, Database, Code, Terminal, 
  Server, AlertTriangle, Lock, Activity, Moon, Sun, 
  QrCode, Download, Menu, X, FileText, CheckCircle, Zap
} from 'lucide-react';

// --- COMPONENTES DE SECCIÓN ---

const Resumen = () => (
  <div className="animate-fade-in space-y-6 pb-8">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-2xl shadow-sm border border-blue-200 dark:border-blue-800">
        <FileText size={32} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-300">
        Resumen de la Auditoría
      </h2>
    </div>
    
    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 border border-slate-200 dark:border-slate-800 border-l-4 border-l-blue-500 group print:border-l-blue-600 print:shadow-none">
      <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">AFP Horizonte</h3>
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-1 flex items-center gap-2">
            <Shield size={16} /> Sector Financiero / Previsión y Administración de Fondos
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-bold mt-2 mb-3 flex items-center gap-2">
            <Server size={20} className="text-indigo-500" /> Descripción del Portal de Clientes
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
          <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
            <Activity size={20} className="text-emerald-500" /> Objetivo de la Auditoría
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
      <h2 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500 dark:from-red-400 dark:to-orange-300">
        Inyección SQL (SQLi)
      </h2>
    </div>

    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-800 border-t-4 border-t-red-500 print:shadow-none print:border-slate-300 print:border-t-red-600">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 print:text-black">
        <Code className="text-red-500" /> Evidencia del Ataque
      </h3>
      
      <div className="w-full bg-slate-50 dark:bg-slate-950 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-8 flex flex-col items-center justify-center mb-6 group-hover:border-red-300 dark:group-hover:border-red-800 transition-colors print:bg-white print:border-slate-300 print:p-4">
        <img 
          src="/img/sqli_garmau.png" 
          alt="Evidencia SQLi" 
          className="max-w-full h-auto rounded shadow-lg group-hover:scale-[1.02] transition-transform duration-500 print:block print:shadow-none print:border print:border-slate-200" 
        />
      </div>

      <div className="bg-slate-900 dark:bg-black p-4 rounded-xl font-mono text-sm mb-8 border border-slate-700 shadow-inner flex items-center gap-3 overflow-x-auto print:bg-slate-100 print:border-slate-300">
        <Terminal size={16} className="text-slate-500 print:text-slate-700" />
        <span className="text-slate-400 select-none print:text-slate-800">Payload:</span>
        <span className="text-red-400 font-bold print:text-red-700">' OR '1'='1</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700/50 print:bg-white print:border-slate-300">
          <h4 className="text-lg font-bold mb-3 flex items-center gap-2 print:text-black"><Zap size={20} className="text-amber-500"/> Explicación Técnica</h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed print:text-slate-800">
            La Inyección SQL permite interferir en las consultas a la base de datos. En el entorno, la aplicación toma la entrada del usuario y la concatena directamente. Al introducir el payload, el atacante "cierra" la consulta original y añade una condición siempre verdadera (1=1), engañando a la base de datos para que devuelva todos los registros.
          </p>
        </div>
        <div className="bg-red-50 dark:bg-red-900/10 p-5 rounded-xl border border-red-100 dark:border-red-900/30 print:bg-white print:border-slate-300">
          <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-red-700 dark:text-red-400 print:text-red-700"><AlertTriangle size={20}/> Impacto en AFP Horizonte</h4>
          <p className="text-red-800/80 dark:text-red-300/80 text-sm leading-relaxed print:text-slate-800">
            Un atacante podría extraer la base de datos completa exponiendo RUT, nombres, rentas mensuales y saldos de fondos de pensión. Resultaría en robo de identidad, fraudes financieros y pérdida total de confianza, además de sanciones de la Superintendencia de Pensiones.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/40 dark:to-red-900/10 text-red-800 dark:text-red-300 px-6 py-4 rounded-xl border border-red-200 dark:border-red-800/50 flex-1 min-w-[200px] shadow-sm print:bg-none print:bg-white print:border-slate-300 print:text-slate-900">
          <span className="block text-xs uppercase font-extrabold tracking-widest mb-1 opacity-80 print:text-slate-500">Puntaje CVSS 3.1</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black print:text-red-700">8.5</span>
            <span className="text-lg font-bold print:text-red-700">- ALTA</span>
          </div>
          <span className="block text-[10px] mt-2 opacity-70 font-mono print:text-slate-500">CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:N</span>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/10 text-emerald-800 dark:text-emerald-400 px-6 py-4 rounded-xl border border-emerald-200 dark:border-emerald-800/50 flex-1 min-w-[200px] shadow-sm flex flex-col justify-center print:bg-none print:bg-white print:border-slate-300 print:text-slate-900">
          <span className="block text-xs uppercase font-extrabold tracking-widest mb-1 opacity-80 print:text-slate-500">Defensa Principal</span>
          <span className="text-2xl font-bold print:text-emerald-700">Consultas Parametrizadas</span>
        </div>
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
      <h2 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-300">
        Cross-Site Scripting (XSS)
      </h2>
    </div>

    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-800 border-t-4 border-t-orange-500 print:shadow-none print:border-slate-300 print:border-t-orange-600">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 print:text-black">
        <Terminal className="text-orange-500" /> Evidencia del Ataque (Reflejado)
      </h3>
      
      <div className="w-full bg-slate-50 dark:bg-slate-950 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-8 flex flex-col items-center justify-center mb-6 hover:border-orange-300 dark:hover:border-orange-800 transition-colors print:bg-white print:border-slate-300 print:p-4">
        <img 
          src="/img/xss_garmau.png" 
          alt="Evidencia XSS" 
          className="max-w-full h-auto rounded shadow-lg print:block print:shadow-none print:border print:border-slate-200"
        />
      </div>

      <div className="bg-slate-900 dark:bg-black p-4 rounded-xl font-mono text-sm mb-8 border border-slate-700 shadow-inner flex items-center gap-3 overflow-x-auto print:bg-slate-100 print:border-slate-300">
        <Terminal size={16} className="text-slate-500 shrink-0 print:text-slate-700" />
        <span className="text-slate-400 select-none shrink-0 print:text-slate-800">Payload:</span>
        <span className="text-orange-400 font-bold shrink-0 print:text-orange-700">&lt;script&gt;alert('XSS en AFP Horizonte')&lt;/script&gt;</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700/50 print:bg-white print:border-slate-300">
          <h4 className="text-lg font-bold mb-3 print:text-black">Explicación Técnica</h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed print:text-slate-800">
            El servidor recibe el input del usuario y lo "refleja" inmediatamente en el HTML sin codificar (Output Encoding). El navegador de la víctima no puede distinguir entre el código legítimo y el inyectado, ejecutando el script malicioso en su sesión local.
          </p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/10 p-5 rounded-xl border border-orange-100 dark:border-orange-900/30 print:bg-white print:border-slate-300">
          <h4 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400 print:text-orange-700">Impacto en AFP Horizonte</h4>
          <p className="text-orange-800/80 dark:text-orange-300/80 text-sm leading-relaxed print:text-slate-800">
            Permite el Robo de Sesión (Session Hijacking). Un atacante podría suplantar al afiliado mediante phishing, acceder a la "Sucursal Virtual", ver sus datos laborales o modificar cuentas bancarias para el retiro de excedentes.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <div className="bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/10 text-orange-800 dark:text-orange-300 px-6 py-4 rounded-xl border border-orange-200 dark:border-orange-800/50 flex-1 min-w-[200px] shadow-sm print:bg-none print:bg-white print:border-slate-300 print:text-slate-900">
          <span className="block text-xs uppercase font-extrabold tracking-widest mb-1 opacity-80 print:text-slate-500">Puntaje CVSS 3.1</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black print:text-orange-700">6.1</span>
            <span className="text-lg font-bold print:text-orange-700">- MEDIA</span>
          </div>
          <span className="block text-[10px] mt-2 opacity-70 font-mono print:text-slate-500">CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N</span>
        </div>
      </div>
    </div>
  </div>
);

const Comandos = () => (
  <div className="animate-fade-in space-y-6 pb-8">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-2xl shadow-sm border border-purple-200 dark:border-purple-800">
        <Terminal size={32} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-500 dark:from-purple-400 dark:to-fuchsia-300">
        Inyección de Comandos
      </h2>
    </div>

    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-800 border-t-4 border-t-purple-500 print:shadow-none print:border-slate-300 print:border-t-purple-600">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 print:text-black">
        <Server className="text-purple-500" /> Evidencia del Ataque (OS Command)
      </h3>
      
      <div className="w-full bg-slate-50 dark:bg-slate-950 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-8 flex flex-col items-center justify-center mb-6 hover:border-purple-300 dark:hover:border-purple-800 transition-colors print:bg-white print:border-slate-300 print:p-4">
        <img 
          src="/img/comandos_garmau.png" 
          alt="Evidencia Comandos" 
          className="max-w-full h-auto rounded shadow-lg print:block print:shadow-none print:border print:border-slate-200"
        />
      </div>

      <div className="bg-slate-900 dark:bg-black p-4 rounded-xl font-mono text-sm mb-8 border border-slate-700 shadow-inner flex items-center gap-3 overflow-x-auto print:bg-slate-100 print:border-slate-300">
        <Terminal size={16} className="text-slate-500 shrink-0 print:text-slate-700" />
        <span className="text-slate-400 select-none shrink-0 print:text-slate-800">Payload:</span>
        <span className="text-purple-400 font-bold shrink-0 print:text-purple-700">127.0.0.1; cat /etc/passwd</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700/50 print:bg-white print:border-slate-300">
          <h4 className="text-lg font-bold mb-3 print:text-black">Explicación Técnica</h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed print:text-slate-800">
            La aplicación web toma una dirección IP e invoca directamente un comando del sistema subyacente (como ping) sin filtrar caracteres especiales. Usando el punto y coma (;), el atacante termina el comando original e inicia uno nuevo con los privileges del servidor web.
          </p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/10 p-5 rounded-xl border border-purple-100 dark:border-purple-900/30 print:bg-white print:border-slate-300">
          <h4 className="text-lg font-bold mb-3 text-purple-700 dark:text-purple-400 print:text-purple-700">Impacto en AFP Horizonte</h4>
          <p className="text-purple-800/80 dark:text-purple-300/80 text-sm leading-relaxed print:text-slate-800">
            Toma total de control de la infraestructura transaccional. El atacante podría instalar backdoors, pivotar hacia redes internas o bases de datos de fondos de pensión, o desplegar Ransomware paralizando las operaciones a nivel nacional.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <div className="bg-gradient-to-br from-purple-50 to-fuchsia-100 dark:from-purple-900/40 dark:to-fuchsia-900/10 text-purple-800 dark:text-purple-300 px-6 py-4 rounded-xl border border-purple-200 dark:border-purple-800/50 flex-1 min-w-[200px] shadow-sm print:bg-none print:bg-white print:border-slate-300 print:text-slate-900">
          <span className="block text-xs uppercase font-extrabold tracking-widest mb-1 opacity-80 print:text-slate-500">Puntaje CVSS 3.1</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black print:text-purple-700">9.8</span>
            <span className="text-lg font-bold print:text-purple-700">- CRÍTICA</span>
          </div>
          <span className="block text-[10px] mt-2 opacity-70 font-mono print:text-slate-500">CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</span>
        </div>
      </div>
    </div>
  </div>
);

const Activos = () => (
  <div className="animate-fade-in space-y-6 pb-8">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-2xl shadow-sm border border-emerald-200 dark:border-emerald-800">
        <Server size={32} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
        Activos y Riesgos
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-800 border-t-4 border-t-emerald-500 flex flex-col print:shadow-none print:border-slate-300 print:border-t-emerald-600">
        <Database className="text-emerald-500 mb-6 drop-shadow-md print:drop-shadow-none" size={40} />
        <h3 className="text-xl font-bold mb-3 print:text-black">Base de Datos de Afiliados</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed print:text-slate-800">Repositorio central que contiene RUT, nombres, historial laboral, rentas imponibles y saldos de fondos de pensión (A-E).</p>
        <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl text-sm text-red-800 dark:text-red-300 border border-red-100 dark:border-red-900/30 print:bg-white print:border-slate-300">
          <strong className="block mb-1 flex items-center gap-2 print:text-red-700">
            <span className="relative flex h-3 w-3 print:hidden">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Riesgo Crítico (SQLi):
          </strong> <span className="print:text-slate-800">Extracción masiva. Daño reputacional y sanciones legales.</span>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-800 border-t-4 border-t-blue-500 flex flex-col print:shadow-none print:border-slate-300 print:border-t-blue-600">
        <Lock className="text-blue-500 mb-6 drop-shadow-md print:drop-shadow-none" size={40} />
        <h3 className="text-xl font-bold mb-3 print:text-black">Sesiones de Usuario</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed print:text-slate-800">Tokens de autenticación JWT y cookies que validan la identidad dentro de la "Sucursal Virtual".</p>
        <div className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded-xl text-sm text-orange-800 dark:text-orange-300 border border-orange-100 dark:border-orange-900/30 print:bg-white print:border-slate-300">
          <strong className="block mb-1 flex items-center gap-1 print:text-orange-700"><AlertTriangle size={14}/> Riesgo Alto (XSS):</strong> <span className="print:text-slate-800">Robo de sesión. Suplantación de identidad y fraude de excedentes.</span>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-800 border-t-4 border-t-purple-500 flex flex-col print:shadow-none print:border-slate-300 print:border-t-purple-600">
        <Terminal className="text-purple-500 mb-6 drop-shadow-md print:drop-shadow-none" size={40} />
        <h3 className="text-xl font-bold mb-3 print:text-black">Infraestructura Web</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed print:text-slate-800">Servidor físico/virtual y sistema operativo base que procesa la lógica transaccional del negocio.</p>
        <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl text-sm text-purple-800 dark:text-purple-300 border border-purple-100 dark:border-purple-900/30 print:bg-white print:border-slate-300">
          <strong className="block mb-1 flex items-center gap-2 print:text-purple-700">
            <span className="relative flex h-3 w-3 print:hidden">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            Riesgo Crítico (OS Cmd):
          </strong> <span className="print:text-slate-800">Toma de control. Ransomware o infiltración a redes internas.</span>
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
      iconDesktop: <Terminal size={16} className="text-purple-500 opacity-50 group-hover:opacity-100 print:opacity-100"/>,
      iconMobile: <Terminal size={18} className="text-purple-500"/>,
      activo: 'Infraestructura Web',
      prob: '3',
      imp: '5',
      riesgo: '15 (Alto)',
      colorClass: 'bg-orange-500 text-white shadow-orange-500/30 print:shadow-none print:border print:border-orange-500 print:text-orange-700 print:bg-orange-50'
    },
    {
      id: 'sqli',
      vuln: 'Inyección SQL',
      iconDesktop: <Database size={16} className="text-red-500 opacity-50 group-hover:opacity-100 print:opacity-100"/>,
      iconMobile: <Database size={18} className="text-red-500"/>,
      activo: 'Base de Datos',
      prob: '4',
      imp: '5',
      riesgo: '20 (Crítico)',
      colorClass: 'bg-red-600 text-white shadow-red-600/30 print:shadow-none print:border print:border-red-600 print:text-red-700 print:bg-red-50'
    },
    {
      id: 'xss',
      vuln: 'Cross-Site Scripting',
      iconDesktop: <Code size={16} className="text-orange-500 opacity-50 group-hover:opacity-100 print:opacity-100"/>,
      iconMobile: <Code size={18} className="text-orange-500"/>,
      activo: 'Sesiones (Navegador)',
      prob: '5',
      imp: '3',
      riesgo: '15 (Alto)',
      colorClass: 'bg-orange-500 text-white shadow-orange-500/30 print:shadow-none print:border print:border-orange-500 print:text-orange-700 print:bg-orange-50'
    }
  ];

  return (
    <div className="animate-fade-in space-y-6 pb-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 rounded-2xl shadow-sm border border-rose-200 dark:border-rose-800">
          <Activity size={32} />
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-500 dark:from-rose-400 dark:to-pink-300">
          Matriz de Riesgos
        </h2>
      </div>

      <div className="bg-white dark:bg-slate-900 p-4 md:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow print:shadow-none print:border-slate-300 print:p-0">
        
        {/* VISTA MÓVIL: Formato Tarjetas (Se oculta en desktop y PDF) */}
        <div className="md:hidden space-y-4 print:hidden">
          {riesgosData.map((r) => (
            <div key={`mobile-${r.id}`} className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700/50 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-lg text-slate-800 dark:text-slate-200 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
                {r.iconMobile} {r.vuln}
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Activo Afectado</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold text-right">{r.activo}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Probabilidad</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">{r.prob}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Impacto</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">{r.imp}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500 dark:text-slate-400 font-bold">Riesgo (P×I)</span>
                  <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full font-bold text-xs shadow-sm ${r.colorClass}`}>
                    {r.riesgo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VISTA DESKTOP y PDF: Tabla Clásica (Se oculta en móvil) */}
        <div className="hidden md:block overflow-x-auto print:block">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b-2 border-slate-200 dark:border-slate-700 print:bg-slate-100 print:border-slate-300">
                <th className="p-5 font-bold text-slate-700 dark:text-slate-200 print:text-slate-900">Vulnerabilidad</th>
                <th className="p-5 font-bold text-slate-700 dark:text-slate-200 print:text-slate-900">Activo Afectado</th>
                <th className="p-5 font-bold text-center text-slate-700 dark:text-slate-200 print:text-slate-900">Probabilidad</th>
                <th className="p-5 font-bold text-center text-slate-700 dark:text-slate-200 print:text-slate-900">Impacto</th>
                <th className="p-5 font-bold text-center text-slate-700 dark:text-slate-200 print:text-slate-900">Riesgo (P×I)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 print:divide-slate-300">
              {riesgosData.map((r) => (
                <tr key={`desktop-${r.id}`} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="p-5 font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 print:text-slate-800">
                    {r.iconDesktop} {r.vuln}
                  </td>
                  <td className="p-5 text-slate-600 dark:text-slate-400 print:text-slate-800">{r.activo}</td>
                  <td className="p-5 text-center font-medium print:text-slate-800">{r.prob}</td>
                  <td className="p-5 text-center font-medium print:text-slate-800">{r.imp}</td>
                  <td className="p-5 text-center">
                    <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full font-bold text-sm shadow-sm ${r.colorClass}`}>
                      {r.riesgo}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-slate-900 dark:bg-black text-white p-8 rounded-2xl shadow-lg border border-slate-800 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] print:bg-none print:bg-white print:border-slate-300 print:shadow-none print:text-black">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 print:text-black"><Activity className="text-rose-400 print:text-rose-600"/> Análisis de Priorización</h3>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-black shrink-0 border border-red-500/30 print:bg-red-50 print:text-red-700 print:border-red-300">1</div>
            <div>
              <h4 className="font-bold text-lg text-red-400 print:text-red-700">Riesgo Crítico (SQLi)</h4>
              <p className="text-slate-300 text-sm mt-1 leading-relaxed print:text-slate-800">Amenaza existencial para AFP Horizonte. Debe parchearse en código y bloquearse en el WAF inmediatamente.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-black shrink-0 border border-orange-500/30 print:bg-orange-50 print:text-orange-700 print:border-orange-300">2</div>
            <div>
              <h4 className="font-bold text-lg text-orange-400 print:text-orange-700">Riesgo Alto (Comandos)</h4>
              <p className="text-slate-300 text-sm mt-1 leading-relaxed print:text-slate-800">Pérdida total del servidor. Requiere revisión de privilegios y despliegue de contenedores urgentes.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-black shrink-0 border border-amber-500/30 print:bg-amber-50 print:text-amber-700 print:border-amber-300">3</div>
            <div>
              <h4 className="font-bold text-lg text-amber-400 print:text-amber-700">Riesgo Alto (XSS)</h4>
              <p className="text-slate-300 text-sm mt-1 leading-relaxed print:text-slate-800">Requiere interacción de la víctima, pero su probabilidad es altísima. Exige saneamiento de entradas en el próximo sprint.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Controles = () => (
  <div className="animate-fade-in space-y-6 pb-8">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-2xl shadow-sm border border-indigo-200 dark:border-indigo-800">
        <Shield size={32} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300">
        Controles y Mitigación
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 border-t-4 border-t-indigo-500 relative overflow-hidden print:shadow-none print:border-slate-300 print:border-t-indigo-600">
        <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-5 text-indigo-500 pointer-events-none print:hidden">
          <Shield size={160} />
        </div>
        <h3 className="text-xl font-extrabold mb-6 flex items-center gap-3 print:text-black">
          <span className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400 print:bg-white print:border print:border-indigo-200"><CheckCircle size={20} /></span> 
          Políticas de Prevención
        </h3>
        <ul className="space-y-5 relative z-10">
          <li className="flex items-start gap-3 group">
            <span className="text-indigo-500 mt-1 transition-transform group-hover:scale-125">•</span>
            <div>
              <strong className="block text-slate-800 dark:text-slate-200 print:text-black">Ciclo DevSecOps</strong>
              <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed block mt-1 print:text-slate-800">Revisión de código automatizada (SAST) obligatoria antes de cualquier paso a producción.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 group">
            <span className="text-indigo-500 mt-1 transition-transform group-hover:scale-125">•</span>
            <div>
              <strong className="block text-slate-800 dark:text-slate-200 print:text-black">Programación Defensiva</strong>
              <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed block mt-1 print:text-slate-800">Uso exclusivo de ORM o Prepared Statements, prohibiendo terminantemente la concatenación SQL.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 group">
            <span className="text-indigo-500 mt-1 transition-transform group-hover:scale-125">•</span>
            <div>
              <strong className="block text-slate-800 dark:text-slate-200 print:text-black">Mínimo Privilegio</strong>
              <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed block mt-1 print:text-slate-800">La App Web usará un usuario de BD estricto, sin acceso DBA ni permisos de alteración de tablas.</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 border-t-4 border-t-teal-500 relative overflow-hidden print:shadow-none print:border-slate-300 print:border-t-teal-600">
        <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-5 text-teal-500 pointer-events-none print:hidden">
          <Server size={160} />
        </div>
        <h3 className="text-xl font-extrabold mb-6 flex items-center gap-3 print:text-black">
          <span className="p-2 bg-teal-100 dark:bg-teal-900/50 rounded-lg text-teal-600 dark:text-teal-400 print:bg-white print:border print:border-teal-200"><Lock size={20} /></span> 
          Controles de Mitigación
        </h3>
        <ul className="space-y-5 relative z-10">
          <li className="flex items-start gap-3 group">
            <span className="text-teal-500 mt-1 transition-transform group-hover:scale-125">•</span>
            <div>
              <strong className="block text-slate-800 dark:text-slate-200 print:text-black">WAF Perimetral</strong>
              <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed block mt-1 print:text-slate-800">Despliegue de un escudo para analizar y bloquear tráfico con firmas conocidas de SQLi y XSS.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 group">
            <span className="text-teal-500 mt-1 transition-transform group-hover:scale-125">•</span>
            <div>
              <strong className="block text-slate-800 dark:text-slate-200 print:text-black">Cabeceras de Seguridad</strong>
              <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed block mt-1 print:text-slate-800">Implementación estricta de Content-Security-Policy (CSP) para prevenir ejecución de scripts no autorizados.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 group">
            <span className="text-teal-500 mt-1 transition-transform group-hover:scale-125">•</span>
            <div>
              <strong className="block text-slate-800 dark:text-slate-200 print:text-black">Output Encoding</strong>
              <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed block mt-1 print:text-slate-800">Librerías de codificación de salida para sanitizar cualquier dato del afiliado al renderizarse en el HTML.</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const Recuperacion = () => (
  <div className="animate-fade-in space-y-6 pb-8">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 rounded-2xl shadow-sm border border-sky-200 dark:border-sky-800">
        <Activity size={32} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-blue-500 dark:from-sky-400 dark:to-blue-300">
        Recuperación (DRP)
      </h2>
    </div>

    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-800 print:shadow-none print:border-slate-300">
      <h3 className="text-xl font-extrabold mb-8 flex items-center gap-2 print:text-black">
        <AlertTriangle className="text-sky-500" /> Plan de Respuesta: Compromiso de Servidor
      </h3>
      <div className="space-y-6">
        <div className="flex gap-5 items-start p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors print:p-0">
          <div className="bg-gradient-to-br from-sky-400 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0 shadow-md shadow-sky-500/20 print:bg-none print:bg-white print:text-sky-700 print:border print:border-sky-300 print:shadow-none">1</div>
          <div>
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 print:text-black">Contención Inmediata</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed print:text-slate-800">Aislar el servidor comprometido de la red interna y de internet. No se debe apagar para permitir el análisis forense, pero debe detenerse la exfiltración.</p>
          </div>
        </div>
        <div className="flex gap-5 items-start p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors print:p-0">
          <div className="bg-gradient-to-br from-sky-400 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0 shadow-md shadow-sky-500/20 print:bg-none print:bg-white print:text-sky-700 print:border print:border-sky-300 print:shadow-none">2</div>
          <div>
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 print:text-black">Erradicación y Análisis</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed print:text-slate-800">Analizar logs del WAF/SIEM, identificar y parchear la vulnerabilidad en el código fuente y revocar forzosamente todas las sesiones de usuarios y contraseñas de servicio.</p>
          </div>
        </div>
        <div className="flex gap-5 items-start p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors print:p-0">
          <div className="bg-gradient-to-br from-sky-400 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0 shadow-md shadow-sky-500/20 print:bg-none print:bg-white print:text-sky-700 print:border print:border-sky-300 print:shadow-none">3</div>
          <div>
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 print:text-black">Recuperación Base</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed print:text-slate-800">Desplegar instancia limpia automatizada vía Infraestructura como Código (IaC). Restaurar base de datos desde respaldos inmutables de la última ventana segura.</p>
          </div>
        </div>
        <div className="flex gap-5 items-start p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors print:p-0">
          <div className="bg-gradient-to-br from-sky-400 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0 shadow-md shadow-sky-500/20 print:bg-none print:bg-white print:text-sky-700 print:border print:border-sky-300 print:shadow-none">4</div>
          <div>
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 print:text-black">Validación de Seguridad</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed print:text-slate-800">Ejecutar análisis DAST sobre la nueva infraestructura para comprobar el cierre de la brecha antes de restablecer el acceso a los afiliados.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-8 rounded-2xl shadow-xl border border-blue-800/50 relative overflow-hidden mt-8 hover:-translate-y-1 transition-transform duration-300 print:bg-none print:bg-white print:border-slate-300 print:shadow-none print:text-black">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl print:hidden"></div>
      <h3 className="text-2xl font-extrabold mb-4 flex items-center gap-3 relative z-10 print:text-black"><Server className="text-blue-400 print:text-blue-600"/> Mejora Tecnológica Estructural</h3>
      <div className="relative z-10">
        <p className="text-blue-100/90 leading-relaxed text-base mb-4 font-medium print:text-slate-800">
          Migración a <span className="text-white font-bold bg-blue-800/50 px-2 py-0.5 rounded print:bg-blue-50 print:text-blue-800 print:border print:border-blue-200">Contenedores (Docker)</span> y <span className="text-white font-bold bg-blue-800/50 px-2 py-0.5 rounded print:bg-blue-50 print:text-blue-800 print:border print:border-blue-200">Microservicios orquestados</span>.
        </p>
        <p className="text-slate-400 text-sm leading-relaxed print:text-slate-600">
          Justificación: Si ocurre una Inyección de Comandos, el atacante solo comprometerá el interior de un contenedor efímero aislado sin conexión al sistema operativo principal. El contenedor infectado puede ser destruido automáticamente por el orquestador y reemplazado por uno limpio en segundos, minimizando el impacto masivo.
        </p>
      </div>
    </div>
  </div>
);

const Prompts = () => (
  <div className="animate-fade-in space-y-6 pb-8">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-2xl shadow-sm border border-emerald-200 dark:border-emerald-800">
        <Terminal size={32} />
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
        Bitácora de IA
      </h2>
    </div>

    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-8 hover:shadow-lg transition-shadow print:shadow-none print:border-slate-300">
      
      <div className="border-l-4 border-emerald-500 pl-6 py-1">
        <h3 className="text-lg font-extrabold mb-4 text-slate-800 dark:text-slate-200 print:text-black">Componente React InyeccionSQL.jsx</h3>
        <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-xl border border-slate-100 dark:border-slate-800 mb-4 font-mono text-sm text-slate-600 dark:text-slate-400 print:bg-white print:border-slate-300 print:text-slate-800">
          <span className="font-bold text-emerald-600 dark:text-emerald-500">Prompt:</span> "Crea un componente React con JSX llamado InyeccionSQL que documente el hallazgo de SQLi. Debe mostrar el título 'Inyección SQL', la captura desde /img/sqli_garmau.png, el payload ' OR '1'='1 en un bloque de código, y usar Tailwind CSS y un ícono de Lucide (Database)."
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 flex gap-2 print:text-slate-800">
          <CheckCircle size={18} className="text-emerald-500 shrink-0" />
          <span><strong>Ajustes:</strong> La IA generó el código base (GitHub Copilot), pero se ajustó la ruta de la imagen en la etiqueta img porque inicialmente no apuntaba correctamente a la carpeta public/img/.</span>
        </p>
      </div>

      <div className="border-l-4 border-emerald-500 pl-6 py-1">
        <h3 className="text-lg font-extrabold mb-4 text-slate-800 dark:text-slate-200 print:text-black">Explicación Técnica XSS</h3>
        <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-xl border border-slate-100 dark:border-slate-800 mb-4 font-mono text-sm text-slate-600 dark:text-slate-400 print:bg-white print:border-slate-300 print:text-slate-800">
          <span className="font-bold text-emerald-600 dark:text-emerald-500">Prompt:</span> "Explica brevemente y de forma técnica por qué funciona el ataque Cross-Site Scripting reflejado en DVWA nivel low."
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 flex gap-2 print:text-slate-800">
          <CheckCircle size={18} className="text-emerald-500 shrink-0" />
          <span><strong>Ajustes:</strong> La respuesta (Gemini) fue resumida y adaptada específicamente al contexto del negocio de AFP Horizonte para encajar en el reporte profesional.</span>
        </p>
      </div>

      <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/30 mt-8 print:bg-white print:border-slate-300">
        <h4 className="font-extrabold mb-3 text-emerald-800 dark:text-emerald-400 flex items-center gap-2 print:text-emerald-700">
          <Terminal size={20} /> Reflexión del uso de IA
        </h4>
        <p className="text-sm text-emerald-900/80 dark:text-emerald-300/80 leading-relaxed print:text-slate-800">
          La IA resultó sumamente útil para acelerar la creación de la estructura de componentes en React y aplicar estilos con Tailwind, evitando escribir el código repetitivo desde cero (boilerplate). Sin embargo, demostró fallos menores en contextos específicos de rutas locales y tendió a alargar explicaciones teóricas. Esto demuestra la importancia de dirigir la herramienta con precisión (Prompt Engineering) y la obligatoriedad de revisar y adaptar siempre el código resultante antes de integrarlo a producción.
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
    <div className={`h-[100dvh] font-sans transition-colors duration-500 flex flex-col md:flex-row ${darkMode ? 'bg-[#0b1120] text-slate-100' : 'bg-slate-50 text-slate-900'} print:bg-white print:text-black print:h-auto`}>
      
      {/* Botón menú móvil (se oculta al imprimir) */}
      <div className="md:hidden p-4 flex justify-between items-center bg-white dark:bg-slate-900 shadow-md border-b dark:border-slate-800 z-30 shrink-0 print:hidden">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <div className="p-1.5 bg-blue-600 rounded-lg text-white">
            <Shield size={20} />
          </div>
          Auditoría AFP
        </div>
        <button onClick={() => setSidebarOpen(true)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
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
        bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-2xl md:shadow-none flex flex-col shrink-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 flex items-center justify-between md:justify-start gap-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl text-white shadow-lg shadow-blue-500/20">
              <Shield size={28} />
            </div>
            <div>
              <h1 className="font-extrabold text-xl tracking-tight leading-tight">Auditoría Sec</h1>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest mt-0.5">AFP Horizonte</p>
            </div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-50 dark:bg-slate-800 rounded-lg transition-colors">
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
                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 dark:from-blue-900/40 dark:to-indigo-900/20 dark:text-blue-400 shadow-sm border-l-4 border-blue-600' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:pl-6'}
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

        {/* Zona inferior del menú: Info y Modo Oscuro (REDISEÑADA Y COMPACTA) */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex flex-col gap-4 shrink-0">
          
          {/* Fila de Botones: Tema, GitHub, PDF */}
          <div className="flex gap-2 w-full">
            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
              className="flex-1 flex justify-center items-center p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow text-slate-700 dark:text-slate-300 rounded-xl hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              {darkMode ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} className="text-indigo-500" />}
            </button>

            <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" title="Ver repositorio en GitHub" className="flex-1 flex justify-center items-center p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow text-slate-700 dark:text-slate-300 rounded-xl hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
            
            <button 
              onClick={() => window.print()} 
              title="Descargar Informe PDF" 
              className="flex-1 flex justify-center items-center p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow text-slate-700 dark:text-slate-300 rounded-xl hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              <Download size={18} />
            </button>
          </div>

          {/* Tarjeta de Info y QR Compacta */}
          <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-inner rounded-xl w-full">
            <div className="flex flex-col overflow-hidden pr-2">
              <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-0.5">
                Auditor
              </span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                [Tu Apellido Nombre]
              </span>
              <span className="text-[10px] text-slate-500 flex items-center gap-1 mt-1">
                <QrCode size={10} /> Escanea la App
              </span>
            </div>
            <div className="shrink-0 p-1.5 bg-white dark:bg-slate-100 rounded-lg shadow-sm border border-slate-200 hover:scale-105 transition-transform duration-300">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://auditoria-garmau.vercel.app&color=0f172a&bgcolor=ffffff`} 
                alt="QR Code" 
                className="w-12 h-12 md:w-14 md:h-14"
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Área Principal (Ajustada para permitir scroll sin romper flexbox) */}
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden relative print:overflow-visible print:block">
        {/* Fondo sutil tipo malla (mesh) en modo claro (se oculta al imprimir) */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-none [background-size:20px_20px] opacity-40 print:hidden"></div>
        
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
                <div className="text-center mb-16 border-b-4 border-blue-600 pb-8 mt-12">
                  <Shield size={64} className="mx-auto text-blue-600 mb-6" />
                  <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Informe de Auditoría de Seguridad</h1>
                  <h2 className="text-3xl font-bold text-slate-600">AFP Horizonte</h2>
                  <p className="mt-12 text-lg text-slate-500 font-bold uppercase tracking-widest">Auditor Asignado</p>
                  <p className="text-2xl font-semibold text-slate-800">[Tu Apellido Nombre]</p>
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