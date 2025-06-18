import { Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const achievements = [
    'Built responsive, SEO-friendly full-stack web apps',
    'Used React.js, PHP, MySQL for dynamic solutions',
    'Handled complete project lifecycle and client communication'
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500 transform md:-translate-x-1/2"></div>
            
            {/* Experience Item */}
            <div className="relative flex items-center md:justify-center mb-8">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform md:-translate-x-1/2 border-4 border-gray-900"></div>
              
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                    <h3 className="text-xl font-semibold text-white">Freelance Web Developer</h3>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>Feb 2022 – Present</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>Mangla, Pakistan</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={16} />
                        <p className="text-gray-300">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;