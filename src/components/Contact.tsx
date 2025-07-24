import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Please enter a valid email'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

type FormData = yup.InferType<typeof schema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your backend or email service
      console.log('Form data:', data);
      
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        duration: 4000,
        style: {
          background: '#1a1f2e',
          color: '#fff',
          border: '1px solid #fce314',
        },
      });
      
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        duration: 4000,
        style: {
          background: '#1a1f2e',
          color: '#fff',
          border: '1px solid #fc1714',
        },
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'varmamohit.rj14@gmail.com',
      href: 'mailto:varmamohit.rj14@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jaipur, India (IST)',
      href: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Phone,
      label: 'Availability',
      value: 'Open for opportunities',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mohituchaniya777',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/varmamohit00',
      color: 'hover:text-gray-400'
    },
    {
      icon: MessageSquare,
      label: 'Discord',
      href: '#',
      color: 'hover:text-indigo-400'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <Toaster position="top-right" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on exciting data science projects? Let's connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-dark-lighter border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-dark-lighter border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-lighter border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark font-semibold rounded-lg neon-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-dark border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="glass p-4 rounded-xl cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center`}>
                        <info.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Connect with me
              </h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 glass rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 neon-glow`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-400 mt-4"
              >
                Discord: <span className="text-primary">varmamohit0832</span>
              </motion.p>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold">Available for opportunities</span>
              </div>
              <p className="text-gray-400 text-sm">
                Currently seeking internships and full-time positions in data science, 
                machine learning, and AI development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;