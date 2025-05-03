'use client'; // This is a client component
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      {/* Main navigation bar */}
      <header className="bg-white py-4 px-6 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3 w-full md:w-auto mb-4 md:mb-0">
            {/* Update logo path */}
            <img src="/lll.png" alt="V&A Textile Logo" className="h-16 md:h-24" />
            {/* Logo size adjusted */}
            <div>
              <h1 className="text-2xl font-bold text-gray-700">Assure Point Inspection</h1>
              <p className="text-pretty font-serif text-gray-600">perfect place for perfect quality</p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap space-x-6 w-full md:w-auto justify-center md:justify-end mb-4 md:mb-0">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-semibold py-2">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 font-semibold py-2">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-green-600 font-semibold py-2">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 font-semibold py-2">
              Contact Us
            </Link>
          </div>

          {/* Call Us Button */}
          <Link href="tel:+919629993955" className="w-full md:w-auto">
            <button type="button" className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300 w-full md:w-auto">
              Call Us
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
