import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
// import { useTheme } from '../context/ThemeContext'

const Footer = () => {
//   const { darkMode, toggleDarkMode } = useTheme()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} My Blog. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 2.12 6.12 1 7.5 1S10.02 2.12 10.02 3.5c0 1.38-1.14 2.5-2.52 2.5S4.98 4.88 4.98 3.5zM1 22h3V9H1v13zm6-13h3v13H7V9zm8 0h3v13h-3V9z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h21.351c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0zM12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12s4.477-10 10-10zm-.5 3h1c1.104 0 2 .896 2 2v1h2v3h-2v8h-3v-8h-2V8h2V6c0-.553-.447-1-1-1h-1c-.553 0-1 .447-1 1v3h-2v3h2v8H9v-8H7V8h2V6c0-.553-.447-1-1-1z" />
              </svg>
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer