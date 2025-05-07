import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="home"
      className="min-h-screen w-full flex flex-col justify-center relative bg-gradient-to-br from-indigo-900 to-black transition-opacity duration-1000 opacity-0"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 top-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute left-10 bottom-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute right-1/4 bottom-1/3 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left md:pr-8">
            <p className="text-indigo-400 font-medium animate-fadeSlideUp">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fadeSlideUp animation-delay-200">
              Shashanka Shekhar <span className="text-indigo-400">Sharma</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 animate-fadeSlideUp animation-delay-400 max-w-2xl">
              A technological polymath at the intersection of 
              <span className="text-indigo-400 font-medium"> AI, Quantum Computing, </span> 
              and <span className="text-indigo-400 font-medium">Data Science</span>
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fadeSlideUp animation-delay-600">
              <a 
                href="#about" 
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Discover My Work
              </a>
              
              <a 
                href="#contact" 
                className="px-6 py-3 border border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-400/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center animate-fadeIn animation-delay-800">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-indigo-400/30 shadow-xl animate-float">
              <div className="absolute inset-0 from-indigo-600/20 to-purple-600/20"></div>
              <img 
                src="ShashankaShekharSharma/Portfolio2/1686537622076.jpeg" 
                alt="Shashanka Shekhar Sharma"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="text-indigo-400 hover:text-indigo-300 transition-colors flex flex-col items-center"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;
