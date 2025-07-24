import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building a strong foundation in computer science and engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl neon-glow"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              {/* Left Side - Icon and Progress */}
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6"
                >
                  <GraduationCap size={40} className="text-dark" />
                </motion.div>
                
                {/* Progress Circle */}
                <div className="relative w-24 h-24 mx-auto">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-dark-lighter"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 0.6 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      viewport={{ once: true }}
                      style={{
                        strokeDasharray: "251.2",
                        strokeDashoffset: "100.48"
                      }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fce314" />
                        <stop offset="100%" stopColor="#fc1714" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold gradient-text">60%</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex-1">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-3xl font-bold mb-2"
                >
                  Bachelor of Technology
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-xl text-primary mb-4"
                >
                  Computer Science & Engineering
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <GraduationCap className="text-primary" size={20} />
                    <span className="text-gray-300">Jaipur Engineering College</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <Calendar className="text-primary" size={20} />
                    <span className="text-gray-300">2022 - 2026</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <MapPin className="text-primary" size={20} />
                    <span className="text-gray-300">Jaipur, Rajasthan</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <Award className="text-primary" size={20} />
                    <span className="text-gray-300">Currently in 6th Semester</span>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <h4 className="text-lg font-semibold text-primary">Key Highlights:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Specialized in Data Structures, Algorithms, and Machine Learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Active participation in coding competitions and hackathons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Completed multiple projects in AI/ML and Data Science</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Strong foundation in software engineering principles</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;