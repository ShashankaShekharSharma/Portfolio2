import React from 'react';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'C/C++', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'Rust', level: 60 },
      { name: 'Go', level: 60 },
      { name: 'C', level: 90 }
    ]
  },
  {
    name: 'AI & Data Science',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Natural Language Processing', level: 90 },
      { name: 'Computer Vision', level: 80 },
      { name: 'Data Analysis', level: 85 },
      { name: 'Neural Networks', level: 75 }
    ]
  },
  {
    name: 'Quantum Computing',
    skills: [
      { name: 'Quantum Algorithms', level: 75 },
      { name: 'Qiskit', level: 80 },
      { name: 'Quantum Machine Learning', level: 70 },
      { name: 'Quantum Circuit Design', level: 65 },
      { name: 'Quantum Annealing', level: 60 }
    ]
  },
  {
    name: 'Tools & Frameworks',
    skills: [
      { name: 'TensorFlow/PyTorch', level: 85 },
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Django/Flask', level: 80 },
      { name: 'React', level: 70 }
    ]
  }
];

interface CertificationItem {
  id: number;
  name: string;
  issuer: string;
  date: string;
  category: 'ai' | 'data' | 'programming' | 'business' | 'security' | 'cloud';
}

const certificationsData: CertificationItem[] = [
  {
    id: 1,
    name: 'Cybersecurity',
    issuer: 'Google',
    date: 'Sep 2023',
    category: 'security'
  },
  {
    id: 2,
    name: 'Data Science',
    issuer: 'IBM',
    date: 'Aug 2023',
    category: 'data'
  },
  {
    id: 3,
    name: 'Key Technologies for Business',
    issuer: 'IBM',
    date: 'Jul 2023',
    category: 'business'
  },
  {
    id: 4,
    name: 'AI Foundations for Business',
    issuer: 'IBM',
    date: 'Jun 2023',
    category: 'ai'
  },
  {
    id: 5,
    name: 'Generative AI for Data Analysts',
    issuer: 'IBM',
    date: 'May 2023',
    category: 'ai'
  },
  {
    id: 6,
    name: 'Automate Cybersecurity Tasks with Python',
    issuer: 'Google',
    date: 'Apr 2023',
    category: 'security'
  },
  {
    id: 7,
    name: 'The AI Ladder: A Framework for Deploying AI',
    issuer: 'IBM',
    date: 'Mar 2023',
    category: 'ai'
  },
  {
    id: 8,
    name: 'Introduction to Cloud Computing',
    issuer: 'IBM',
    date: 'Feb 2023',
    category: 'cloud'
  },
  {
    id: 9,
    name: 'Statistics and Clustering in Python',
    issuer: 'IBM',
    date: 'Jan 2023',
    category: 'data'
  },
  {
    id: 10,
    name: 'Sound the Alarm: Detection and Response',
    issuer: 'Google',
    date: 'Dec 2022',
    category: 'security'
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Skills & Certifications</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h3>
            <div className="space-y-8">
              {skillsData.map((category, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">{category.name}</h4>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skillIdx}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700">{skill.name}</span>
                          <span className="text-gray-500 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-indigo-600 h-2 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Certifications</h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 divide-y divide-gray-100">
                {certificationsData.map(cert => (
                  <div key={cert.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">{cert.name}</h4>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        cert.category === 'ai' 
                          ? 'bg-purple-100 text-purple-800' 
                          : cert.category === 'data'
                            ? 'bg-blue-100 text-blue-800'
                            : cert.category === 'programming'
                              ? 'bg-teal-100 text-teal-800'
                              : cert.category === 'security'
                                ? 'bg-red-100 text-red-800'
                                : cert.category === 'cloud'
                                  ? 'bg-cyan-100 text-cyan-800'
                                  : 'bg-amber-100 text-amber-800'
                      }`}>
                        {cert.category === 'ai' 
                          ? 'AI & Machine Learning' 
                          : cert.category === 'data'
                            ? 'Data Science'
                            : cert.category === 'programming'
                              ? 'Programming'
                              : cert.category === 'security'
                                ? 'Security'
                                : cert.category === 'cloud'
                                  ? 'Cloud Computing'
                                  : 'Business & Analytics'
                        }
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-indigo-600">{cert.issuer}</span>
                      <span className="text-gray-500">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Languages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">English</span>
                    <span className="text-gray-500 text-sm">Professional</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Hindi</span>
                    <span className="text-gray-500 text-sm">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Assamese</span>
                    <span className="text-gray-500 text-sm">Native</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Sanskrit</span>
                    <span className="text-gray-500 text-sm">Basic</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{ width: '40%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">German</span>
                    <span className="text-gray-500 text-sm">Basic</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{ width: '40%' }}
                    ></div>
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

export default SkillsSection;