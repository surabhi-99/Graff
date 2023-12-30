import React from 'react';
import logo from '../img/logo2.svg';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo or Brand */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10" />
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
