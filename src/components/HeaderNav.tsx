import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const HeaderNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 mx-auto flex max-w-6xl items-center justify-between px-6 py-5 glass-effect">
      <motion.a
        href="#"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-2xl font-bold tracking-tight gradient-text"
      >
        satyam.dev
      </motion.a>

      {/* Desktop Navigation */}
      <nav className="hidden gap-6 md:flex text-sm">
        {navItems.map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative opacity-80 hover:opacity-100 transition-opacity"
          >
            {item.label}
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-accent"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </nav>

      {/* Social Links */}
      <div className="hidden md:flex items-center gap-2">
        <motion.a
          href="https://github.com/satyamtiwari1004"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="rounded-full border p-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <Github size={16} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/satyamrajeshtiwari/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1, rotate: -5 }}
          className="rounded-full border p-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <Linkedin size={16} />
        </motion.a>
        <motion.a
          href="mailto:satyam.raj@example.com"
          whileHover={{ scale: 1.1 }}
          className="rounded-full border p-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <Mail size={16} />
        </motion.a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden rounded-full border p-2 hover:bg-black/5 dark:hover:bg-white/10"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 glass-effect border rounded-lg p-4 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderNav;
