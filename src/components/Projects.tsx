import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, X, ArrowRight } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Pricey – Smart Price Tracker",
      description: "A comprehensive e-commerce price tracking application built with Python and Django. Features web scraping, price monitoring, email alerts, and a modern React frontend.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      techStack: ["Python", "Django", "React", "PostgreSQL", "Celery", "Redis"],
      githubUrl: "https://github.com/satyamtiwari1004",
      liveUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "SpringBootRevision",
      description: "A comprehensive sandbox project demonstrating JPA, Security, Swagger documentation, and microservice patterns. Perfect for learning Spring Boot best practices.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      techStack: ["Java", "Spring Boot", "JPA", "Security", "Swagger", "Docker"],
      githubUrl: "https://github.com/satyamtiwari1004",
      liveUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Incognito – CyberSec Learning",
      description: "A multi-role cybersecurity learning platform with secure content management, user authentication, and portfolio builder features.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      techStack: ["React", "Node.js", "MongoDB", "JWT", "Express", "Bootstrap"],
      githubUrl: "https://github.com/satyamtiwari1004",
      liveUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "QrCrypt",
      description: "A secure QR code encryption tool that allows users to encrypt sensitive data into QR codes for offline sharing using AES encryption.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
      techStack: ["Python", "AES", "QR Code", "Cryptography", "Tkinter"],
      githubUrl: "https://github.com/satyamtiwari1004",
      liveUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "This very portfolio website built with React, TypeScript, and Framer Motion. Features interactive animations and a Django backend.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      techStack: ["React", "TypeScript", "Framer Motion", "TailwindCSS", "Django"],
      githubUrl: "https://github.com/satyamtiwari1004",
      liveUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Task Management API",
      description: "A RESTful API for task management with user authentication, CRUD operations, and real-time notifications.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      techStack: ["Django", "DRF", "PostgreSQL", "JWT", "Celery", "Redis"],
      githubUrl: "https://github.com/satyamtiwari1004",
      liveUrl: "#",
      featured: false
    }
  ];

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl border bg-white/80 shadow-sm transition-all hover:shadow-lg dark:bg-white/10"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Tech Stack Badges */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-slate-700"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-slate-700">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Github size={16} />
              </motion.a>
            )}
            <motion.button
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Eye size={16} />
            </motion.button>
          </div>
        </div>
        
        <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2 mb-4">
          {project.description}
        </p>

        <motion.button
          onClick={() => setSelectedProject(project)}
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-accent font-medium text-sm hover:underline"
        >
          View Details <ArrowRight size={14} />
        </motion.button>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
            Featured
          </span>
        </div>
      )}
    </motion.div>
  );

  return (
    <section id="projects" className="mx-auto mt-32 max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl mb-4">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto glass-effect rounded-2xl border"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 rounded-full p-2 hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Project Image */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="font-display text-2xl mb-4">{selectedProject.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {selectedProject.githubUrl && (
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </motion.a>
                  )}
                  {selectedProject.liveUrl && (
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
