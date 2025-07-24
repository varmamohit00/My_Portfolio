import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Crime Hotspot Analysis',
      description: 'Advanced geospatial analysis system using machine learning to identify and predict crime patterns in urban areas. Features interactive maps and real-time data visualization.',
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Pandas', 'Folium', 'Scikit-learn', 'Matplotlib'],
      github: 'https://github.com/varmamohit00',
      demo: '#',
      featured: true
    },
    {
      title: 'Amazon Sentiment Analysis',
      description: 'Natural Language Processing system that analyzes customer reviews to determine sentiment patterns. Includes data preprocessing, feature extraction, and model deployment.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'NLTK', 'TensorFlow', 'Pandas', 'Streamlit'],
      github: 'https://github.com/varmamohit00',
      demo: '#',
      featured: true
    },
    {
      title: 'Crime Section Recommender',
      description: 'Intelligent recommendation system for legal professionals to identify relevant crime sections based on case descriptions using NLP and machine learning algorithms.',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'NLP', 'Flask', 'MongoDB', 'React'],
      github: 'https://github.com/varmamohit00',
      demo: '#',
      featured: false
    },
    {
      title: 'Handwritten Digit Prediction',
      description: 'Deep learning model for recognizing handwritten digits with 99%+ accuracy. Features real-time drawing interface and model interpretability tools.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Streamlit'],
      github: 'https://github.com/varmamohit00',
      demo: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions in data science and machine learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass rounded-2xl overflow-hidden neon-glow transition-all duration-500 group-hover:shadow-2xl">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-primary to-secondary px-3 py-1 rounded-full text-dark font-semibold text-sm">
                      <Star size={14} fill="currentColor" />
                      Featured
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Action Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-dark-light/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-dark transition-all duration-300"
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                    
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-primary/80 backdrop-blur-sm text-dark px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-secondary transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-lighter rounded-full text-xs font-medium text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/varmamohit00"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 glass border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-dark transition-all duration-300 neon-glow"
          >
            <Github size={20} />
            View More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;