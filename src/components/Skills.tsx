import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'SQL', level: 85, icon: '🗃️' },
        { name: 'JavaScript', level: 75, icon: '⚡' },
        { name: 'R', level: 70, icon: '📊' },
      ]
    },
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'TensorFlow', level: 85, icon: '🧠' },
        { name: 'Keras', level: 80, icon: '🤖' },
        { name: 'Scikit-learn', level: 90, icon: '🔬' },
        { name: 'OpenCV', level: 75, icon: '👁️' },
        { name: 'NLTK', level: 80, icon: '📝' },
      ]
    },
    {
      title: 'Data Analysis & Visualization',
      skills: [
        { name: 'Pandas', level: 90, icon: '🐼' },
        { name: 'NumPy', level: 85, icon: '🔢' },
        { name: 'Matplotlib', level: 80, icon: '📈' },
        { name: 'Seaborn', level: 85, icon: '🎨' },
        { name: 'Power BI', level: 75, icon: '📊' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 85, icon: '🔧' },
        { name: 'Docker', level: 70, icon: '🐳' },
        { name: 'Linux', level: 80, icon: '🐧' },
        { name: 'AWS', level: 65, icon: '☁️' },
        { name: 'Streamlit', level: 85, icon: '🚀' },
        { name: 'Excel', level: 90, icon: '📋' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for data science and machine learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-white group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-dark-lighter rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                      >
                        <motion.div
                          animate={{ x: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute right-0 top-0 w-2 h-full bg-white rounded-full opacity-75"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 gradient-text">
            Technology Stack
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Python', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Scikit-learn',
              'OpenCV', 'NLTK', 'Power BI', 'MySQL', 'Git', 'Docker', 'Linux',
              'AWS', 'Streamlit', 'Matplotlib', 'Seaborn'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                className="px-4 py-2 glass rounded-full text-sm font-medium neon-glow cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;