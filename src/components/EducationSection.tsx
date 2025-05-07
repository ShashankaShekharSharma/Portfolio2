import React from 'react';
import { GraduationCap, Award, Star } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            A journey of continuous learning and academic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-4">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">SRM Institute of Science and Technology</h3>
                <p className="text-indigo-600">B.Tech. Computer Science and Engineering</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">2023 - Present</p>
              <p className="font-semibold text-gray-800">CGPA: 9.2</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Star size={16} className="text-indigo-600 mt-1 mr-2" />
                  <span className="text-gray-600">Vice President of Quantum Computing Club</span>
                </li>
                <li className="flex items-start">
                  <Star size={16} className="text-indigo-600 mt-1 mr-2" />
                  <span className="text-gray-600">Supervisor in Data Science Community</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-4">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">IIT Madras</h3>
                <p className="text-indigo-600">B.S. Data Science and Applications</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">2023 - Present</p>
              <p className="font-semibold text-gray-800">CGPA: 7.5</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Star size={16} className="text-indigo-600 mt-1 mr-2" />
                  <span className="text-gray-600">Advanced Data Science Techniques</span>
                </li>
                <li className="flex items-start">
                  <Star size={16} className="text-indigo-600 mt-1 mr-2" />
                  <span className="text-gray-600">Statistical Analysis Specialization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-4">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Delhi Public School, Guwahati</h3>
                <p className="text-indigo-600">Higher Secondary Education</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">2021 - 2023</p>
              <div className="mt-4 space-y-2">
                <p className="font-semibold text-gray-800">AISSCE: 91.4% (2023)</p>
                <p className="font-semibold text-gray-800">AISSE: 95.2% (2021)</p>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Star size={16} className="text-indigo-600 mt-1 mr-2" />
                  <span className="text-gray-600">Academic Excellence Award</span>
                </li>
                <li className="flex items-start">
                  <Star size={16} className="text-indigo-600 mt-1 mr-2" />
                  <span className="text-gray-600">Cultural Activities Leader</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;