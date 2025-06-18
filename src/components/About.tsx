import { Code, Heart, Lightbulb, Users, GraduationCap } from 'lucide-react';

const About = () => {
  const hobbies = [
    { icon: Code, title: 'Building Projects', description: 'Personal web applications' },
    { icon: Lightbulb, title: 'AI & Tech Trends', description: 'Exploring new technologies' },
    { icon: Heart, title: 'UI/UX Design', description: 'Creating beautiful interfaces' },
    { icon: Users, title: 'Open Source', description: 'Contributing to community' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Code size={18} className="text-white" />
                  </div>
                  Professional Summary
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Motivated full-stack developer with expertise in JavaScript, React.js, Node.js, PHP, and MySQL. 
                  Strong foundation in modern web development practices with a passion for creating efficient, 
                  scalable solutions and exploring AI/ML technologies.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <GraduationCap size={18} className="text-white" />
                  </div>
                  Education
                </h3>
                <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition-colors duration-200">
                  <h4 className="text-lg font-semibold text-emerald-400">Bachelor of Science in Computer Science</h4>
                  <p className="text-slate-300">Mirpur University of Science & Technology (MUST)</p>
                  <p className="text-slate-400">2021 – 2025</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Heart size={18} className="text-white" />
                </div>
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                  <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition-all duration-200 group hover:scale-105">
                    <hobby.icon className="text-emerald-400 mb-3 group-hover:scale-110 transition-transform duration-200" size={28} />
                    <h4 className="font-semibold text-white mb-2">{hobby.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{hobby.description}</p>
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