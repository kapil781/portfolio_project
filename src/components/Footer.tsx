import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-white/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Kapil Mittal</h3>
            <p className="text-gray-400">
              B.Tech Student specializing in AI & Data Science, building innovative solutions with Python and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-teal-400 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-2">
              <a 
                href="mailto:kapilmittal231@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors duration-200"
              >
                <Mail size={16} />
                <span>kapilmittal231@gmail.com</span>
              </a>
              <a 
                href="tel:+918000624248"
                className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors duration-200"
              >
                <Phone size={16} />
                <span>+91 8000624248</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Kapil Mittal. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/kapilmittal001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/kapil781"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;