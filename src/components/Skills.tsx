import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Database, Cloud, Globe, 
  Smartphone, Palette, Zap, Shield,
  GitBranch, Server, Cpu, Layers
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: "Frontend",
      icon: <Globe className="text-accent" size={24} />,
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "TailwindCSS", icon: "🎨" },
        { name: "Next.js", icon: "⚡" },
        { name: "Framer Motion", icon: "🎭" },
        { name: "HTML/CSS", icon: "🌐" }
      ]
    },
    {
      name: "Backend",
      icon: <Server className="text-accent" size={24} />,
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Django", icon: "🎯" },
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚂" },
        { name: "REST APIs", icon: "🔗" },
        { name: "GraphQL", icon: "📊" }
      ]
    },
    {
      name: "Database & DevOps",
      icon: <Database className="text-accent" size={24} />,
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Docker", icon: "🐳" },
        { name: "AWS", icon: "☁️" },
        { name: "Git", icon: "📝" },
        { name: "CI/CD", icon: "🔄" }
      ]
    },
    {
      name: "Tools & Others",
      icon: <Zap className="text-accent" size={24} />,
      skills: [
        { name: "VS Code", icon: "💻" },
        { name: "Postman", icon: "📮" },
        { name: "Figma", icon: "🎨" },
        { name: "Jira", icon: "📋" },
        { name: "Linux", icon: "🐧" },
        { name: "Agile", icon: "🏃" }
      ]
    }
  ];

  return (
    <section id="skills" className="mx-auto mt-32 max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl mb-4">
          Skills & Technologies
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          I've worked with a variety of technologies to build scalable and user-friendly applications
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="glass-effect rounded-2xl p-6 border"
          >
            <div className="flex items-center gap-3 mb-6">
              {category.icon}
              <h3 className="font-semibold text-lg">{category.name}</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -2, 2, -1, 1, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
                >
                  <span className="text-2xl mb-2">{skill.icon}</span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skill Level Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <h3 className="font-display text-2xl mb-8">Proficiency Levels</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { skill: "React & Frontend", level: 90 },
            { skill: "Python & Django", level: 85 },
            { skill: "Database Design", level: 80 },
            { skill: "DevOps & Cloud", level: 75 },
            { skill: "UI/UX Design", level: 70 },
            { skill: "Mobile Development", level: 65 }
          ].map((item, index) => (
            <motion.div
              key={item.skill}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-left"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{item.skill}</span>
                <span className="text-sm text-accent">{item.level}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-accent to-purple-500 h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
