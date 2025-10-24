import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const projects = [
    {
      title: 'Mango Leaf Disease Classification',
      description: 'Built a Streamlit web application for classifying mango leaf diseases using machine learning. Achieved an impressive accuracy of 97.83% with deep learning models.',
      tech: ['Streamlit', 'TensorFlow', 'Python', 'ML'],
      github: 'https://github.com/Saloni0111-cpu/MangoLeafDiseaseClassification',
      color: darkMode ? 'from-green-500 to-green-700' : 'from-green-400 to-green-600',
    },
    {
      title: 'Strena - Game Streaming Platform',
      description: 'Full-stack game streaming platform built with MERN stack. Integrated ZegoCloud for real-time video streaming capabilities and interactive features.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'ZegoCloud'],
      github: 'https://github.com/Saloni0111-cpu/StreamArena',
      color: darkMode ? 'from-cyan-500 to-cyan-700' : 'from-cyan-400 to-cyan-600',
    },
    {
      title: 'MediGuard - Hospital Management',
      description: 'Comprehensive hospital management system to streamline patient records, appointments, and staff management. Built with modern web technologies for efficiency.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/Saloni0111-cpu/Hospital-Management',
      color: darkMode ? 'from-blue-500 to-blue-700' : 'from-blue-400 to-blue-600',
    },
    {
      title: 'BrainWave - Event Management System',
      description: 'Event management platform with Firebase integration for real-time updates. Features event creation, registration, and management capabilities.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
      github: 'https://github.com/Saloni0111-cpu/Brainwave-',
      color: darkMode ? 'from-orange-500 to-orange-700' : 'from-orange-400 to-orange-600',
    },
  ];

  return (
    <section
      id="projects"
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
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-50'
                } shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2`}
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-8">
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-6 leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-white text-gray-700 border border-gray-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                        darkMode
                          ? 'bg-gray-700 text-white hover:bg-gray-600'
                          : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                      }`}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} text-white hover:opacity-90 transition-opacity`}
                    >
                      <ExternalLink size={18} />
                      <span>View</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
