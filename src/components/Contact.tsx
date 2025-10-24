import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'saronisan09@gmail.com',
      link: 'mailto:saronisan09@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8830917356',
      link: 'tel:+918830917356',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Saloni0111-cpu',
      link: 'https://github.com/Saloni0111-cpu',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/saloni-zade',
      link: 'https://www.linkedin.com/in/saloni-zade-7aa816257/',
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className={`text-4xl sm:text-5xl font-bold text-center mb-12 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Get In Touch
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-center text-lg mb-12 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-2xl ${
                    darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-50 hover:bg-gray-100'
                  } transition-all hover:scale-105 shadow-lg group`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${
                      darkMode ? 'bg-blue-900 group-hover:bg-blue-800' : 'bg-blue-100 group-hover:bg-blue-200'
                    } transition-colors`}>
                      <info.icon size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                    </div>
                    <div>
                      <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {info.label}
                      </p>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <a
                href="mailto:saronisan09@gmail.com"
                className={`inline-flex items-center space-x-2 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 ${
                  darkMode
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-700 text-white hover:from-blue-700 hover:to-cyan-800'
                } shadow-lg hover:shadow-xl`}
              >
                <Send size={20} />
                <span>Send Message</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
