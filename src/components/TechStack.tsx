import { motion } from 'framer-motion';
import { Code, Laptop, Database, Wrench } from 'lucide-react';

interface TechStackProps {
  darkMode: boolean;
}

export default function TechStack({ darkMode }: TechStackProps) {
  const techCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['JavaScript', 'C++', 'Python'],
      color: darkMode ? 'from-blue-500 to-blue-700' : 'from-blue-400 to-blue-600',
    },
    {
      icon: Laptop,
      title: 'Web Development',
      skills: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'Streamlit'],
      color: darkMode ? 'from-green-500 to-green-700' : 'from-green-400 to-green-600',
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['MongoDB', 'SQL'],
      color: darkMode ? 'from-pink-500 to-pink-700' : 'from-pink-400 to-pink-600',
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: ['GitHub', 'Postman', 'VS Code', 'Cursor', 'Google Colab', 'LLM', 'TensorFlow', 'ML'],
      color: darkMode ? 'from-orange-500 to-orange-700' : 'from-orange-400 to-orange-600',
    },
  ];

  return (
    <section
      id="tech-stack"
      className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
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
            Tech Stack
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {techCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl ${
                  darkMode ? 'bg-gray-900' : 'bg-white'
                } shadow-lg hover:shadow-2xl transition-shadow`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon size={28} className="text-white" />
                  </div>
                  <h3
                    className={`text-2xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * skillIndex, duration: 0.3 }}
                      viewport={{ once: true }}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        darkMode
                          ? 'bg-gray-800 text-gray-300 border border-gray-700'
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                      } hover:scale-105 transition-transform`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
