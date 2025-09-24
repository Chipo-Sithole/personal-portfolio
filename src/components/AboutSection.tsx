import React from 'react';
import { motion } from 'framer-motion';
import profile from '../images/profile2.jpg';
const AboutSection = () => {
  return <section id="about" className="py-20 px-4 bg-gradient-subtle relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-radial animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-radial animate-pulse"></div>
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
            <span className="text-primary-700 font-medium">Get to know me</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 via-rose-400 to-gold-400 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div initial={{
          opacity: 0,
          x: -50,
          rotate: -3
        }} whileInView={{
          opacity: 1,
          x: 0,
          rotate: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} viewport={{
          once: true
        }} className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-6 bg-gradient-to-r from-primary-300 via-accent-300 to-primary-300 rounded-3xl opacity-20 blur-xl animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden glass-effect elegant-shadow">
                <img
                  src={profile}
                  alt="Chipo Audrey Sithole - About Me"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent"></div>
              </div>
              
              {/* Single decorative element */}
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full animate-pulse opacity-70"></div>
            </div>
            </div>
          </motion.div>
          
          {/* Content Section */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} viewport={{
          once: true
        }}>
            <motion.div className="mb-8" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} viewport={{
            once: true
          }}>
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Who am I?
              </h3>
              
              <div className="space-y-6">
                <div className="glass-effect rounded-2xl p-6 border border-white/20">
                  <p className="text-primary-700 leading-relaxed text-lg">
                    I'm a passionate web developer with expertise in creating
                    beautiful, functional websites and web applications. With a keen
                    eye for design and attention to detail, I strive to build digital
                    experiences that not only look great but also provide exceptional
                    user experiences.
                  </p>
                </div>
                
                <div className="glass-effect rounded-2xl p-6 border border-white/20">
                  <p className="text-primary-700 leading-relaxed text-lg">
                    My journey in web development started several years ago, and since
                    then, I've been constantly learning and adapting to new
                    technologies and methodologies. I believe in writing clean,
                    maintainable code and creating solutions that solve real-world
                    problems.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Personal Info Cards */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.7
          }} viewport={{
            once: true
          }}>
              <div className="glass-effect rounded-xl p-4 border border-white/20 hover:shadow-elegant transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="text-primary-700 font-semibold">Name</h4>
                </div>
                <p className="text-primary-600 font-medium">Chipo Audrey Sithole</p>
              </div>
              
              <div className="glass-effect rounded-xl p-4 border border-white/20 hover:shadow-elegant transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-primary-700 font-semibold">Email</h4>
                </div>
                <p className="text-primary-600 font-medium">chiposithole6022@gmail.com</p>
              </div>
              
              <div className="glass-effect rounded-xl p-4 border border-white/20 hover:shadow-elegant transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-primary-700 font-semibold">Location</h4>
                </div>
                <p className="text-primary-600 font-medium">Harare, Zimbabwe</p>
              </div>
              
              <div className="glass-effect rounded-xl p-4 border border-white/20 hover:shadow-elegant transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                    </svg>
                  </div>
                  <h4 className="text-primary-700 font-semibold">Status</h4>
                </div>
                <p className="text-primary-600 font-medium">Available for freelance</p>
              </div>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} viewport={{
            once: true
          }}>
              <motion.a href="#contact" className="btn-elegant inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white px-8 py-4 rounded-full font-semibold shadow-elegant transition-all duration-300" whileHover={{
            scale: 1.05,
            y: -3
          }} whileTap={{
            scale: 0.98
          }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;