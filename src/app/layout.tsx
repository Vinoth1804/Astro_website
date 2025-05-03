// src/app/layout.tsx
import type React from 'react';
import Header from './component/Header';

import './globals.css';  // Make sure your global CSS is imported

export const metadata = {
  title: 'Assurance Textile Inspection',
  description: 'We provide top-notch textile inspection and testing services.',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main> {/* This takes the remaining space */}
        
      </body>
    </html>
  );
};

export default Layout;
