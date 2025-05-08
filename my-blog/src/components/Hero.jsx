import { useTheme } from '../context/ThemeContext'
import useTypewriter from '../hook/useTypewriter'

const Hero = () => {
  const { darkMode } = useTheme()
  const typewriterText = useTypewriter([
    'Welcome to My Tech Blog',
    'Learn React Tips',
    'Master JavaScript',
    'Build Awesome Stuff'
  ], {
    typingSpeed: 100,
    deletingSpeed: 50,
    delayBetweenTexts: 2000
  })

  return (
    <section className={`relative py-20 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 min-h-[4rem]">
            {typewriterText}
            <span className="ml-1 animate-pulse">|</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Discover the latest in web development, React tips, and modern JavaScript techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
              onClick={() => window.location.href = '/articles'}
            >
              Read Articles
            </button>
            <button 
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300"
              onClick={() => document.getElementById('newsletter').scrollIntoView()}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Image/Illustration */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img 
            src={darkMode ? "/hero-dark.svg" : "/hero-light.svg"}
            alt="Blog illustration" 
            className="w-full max-w-md transition-opacity duration-500"
            loading="lazy"
          />
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className={`w-full h-16 ${darkMode ? 'text-gray-900' : 'text-white'}`}
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="currentColor" 
            opacity=".25"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="currentColor" 
            opacity=".5"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero