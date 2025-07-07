import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence & Data Science',
      institution: 'Vivekananda Global University, Jaipur',
      period: 'Current',
      status: 'ongoing'
    },
    {
      degree: '12th Standard',
      institution: 'Rawat Public School',
      period: 'Completed',
      status: 'completed'
    },
    {
      degree: '10th Standard',
      institution: 'Ayush Public School',
      period: 'Completed',
      status: 'completed'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about leveraging technology to solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Personal Info */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-teal-400" size={20} />
                  <span className="text-gray-300">Jaipur, Rajasthan</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-teal-400" size={20} />
                  <span className="text-gray-300">B.Tech Student</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">About Me</h4>
                <p className="text-gray-400 leading-relaxed">
                  I'm a passionate B.Tech student specializing in Artificial Intelligence and Data Science. 
                  I love building innovative web applications using Python and Streamlit, and I'm always 
                  eager to learn new technologies. My goal is to create impactful solutions that make a 
                  difference in people's lives.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Education Timeline */}
          <div className="animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8">Education Timeline</h3>
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start space-x-4">
                      <div className={`w-4 h-4 rounded-full mt-2 ${
                        item.status === 'ongoing' 
                          ? 'bg-teal-400 animate-pulse' 
                          : 'bg-purple-400'
                      }`}></div>
                      
                      <div className="flex-1">
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-teal-400/50 transition-all duration-300">
                          <h4 className="text-lg font-semibold text-white mb-2">
                            {item.degree}
                          </h4>
                          <p className="text-teal-400 mb-2">{item.institution}</p>
                          <div className="flex items-center space-x-2 text-gray-400">
                            <Calendar size={16} />
                            <span>{item.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {index < education.length - 1 && (
                      <div className="absolute left-2 top-6 w-0.5 h-8 bg-gradient-to-b from-teal-400 to-purple-400"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;