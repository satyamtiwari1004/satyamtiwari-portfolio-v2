import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code className="text-accent" size={24} />,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant solutions"
    },
    {
      icon: <Palette className="text-accent" size={24} />,
      title: "UI/UX Enthusiast",
      description: "Creating intuitive and beautiful user experiences"
    },
    {
      icon: <Zap className="text-accent" size={24} />,
      title: "Performance Focused",
      description: "Building fast, scalable, and maintainable applications"
    }
  ];

  return (
    <section id="about" className="mx-auto mt-32 max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative group">
            <motion.div
              whileHover={{ rotateY: 5, rotateX: 5 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              {/* Placeholder for profile image */}
              <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="text-accent mx-auto mb-4" size={48} />
                  <p className="text-slate-600 dark:text-slate-300">
                    Profile Image Placeholder
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Add your photo here
                  </p>
                </div>
              </div>
              
              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-accent/20 flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="bg-white dark:bg-slate-800 rounded-full p-4 shadow-lg"
                >
                  <Sparkles className="text-accent" size={24} />
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-8 h-8 border-2 border-accent rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-purple-500 rounded-full"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <h3 className="font-display text-2xl md:text-3xl mb-4">
              Crafting Digital Experiences
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm a software engineer passionate about crafting user-friendly, scalable, and visually appealing applications. 
              With 4.5 years of hands-on experience, I enjoy solving challenging problems, building intuitive UIs, 
              and experimenting with creative interactions.
            </p>
          </div>

          <div>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              My journey in software development has taught me the importance of clean code, 
              user-centered design, and continuous learning. I believe in creating solutions 
              that not only work flawlessly but also bring joy to users.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-4 rounded-xl glass-effect border"
              >
                <div className="mb-3 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">4.5+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">50+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">15+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Technologies</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
