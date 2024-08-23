import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="backdrop-filter backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/" className="text-2xl font-bold gradient-text">
              Mohammed Farmaan
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="#about"
              className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            >
              Skills
            </Link>

            {/* Dark Mode Button */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full border ${
                darkMode ? "border-white" : "border-black"
              }`}
            >
              {darkMode ? "🌙" : "🌞"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="text-gray-900 dark:text-white focus:outline-none"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Dark Mode Button in Mobile */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full border ${
                darkMode ? "border-white" : "border-black"
              }`}
            >
              {darkMode ? "🌙" : "🌞"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden backdrop-filter backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#about"
                onClick={toggleMenu}
                className="block text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                About
              </Link>
              <Link
                href="#experience"
                onClick={toggleMenu}
                className="block text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                onClick={toggleMenu}
                className="block text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                onClick={toggleMenu}
                className="block text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Skills
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
