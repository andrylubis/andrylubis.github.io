import React from 'react';

const Skills = () => {
  const coreCompetencies = [
    'IT Project Management (Waterfall & Agile)',
    'IT Business Architecture',
    'Change & Risk Management',
    'Software & Web Development',
    'IT Operations',
    'Vendor Negotiation',
    'Troubleshooting',
    'Leadership & Team Management',
    'AI Adoption'
  ];

  const technicalSkills = [
    'HTML', 'CSS', 'JavaScript', 'AngularJS', 'PHP', 'NodeJS', 'React', 'WordPress',
    'Woocommerce', 'Payment Gateway Integration', 'WPBakery Visual Composer', 'MySQL',
    'Cloud Hosting', 'AWS', 'Cloudways', 'cPanel', 'DNS Management', 'Mail Server', 'Mailchimp',
    'Google Search Console', 'Google Analytics', 'Odoo', 'Jira',
    'Trello', 'Zoho', 'WhatsApp Business API', 'UiZard', 'Draw.io', 'N8N', 'Google Antigravity'
  ];

  return (
    <section className="bg-white rounded-3xl shadow-sm p-8 md:p-10">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
        <div className="h-px bg-blue-500 w-24 rounded-full flex-grow opacity-20"></div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span> Core Competencies
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {coreCompetencies.map((skill, i) => (
              <span
                key={i}
                className="bg-gray-50 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium border border-gray-100 hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span> Technical Skills & Tools
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {technicalSkills.map((skill, i) => (
              <span
                key={i}
                className="bg-gray-50 text-gray-600 px-4 py-2 rounded-xl text-sm font-medium border border-gray-100 hover:bg-gray-100 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
