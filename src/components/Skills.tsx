import React from 'react';
import { Code, Database, Cloud, Smartphone, Mail, Phone, Brain, BarChart3 } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', percentage: 85, icon: Code, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Java', percentage: 70, icon: Code, color: 'from-red-400 to-red-600' },
    { name: 'CSS', percentage: 75, icon: Code, color: 'from-blue-400 to-blue-600' },
    { name: 'Streamlit', percentage: 80, icon: Database, color: 'from-green-400 to-green-600' },
    { name: 'DevOps', percentage: 60, icon: Cloud, color: 'from-purple-400 to-purple-600' },
    { name: 'Twilio', percentage: 75, icon: Smartphone, color: 'from-pink-400 to-pink-600' },
    { name: 'AI/ML', percentage: 70, icon: Brain, color: 'from-teal-400 to-teal-600' },
    { name: 'Data Science', percentage: 75, icon: BarChart3, color: 'from-indigo-400 to-indigo-600' }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-teal-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  </div>
                  <span className="text-teal-400 font-bold text-lg">{skill.percentage}%</span>
                </div>
                
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out animate-skill-bar`}
                    style={{ 
                      width: `${skill.percentage}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'API Integration', icon: Smartphone },
            { name: 'Email Services', icon: Mail },
            { name: 'Voice APIs', icon: Phone },
            { name: 'Machine Learning', icon: Brain }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-teal-400/50 transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-teal-400 to-purple-400 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={24} />
                </div>
                <h4 className="text-white font-medium">{item.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;