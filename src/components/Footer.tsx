import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className={`py-8 ${
        darkMode
          ? 'bg-gray-950 border-t border-gray-800'
          : 'bg-gray-100 border-t border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
          
          {/* Centered Text */}
          <div
            className={`text-center md:text-left ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <span>Designed and developed</span>
              <span>by Saloni Zade</span>
            </p>
            <p className="text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end space-x-6">
            <a
              href="https://github.com/Saloni0111-cpu"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                darkMode
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/saloni-zade-7aa816257/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                darkMode
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:saronisan09@gmail.com"
              className={`transition-colors ${
                darkMode
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
