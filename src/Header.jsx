import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold hover:text-blue-400 transition duration-300">
          KAPG
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="block md:hidden p-2 hover:bg-gray-700 rounded-full transition duration-300"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="md:flex md:space-x-4">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 relative hover:text-blue-400 transition duration-300"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-4 relative hover:text-blue-400 transition duration-300"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="block py-2 px-4 relative hover:text-blue-400 transition duration-300"
              >
                Courses
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/admission"
                className="block py-2 px-4 relative hover:text-blue-400 transition duration-300"
              >
                Admission
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="block py-2 px-4 relative hover:text-blue-400 transition duration-300"
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/history"
                className="block py-2 px-4 relative hover:text-blue-400 transition duration-300"
              >
                History
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className="block py-2 px-4 relative hover:text-blue-400 transition duration-300"
              >
                Latest News
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/downloads"
                className="block py-2 px-4 relative hover:text-blue-400 transition duration-300"
              >
                Downloads
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-4 relative hover:text-blue-400 transition duration-300"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;