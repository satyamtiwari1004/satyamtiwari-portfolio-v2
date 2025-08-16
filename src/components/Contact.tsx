import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:satyam.raj@example.com',
      icon: <Mail size={20} />,
      color: 'hover:bg-red-500'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/satyamtiwari1004',
      icon: <Github size={20} />,
      color: 'hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/satyamrajeshtiwari/',
      icon: <Linkedin size={20} />,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/satyamtiwari',
      icon: <Twitter size={20} />,
      color: 'hover:bg-blue-400'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="mx-auto mt-32 max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl mb-4">
          Let's Connect
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-2xl p-8 border"
        >
          <h3 className="font-display text-2xl mb-6">Send me a message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border bg-white/50 dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border bg-white/50 dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border bg-white/50 dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle size={20} />
                  Message Sent!
                </>
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
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="font-display text-2xl mb-6">Get in touch</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I'm currently available for freelance work and full-time opportunities. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          {/* Email */}
          <div className="glass-effect rounded-2xl p-6 border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-slate-600 dark:text-slate-300">satyam.raj@example.com</p>
              </div>
            </div>
            <motion.a
              href="mailto:satyam.raj@example.com"
              whileHover={{ x: 5 }}
              className="text-accent font-medium hover:underline inline-flex items-center gap-2"
            >
              Send me an email <Send size={16} />
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="glass-effect rounded-2xl p-6 border">
            <h4 className="font-semibold mb-4">Follow me</h4>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className={`flex items-center gap-3 p-3 rounded-lg border hover:border-accent transition-all ${social.color} hover:text-white`}
                >
                  {social.icon}
                  <span className="font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="glass-effect rounded-2xl p-6 border">
            <h4 className="font-semibold mb-4">Current Status</h4>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-600 dark:text-slate-300">
                Available for new opportunities
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Response time: Usually within 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
