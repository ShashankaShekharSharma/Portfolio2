import React from 'react';
import { Code2, FileText, BookOpen } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            An emerging force in the Indian tech landscape with a passion for innovation and excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Academic Excellence</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">B.Sc. in Computer Science</span> - SRM Institute of Science and Technology (CGPA: 9.2)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">B.Sc. in Data Science and Applications</span> - IIT Madras (CGPA: 7.5)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Delhi Public School, Guwahati</span> - AISSE: 95.2% (2021), AISSCE: 91.4% (2023)
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Leadership Roles</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Vice President</span> - SRMIST Quantum Computing Club
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Supervisor</span> - SRM Data Science Community
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Coding Profiles</h3>
              <div className="space-y-4">
                <a 
                  href="https://www.hackerrank.com/profile/ss7061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-indigo-400 transition-colors group"
                >
                  <Code2 className="w-5 h-5 text-indigo-600 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600">HackerRank</h4>
                    <p className="text-sm text-gray-600">@ss7061</p>
                  </div>
                </a>
                <a 
                  href="https://www.codechef.com/users/fair_boss_25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-indigo-400 transition-colors group"
                >
                  <Code2 className="w-5 h-5 text-indigo-600 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600">CodeChef</h4>
                    <p className="text-sm text-gray-600">@fair_boss_25</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Important Documents</h3>
              <div className="space-y-4">
                <a 
                  href="https://drive.google.com/file/d/1Xmc464dEpm6QqBqcQgU3coLaYIy1jQBQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-indigo-400 transition-colors group"
                >
                  <FileText className="w-5 h-5 text-indigo-600 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600">Resume</h4>
                    <p className="text-sm text-gray-600">View my detailed professional background</p>
                  </div>
                </a>
                <a 
                  href="https://drive.google.com/file/d/1fROj3vFLdEyI3fo-_-TzhELMiNb-SCwl/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-indigo-400 transition-colors group"
                >
                  <BookOpen className="w-5 h-5 text-indigo-600 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600">Coding Practice</h4>
                    <p className="text-sm text-gray-600">View my coding practice documentation</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Awards & Recognition</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Outstanding Student of the Year</span> - SRMIST
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">3rd Best Research Poster Presenter</span> - National Quantum Quest, IIT Kanpur
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Best Workpiece Presentation</span> - Civil and Mechanical disciplines, SRMIST
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Artistic Accomplishments</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Visharad and Sangeet Bhushan</span> - Tabla and Music
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Senior Diploma</span> - Fine Arts and Recitation
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Published Author</span> - "Pages from My Attic" (Poetry) and "The Tremendous Trio" (Novel)
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;