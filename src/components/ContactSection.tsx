import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, research opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-indigo-100 rounded-full text-indigo-600 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-gray-600 font-medium">Email</h4>
                  <a href="mailto:shashankadps@gmail.com" className="text-indigo-600 hover:underline">
                    shashankadps@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-indigo-100 rounded-full text-indigo-600 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-gray-600 font-medium">Phone</h4>
                  <a href="tel:+918011922099" className="text-indigo-600 hover:underline">
                    +91 8011922099
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-indigo-100 rounded-full text-indigo-600 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-gray-600 font-medium">Location</h4>
                  <p className="text-gray-800">Chennai, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <h4 className="text-gray-600 font-medium mb-4">Social Media</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/shashanka-shekhar-sharma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:bg-[#005885] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://x.com/shashanka_s_s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="https://github.com/ShashankaShekharSharma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#171515] flex items-center justify-center text-white hover:bg-[#2b2b2b] transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Testimonial</h3>
            <blockquote className="text-gray-600 italic border-l-4 border-indigo-600 pl-4">
              "Working with Shashanka Shekhar on his first-year project to recreate the ELIZA chatbot from MIT was a rewarding experience. He didn't just stop at understanding the original system; he dove deep into its logic and reimagined it with a modern touch. Shashanka's knack for tackling challenges head-on and his ability to adapt quickly stood out throughout the project. His attention to detail and determination to improve every aspect of the chatbot made a strong impression. Shashanka is someone who puts genuine effort into what he does, and I'm excited to see where his skills and curiosity take him next."
              <footer className="mt-4 text-gray-800 font-medium not-italic">
                - Dr. K. Kishore Anthuvan Sahayaraj
                <br />
                <span className="text-gray-600 text-sm">
                  Assistant Professor at SRM Institute of Science and Technology
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;