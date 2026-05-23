import React from 'react';
import profileImg from '../assets/profile.jpg';

const Sidebar = ({ onRequestCV }) => {
  return (
    <aside className="bg-white rounded-3xl shadow-sm p-8 text-center flex flex-col items-center">
      {/* Avatar */}
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6 bg-gray-200 border-4 border-white shadow-md">
        <img 
          src={profileImg} 
          alt="Andry Lubis" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name & Title */}
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Andry Lubis</h1>
      <span className="bg-gray-100 text-gray-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6 block">
        Digital Transformation & System Solution
      </span>

      {/* Social Links */}
      <div className="flex justify-center space-x-3 w-full">
        <a href="https://www.linkedin.com/in/andrylubis" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a href="mailto:andryldev@yahoo.com" className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300">
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </a>
      </div>

      {/* Button */}
      <button 
        onClick={onRequestCV}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex justify-center items-center cursor-pointer shadow-sm hover:shadow-md"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        Request CV
      </button>
    </aside>
  );
};

export default Sidebar;
