import { motion } from 'framer-motion';
import { Download, Eye, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text typewriter">Mohit Uchaniya</span>
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 font-space"
            >
              From Numbers to Knowledge – Building Smarter Solutions
            </motion.p>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-gray-400 mb-10 max-w-2xl"
            >
              Data Scientist passionate about transforming complex data into actionable insights 
              using AI & Machine Learning. Based in Jaipur, India.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(252, 227, 20, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark font-semibold rounded-full neon-glow transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Eye size={20} />
                View Projects
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-dark transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* 7 Skill Icons in a Horizontal Row Overlapping Photo Boundary */}
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex gap-4 z-20 pointer-events-none">
                <span className="text-3xl drop-shadow-lg">🐍</span> {/* Python */}
                <span className="text-3xl drop-shadow-lg">🧠</span> {/* TensorFlow */}
                <span className="text-3xl drop-shadow-lg">🐼</span> {/* Pandas */}
                <span className="text-3xl drop-shadow-lg">��</span> {/* Git */}
                <span className="text-3xl drop-shadow-lg">🐳</span> {/* Docker */}
                <span className="text-3xl drop-shadow-lg">☁️</span> {/* AWS */}
                <span className="text-3xl drop-shadow-lg">⚡</span> {/* JavaScript */}
              </div>
              <div className="w-80 h-80 rounded-full overflow-hidden neon-glow animate-pulse-slow relative">
                <img
                  src="/src/assets/mohit.jpg"
                  alt="Mohit Uchaniya"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 glass rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">🧠</span>
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 glass rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">📊</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary cursor-pointer"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;