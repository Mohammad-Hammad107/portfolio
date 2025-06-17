import React from 'react';
import { Code, Database, Globe, Palette, Award, BookOpen, Cpu, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'PHP', 'Python', 'SQL'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Globe,
      title: 'Frontend Development',
      skills: ['React.js', 'Next.js', 'HTML5/CSS3', 'Tailwind CSS', 'Bootstrap'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'PostgreSQL'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const certifications = [
    'The Complete Web Development Bootcamp - Udemy',
    'JavaScript Algorithms and Data Structures - FreeCodeCamp',
    'React - The Complete Guide - Udemy',
    'Node.js, Express, MongoDB & More - Udemy'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional certifications
          </p>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Certifications & Learning</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-900/50 border border-slate-600 rounded-lg p-4 hover:border-emerald-500/50 transition-colors duration-200">
                  <div className="flex items-start gap-3">
                    <BookOpen className="text-emerald-400 mt-1 flex-shrink-0" size={18} />
                    <p className="text-slate-300 text-sm leading-relaxed">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;