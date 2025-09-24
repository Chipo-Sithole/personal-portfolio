import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ArrowUpIcon } from 'lucide-react';
export function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <div className="font-sora bg-gradient-elegant text-primary-900 min-h-screen relative overflow-hidden">
      {/* Subtle background decorative elements */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial animate-pulse"></div>
      </div>
      <Navbar />
      <motion.main initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }}>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </motion.main>
      <Footer />
      {/* Refined scroll to top button */}
      <motion.button className={`fixed right-8 bottom-8 p-4 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-elegant z-50 btn-elegant ${showScrollTop ? 'flex' : 'hidden'} items-center justify-center`} onClick={scrollToTop} initial={{
      scale: 0,
      rotate: -180
    }} animate={{
      scale: showScrollTop ? 1 : 0,
      rotate: showScrollTop ? 0 : -180
    }} whileHover={{
      scale: 1.1,
      y: -3
    }} whileTap={{
      scale: 0.9
    }}>
        <ArrowUpIcon size={24} />
      </motion.button>
    </div>;
}