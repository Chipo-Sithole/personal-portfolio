import React, { useState } from 'react';
import { motion } from 'framer-motion';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      error: null
    });
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  return <section id="contact" className="py-20 px-4 bg-gradient-elegant relative overflow-hidden">
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
            <span className="text-primary-700 font-medium">Let's Connect</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 via-rose-400 to-gold-400 mx-auto rounded-full"></div>
          <p className="text-primary-700 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you! 
            Let's create something beautiful together.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16">
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
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <ContactItem 
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  } 
                  title="Email" 
                  content="sitholechipo6022@gmail.com" 
                  bgColor="from-primary-500 to-rose-500"
                />
                <ContactItem 
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  } 
                  title="Phone" 
                  content="+263 775 411 983" 
                  bgColor="from-rose-500 to-gold-500"
                />
                <ContactItem 
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  } 
                  title="Location" 
                  content="Harare, Zimbabwe" 
                  bgColor="from-gold-500 to-primary-500"
                />
              </div>
              
              <div className="mt-10">
                <h4 className="text-xl font-semibold mb-6 text-primary-800">Connect with me</h4>
                <div className="flex gap-4 justify-center">
                  <SocialIcon href="https://github.com/Chipo-Sithole" aria-label="GitHub" bgColor="from-gray-700 to-gray-900">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="#" aria-label="LinkedIn" bgColor="from-blue-600 to-blue-800">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="#" aria-label="Twitter" bgColor="from-blue-400 to-blue-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="#" aria-label="Instagram" bgColor="from-pink-500 to-purple-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </SocialIcon>
                </div>
              </div>
            </div>
          </motion.div>
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
                Send a Message
              </h3>
              
              {formStatus.isSubmitted ? (
                <motion.div className="bg-gradient-to-r from-primary-500/20 to-rose-500/20 border border-primary-400 rounded-2xl p-8 text-center" initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }}>
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-elegant">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 gradient-text">Thank You!</h4>
                  <p className="text-primary-700 leading-relaxed">
                    Your message has been sent successfully. I'll get back to
                    you as soon as possible. Looking forward to our collaboration!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:border-primary-500 text-primary-800 placeholder-transparent peer transition-all duration-300 hover:bg-white/20"
                        placeholder="Your Name"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-6 -top-6 text-primary-700 text-sm font-medium transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary-600 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary-700 peer-focus:font-medium"
                      >
                        Your Name
                      </label>
                    </div>
                    
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:border-primary-500 text-primary-800 placeholder-transparent peer transition-all duration-300 hover:bg-white/20"
                        placeholder="Your Email"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-6 -top-6 text-primary-700 text-sm font-medium transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary-600 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary-700 peer-focus:font-medium"
                      >
                        Your Email
                      </label>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:border-primary-500 text-primary-800 placeholder-transparent peer transition-all duration-300 hover:bg-white/20"
                      placeholder="Subject"
                    />
                    <label
                      htmlFor="subject"
                      className="absolute left-6 -top-6 text-primary-700 text-sm font-medium transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary-600 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary-700 peer-focus:font-medium"
                    >
                      Subject
                    </label>
                  </div>
                  
                  <div className="relative group">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:border-primary-500 text-primary-800 placeholder-transparent peer transition-all duration-300 hover:bg-white/20 resize-none"
                      placeholder="Your Message"
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-6 -top-6 text-primary-700 text-sm font-medium transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary-600 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary-700 peer-focus:font-medium"
                    >
                      Your Message
                    </label>
                  </div>
                  
                  <div>
                    <motion.button
                      type="submit"
                      className="btn-elegant w-full bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-elegant flex items-center justify-center gap-3"
                      disabled={formStatus.isSubmitting}
                      whileHover={{
                        scale: 1.02,
                        y: -2
                      }}
                      whileTap={{
                        scale: 0.98
                      }}
                    >
                      {formStatus.isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending your message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  bgColor: string;
}

const ContactItem = ({
  icon,
  title,
  content,
  bgColor
}: ContactItemProps) => {
  return (
    <motion.div 
      className="group flex items-center gap-4 p-4 glass-effect rounded-2xl border border-white/20 hover:shadow-elegant transition-all duration-300"
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className={`flex-shrink-0 bg-gradient-to-r ${bgColor} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <div className="text-white">{icon}</div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-primary-800 group-hover:gradient-text transition-all duration-300">
          {title}
        </h4>
        <p className="text-primary-600 font-medium">{content}</p>
      </div>
    </motion.div>
  );
};
interface SocialIconProps {
  href: string;
  children: React.ReactNode;
  'aria-label': string;
  bgColor: string;
}

const SocialIcon = ({
  href,
  children,
  bgColor,
  ...props
}: SocialIconProps) => {
  return (
    <motion.a
      href={href}
      className={`bg-gradient-to-r ${bgColor} text-white p-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-rose flex items-center justify-center`}
      whileHover={{
        scale: 1.1,
        y: -3,
        rotate: 5
      }}
      whileTap={{
        scale: 0.9
      }}
      {...props}
    >
      {children}
    </motion.a>
  );
};
export default ContactSection;