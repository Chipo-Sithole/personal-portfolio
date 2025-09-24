import React from 'react';
import { motion } from 'framer-motion';
const educationData = [
  // degree: 'Master of Computer Science',
  // institution: 'University of Technology',
  // duration: '2018 - 2020',
  // description: 'Specialized in web development and user interface design with a focus on modern JavaScript frameworks and responsive design methodologies.'
 {
  degree: 'Bachelor of Science Honours in Business Management Systems Designs and Applications',
  institution: 'University Of Zimbabwe',
  duration: '2021 - 2025',
  description: 'I hold a Bachelor’s degree in Business Management Systems, with a strong focus on the design and application of business technologies. My studies equipped me with the ability to analyze complex business processes, design efficient management systems, and apply modern digital tools to drive organizational performance. This foundation allows me to bridge the gap between business strategy and technology, ensuring practical, effective, and innovative solutions in today’s evolving business landscape.'
 }
,// {
//   degree: 'Web Development Certification',
//   institution: 'Tech Academy Online',
//   duration: '2017',
//   description: 'Intensive 6-month program covering front-end technologies including HTML5, CSS3, JavaScript, and various frameworks.'
// }
];
const EducationSection = () => {
  return <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            My academic background and continuous learning journey that has
            shaped my professional skills.
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {educationData.map((item, index) => <EducationItem key={index} education={item} index={index} />)}
        </div>
      </div>
    </section>;
};
interface EducationItemProps {
  education: {
    degree: string;
    institution: string;
    duration: string;
    description: string;
  };
  index: number;
}
const EducationItem = ({
  education,
  index
}: EducationItemProps) => {
  return <motion.div className="mb-12 relative pl-8 border-l-2 border-accent-500/30 last:mb-0" initial={{
    opacity: 0,
    x: -20
  }} whileInView={{
    opacity: 1,
    x: 0
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} viewport={{
    once: true
  }}>
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-500"></div>
      <div className="bg-primary-800/20 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-accent-500/30 transition-all duration-300">
        <div className="flex flex-wrap justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-600">
            {education.degree}
          </h3>
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-accent-500/20 text-accent-300">
            {education.duration}
          </span>
        </div>
        <h4 className="text-lg text-white mb-4">
          {education.institution}
        </h4>
        <p className="text-gray-600">{education.description}</p>
      </div>
    </motion.div>;
};
export default EducationSection;