import React from 'react';
import { motion } from 'framer-motion';
import profile  from '../images/profile2.jpg';
 // Ensure you have a profile image in the assets folder
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-elegant overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-radial opacity-40 top-1/4 left-1/6 animate-pulse"></div>
        <div className="absolute w-80 h-80 rounded-full bg-gradient-radial opacity-30 bottom-1/4 right-1/6 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div className="order-2 md:order-1" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }}>
          <motion.div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20" initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            <span className="text-primary-700 font-medium">Hello, I'm</span>
          </motion.div>
          
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            <span className="text-primary-800">Chipo Audrey</span>
            <br />
            <span className="gradient-text">Sithole</span>
          </motion.h1>
          
          <motion.div className="text-xl md:text-2xl font-medium mb-8 text-primary-700" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }}>
            <span>Software Developer</span>
            <br />
            <span className="mt-2 block">UI/UX Designer • Graphics Artist</span>
          </motion.div>
          
          <motion.p className="text-primary-600 mb-10 max-w-lg leading-relaxed text-lg" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }}>
            Crafting beautiful, responsive, and user-centered digital experiences 
            with modern technologies and artistic flair.
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.7
        }}>
            <motion.a href="#contact" className="btn-elegant bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 shadow-elegant transition-all duration-300" whileHover={{
            scale: 1.05,
            y: -2
          }} whileTap={{
            scale: 0.98
          }}>
              <span>Let's Connect</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            
            <motion.a href="#projects" className="btn-elegant border-2 border-primary-400 hover:border-accent-400 text-primary-700 hover:text-accent-600 px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300" whileHover={{
            scale: 1.05,
            y: -2
          }} whileTap={{
            scale: 0.98
          }}>
              <span>View My Work</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div className="order-1 md:order-2 flex justify-center" initial={{
        opacity: 0,
        scale: 0.8,
        rotate: -5
      }} animate={{
        opacity: 1,
        scale: 1,
        rotate: 0
      }} transition={{
        duration: 1,
        delay: 0.3
      }}>
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 via-rose-400 to-gold-400 rounded-3xl blur opacity-75 animate-pulse-soft"></div>
            
            {/* Main image container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden elegant-shadow floating-animation">
              <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
              <img
                src={profile}
                alt="Chipo Audrey Sithole - Software Developer & Designer"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
            </div>
            
            {/* Simplified decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse opacity-70"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-600 rounded-full animate-pulse opacity-60"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Elegant scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.2,
      duration: 0.8
    }}>
        <span className="text-sm text-primary-600 mb-3 font-medium">Discover More</span>
        <motion.div className="w-6 h-12 border-2 border-primary-400/50 rounded-full flex justify-center p-2 backdrop-blur-sm bg-white/10" initial={{
        y: 0
      }} animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }}>
          <motion.div className="w-1.5 h-1.5 bg-gradient-to-b from-primary-500 to-rose-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;