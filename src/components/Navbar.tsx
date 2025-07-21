import { useBackgroundStore } from '../store/backgroundStore';
import * as Backgrounds from './Backgrounds';

export default function Navbar() {
  const { backgroundName } = useBackgroundStore();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Valkyria Technologies</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Inicio
            </a>
            <a href="/quienes-somos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Quiénes Somos
            </a>
            <a href="/servicios" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Servicios
            </a>
            <a href="/proyectos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Proyectos
            </a>
            <a href="/contacto" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contacto
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <Backgrounds.MinimalLight />
              <span className="text-sm text-gray-600">
                {backgroundName || 'Default Background'}
              </span>
            </div>
            
            {/* Botón de menú móvil */}
            <button className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 