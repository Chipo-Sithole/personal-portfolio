import React from 'react';
import { motion } from 'framer-motion';
const skills = [{
  name: 'HTML5',
  level: 95,
  icon: '🌐',
  color: 'from-primary-400 to-primary-600'
}, {
  name: 'CSS3',
  level: 90,
  icon: '🎨',
  color: 'from-accent-400 to-accent-600'
}, {
  name: 'JavaScript',
  level: 85,
  icon: '⚡',
  color: 'from-primary-500 to-accent-500'
}, {
  name: 'React',
  level: 90,
  icon: '⚛️',
  color: 'from-accent-500 to-primary-600'
}, {
  name: 'TypeScript',
  level: 80,
  icon: '🔷',
  color: 'from-primary-600 to-accent-400'
}, {
  name: 'Node.js',
  level: 75,
  icon: '🟢',
  color: 'from-accent-400 to-primary-500'
}, {
  name: 'Tailwind CSS',
  level: 90,
  icon: '🌊',
  color: 'from-primary-400 to-accent-500'
}, {
  name: 'Figma',
  level: 85,
  icon: '🎭',
  color: 'from-accent-500 to-primary-500'
}];
const categories = [{
  name: 'Frontend Development',
  items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Angular']
}, {
  name: 'Backend Development',
  items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase']
}, {
  name: 'Tools & Design',
  items: ['Git', 'Figma', 'Adobe XD', 'VS Code', 'Webpack', 'Docker']
}];
const SkillsSection = () => {
  return <section id="skills" className="py-20 px-4 bg-gradient-subtle relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-radial animate-pulse"></div>
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
            <span className="text-primary-700 font-medium">My Expertise</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 via-rose-400 to-gold-400 mx-auto rounded-full"></div>
          <p className="text-primary-700 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life 
            and create exceptional digital experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Technical Proficiency */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <div className="glass-effect rounded-3xl p-8 border border-white/20 shadow-elegant">
              <h3 className="text-3xl font-bold mb-8 gradient-text text-center">
                Technical Proficiency
              </h3>
              
              <div className="space-y-8">
                {skills.map((skill, index) => <SkillBar key={index} skill={skill} index={index} />)}
              </div>
            </div>
          </motion.div>
          
          {/* Knowledge Areas */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} viewport={{
          once: true
        }}>
            <div className="glass-effect rounded-3xl p-8 border border-white/20 shadow-elegant">
              <h3 className="text-3xl font-bold mb-8 gradient-text text-center">
                Knowledge Areas
              </h3>
              
              <div className="grid grid-cols-1 gap-8">
                {categories.map((category, index) => <SkillCategory key={index} category={category} index={index} />)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
interface SkillBarProps {
  skill: {
    name: string;
    level: number;
    icon: string;
    color: string;
  };
  index: number;
}

const SkillBar = ({
  skill,
  index
}: SkillBarProps) => {
  return <motion.div className="group" initial={{
    opacity: 0,
    x: -20
  }} whileInView={{
    opacity: 1,
    x: 0
  }} transition={{
    duration: 0.6,
    delay: 0.1 * index
  }} viewport={{
    once: true
  }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <span className="text-white text-lg">{skill.icon}</span>
          </div>
          <span className="font-semibold text-primary-800 text-lg group-hover:gradient-text transition-all duration-300">
            {skill.name}
          </span>
        </div>
        <div className="text-right">
          <span className="text-primary-700 font-bold text-lg">{skill.level}%</span>
        </div>
      </div>
      
      <div className="h-3 w-full bg-white/30 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
        <motion.div 
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay: 0.2 * index, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
        </motion.div>
      </div>
      
      <div className="mt-2 flex justify-end">
        <motion.div 
          className="text-xs text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 * index }}
          viewport={{ once: true }}
        >
          {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : skill.level >= 70 ? "Intermediate" : "Developing"}
        </motion.div>
      </div>
    </motion.div>;
};
interface SkillCategoryProps {
  category: {
    name: string;
    items: string[];
  };
  index: number;
}
const SkillCategory = ({
  category,
  index
}: SkillCategoryProps) => {
  return <motion.div className="group glass-effect border border-white/20 rounded-2xl p-6 hover:shadow-elegant transition-all duration-500" initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6,
    delay: 0.2 * index
  }} viewport={{
    once: true
  }} whileHover={{
    y: -5,
    scale: 1.02
  }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-xl">
            {index === 0 ? "💻" : index === 1 ? "⚙️" : "🛠️"}
          </span>
        </div>
        <h4 className="text-xl font-bold text-primary-800 group-hover:gradient-text transition-all duration-300">
          {category.name}
        </h4>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {category.items.map((item, idx) => (
          <motion.span 
            key={idx}
            className="px-4 py-2 bg-white/40 backdrop-blur-sm text-primary-700 text-sm font-medium rounded-full border border-white/30 hover:bg-gradient-to-r hover:from-primary-500 hover:to-rose-500 hover:text-white hover:border-transparent transition-all duration-300 cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 * idx + 0.2 * index }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.span>
        ))}
      </div>
      
      {/* Decorative corner element */}
      <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-bl from-rose-300/40 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>;
};
export default SkillsSection;