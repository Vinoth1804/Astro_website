"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-600 p-4">
      {/* Hamburger menu icon for mobile */}
      <div className="md:hidden flex justify-between items-center">
        <button type="button" onClick={toggleMenu} className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Toggle Menu</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation menu - mobile version */}
      <ul
        className={`flex flex-col md:flex-row md:space-x-6 justify-center ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <li>
          <Link
            href="#textile-inspection"
            className="text-white hover:bg-gray-400 py-2 px-4 rounded transition duration-300"
          >
            Textile Inspection
          </Link>
        </li>
        <li>
          <Link
            href="#testing-service"
            className="text-white hover:bg-gray-400 py-2 px-4 rounded transition duration-300"
          >
            Testing Service
          </Link>
        </li>
        <li>
          <Link
            href="#auditing-service"
            className="text-white hover:bg-gray-400 py-2 px-4 rounded transition duration-300"
          >
            Auditing Service
          </Link>
        </li>
        <li>
          <Link
            href="#garment-consultant"
            className="text-white hover:bg-gray-400 py-2 px-4 rounded transition duration-300"
          >
            Garment Consultant
          </Link>
        </li>
        <li>
          <Link
            href="#third-party-inspection"
            className="text-white hover:bg-gray-700 py-2 px-4 rounded transition duration-300"
          >
            Third Party Inspection
          </Link>
        </li>
        <li>
          <Link
            href="#fabric-inspection"
            className="text-white hover:bg-gray-400 py-2 px-4 rounded transition duration-300"
          >
            Fabric Inspection
          </Link>
        </li>
        <li>
          <Link
            href="#total-quality-solutions"
            className="text-white hover:bg-gray-400 py-2 px-4 rounded transition duration-300"
          >
            Total Quality Solutions
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
