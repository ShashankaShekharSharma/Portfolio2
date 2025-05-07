import React from 'react';
import { BookOpen, Book } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  description: string;
  type: 'academic' | 'book';
  date: string;
}

const publicationsData: Publication[] = [
  {
    id: 1,
    title: 'Pages from My Attic',
    description: 'A collection of poems exploring themes of identity, nature, and the human experience through vivid imagery and introspective narrative.',
    type: 'book',
    date: 'Published 2022'
  },
  {
    id: 2,
    title: 'The Tremendous Trio',
    description: 'A novel following three friends as they navigate challenges and adventures, highlighting themes of friendship, growth, and resilience.',
    type: 'book',
    date: 'Published 2023'
  }
];

const PublicationsSection: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Publications</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Creative works showcasing artistic expression through literature
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publicationsData.map(publication => (
            <div 
              key={publication.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-teal-100 text-teal-600 mr-4">
                  <Book size={24} />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{publication.title}</h3>
                    <span className="ml-3 text-xs font-semibold px-2 py-1 rounded-full bg-teal-100 text-teal-800">
                      Book
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{publication.date}</p>
                  <p className="text-gray-600">{publication.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-indigo-50 rounded-lg p-8 shadow-inner">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Want to collaborate on research?</h3>
            <p className="text-gray-600">I'm always open to new research opportunities and collaborations</p>
          </div>
          <div className="flex justify-center">
            <a 
              href="#contact"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;