import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <motion.header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-800/90 backdrop-blur-sm py-3' : 'bg-transparent py-5'}`} initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          CS
        </a>
        <nav className="hidden md:flex gap-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="md:hidden">
          <button className="text-primary-900 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>;
};
const NavLink = ({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return <motion.a href={href} className="text-primary-900 hover:text-accent-400 transition-colors duration-300 text-sm font-medium" whileHover={{
    scale: 1.05
  }} whileTap={{
    scale: 0.95
  }}>
      {children}
    </motion.a>;
};
export default Navbar;