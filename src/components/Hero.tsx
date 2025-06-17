import { ArrowDown, Mail, Phone, MapPin, Download } from 'lucide-react';
import profileImage from '../assets/profile-Image.jfif';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-36 h-36 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 p-1 hover:scale-105 transition-transform duration-300 shadow-2xl">
              <img 
                src={profileImage} 
                alt="Mohammad Hammad" 
                className="w-full h-full rounded-full object-cover border-2 border-slate-800"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback initials (hidden by default) */}
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-white" style={{display: 'none'}}>
                MH
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-fade-in">
            Mohammad Hammad
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-6 animate-fade-in-delay">
            Full Stack Web Developer
          </p>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions with modern technologies. 
            Specialized in React.js, Node.js, and building scalable applications.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-slate-400">
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
              <MapPin size={16} className="text-emerald-400" />
              <span>Pakistan</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
              <Phone size={16} className="text-emerald-400" />
              <span>+92 355 8459097</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
              <Mail size={16} className="text-emerald-400" />
              <span>mohammad.hammad@email.com</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-emerald-400 text-emerald-400 px-8 py-3 rounded-full font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-200 hover:scale-105"
            >
              View My Work
            </button> 
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-slate-400 hover:text-emerald-400 transition-colors duration-200"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;