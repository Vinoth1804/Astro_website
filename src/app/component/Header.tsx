'use client'; // This is a client component
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      {/* Main navigation bar */}
      <header className="bg-white py-4 px-12 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            {/* Update logo path */}
            <img src="/lll.png" alt="V&A Textile Logo" className="h-24" />
            {/* Logo size adjusted */}
            <div>
              <h1 className="text-2xl font-bold text-gray-700">Assure Point Inspection</h1> {/* Smaller font size for the name */}
              <p className="text-pretty font-serif text-gray-600">perfect place for perfect quality</p> {/* Smaller font size for tagline */}
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-semibold">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 font-semibold">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-green-600 font-semibold">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 font-semibold">
              Contact Us
            </Link>
          </div>

          {/* Call Us Button */}
          <Link href="tel:+919629993955">
            <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300">
              Call Us
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
