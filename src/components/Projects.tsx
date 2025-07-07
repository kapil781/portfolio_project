import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Quick Diabetes Risk Checker',
      description: 'A web-based health risk estimation tool that helps users assess their diabetes risk through interactive forms and data analysis.',
      technologies: ['Python', 'Streamlit', 'Machine Learning'],
      github: 'https://github.com/kapil781',
      image: 'https://images.pexels.com/photos/4047149/pexels-photo-4047149.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'SMS Sender App',
      description: 'A powerful SMS sending application with a clean web interface that leverages Twilio API for reliable message delivery.',
      technologies: ['Python', 'Twilio', 'Streamlit'],
      github: 'https://github.com/kapil781',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Phone Caller App',
      description: 'An intuitive web application that enables users to make phone calls directly through the browser using Twilio\'s voice API.',
      technologies: ['Python', 'Twilio', 'Streamlit'],
      github: 'https://github.com/kapil781',
      image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Email Sender App',
      description: 'A comprehensive email management tool with a user-friendly interface for composing and sending emails efficiently.',
      technologies: ['Python', 'Streamlit', 'SMTP'],
      github: 'https://github.com/kapil781',
      image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in Python, Streamlit, and API integration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-teal-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm border border-teal-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;