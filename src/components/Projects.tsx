import { useState } from 'react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Proyecto Web 1',
      description: 'Desarrollo de sitio web moderno con React y Tailwind CSS',
      category: 'web',
      image: '/project1.jpg',
      technologies: ['React', 'Tailwind CSS', 'TypeScript']
    },
    {
      id: 2,
      title: 'Aplicación Móvil',
      description: 'App móvil nativa para iOS y Android',
      category: 'mobile',
      image: '/project2.jpg',
      technologies: ['React Native', 'Firebase', 'Redux']
    },
    {
      id: 3,
      title: 'E-commerce',
      description: 'Plataforma de comercio electrónico completa',
      category: 'web',
      image: '/project3.jpg',
      technologies: ['Next.js', 'Stripe', 'MongoDB']
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Proyectos</h2>
        <p className="text-lg text-gray-600">Descubre nuestro portafolio de trabajos destacados</p>
      </div>

      {/* Filtros */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
          {['all', 'web', 'mobile'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab === 'all' ? 'Todos' : tab === 'web' ? 'Web' : 'Móvil'}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Imagen del proyecto</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 