import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Resume from './components/Resume';
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
          
          {/* Footer */}
          <footer className="bg-white rounded-3xl shadow-sm p-6 text-center text-gray-500 text-sm">
            <p>&copy; Andry Lubis</p>
          </footer>
        </div>

      </div>

      {/* Modern Dialog Modal rendered at root level to prevent z-index/stacking issues */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}

export default App;
