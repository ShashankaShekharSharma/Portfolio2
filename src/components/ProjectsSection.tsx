import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: 'ai' | 'quantum' | 'software';
  image: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'KrishiMitra',
    description: 'An AI-powered solution to assist farmers in diagnosing plant diseases and suggesting appropriate remedies, combining AI with social impact for rural development.',
    technologies: ['Python', 'TensorFlow', 'Computer Vision', 'Flask'],
    category: 'ai',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'QuantumLLM',
    description: 'A novel approach to integrating quantum computing principles into transformer architectures, positioning at the intersection of quantum information science and deep learning.',
    technologies: ['Qiskit', 'PyTorch', 'Transformer Models', 'Python'],
    category: 'quantum',
    image: 'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Browsit',
    description: 'A Python-based web browser integrating multiple search engines, privacy features, and an AI chatbot, combining utility with user-focused innovation.',
    technologies: ['Python', 'PyQt', 'Web APIs', 'Natural Language Processing'],
    category: 'software',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'Quantum Neural Networks',
    description: 'Research on hybrid quantum-classical neural networks for enhanced pattern recognition and optimization tasks.',
    technologies: ['Quantum Computing', 'Neural Networks', 'Qiskit', 'TensorFlow'],
    category: 'quantum',
    image: 'https://images.pexels.com/photos/3941855/pexels-photo-3941855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    title: 'NLP for Medical Research',
    description: 'Advanced natural language processing system for medical research paper analysis and knowledge extraction.',
    technologies: ['NLP', 'BERT', 'Python', 'Medical Informatics'],
    category: 'ai',
    image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    title: 'Cloud-Based File System',
    description: 'Secure, distributed file storage system with end-to-end encryption and advanced access controls.',
    technologies: ['Cloud Computing', 'Security', 'Distributed Systems', 'JavaScript'],
    category: 'software',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'quantum' | 'software'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const filteredProjects = projectsData.filter(project => 
    filter === 'all' || project.category === filter
  );
  
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };
  
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Innovative solutions across AI, quantum computing, and software development
          </p>
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
              All Projects
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'ai' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              AI & Data Science
            </button>
            <button
              onClick={() => setFilter('quantum')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'quantum' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Quantum Computing
            </button>
            <button
              onClick={() => setFilter('software')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'software' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Software Development
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer transform hover:-translate-y-1 transition-transform"
              onClick={() => handleProjectClick(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    project.category === 'ai' 
                      ? 'bg-purple-100 text-purple-800' 
                      : project.category === 'quantum'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-teal-100 text-teal-800'
                  }`}>
                    {project.category === 'ai' 
                      ? 'AI & Data Science' 
                      : project.category === 'quantum'
                        ? 'Quantum Computing'
                        : 'Software Development'
                    }
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <button className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors text-sm font-medium">
                  View Details <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="h-64 sm:h-80 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    selectedProject.category === 'ai' 
                      ? 'bg-purple-100 text-purple-800' 
                      : selectedProject.category === 'quantum'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-teal-100 text-teal-800'
                  }`}>
                    {selectedProject.category === 'ai' 
                      ? 'AI & Data Science' 
                      : selectedProject.category === 'quantum'
                        ? 'Quantum Computing'
                        : 'Software Development'
                    }
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button 
                    onClick={closeModal}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;