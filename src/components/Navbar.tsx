import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-white hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="/quienes-somos" className="text-white hover:text-blue-400 transition-colors">
              Quiénes Somos
            </a>
            <a href="/servicios" className="text-white hover:text-blue-400 transition-colors">
              Servicios
            </a>
            <a href="/proyectos" className="text-white hover:text-blue-400 transition-colors">
              Proyectos
            </a>
            <a href="/contacto" className="text-white hover:text-blue-400 transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 