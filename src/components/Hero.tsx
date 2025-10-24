import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-blue-50 via-white to-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col-reverse md:flex-row items-center md:items-start justify-center w-full gap-10 md:gap-20">
        
        {/* Centered English Text */}
        <div className="flex-1 flex flex-col items-center text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Saloni Zade
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className={`text-xl sm:text-2xl mb-6 ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            } font-semibold`}
          >
            MERN Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className={`text-base sm:text-lg max-w-3xl mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Hello Folks! I am a motivated undergraduate with hands-on experience in MERN and ML projects.
            Passionate about building scalable, user-friendly applications and continuously
            learning new technologies.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className={`text-base sm:text-lg max-w-3xl mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Oh, and here’s something fun, I’m also learning <strong>Japanese! </strong>
            I enjoy exploring its grammar, vocab, and conversations, and I’m excited
            to blend my love for tech and languages to build experiences that connect people across cultures.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex justify-center space-x-4 sm:space-x-6 mb-8"
          >
            <a
              href="https://github.com/Saloni0111-cpu"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all hover:scale-110 ${
                darkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/saloni-zade-7aa816257/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all hover:scale-110 ${
                darkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:saronisan09@gmail.com"
              className={`p-3 rounded-full transition-all hover:scale-110 ${
                darkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
              }`}
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            onClick={scrollToAbout}
            className="animate-bounce mt-4"
          >
            <ArrowDown
              size={32}
              className={darkMode ? 'text-gray-400' : 'text-gray-600'}
            />
          </motion.button>
        </div>

        {/* Profile Image + Japanese Greeting */}
        <div className="flex flex-col items-center md:items-end space-y-6 w-full md:w-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <div className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_25px_5px_rgba(96,165,250,0.5)]">
              <img
                src="/models/Profile3.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center md:text-right max-w-xs sm:max-w-sm"
          >
            <div className="text-2xl sm:text-3xl font-bold mb-2">
              <span className="inline-block opacity-0 transform translate-y-2 text-white"
                style={{ animation: 'fadeIn 2s forwards', animationDelay: '0s' }}>
                こんにちは{' '}
              </span>
              <span className="inline-block opacity-0 transform translate-y-2 text-blue-400"
                style={{ animation: 'fadeIn 2s forwards', animationDelay: '1s' }}>
                みんなさん！
              </span>
            </div>
            <p className="text-white/80 text-base sm:text-lg opacity-0 transform translate-y-1"
               style={{ animation: 'fadeIn 2s forwards', animationDelay: '2s' }}>
              サロニと申します。
            </p>

            <style>
              {`
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(8px); }
                  to { opacity: 1; transform: translateY(0); }
                }
              `}
            </style>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
