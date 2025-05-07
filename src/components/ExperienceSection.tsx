import React, { useState } from 'react';

interface TimelineItem {
  id: number;
  title: string;
  role: string;
  period: string;
  description: string[];
  category: 'internship' | 'education';
}

const experienceData: TimelineItem[] = [
  {
    id: 1,
    title: 'Samsung Research',
    role: 'Research Intern',
    period: 'Dec 2023 - Present',
    description: [
      'Investigated Transformer model compression techniques',
      'Worked on quantum annealing techniques for AI systems',
      'Improved inference efficiency in large-scale AI systems'
    ],
    category: 'internship'
  },
  {
    id: 2,
    title: 'IIT Kharagpur',
    role: 'Research Intern',
    period: 'May 2025 - Jul 2025',
    description: [
      'Selected for upcoming research internship',
      'Will focus on advanced AI and quantum computing applications',
      'Project details to be announced'
    ],
    category: 'internship'
  },
  {
    id: 3,
    title: 'IIT Guwahati',
    role: 'Research Intern',
    period: 'May 2025 - Jul 2025',
    description: [
      'Selected for upcoming research internship',
      'Will focus on advanced AI and quantum computing applications',
      'Project details to be announced'
    ],
    category: 'internship'
  },
  {
    id: 4,
    title: 'ThinkAI',
    role: 'AI Solutions Intern',
    period: 'Jun 2023 - Sep 2023',
    description: [
      'Developed AI-based solutions for real-world client problems',
      'Implemented machine learning models for various applications',
      'Collaborated with cross-functional teams to deliver solutions'
    ],
    category: 'internship'
  },
  {
    id: 5,
    title: 'IIT Guwahati',
    role: 'Research Intern',
    period: 'Jan 2023 - May 2023',
    description: [
      'Developed and optimized Relation Extraction and Classification models',
      'Focused on Natural Language Processing (NLP) techniques',
      'Published research findings in academic journals'
    ],
    category: 'internship'
  },
  {
    id: 6,
    title: 'SRM Institute of Science and Technology',
    role: 'B.Sc. Computer Science',
    period: '2023 - Present',
    description: [
      'Current CGPA: 9.2',
      'Vice President of the SRMIST Quantum Computing Club',
      'Supervisor in the SRM Data Science Community'
    ],
    category: 'education'
  },
  {
    id: 7,
    title: 'IIT Madras',
    role: 'B.Sc. Data Science and Applications',
    period: '2023 - Present',
    description: [
      'Current CGPA: 7.5',
      'Focused on advanced data science techniques',
      'Developing strong foundations in statistical analysis'
    ],
    category: 'education'
  },
  {
    id: 8,
    title: 'Delhi Public School, Guwahati',
    role: 'Higher Secondary Education',
    period: '2021 - 2023',
    description: [
      'AISSCE: 91.4% (2023)',
      'AISSE: 95.2% (2021)',
      'Participated in various academic and cultural competitions'
    ],
    category: 'education'
  }
];

const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'internship' | 'education'>('all');
  
  const filteredExperience = experienceData.filter(item => 
    filter === 'all' || item.category === filter
  );

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'all' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('internship')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'internship' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Internships
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'education' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Education
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-12">
            {filteredExperience.map((item, index) => (
              <div 
                key={item.id}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:px-8">
                  <div 
                    className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 ${
                      item.category === 'internship' ? 'border-blue-500' : 'border-teal-500'
                    }`}
                  >
                    <div className="mb-4">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        item.category === 'internship' ? 'bg-blue-100 text-blue-800' : 'bg-teal-100 text-teal-800'
                      }`}>
                        {item.category === 'internship' ? 'Internship' : 'Education'}
                      </span>
                      <span className="text-sm text-gray-500 ml-2">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-indigo-600 font-medium mb-4">{item.role}</p>
                    <ul className="space-y-2">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.category === 'internship' ? 'bg-blue-500' : 'bg-teal-500'
                  } text-white shadow-lg`}>
                    {item.category === 'internship' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    )}
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;