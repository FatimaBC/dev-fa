import React, { useState } from 'react';

type TabId = 'software' | 'web' | 'mobile' | 'consulting' | 'maintenance' | 'database' | 'design' | 'deployment' | 'qa' | 'training';

interface Tab {
  id: TabId;
  label: string;
}

interface ContentItem {
  title: string;
  definition: string;
  features: string[];
}

interface Content {
  [key: string]: ContentItem;
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState<TabId>('software');

  const tabs: Tab[] = [
    { id: 'software', label: 'Desarrollo de Software' },
    { id: 'web', label: 'Plataformas Web' },
    { id: 'mobile', label: 'Aplicaciones Móviles' },
    { id: 'consulting', label: 'Consultoría' },
    { id: 'maintenance', label: 'Mantenimiento' },
    { id: 'database', label: 'Base de Datos' },
    { id: 'design', label: 'Diseño UX/UI' },
    { id: 'deployment', label: 'Implementación' },
    { id: 'qa', label: 'Pruebas y QA' },
    { id: 'training', label: 'Capacitación' }
  ];

  const content: Content = {
    software: {
      title: 'Desarrollo de Software a la Medida',
      definition: 'Creación de software específicamente diseñado y construido para satisfacer las necesidades únicas y los requerimientos particulares de un cliente o una organización.',
      features: [
        'Personalización Total: El software se construye desde cero o se adapta significativamente a las especificaciones del cliente.',
        'Escalabilidad: Diseñado para crecer y adaptarse a las futuras necesidades del negocio.',
        'Integración: Puede integrarse con otros sistemas y software existentes en la organización.',
        'Propiedad Intelectual: Generalmente, el cliente tiene la propiedad intelectual del software desarrollado.',
        'Mayor Inversión Inicial: Suele tener un costo inicial más elevado en comparación con el software comercial.',
        'Mayor Tiempo de Desarrollo: El proceso de desarrollo es más extenso debido a la personalización.',
        'Solución Específica: Resuelve problemas muy concretos y optimiza procesos particulares.'
      ]
    },
    web: {
      title: 'Desarrollo de Plataformas Web',
      definition: 'Creación de aplicaciones y sistemas que se ejecutan en navegadores web y a los que se puede acceder a través de internet o intranets.',
      features: [
        'Accesibilidad Universal: Se puede acceder desde cualquier dispositivo con conexión a internet y un navegador.',
        'Interactividad: Permiten la interacción del usuario a través de formularios, botones, multimedia, etc.',
        'Escalabilidad: Pueden diseñarse para soportar un gran número de usuarios y transacciones.',
        'Mantenimiento Centralizado: Las actualizaciones y el mantenimiento se realizan en el servidor.',
        'Integración: Pueden integrarse con diversas bases de datos, APIs y otros servicios web.',
        'Variedad de Tecnologías: Se utilizan diversas tecnologías de front-end y back-end.',
        'Diseño Responsivo: Adaptación a diferentes tamaños de pantalla.'
      ]
    },
    mobile: {
      title: 'Desarrollo de Aplicaciones Móviles',
      definition: 'Creación de software diseñado específicamente para dispositivos móviles como smartphones y tablets.',
      features: [
        'Portabilidad: Acceso desde cualquier lugar y en cualquier momento a través de dispositivos móviles.',
        'Interfaz de Usuario Adaptada: Diseños optimizados para pantallas táctiles y la experiencia móvil.',
        'Acceso a Funcionalidades del Dispositivo: Pueden utilizar la cámara, GPS, micrófono, sensores, etc.',
        'Notificaciones Push: Permiten enviar mensajes directos a los usuarios.',
        'Disponibilidad en Tiendas de Aplicaciones: Se distribuyen a través de App Store y Google Play Store.',
        'Desarrollo Nativo: Mayor rendimiento y acceso completo a las funcionalidades del sistema operativo.',
        'Desarrollo Híbrido/Multiplataforma: Menor costo y tiempo de desarrollo al utilizar un único código base.'
      ]
    },
    consulting: {
      title: 'Consultoría de Software',
      definition: 'Servicio profesional que ofrece asesoramiento y guía experta a las empresas en relación con sus necesidades y estrategias de software.',
      features: [
        'Análisis de Necesidades: Identificación de los requerimientos y desafíos tecnológicos de la empresa.',
        'Evaluación de Soluciones: Análisis de diferentes opciones de software, plataformas y arquitecturas.',
        'Recomendaciones Estratégicas: Propuestas de soluciones y hojas de ruta tecnológicas.',
        'Optimización de Procesos: Identificación de áreas de mejora en los flujos de trabajo.',
        'Gestión de Proyectos: Asesoramiento en la planificación y ejecución de proyectos de software.',
        'Independencia y Objetividad: Los consultores ofrecen una perspectiva imparcial.',
        'Conocimiento Especializado: Experiencia en diversas tecnologías y sectores.'
      ]
    },
    maintenance: {
      title: 'Mantenimiento y Soporte de Software',
      definition: 'Conjunto de actividades destinadas a asegurar el correcto funcionamiento, la estabilidad y la seguridad del software.',
      features: [
        'Corrección de Errores: Identificación y solución de fallos en el software.',
        'Actualizaciones: Implementación de nuevas funcionalidades y mejoras.',
        'Soporte Técnico: Asistencia a los usuarios a través de diversos canales.',
        'Monitorización: Supervisión del rendimiento y la disponibilidad del software.',
        'Optimización: Ajustes para mejorar la eficiencia y la velocidad del software.',
        'Mantenimiento Preventivo: Acciones proactivas para evitar problemas futuros.',
        'Acuerdos de Nivel de Servicio (SLA): Definición de los tiempos de respuesta y resolución.'
      ]
    },
    database: {
      title: 'Desarrollo de Base de Datos',
      definition: 'Diseño, implementación, gestión y optimización de sistemas para almacenar, organizar y recuperar grandes cantidades de datos.',
      features: [
        'Diseño de Modelos de Datos: Creación de estructuras lógicas para organizar la información.',
        'Selección de DBMS: Elección del sistema de gestión de bases de datos adecuado.',
        'Implementación: Creación física de la base de datos y sus componentes.',
        'Optimización de Consultas: Mejora del rendimiento de las búsquedas y manipulaciones de datos.',
        'Seguridad de Datos: Implementación de medidas para proteger la información.',
        'Integridad de Datos: Asegurar la exactitud y consistencia de la información.',
        'Backup y Recuperación: Implementación de estrategias para la copia de seguridad.'
      ]
    },
    design: {
      title: 'Diseño UX/UI',
      definition: 'Proceso de diseño centrado en el usuario para crear productos digitales que sean intuitivos, fáciles de usar y visualmente atractivos.',
      features: [
        'Investigación de Usuarios: Entender las necesidades y comportamientos de los usuarios.',
        'Arquitectura de la Información: Organización lógica del contenido y la navegación.',
        'Diseño de Interacción: Definición de cómo los usuarios interactúan con el sistema.',
        'Creación de Wireframes y Prototipos: Bocetos y simulaciones de la interfaz.',
        'Diseño Visual: Creación de la apariencia estética del producto.',
        'Pruebas de Usabilidad: Evaluación de la facilidad de uso del producto.',
        'Diseño Responsivo: Adaptación a diferentes dispositivos y tamaños de pantalla.'
      ]
    },
    deployment: {
      title: 'Implementación y Despliegue',
      definition: 'Proceso de poner en funcionamiento el software desarrollado en el entorno donde se utilizará.',
      features: [
        'Configuración del Entorno: Preparación de los servidores y la infraestructura necesaria.',
        'Instalación del Software: Copia y configuración de los archivos del software.',
        'Migración de Datos: Transferencia de datos desde sistemas antiguos al nuevo software.',
        'Integración de Sistemas: Conexión del nuevo software con otras aplicaciones.',
        'Pruebas de Implementación: Verificación del funcionamiento en producción.',
        'Despliegue Progresivo: Lanzamiento gradual del software.',
        'Documentación de Implementación: Creación de guías y manuales.'
      ]
    },
    qa: {
      title: 'Pruebas y Control de Calidad (QA)',
      definition: 'Proceso sistemático para evaluar la calidad del software y asegurar que cumple con los requisitos especificados.',
      features: [
        'Planificación de Pruebas: Definición de objetivos y estrategias de prueba.',
        'Diseño de Casos de Prueba: Creación de escenarios para verificar funcionalidades.',
        'Ejecución de Pruebas: Realización de los casos de prueba en el software.',
        'Reporte de Defectos: Documentación detallada de los errores encontrados.',
        'Pruebas Funcionales: Verificación de las funciones esperadas.',
        'Pruebas de Rendimiento: Evaluación de la velocidad y estabilidad.',
        'Pruebas de Seguridad: Identificación de vulnerabilidades.'
      ]
    },
    training: {
      title: 'Capacitación y Formación',
      definition: 'Servicio de instrucción y entrenamiento dirigido a los usuarios finales del software o al personal técnico.',
      features: [
        'Diseño de Programas: Creación de contenidos y metodologías de enseñanza.',
        'Formación para Usuarios: Instrucción sobre el uso del software.',
        'Formación Técnica: Entrenamiento sobre aspectos técnicos.',
        'Materiales de Capacitación: Creación de manuales y guías.',
        'Modalidades de Capacitación: Presencial, online, webinars.',
        'Adaptación al Nivel: Contenido ajustado al conocimiento previo.',
        'Evaluación del Aprendizaje: Medición de la comprensión.'
      ]
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm md:text-base font-medium backdrop-blur-sm ${
              activeTab === tab.id
                ? 'bg-blue-600/80 text-white shadow-lg shadow-blue-600/30'
                : 'bg-black/30 text-gray-200 hover:bg-black/50 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 md:p-8 text-white border border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">{content[activeTab].title}</h2>
        <p className="mb-8 text-gray-200 text-lg leading-relaxed">{content[activeTab].definition}</p>
        <div className="space-y-4">
          {content[activeTab].features.map((feature: string, index: number) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <p className="text-gray-200 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 