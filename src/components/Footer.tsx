import { motion } from 'framer-motion';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/varmamohit00',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mohituchaniya777',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:varmamohit.rj14@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="relative py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
              © 2025 Mohit Uchaniya — Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              and lots of ☕
            </p>
            <p className="text-sm text-gray-500 mt-1">
              All rights reserved
            </p>
          </motion.div>

          {/* Center - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-300 neon-glow"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Right Side - Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-dark font-bold neon-glow transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowUp size={20} />
            </motion.div>
          </motion.button>
        </div>

        {/* Bottom Section - Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <span>Built with React & TypeScript</span>
            <span className="hidden sm:inline">•</span>
            <span>Styled with Tailwind CSS</span>
            <span className="hidden sm:inline">•</span>
            <span>Animated with Framer Motion</span>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-4 text-xs text-gray-600"
          >
            "From Numbers to Knowledge – Building Smarter Solutions"
          </motion.p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;