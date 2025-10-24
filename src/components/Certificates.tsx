import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface CertificatesProps {
  darkMode: boolean;
}

export default function Certificates({ darkMode }: CertificatesProps) {
  const certificates = [
    { name: 'JLPT N5', year: '2025', type: 'Language Proficiency' },
    { name: 'SitNovate', year: '2025', type: 'Hackathon' },
    { name: 'AtomVerse', year: '2024', type: 'Technical Event' },
    { name: 'Hack Off', year: '2025', type: 'Hackathon' },
    { name: 'AiOdessy', year: '2025', type: 'AI/ML Competition' },
    { name: 'The Bark Club', year: '2025', type: 'NGO Internship' },
  ];

  return (
    <section
      id="certificates"
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
            Certificates & Achievements
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl ${
                  darkMode ? 'bg-gray-900' : 'bg-white'
                } shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    darkMode ? 'bg-gradient-to-br from-yellow-500 to-yellow-700' : 'bg-gradient-to-br from-yellow-400 to-yellow-600'
                  }`}>
                    <Award size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold mb-1 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {cert.name}
                    </h3>
                    <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {cert.type}
                    </p>
                    <p className={`text-sm font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {cert.year}
                    </p>
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
