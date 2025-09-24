import React from 'react';
import { motion } from 'framer-motion';
const projects = [{
  id: 1,
  title: 'E-commerce Website',
  category: 'Web Development',
  description: 'A fully responsive e-commerce platform built with React and Node.js, featuring product listings, cart functionality, and payment processing.',
  image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
}, {
  id: 2,
  title: 'Portfolio Website',
  category: 'UI/UX Design',
  description: 'A modern portfolio website designed for a photographer, featuring a minimalist design with a focus on visual content.',
  image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
}, {
  id: 3,
  title: 'Task Management App',
  category: 'Mobile App',
  description: 'A task management application built with React Native, allowing users to create, organize, and track their daily tasks.',
  image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
}, {
  id: 4,
  title: 'Fitness Tracker',
  category: 'Web Application',
  description: 'A fitness tracking web application that helps users monitor their workouts, nutrition, and progress over time.',
  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
}];
const ProjectsSection = () => {
  return <section id="projects" className="py-20 px-4 bg-gradient-elegant relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial animate-pulse"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div className="text-center mb-20" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
          <motion.div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30" initial={{
          scale: 0.8,
          opacity: 0
        }} whileInView={{
          scale: 1,
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <span className="text-primary-700 font-medium">My Creative Journey</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 via-rose-400 to-gold-400 mx-auto rounded-full"></div>
          <p className="text-primary-700 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Here are some of my recent projects that showcase my passion for creating 
            beautiful, functional, and user-centered digital experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
        
        <motion.div className="text-center mt-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }} viewport={{
        once: true
      }}>
          <motion.a href="#" className="btn-elegant inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white px-10 py-4 rounded-full font-semibold shadow-elegant transition-all duration-300" whileHover={{
          scale: 1.05,
          y: -3
        }} whileTap={{
          scale: 0.98
        }}>
            <span>Explore All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>;
};
interface ProjectProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
  };
  index: number;
}
const ProjectCard = ({
  project,
  index
}: ProjectProps) => {
  return <motion.div className="group relative glass-effect rounded-3xl overflow-hidden border border-white/20 shadow-elegant h-full flex flex-col backdrop-blur-md" initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6,
    delay: index * 0.1
  }} viewport={{
    once: true
  }} whileHover={{
    y: -8,
    scale: 1.02
  }}>
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-80"></div>
        
        {/* Category Badge */}
        <motion.div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-white/20" initial={{
        scale: 0.8,
        opacity: 0
      }} whileInView={{
        scale: 1,
        opacity: 1
      }} transition={{
        duration: 0.4,
        delay: index * 0.1 + 0.3
      }} viewport={{
        once: true
      }}>
          <span className="text-primary-700 font-semibold text-sm">{project.category}</span>
        </motion.div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex-grow flex flex-col relative">
        <motion.h3 className="text-xl font-bold mb-3 text-primary-800 group-hover:gradient-text transition-all duration-300" whileHover={{
        x: 5
      }}>
          {project.title}
        </motion.h3>
        
        <p className="text-primary-600 text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        {/* Action Button */}
        <motion.div className="flex items-center justify-between">
          <motion.a href="#" className="inline-flex items-center gap-2 text-primary-700 hover:text-accent-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300" whileHover={{
          x: 5
        }} transition={{
          type: 'spring',
          stiffness: 400,
          damping: 10
        }}>
            <span>View Project</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
      
      {/* Subtle bottom accent */}
      <div className="h-1 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>;
};
export default ProjectsSection;