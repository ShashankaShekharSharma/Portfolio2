import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  category: 'ai' | 'data' | 'cloud' | 'security' | 'business';
  icon: 'google' | 'ibm';
}

const certifications: Certification[] = [
  {
    id: 1,
    name: 'Cybersecurity',
    issuer: 'Google',
    category: 'security',
    icon: 'google'
  },
  {
    id: 2,
    name: 'Data Science',
    issuer: 'IBM',
    category: 'data',
    icon: 'ibm'
  },
  {
    id: 3,
    name: 'Key Technologies for Business',
    issuer: 'IBM',
    category: 'business',
    icon: 'ibm'
  },
  {
    id: 4,
    name: 'AI Foundations for Business',
    issuer: 'IBM',
    category: 'ai',
    icon: 'ibm'
  },
  {
    id: 5,
    name: 'Generative AI for Data Analysts',
    issuer: 'IBM',
    category: 'ai',
    icon: 'ibm'
  },
  {
    id: 6,
    name: 'Generative AI for Data Scientists',
    issuer: 'IBM',
    category: 'ai',
    icon: 'ibm'
  },
  {
    id: 7,
    name: 'Data Science Foundations',
    issuer: 'IBM',
    category: 'data',
    icon: 'ibm'
  },
  {
    id: 8,
    name: 'Generative AI for Data Engineers',
    issuer: 'IBM',
    category: 'ai',
    icon: 'ibm'
  },
  {
    id: 9,
    name: 'Introduction to Data Science',
    issuer: 'IBM',
    category: 'data',
    icon: 'ibm'
  },
  {
    id: 10,
    name: 'Applied Data Science',
    issuer: 'IBM',
    category: 'data',
    icon: 'ibm'
  },
  {
    id: 11,
    name: 'Cloud Introduction to Generative AI',
    issuer: 'Google',
    category: 'ai',
    icon: 'google'
  },
  {
    id: 12,
    name: 'Data Analyst',
    issuer: 'IBM',
    category: 'data',
    icon: 'ibm'
  },
  {
    id: 13,
    name: 'Data Science Fundamentals with Python and SQL',
    issuer: 'IBM',
    category: 'data',
    icon: 'ibm'
  },
  {
    id: 14,
    name: 'AI Foundations for Everyone',
    issuer: 'IBM',
    category: 'ai',
    icon: 'ibm'
  },
  {
    id: 15,
    name: 'Data Analysis and Visualization Foundations',
    issuer: 'IBM',
    category: 'data',
    icon: 'ibm'
  },
  {
    id: 16,
    name: 'Business Intelligence',
    issuer: 'Google',
    category: 'business',
    icon: 'google'
  },
  {
    id: 17,
    name: 'Google Data Analytics',
    issuer: 'Google',
    category: 'data',
    icon: 'google'
  }
];

const CertificationsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<'all' | 'ai' | 'data' | 'cloud' | 'security' | 'business'>('all');

  const filteredCertifications = certifications.filter(cert => 
    selectedCategory === 'all' || cert.category === selectedCategory
  );

  const categories = [
    { value: 'all', label: 'All Certifications' },
    { value: 'ai', label: 'AI & Machine Learning' },
    { value: 'data', label: 'Data Science' },
    { value: 'security', label: 'Security' },
    { value: 'business', label: 'Business' }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      ai: 'bg-purple-100 text-purple-800',
      data: 'bg-blue-100 text-blue-800',
      security: 'bg-red-100 text-red-800',
      business: 'bg-green-100 text-green-800',
      cloud: 'bg-cyan-100 text-cyan-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-black to-indigo-900">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Certifications</h2>
          <div className="w-20 h-1 bg-indigo-400 mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Industry-recognized certifications showcasing expertise across multiple domains
          </p>
        </div>

        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="inline-flex bg-white/5 rounded-lg p-1 backdrop-blur-sm">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value as typeof selectedCategory)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/50'
                    : 'text-gray-300 hover:bg-indigo-500/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map(cert => (
            <div
              key={cert.id}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-indigo-400/30 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-3 ${
                    cert.icon === 'google' ? 'bg-white/10' : 'bg-white/10'
                  }`}>
                    <Award className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                    <p className="text-indigo-400">{cert.issuer}</p>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getCategoryColor(cert.category)}`}>
                  {cert.category.charAt(0).toUpperCase() + cert.category.slice(1)}
                </span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircle className="w-4 h-4 mr-2 text-indigo-400" />
                <span className="text-sm">Verified Certificate</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;