import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CVModal from './components/CVModal';

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900 py-10 px-4 sm:px-6 lg:px-12 selection:bg-blue-500 selection:text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar (Sticky Profile Card) */}
        <div className="w-full lg:w-[350px] shrink-0">
          <div className="sticky top-10">
            <Sidebar onRequestCV={() => setIsCVModalOpen(true)} />
          </div>
        </div>
        
        {/* Right Main Content */}
        <div className="w-full flex-1 space-y-8">
          <About />
          <Resume />
          <Skills />
          <Projects />
          
          {/* Footer */}
          <footer className="bg-white rounded-3xl shadow-sm p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Left: Copyright */}
              <div className="text-gray-500 text-sm text-center sm:text-left">
                <p className="font-medium text-gray-700">© {new Date().getFullYear()} Andry Lubis</p>
              </div>

              {/* Right: Visitor Badge */}
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">Visitor Count</span>
                <a 
                  href="https://hits.seeyoufarm.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity duration-200"
                  title="Visitor Counter"
                >
                  <img 
                    src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fandrylubis.github.io&count_bg=%233B82F6&title_bg=%231E3A5F&icon=github.svg&icon_color=%23FFFFFF&title=Visitors&edge_flat=false"
                    alt="Visitor Count"
                    className="h-6 rounded-md shadow-sm"
                  />
                </a>
              </div>

            </div>
          </footer>
        </div>

      </div>

      {/* Modern Dialog Modal rendered at root level to prevent z-index/stacking issues */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}

export default App;
