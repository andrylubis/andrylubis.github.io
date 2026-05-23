import React from 'react';

const About = () => {
  return (
    <section className="bg-white rounded-3xl shadow-sm p-8 md:p-10">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
        <div className="h-px bg-blue-500 w-24 rounded-full flex-grow opacity-20"></div>
      </div>
      
      <div className="text-gray-600 leading-relaxed space-y-4 text-[15px] md:text-base">
        <p>
          IT leader with more than <span className="font-semibold text-gray-800">10 years of experience</span> in IT project management, digital
          transformation, and IT operations across FMCG and distribution industries. Currently serving
          as Head of IT / IT Manager, leading technology strategy, system integration, and AI-driven
          initiatives to improve business efficiency and decision-making. 
        </p>
        <p>
          I have a proven track record in delivering scalable solutions, optimizing business processes, 
          and aligning technology with organizational goals. My expertise spans cloud infrastructure, 
          AI adoption (LLMs, automation), omni-channel e-commerce systems, and full-stack technical delivery.
        </p>
      </div>
    </section>
  );
};

export default About;
