import React, { useState } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaAngular, FaNodeJs, FaPhp, FaLaravel, 
  FaWordpress, FaAws, FaJira, FaTrello, FaEnvelope, FaServer, FaRobot, 
  FaPython, FaProjectDiagram
} from 'react-icons/fa';
import { 
  SiJavascript, SiExpress, SiMysql, SiWoocommerce, SiElementor, 
  SiZoho, SiGooglesheets, SiGoogle, SiGooglegemini, SiOpenai, SiAnthropic, 
  SiCloudways, SiCloudflare, SiCpanel, SiNotion,
  SiN8N, SiGoogleanalytics, SiGoogletagmanager, SiGoogleads, SiMailchimp
} from 'react-icons/si';
import { MdOutlineDesignServices, MdDns } from 'react-icons/md';
import { BsCreditCard, BsBoxSeam } from 'react-icons/bs';

const Skills = () => {
  const coreCompetencies = [
    'IT Project Management (Waterfall & Agile)', 'IT Business Architecture', 'Change & Risk Management',
    'Software & Web Development', 'IT Operations', 'Vendor Negotiation',
    'Troubleshooting', 'Leadership & Team Management', 'AI Adoption'
  ];

  const technicalCategories = [
    {
      title: 'Frontend & UI',
      description: 'Building responsive, interactive user interfaces using modern web technologies.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
      ),
      skills: [
        { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26] text-lg" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6] text-lg" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E] text-lg rounded-sm" /> },
        { name: 'AngularJS', icon: <FaAngular className="text-[#DD0031] text-lg" /> },
        { name: 'React', icon: <FaReact className="text-[#61DAFB] text-lg" /> },
        { name: 'UiZard', icon: <MdOutlineDesignServices className="text-purple-500 text-lg" /> }
      ]
    },
    {
      title: 'Backend & Database',
      description: 'Developing robust server-side logic and managing scalable, secure databases.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
      ),
      skills: [
        { name: 'PHP', icon: <FaPhp className="text-[#777BB4] text-xl" /> },
        { name: 'Laravel', icon: <FaLaravel className="text-[#FF2D20] text-lg" /> },
        { name: 'NodeJS', icon: <FaNodeJs className="text-[#339933] text-lg" /> },
        { name: 'ExpressJS', icon: <SiExpress className="text-gray-800 text-lg" /> },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1] text-xl" /> }
      ]
    },
    {
      title: 'CMS & E-Commerce',
      description: 'Creating and managing dynamic content platforms and direct-to-consumer online stores.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
      ),
      skills: [
        { name: 'WordPress', icon: <FaWordpress className="text-[#21759B] text-lg" /> },
        { name: 'Woocommerce', icon: <SiWoocommerce className="text-[#96588A] text-lg" /> },
        { name: 'Midtrans', icon: <BsCreditCard className="text-blue-500 text-lg" /> },
        { name: 'WP Bakery', icon: <MdOutlineDesignServices className="text-pink-500 text-lg" /> },
        { name: 'Elementor', icon: <SiElementor className="text-[#92003B] text-lg" /> },
        { name: 'Jubelio', icon: <BsBoxSeam className="text-indigo-500 text-lg" /> }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Deploying, managing, and optimizing scalable and secure IT infrastructure environments.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
      ),
      skills: [
        { name: 'AWS', icon: <FaAws className="text-[#FF9900] text-lg" /> },
        { name: 'Cloudways', icon: <SiCloudways className="text-[#102B51] text-lg" /> },
        { name: 'Cloudflare', icon: <SiCloudflare className="text-[#F38020] text-lg" /> },
        { name: 'cPanel', icon: <SiCpanel className="text-[#FF6C2C] text-lg" /> },
        { name: 'WHM / WHMCS', icon: <FaServer className="text-gray-600 text-lg" /> },
        { name: 'DNS Management', icon: <MdDns className="text-blue-500 text-lg" /> },
        { name: 'Webmail', icon: <FaEnvelope className="text-red-400 text-lg" /> },
        { name: 'Outlook', icon: <FaEnvelope className="text-[#0078D4] text-lg" /> }
      ]
    },
    {
      title: 'Project Management Tools',
      description: 'Coordinating cross-functional teams and tracking project lifecycles with agile methodologies.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      ),
      skills: [
        { name: 'Jira', icon: <FaJira className="text-[#0052CC] text-lg" /> },
        { name: 'Trello', icon: <FaTrello className="text-[#0052CC] text-lg" /> },
        { name: 'Notion', icon: <SiNotion className="text-gray-800 text-lg" /> },
        { name: 'Zoho Connect', icon: <SiZoho className="text-[#000000] text-lg" /> },
        { name: 'Draw.io', icon: <FaProjectDiagram className="text-orange-500 text-lg" /> },
        { name: 'Google Sheet', icon: <SiGooglesheets className="text-[#34A853] text-lg" /> }
      ]
    },
    {
      title: 'AI & Automation',
      description: 'Leveraging artificial intelligence tools to automate workflows and enhance business productivity.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      ),
      skills: [
        { name: 'Google Antigravity', icon: <SiGoogle className="text-[#4285F4] text-lg" /> },
        { name: 'Gemini Canvas', icon: <SiGooglegemini className="text-[#8E75B2] text-lg" /> },
        { name: 'GPT', icon: <SiOpenai className="text-[#412991] text-lg" /> },
        { name: 'Groq', icon: <FaRobot className="text-orange-500 text-lg" /> },
        { name: 'Claude', icon: <SiAnthropic className="text-[#D4A373] text-lg" /> },
        { name: 'Pyannote', icon: <FaPython className="text-[#3776AB] text-lg" /> },
        { name: 'N8N', icon: <SiN8N className="text-[#FF6E4A] text-lg" /> }
      ]
    },
    {
      title: 'Digital Marketing & Analytics',
      description: 'Driving business growth through data-driven marketing, tracking, and SEO strategies.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      ),
      skills: [
        { name: 'Google Analytics', icon: <SiGoogleanalytics className="text-[#E37400] text-lg" /> },
        { name: 'Google Tag Manager', icon: <SiGoogletagmanager className="text-[#246FDB] text-lg" /> },
        { name: 'Search Console', icon: <SiGoogle className="text-[#4285F4] text-lg" /> },
        { name: 'Business Profile', icon: <SiGoogle className="text-[#4285F4] text-lg" /> },
        { name: 'Adsense', icon: <SiGoogleads className="text-[#F4B400] text-lg" /> },
        { name: 'Adwords', icon: <SiGoogleads className="text-[#F4B400] text-lg" /> },
        { name: 'Mailchimp', icon: <SiMailchimp className="text-black text-lg" /> }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white rounded-3xl shadow-sm p-8 md:p-10">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Skills &amp; Expertise</h2>
        <div className="h-px bg-blue-500 w-24 rounded-full flex-grow opacity-20"></div>
      </div>

      {/* Core Competencies - Hero Style */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Core Competencies
        </h3>
        <div className="flex flex-wrap gap-3">
          {coreCompetencies.map((skill, i) => {
            const gradients = [
              'from-blue-500 to-cyan-400 shadow-blue-500/20 hover:shadow-blue-500/40',
              'from-indigo-500 to-purple-500 shadow-indigo-500/20 hover:shadow-indigo-500/40',
              'from-violet-500 to-fuchsia-500 shadow-violet-500/20 hover:shadow-violet-500/40',
              'from-cyan-500 to-teal-400 shadow-cyan-500/20 hover:shadow-cyan-500/40',
              'from-blue-600 to-indigo-500 shadow-blue-600/20 hover:shadow-blue-600/40'
            ];
            const colorClass = gradients[i % gradients.length];
            return (
              <span
                key={i}
                className={`bg-gradient-to-r ${colorClass} text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default border border-white/20 backdrop-blur-sm`}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>

      {/* Technical Skills Grid */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Technical Skills &amp; Tools
        </h3>
        <div className="flex flex-col md:flex-row items-stretch mt-4">
          {/* Left: Tab Menu */}
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible md:w-64 shrink-0 relative z-10 md:-mr-[1px] -mb-[1px] md:mb-0 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
            {technicalCategories.map((category, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-3 px-5 py-4 text-left transition-all duration-200 min-w-max md:min-w-0 border ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-50 to-white border-blue-200 border-b-white md:border-b-blue-200 md:border-r-white text-blue-700 font-bold z-20 rounded-t-xl md:rounded-t-none md:first:rounded-tl-xl md:last:rounded-bl-xl shadow-[0_-4px_6px_-4px_rgba(59,130,246,0.1)] md:shadow-[-4px_0_6px_-4px_rgba(59,130,246,0.1)]'
                      : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50/50 z-10'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? 'bg-transparent text-blue-600 scale-110' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {React.cloneElement(category.icon, { className: 'w-5 h-5' })}
                  </div>
                  <span className="text-[15px]">{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Content Display */}
          <div className="flex-1 bg-white border border-gray-200 rounded-b-2xl rounded-tr-2xl md:rounded-tr-2xl md:rounded-bl-none md:rounded-r-2xl p-6 md:p-10 relative z-0 shadow-sm transition-all duration-300">
            {/* Flex layout for Icon + Title/Desc */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              {/* Vibrant Icon Box */}
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                {React.cloneElement(technicalCategories[activeTab].icon, { className: 'w-10 h-10 text-white' })}
              </div>
              
              {/* Title & Desc */}
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {technicalCategories[activeTab].title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {technicalCategories[activeTab].description}
                </p>
              </div>
            </div>
            
            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {technicalCategories[activeTab].skills.map((skill, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:-translate-y-1 hover:shadow-md hover:border-blue-300 hover:text-blue-700 transition-all duration-300 cursor-default"
                >
                  <span className="shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-sm">
                    {skill.icon}
                  </span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
