import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '15+', icon: '🚀' },
    { label: 'Technologies Mastered', value: '20+', icon: '💻' },
    { label: 'Years of Learning', value: '3+', icon: '📚' },
    { label: 'Certifications', value: '5+', icon: '🏆' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about turning data into insights and building intelligent solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-gray-300">Based in Jaipur, India (IST)</p>
            </div>

            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Availability</h3>
              </div>
              <p className="text-gray-300">
                Open to internships & full-time roles (not freelance)
              </p>
            </div>

            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Passion</h3>
              </div>
              <p className="text-gray-300">
                Transforming complex data into actionable insights using AI & Machine Learning. 
                I love solving real-world problems through data-driven approaches and building 
                intelligent systems that make a difference.
              </p>
            </div>

            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Journey</h3>
              </div>
              <p className="text-gray-300">
                Currently pursuing B.Tech in Computer Science & Engineering, with hands-on 
                experience in machine learning, data analysis, and software development. 
                Always eager to learn new technologies and tackle challenging problems.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass p-6 rounded-2xl text-center neon-glow"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;