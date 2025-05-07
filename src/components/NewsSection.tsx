import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Trophy, Briefcase } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: 'trophy' | 'briefcase';
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'Research Excellence',
    description: 'Won 3rd Prize for Research Poster at National Quantum Quest Hosted by IIT Kanpur',
    date: 'March 2025',
    icon: 'trophy'
  },
  {
    id: 2,
    title: 'New Internship Opportunity',
    description: 'Got Internship at IIT Guwahati under Department of AI and DS',
    date: 'May 2025',
    icon: 'briefcase'
  },
  {
    id: 3,
    title: 'Academic Achievement',
    description: 'Got internship at IIT Kanpur under Department of Computer Science and Engineering',
    date: 'May 2025',
    icon: 'briefcase'
  }
];

const NewsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsData.length) % newsData.length);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute -right-10 top-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute left-10 bottom-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest News</h2>
          <div className="w-20 h-1 bg-indigo-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {newsData.map((news) => (
                  <div key={news.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-indigo-500/20 text-indigo-300">
                          {news.icon === 'trophy' ? (
                            <Trophy size={24} />
                          ) : (
                            <Briefcase size={24} />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white">{news.title}</h3>
                            <span className="text-indigo-300 text-sm">{news.date}</span>
                          </div>
                          <p className="text-gray-300">{news.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-indigo-600 p-2 rounded-full text-white hover:bg-indigo-700 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-indigo-600 p-2 rounded-full text-white hover:bg-indigo-700 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {newsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-indigo-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;