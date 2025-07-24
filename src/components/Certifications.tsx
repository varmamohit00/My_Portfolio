import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Linux (Learn and Build)',
      issuer: 'Learn and Build',
      date: '12 Sep 2023',
      description: 'Comprehensive Linux system administration and command-line proficiency',
      skills: ['Linux Commands', 'System Administration', 'Shell Scripting', 'File Management'],
      link: '#',
      verified: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Data Structures & Algorithms',
      issuer: 'Learn and Build',
      date: '30 Sep 2024',
      description: 'Advanced problem-solving techniques and algorithmic thinking',
      skills: ['Problem Solving', 'Algorithm Design', 'Time Complexity', 'Data Structures'],
      link: '#',
      verified: true,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="glass rounded-2xl overflow-hidden neon-glow transition-all duration-500 group-hover:shadow-2xl transform-gpu">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${cert.color} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
                        >
                          <Award size={24} className="text-white" />
                        </motion.div>
                        
                        {cert.verified && (
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            viewport={{ once: true }}
                            className="flex items-center gap-1 bg-green-500/20 px-2 py-1 rounded-full backdrop-blur-sm"
                          >
                            <CheckCircle size={16} className="text-green-400" />
                            <span className="text-xs text-green-400 font-medium">Verified</span>
                          </motion.div>
                        )}
                      </div>

                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                      >
                        <ExternalLink size={18} className="text-white" />
                      </motion.a>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-white/80">
                      <span className="font-medium">{cert.issuer}</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">
                      Skills Acquired:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: index * 0.2 + skillIndex * 0.1 + 0.5,
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-dark-lighter rounded-full text-sm font-medium text-primary border border-primary/20 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className={`h-1 bg-gradient-to-r ${cert.color}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass p-6 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold gradient-text mb-3">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-400">
              Always expanding my knowledge base with new technologies and methodologies. 
              Currently pursuing additional certifications in cloud computing and advanced machine learning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;