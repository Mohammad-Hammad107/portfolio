import React from 'react';
import { ExternalLink, Github, Heart, Zap, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Fitly – Fitness & Diet Tracker',
      description: 'Comprehensive React.js & Node.js application for tracking meals, calories, and workouts. Features BMI calculator, progress tracking, and personalized fitness insights with modern UI/UX.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'Tailwind CSS'],
      icon: Heart,
      gradient: 'from-pink-500 to-rose-500',
      featured: true
    },
    {
      title: 'GameHub – Gaming Community Platform',
      description: 'Full-stack gaming platform built with React and Node.js. Features user profiles, game reviews, leaderboards, and real-time chat functionality for gaming enthusiasts.',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis', 'AWS S3'],
      icon: Gamepad2,
      gradient: 'from-purple-500 to-indigo-500',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`group ${project.featured ? 'lg:col-span-2' : ''}`}>
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl h-full">
                  {/* Project Header */}
                  <div className={`h-48 ${project.featured ? 'lg:h-56' : ''} bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <project.icon size={project.featured ? 80 : 64} className="text-white opacity-90 z-10" />
                    <div className="absolute inset-0 bg-black/20"></div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-600 hover:border-emerald-500/50 transition-colors duration-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-200 font-medium">
                        <Github size={18} />
                        <span>Code</span>
                      </button>
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium">
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;