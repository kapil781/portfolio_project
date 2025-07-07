import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Python Developer',
    'Twilio Integrator',
    'Streamlit Builder',
    'DevOps Learner',
    'AI Enthusiast'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                  Kapil Mittal
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium">
                Aspiring AI & Data Science Engineer
              </h2>
              
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-xl text-teal-400 font-medium">
                  {roles[currentRole]}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              B.Tech Student at Vivekananda Global University, passionate about building 
              innovative solutions with Python, Streamlit, and AI technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToProjects}
                className="group bg-gradient-to-r from-teal-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              
              <button className="group border-2 border-teal-400 text-teal-400 px-8 py-3 rounded-full font-medium hover:bg-teal-400 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Download className="mr-2 group-hover:animate-bounce" size={20} />
                Download Resume
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 justify-center lg:justify-start pt-8">
              <a 
                href="https://www.linkedin.com/in/kapilmittal001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transform hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://github.com/kapil781"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transform hover:scale-110 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={28} />
              </a>
            </div>
          </div>

          {/* Right side - Circular Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Circular Photo Container with Gradient Border */}
              <div className="w-80 h-80 bg-gradient-to-br from-teal-400 via-purple-500 to-pink-500 rounded-full p-2 animate-pulse-slow shadow-2xl">
                <div className="w-full h-full bg-white rounded-full overflow-hidden shadow-inner">
                  <img 
                    src="/src/assets/WhatsApp Image 2025-07-07 at 5.37.41 PM.jpeg" 
                    alt="Kapil Mittal - AI & Data Science Engineer"
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback content */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-6xl font-bold text-gray-600 rounded-full" style={{display: 'none'}}>
                    KM
                  </div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce animation-delay-1000 shadow-lg"></div>
              
              {/* Additional decorative particles */}
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-1/3 -right-8 w-3 h-3 bg-pink-400 rounded-full opacity-60 animate-pulse animation-delay-2000"></div>
              <div className="absolute top-3/4 -left-6 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-float"></div>
              
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 to-purple-500/20 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;