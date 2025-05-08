import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { darkMode } = useTheme();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Image + Description Row */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Image Side (Left) */}
        <div className="md:w-1/3">
          <img
            src="/images/me.webp"
            alt="Your Name"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Description Side (Right) */}
        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          
          <div className={`prose-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <p className="mb-4">
              Hi, I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Abdirashid M Haji</span>, 
              a passionate developer with 2 years of experience building web applications. 
              I specialize in React, JavaScript, and modern frontend technologies.
            </p>
            
            <p className="mb-4">
              This blog is my way of sharing knowledge, documenting my learning journey, 
              and helping others in the developer community.
            </p>

            <p className="mb-4">
              When I'm not coding, you'll find me playing Efootball. 
              I believe in one at a time.
            </p>

            <div className={`mt-8 p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
              <p className="font-medium">
                "Talk is cheap. Show me the code."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;