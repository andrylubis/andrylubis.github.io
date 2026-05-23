import React from 'react';

const Resume = () => {
  const experiences = [
    {
      id: 1,
      role: 'IT Manager',
      company: 'PT. Niagamas Lestari Gemilang',
      period: 'Sep 2025 - Present',
      description: 'Managed multiple IT teams, Lead end-to-end IT project management, vendor management, software/hardware procurement, CAPEX/OPEX, cloud infrastructure, network connectivity, and SLA compliance.'
    },
    {
      id: 2,
      role: 'MIS Executive',
      company: 'PT. Akasha Wira International Tbk',
      period: 'Sep 2018 - Aug 2025',
      description: 'Leading system improvements, manage IT team, project management, and vendor negotiations. Managed end-to-end IT projects using Agile/Scrum methodologies, including requirements analysis, UAT, and system implementation.'
    },
    {
      id: 3,
      role: 'Senior Digital Technology Developer',
      company: 'PT. Media Kuliner Nusantara',
      period: 'Feb 2016 - Sep 2018',
      description: 'Provided strategic recommendations to the Managing Director on digital ecosystem architecture, Developed and maintained online food platforms, reducing downtime by 99% and improving user experience.'
    },
    {
      id: 4,
      role: 'Web Developer',
      company: 'Top Hosting ID',
      period: 'Jan 2014 - Jan 2016',
      description: 'Developing 400+ client websites, Managed WHM, WHMCS, and domain registrar for hosting and domain provisioning.'
    }
  ];

  const educations = [
    {
      id: 1,
      degree: "Bachelor's Degree in Computer Systems (S1)",
      institution: 'Universitas Komputer Indonesia (UNIKOM), Bandung',
      period: 'Graduated 2015',
      description: 'Awarded Excellence Scholarship from the Ministry of Education and Culture (KEMENDIKBUD).',
    }
  ];

  return (
    <section className="bg-white rounded-3xl shadow-sm p-8 md:p-10">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Resume</h2>
        <div className="h-px bg-blue-500 w-24 rounded-full flex-grow opacity-20"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Experience Column */}
        <div>
          <div className="flex items-center gap-3 mb-6 text-xl font-bold text-gray-800">
            <div className="text-blue-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            Experience
          </div>
          <div className="relative border-l border-gray-200 ml-3 space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-6">
                <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-white"></span>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md mb-2 inline-block">{exp.period}</span>
                <h4 className="text-base font-bold text-gray-900">{exp.role}</h4>
                <p className="text-sm font-medium text-gray-500 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certs Column */}
        <div>
          <div className="flex items-center gap-3 mb-6 text-xl font-bold text-gray-800">
            <div className="text-blue-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
            </div>
            Education
          </div>
          <div className="relative border-l border-gray-200 ml-3 space-y-8 mb-10">
            {educations.map((edu) => (
              <div key={edu.id} className="relative pl-6">
                <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-white"></span>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md mb-2 inline-block">{edu.period}</span>
                <h4 className="text-base font-bold text-gray-900">{edu.degree}</h4>
                <p className="text-sm font-medium text-gray-500 mb-2">{edu.institution}</p>
                <p className="text-sm text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-6 text-xl font-bold text-gray-800">
            <div className="text-blue-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            </div>
            Certifications
          </div>
          <div className="relative border-l border-gray-200 ml-3 space-y-6">
            <div className="relative pl-6">
              <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-white"></span>
              <p className="text-sm font-bold text-gray-900">Product & Project Management</p>
              <p className="text-xs text-gray-500">MySkill | 2026</p>
            </div>
            <div className="relative pl-6">
              <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-white"></span>
              <p className="text-sm font-bold text-gray-900">PMI Citizen Developer™ Business Architect</p>
              <p className="text-xs text-gray-500">Project Management Institute | 2025</p>
            </div>
            <div className="relative pl-6">
              <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-white"></span>
              <p className="text-sm font-bold text-gray-900">AWS Cloud Practitioner Essentials</p>
              <p className="text-xs text-gray-500">Dicoding Academy | 2021</p>
            </div>
            <div className="relative pl-6">
              <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-white"></span>
              <p className="text-sm font-bold text-gray-900">Developer Masterclass</p>
              <p className="text-xs text-gray-500">Meta Facebook | 2017</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
