import React from 'react';
import Link from 'next/link';

const Menu = () => {
  return (
    <nav className="bg-gray-600 p-4 ">
      <ul className="flex space-x-6 justify-center">
        {/* Add `Link` for client-side navigation in Next.js */}
        <li>
          <Link href="#textile-inspection" className="text-white hover:bg-gray-400 py-2 px-4 rounded transition duration-300">
            Textile Inspection
          </Link>
        </li>
        <li>
          <Link href="#testing-service" className="text-white hover:bg-gray-400 py-2 px-4 rounded transition duration-300">
            Testing Service
          </Link>
        </li>
        <li>
          <Link href="#auditing-service" className="text-white hover:bg-gray-400 py-2 px-4 rounded transition duration-300">
            Auditing Service
          </Link>
        </li>
        <li>
          <Link href="#garment-consultant" className="text-white hover:bg-gray-400 py-2 px-4 rounded transition duration-300">
            Garment Consultant
          </Link>
        </li>
        <li>
          <Link href="#third-party-inspection" className="text-white hover:bg-gray-700 py-2 px-4 rounded transition duration-300">
            Third Party Inspection
          </Link>
        </li>
        <li>
          <Link href="#fabric-inspection" className="text-white hover:bg-gray-400 py-2 px-4 rounded transition duration-300">
            Fabric Inspection
          </Link>
        </li>
        <li>
          <Link href="#total-quality-solutions" className="text-white hover:bg-gray-400 py-2 px-4 rounded transition duration-300">
            Total Quality Solutions
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
