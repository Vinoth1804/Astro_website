'use client'; // This is a client component
import React, { useState, useEffect } from 'react';

const DynamicBackground = () => {
  // Update with relative image paths starting from the public folder
  const images = [
    '/image1.jpg', // Ensure images are in the public/ folder or subfolders
    '/image4.jpg',
    '/image5.jpg'
    // Add more images as needed
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Cycle through the images
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
      style={{
        backgroundImage: `url(${images[currentImage]})`, // Correctly pass the image URL here
        transition: 'background-image 1s ease-in-out', // Smooth transition
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50" />
      
      <div className="relative z-10 text-center text-white px-6 md:px-12 lg:px-24">
        <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">
        Your Assurance of Excellence, One Inspection at a Time
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto drop-shadow-lg">
        Assurance Textile Inspection and Testing Services is a trusted third-party inspection agency in Tirupur, India, specializing in final inspections, quality consulting, and training. Our skilled team ensures accurate results and timely services. We help clients gain a competitive edge through tailored, reliable solutions.
        </p>
        <div className="space-x-4">
        <button type="button" className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
            Our Services
          </button>
          <button type="button" className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicBackground;
