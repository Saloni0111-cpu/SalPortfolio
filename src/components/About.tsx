import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Heart } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const interests = ['Web Development', 'AI/ML', 'Japanese Language', 'Public Speaking' ];

  const leadership = [
    { icon: Award, title: 'President', org: 'GFG Student Chapter' },
    { icon: Users, title: 'Secretary', org: 'Coding and Ethical Hacking Club' },
    { icon: Users, title: 'Event Manager', org: 'Coding and Ethical Hacking Club' },
    { icon: Heart, title: 'Intern', org: 'The Bark Club (NGO)' },
  ];

  return (
    <section
      id="about"
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
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>
                  <GraduationCap size={32} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <div>
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Education
                  </h3>
                  <p className={`text-lg mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    B.Tech in Computer Science & Engineering
                  </p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    G.H. Raisoni College of Engineering and Management
                  </p>
                  <p className={`font-semibold mt-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    CGPA: 8.5
                  </p>


                  <p className={`text-lg mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Higher Secondary Education
                  </p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    St. Xaviers High School
                  </p>
                  <p className={`font-semibold mt-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    %: 74
                  </p>
                  <p className={`text-lg mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Secondary Education
                  </p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    K. John Public School
                  </p>
                  <p className={`font-semibold mt-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    %: 85.6
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      darkMode
                        ? 'bg-blue-900 text-blue-300'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              className={`text-3xl font-bold text-center mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Leadership & Experience
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-2xl text-center ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-50'
                  } hover:scale-105 transition-transform`}
                >
                  <div className={`inline-block p-3 rounded-lg mb-4 ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  }`}>
                    <item.icon size={28} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <h4
                    className={`text-lg font-bold mb-1 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.org}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
