import { useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { darkMode, toggleDarkMode } = useTheme()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-800 dark:text-white">
              My Blog
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2">
              Home
            </Link>
            {/* <Link to="/articles" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2">
              Articles
            </Link> */}
            <Link to="/about" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2">
              About
            </Link>
            <Link to="/contact" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2">
              Contact
            </Link>
            <Link to="*" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2">
              NotFound
            </Link>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          {/* <Link
            to="/articles"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Articles
          </Link> */}
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <button
            onClick={() => {
              toggleDarkMode()
              setMobileMenuOpen(false)
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            {darkMode ? (
              <div className="flex items-center">
                <SunIcon className="h-5 w-5 text-yellow-400 mr-2" />
                Light Mode
              </div>
            ) : (
              <div className="flex items-center">
                <MoonIcon className="h-5 w-5 text-gray-800 mr-2" />
                Dark Mode
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar