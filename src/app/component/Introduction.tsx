import React from 'react';
// Import the required icons from react-icons
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';



const Introduction = () => {
  return (
    <div>
    <div className="bg-white p-8">
        <div className="max-w-screen-xl mx-auto text-center mb-12">
        

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image on the left */}
            <div className="flex justify-center items-center">
              <img src="/image3.jpg" alt="Textile Production" className="w-full h-auto max-w-xl" />
            </div>

            {/* Text content on the right */}
            <div className="text-lg text-gray-700">
              <p className="mb-4">
                <span className="font-bold">Assure Point Inspection and Testing Services</span> is a Third-party Inspection agency and Quality Consultant based in Tirupur, India. Established in 2012, we specialize in Final Inspections, Quality Consulting, Conducting Quality Trainings, and Implementing production and quality systems in factories.
              </p>
              <p className="mb-4">
                We primarily focus on <span className="font-semibold">&quot;The Accuracy of test results and assuring you better results on time.&quot;</span>
              </p>
              <p className="mb-4">
                Our team consists of highly skilled Quality technicians, all of whom are Textile Graduates. With over 12 years of experience in the Inspection field, we bring vast knowledge of international standards. Our experts have previously worked with SGS India Pvt Ltd. and Mondial Orient Ltd (C&A) and have conducted inspections throughout ASIA.
              </p>
              <p className="mb-4">
                We are specialized in Knits/Woven fabric, garments, and Made-ups. We offer comprehensive services, including <span className="font-semibold">Quality services, Training, Inspections, and Testings.</span>
              </p>
            </div>
          </div>

         
    </div>

      {/* Second image section */}
      <div className="bg-white p-8">
  <div className="max-w-screen-xl mx-auto text-center mb-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Text content on the right */}
      <div className="text-lg text-gray-700 text-left">
        <p className="mb-4">
          <span className="font-bold">
            Our profound experience in quality control has earned us a reputation as a{' '}
            <span className="font-semibold">reliable inspection service provider</span>. This has helped us establish strong business
            relationships with companies worldwide, including multi-national co-operators and growing importers. We have proven records
            and expertise in this field.
          </span>
        </p>
        <p className="mb-4 text-lg">
          We believe in partnering with our customers to deliver the ultimate level of satisfaction. Our philosophy is that you should
          not have to adapt your business to your vendor’s capabilities. That&apos;s why we tailor our systems and forms to meet your
          company&apos;s specific needs.
        </p>
        <p className="mb-4 text-lg">
          The information we provide is highly accurate, allowing you to clearly identify liabilities in pending claims. Access to this
          data gives you a competitive edge and increases your level of profit.
        </p>
      </div>

      {/* Image on the left */}
      <div className="flex justify-center items-center">
        <img src="/image4.jpg" alt="Textile Production" className="w-full h-auto max-w-xl" />
      </div>
    </div>
  </div>
</div>

  

      {/* Grid of 4 Sections (Why V&A, Highlights, Quality Services, Our Team) */}
      <div className="bg-gray-100 p-8">
  <div className="max-w-screen-xl mx-auto text-center mb-12">
    

    {/* Use flex and little gap between sections */}
    <div className="flex justify-between gap-6">
      {/* Why V&A Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/4">
        <div className="text-4xl mb-4 text-green-600">
          <span role="img" aria-label="question">❓</span>
        </div>
        <h3 className="text-xl font-semibold mb-4">Why V&A?</h3>
        <ul className="space-y-4">
          <li>Accurate and Reliable services</li>
          <li>Good Infrastructure</li>
          <li>Customization</li>
          <li>Ethical Business Practices</li>
          <li>Timely execution of services</li>
          <li>Competitive Prices</li>
        </ul>
        <button type="button" className="mt-4 bg-[#1abc9c] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          More
        </button>
      </div>

      {/* Highlights Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/4">
        <div className="text-4xl mb-4 text-green-600">
          <span role="img" aria-label="highlight">✏️</span>
        </div>
        <h3 className="text-xl font-semibold mb-4">Highlights</h3>
        <ul className="space-y-4">
          <li>Textile Inspection Services</li>
          <li>Textile Technical Consultancy</li>
          <li>Online Inspections</li>
          <li>Effective and Efficient</li>
          <li>Organized & hassle-free</li>
          <li>Personalized</li>
        </ul>
        <button type="button" className="mt-4 bg-[#1abc9c] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          More
        </button>
      </div>

      {/* Quality Services Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/4">
        <div className="text-4xl mb-4 text-green-600">
          <span role="img" aria-label="handshake">🤝</span>
        </div>
        <h3 className="text-xl font-semibold mb-4">Quality Services</h3>
        <ul className="space-y-4">
          <li>Initial Inspection</li>
          <li>Mid Inspection</li>
          <li>Pre - Final Inspection</li>
          <li>Final Random Inspection</li>
          <li>Online Quality Control</li>
          <li>Minimize Rejection Percentage</li>
        </ul>
        <button type="button" className="mt-4 bg-[#1abc9c] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          More
        </button>
      </div>

      {/* Our Team Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/4">
        <div className="text-4xl mb-4 text-green-600">
          <span role="img" aria-label="team">👥</span>
        </div>
        <h3 className="text-xl font-semibold mb-4">Our Team</h3>
        <ul className="text-lg mb-4 space-y-2">
          <li>A professionally managed organization</li>
          <li>Guided by a team of highly skilled professionals</li>
          <li>Well-versed in their respective domains</li>
        </ul>
        <button type="button" className="mt-4 bg-[#1abc9c] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          More
        </button>
      </div>
    </div>
  </div>
</div>
<div className="bg-white p-8">
  <div className="max-w-screen-xl mx-auto">
    <h2 className="text-4xl font-bold text-[#1abc9c] text-center mb-12">Get In Touch</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Side - Contact Information */}
      <div className="space-y-8">
        <div className="text-gray-700">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p><a href="mailto:info@srivaritextiles.com" className="text-gray-700">assurepointinspectionservices@gmail.com</a></p>
          <p><a href="tel:+919629993955" className="text-gray-700">+91 81222 08866</a></p>
          <div className="flex space-x-4 mt-4">
  <a href="https://www.facebook.com"  className="text-gray-700 hover:text-blue-600 text-2xl">
    <FaFacebookF /> {/* Facebook Icon */}
  </a>
  <a href="https://www.instagram.com"  className="text-gray-700 hover:text-blue-600 text-2xl">
    <FaInstagram /> {/* Instagram Icon */}
  </a>
  <a href="https://www.linkedin.com"  className="text-gray-700 hover:text-blue-600 text-2xl">
    <FaLinkedinIn /> {/* LinkedIn Icon */}
  </a>
  <a href="https://www.twitter.com" className="text-gray-700 hover:text-blue-600 text-2xl">
    <FaTwitter /> {/* Twitter Icon */}
  </a>
</div>
        </div>

        <div className="text-gray-700">
          <h3 className="text-2xl font-semibold mb-4">Address Details</h3>
          <p>Assurance Inspection</p>
          <p>Sherif colony extension,</p>
            <p>Akk food court opposite, Old busstand near</p>
            <p> Tiruppur - 641604</p>
        </div>
      </div>

      {/* Right Side - Inquiry Form */}
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold mb-4">Request A Quote</h3>
        <form className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              placeholder="Your Full Name"
              className="w-full p-3 border rounded-md border-gray-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="w-full p-3 border rounded-md border-gray-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message Here..."
              className="w-full p-3 border rounded-md border-gray-300"
            />
          </div>

          <button type="button" className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300 w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</div>




</div>
    </div>
  );
};

export default Introduction;
