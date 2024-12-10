import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-40">
      <div className="max-w-7xl mx-auto px-6 py-8 md:flex md:justify-between">
        {/* Logo and Description */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-bold text-white mb-2">Your Brand</h2>
          <p className="text-sm md:w-[200px]">
            Empowering you with modern solutions for a better tomorrow. Stay connected and grow with us.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul>
            <li className="mb-1">
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="hover:text-white"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="hover:text-white"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="hover:text-white"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 py-4 mt-6">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Your Brand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
