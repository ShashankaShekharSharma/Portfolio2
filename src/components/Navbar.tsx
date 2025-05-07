import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItemProps {
  label: string;
  section: string;
  onClick: (section: string) => void;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, section, onClick, active }) => {
  return (
    <li className="px-4">
      <button
        onClick={() => onClick(section)}
        className={`text-base font-medium transition-all duration-200 px-2 py-1 relative ${
          active 
            ? 'text-indigo-400' 
            : 'text-gray-300 hover:text-indigo-400'
        }`}
      >
        {label}
        {active && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform origin-bottom"></span>
        )}
      </button>
    </li>
  );
};

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Education', section: 'education' },
    { label: 'Experience', section: 'experience' },
    { label: 'Projects', section: 'projects' },
    { label: 'Skills', section: 'skills' },
    { label: 'Certifications', section: 'certifications' },
    { label: 'Publications', section: 'publications' },
    { label: 'Contact', section: 'contact' },
  ];

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navItems.map(item => item.section);
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-black/10' 
          : 'bg-black/50 backdrop-blur-sm'
      } py-4`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-white">
            Shashanka<span className="text-indigo-400">.dev</span>
          </a>

          <ul className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <NavItem
                key={item.section}
                label={item.label}
                section={item.section}
                onClick={handleNavClick}
                active={activeSection === item.section}
              />
            ))}
          </ul>

          <button
            className="md:hidden text-gray-300 hover:text-indigo-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <li key={item.section}>
                  <button
                    onClick={() => handleNavClick(item.section)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      activeSection === item.section
                        ? 'bg-indigo-400/10 text-indigo-400 font-medium'
                        : 'text-gray-300 hover:bg-indigo-400/5 hover:text-indigo-400'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;