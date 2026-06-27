import React, { useState } from 'react';

const Projects = () => {
  const categories = ['All', 'Enterprise Solutions', 'Cloud & Infrastructure', 'Project Management', 'E-Commerce & Operations', 'IT Operations'];

  const projectData = [
    {
      id: 5,
      title: 'Contact Information Standardization Policy',
      category: 'Project Management',
      description: 'Led the standardization of brand and contact details across transactional documents, websites, and packaging, finalizing the new policy through a One-Page Memo co-signed with the Commissioner.',
      impact: 'Streamlined customer communication channels, reduced email spam risks, and standardized brand information across multiple platforms and physical packaging.',
      tools: ['Google Sheets', 'Cross-functional Coordination', 'Policy Drafting', 'Project Management'],
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'KOL Management System',
      category: 'Enterprise Solutions',
      description: 'Directed the full-cycle development of a Key Opinion Leader (KOL) Management System for multiple business units (Marketing, Beauty Care, Beverage, and F&B). Managed the project from initial brief, ERD and process flow design, to UAT, quality control, bug fixing delegation, and live support.',
      impact: 'Successfully delivered a centralized platform, bridging cross-functional business units with the full-stack development team, ensuring smooth delivery from concept to post-launch support.',
      tools: ['System Design (ERD/Flow)', 'Full-stack Team Management', 'UAT & QC', 'Cross-functional Coordination'],
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 7,
      title: 'Website Migration from AWS to On-Premise',
      category: 'Cloud & Infrastructure',
      description: 'Orchestrated the end-to-end migration of over 20 corporate websites and web applications from AWS Cloud to On-Premise servers. The comprehensive process included database and file migrations from S3 buckets, FTP setup, SSL configuration, DNS cutover, and post-migration functional testing.',
      impact: 'Successfully transitioned all digital assets with zero data loss, optimizing infrastructure costs and centralizing server management for the IT department.',
      tools: ['AWS (S3/EC2)', 'On-Premise Server', 'DNS/SSL Management', 'Database Migration', 'Project Management'],
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      id: 8,
      title: 'Web Security Audit & Apple Device Compatibility Fixes',
      category: 'Cloud & Infrastructure',
      description: 'Led a comprehensive security audit and maintenance project across 20+ corporate websites. Executed server-side file cleaning via FTP, .htaccess reconfiguration, and folder restructuring. Addressed critical SSL compatibility issues specific to Apple devices (iOS/macOS), hardened server security by changing default SSH ports, and established proactive log monitoring.',
      impact: 'Resolved Apple device access issues, fortified website security against vulnerabilities, and ensured 100% uptime post-restructuring across the entire digital ecosystem.',
      tools: ['Security Auditing', 'Server Hardening', 'SSL/TLS Configuration', 'FTP/SSH Management', 'Cross-Device Testing'],
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 9,
      title: 'Vendor Negotiation for POS & CRM Salon System',
      category: 'Project Management',
      description: 'Led the end-to-end vendor sourcing and evaluation process for a new Salon POS and CRM booking system. Conducted comprehensive vendor meetings, feature/pricing comparisons, and timeline planning for stakeholders. Collaborated with the Marketing team to gather business requirements and coordinated with the IT Infrastructure team to estimate and plan the accompanying hardware specifications.',
      impact: 'Delivered a data-driven vendor comparison and complete CAPEX projection (software and hardware), enabling stakeholders to make an informed strategic decision for the business.',
      tools: ['Vendor Management', 'Requirements Gathering', 'Cross-functional Collaboration', 'Budgeting', 'IT Procurement'],
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      id: 10,
      title: 'Jubelio Omni-Channel System Implementation & Migration',
      category: 'E-Commerce & Operations',
      description: 'Managed the implementation and ongoing maintenance of Jubelio, an omni-channel system used by the e-commerce team to process orders from multiple marketplaces and internal websites. Oversaw order processing workflows, stock recording, product management, shipping label printing, and tracking number input. Led the critical migration project from Jubelio v1 to v2, serving as the primary bridge between the Jubelio team and internal stakeholders — coordinating timelines, building migration checklists, conducting user training, and validating all existing features post-migration.',
      impact: 'Successfully led the platform migration with zero operational downtime, ensuring seamless continuity of e-commerce operations and enabling the team to leverage enhanced v2 features.',
      tools: ['Jubelio', 'Marketplace Integration', 'Project Coordination', 'User Training', 'Migration Planning'],
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
      )
    },
    {
      id: 11,
      title: 'Social Media Standardization SOP & Periodic Audit',
      category: 'IT Operations',
      description: 'Developed and enforced a comprehensive standardization policy for corporate social media usage across all brands. Created detailed setup checklists for new brand social media registrations, established Standard Operating Procedures (SOPs) for access control including login credentials management, and implemented strict governance protocols to ensure accounts are managed exclusively by authorized personnel. Conducted regular periodic audits to maintain compliance and security.',
      impact: 'Established a secure, standardized social media governance framework that minimized unauthorized access risks and ensured brand consistency across all digital channels.',
      tools: ['SOP Development', 'Access Control Policy', 'Compliance Auditing', 'Brand Governance', 'Checklist Management'],
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      )
    },
    {
      id: 12,
      title: 'IT Asset Management System',
      category: 'IT Operations',
      description: 'Established and maintained a structured IT asset management process to track all incoming and outgoing hardware and equipment. Implemented detailed asset recording including item name, physical location, quantity, serial number, and user assignment tracking to ensure full accountability and traceability of every corporate IT asset.',
      impact: 'Achieved complete visibility and accountability over all IT assets, reducing equipment loss, streamlining inventory audits, and enabling data-driven procurement decisions.',
      tools: ['Asset Tracking', 'Inventory Management', 'Data Recording', 'Hardware Lifecycle Management'],
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      )
    },
    {
      id: 13,
      title: 'IT Budget Recording & Procurement Management',
      category: 'IT Operations',
      description: 'Managed disciplined end-to-end IT budget recording and procurement processes. Systematically tracked all purchased items, maintained detailed expense budgets, and prepared structured financial reports for the Finance team. Ensured transparency and accuracy in every procurement transaction to support informed financial planning and cost control.',
      impact: 'Delivered accurate and timely budget reports that enabled the Finance team to maintain precise cost oversight, reducing discrepancies and supporting strategic resource allocation.',
      tools: ['Budget Management', 'Procurement', 'Financial Reporting', 'Google Sheets', 'Expense Tracking'],
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 14,
      title: 'E-Commerce Delivery Tracking Feature Development',
      category: 'E-Commerce & Operations',
      description: 'Led the development of a delivery tracking module for the internally-built e-commerce website, enabling customers to track their order shipments in real-time directly on the platform. Actively participated in technical meetings with third-party logistics providers, reviewed API and Webhook documentation, and coordinated the integration process between external services and the internal development team.',
      impact: 'Enhanced customer experience by providing real-time order tracking visibility, reducing customer support inquiries related to delivery status and increasing overall platform trust.',
      tools: ['API Integration', 'Webhook', 'Third-Party Coordination', 'Technical Documentation', 'E-Commerce Development'],
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 15,
      title: 'E-Commerce Website Development & Payment Gateway Integration',
      category: 'E-Commerce & Operations',
      description: 'Built an in-house e-commerce website as a direct-to-consumer sales channel, allowing customers to purchase products straight from the manufacturer at more competitive prices. Handled the full integration of Midtrans payment gateway — from account registration, intensive coordination with the Midtrans Account Manager, to preparing all required documentation. Collaborated closely with the Legal team to secure corporate documents and director signatures for each payment channel activation. Designed the complete customer journey flow, from product catalog browsing and cart management to billing details and checkout. Personally led the initial QC and UAT phases before expanding the team with a full-stack developer. Also managed the ongoing payment settlement operations, including processing transaction withdrawals from the Midtrans dashboard, exporting withdrawal reports, and coordinating with the Finance team to ensure timely and accurate fund transfers to the corporate bank account.',
      impact: 'Launched a fully functional e-commerce platform with secure online payments, opening a new direct sales channel that offered better pricing for both the company and its customers. Ensured smooth financial operations through disciplined withdrawal processing and cross-team coordination with Finance.',
      tools: ['Midtrans', 'Payment Gateway Integration', 'Financial Reconciliation', 'UAT & QC', 'UX Journey Design', 'Cross-functional Coordination'],
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      id: 16,
      title: 'Shipping Cost Calculator Module (Wahana & J&T API)',
      category: 'E-Commerce & Operations',
      description: 'Developed a shipping cost calculator module for the internal e-commerce website with two calculation methods: real-time rate fetching via direct API integration with third-party logistics providers (Wahana and J&T), and a secondary method based on custom tariff tables defined by the Business Department. Coordinated technical meetings with logistics partners to discuss integration requirements, studied their API and webhook documentation, and delegated the development execution to the full-stack development team while managing the overall project timeline and delivery.',
      impact: 'Delivered an accurate, dual-method shipping calculator that provided customers with transparent delivery costs at checkout, improving conversion rates and reducing order abandonment.',
      tools: ['API Integration', 'Webhook', 'Third-Party Logistics', 'Project Management', 'UAT'],
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      id: 17,
      title: 'Multi-Warehouse Inventory Integration & Omni-Channel Sync',
      category: 'E-Commerce & Operations',
      description: 'Implemented a multi-warehouse inventory system for the internal e-commerce website, enabling the platform to pull real-time stock data from multiple branch warehouse locations. Customized the storefront so that customers could view product availability based on their selected location, ensuring accurate stock visibility per warehouse. Delegated the technical development to the full-stack developer team and led the project end-to-end through UAT to ensure the module functioned reliably across all warehouse branches.',
      impact: 'Enabled location-based stock visibility for customers, reducing out-of-stock order issues and improving fulfillment accuracy across multiple warehouse branches.',
      tools: ['Inventory Management', 'Multi-Warehouse System', 'Jubelio Integration', 'Project Management', 'UAT'],
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 18,
      title: 'Customer Service Ticketing System Implementation',
      category: 'Enterprise Solutions',
      description: 'Led the end-to-end sourcing, evaluation, and implementation of a customer service ticketing system to streamline WhatsApp-based customer inquiries. Independently researched and shortlisted potential platforms, conducted feature and pricing comparisons, and arranged meetings with each vendor to assess their offerings. Presented a structured comparison to management for final decision-making. After vendor selection, managed the procurement and full implementation process. Created comprehensive user guides covering the ticket lifecycle — from accepting incoming tickets, responding to customers, assigning tickets to other agents, to resolving completed inquiries. Delivered hands-on training sessions to the Customer Service team to ensure smooth adoption of the new system.',
      impact: 'Transformed the customer service workflow from unstructured WhatsApp conversations into an organized ticketing system, improving response times, enabling workload distribution across agents, and providing management with visibility into CS performance metrics.',
      tools: ['MessageBird', 'Vendor Evaluation', 'SOP & User Guide', 'User Training', 'WhatsApp Integration'],
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      )
    }
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'All'
    ? projectData
    : projectData.filter(project => project.category === activeFilter);

  return (
    <section className="bg-white rounded-3xl shadow-sm p-8 md:p-10">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="text-3xl font-bold text-gray-900">Projects &amp; Initiatives</h2>
          <div className="h-px bg-blue-500 w-24 rounded-full flex-grow opacity-20"></div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${activeFilter === cat
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-800'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-gray-50 rounded-2xl p-6 border border-gray-100/80 hover:border-blue-100 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header Icon + Category */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  {project.icon}
                </div>
                <span className="text-xs font-bold text-blue-600 tracking-wide uppercase">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>

              {/* Impact / Results */}
              {project.impact && (
                <div className="mb-4 p-3 bg-blue-50/50 rounded-xl border border-blue-50">
                  <p className="text-xs text-gray-700 leading-relaxed line-clamp-3">
                    <strong className="text-blue-700 font-bold">Key Impact:</strong> {project.impact}
                  </p>
                </div>
              )}
            </div>

            {/* Read More Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setSelectedProject(project)}
                className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors group/btn"
              >
                Read More
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modern Modal Dialog */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform transition-all flex flex-col">
            {/* Header Sticky */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 p-6 flex items-start justify-between gap-4 z-10 rounded-t-3xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 hidden sm:flex">
                  {selectedProject.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 tracking-wide uppercase mb-1 block">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight pr-4">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors shrink-0"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6 md:p-8 flex-grow">
              <div className="mb-8">
                <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Project Overview</h4>
                <p className="text-base text-gray-600 leading-relaxed whitespace-pre-line">
                  {selectedProject.description}
                </p>
              </div>
              
              {selectedProject.impact && (
                <div className="mb-8 p-5 bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-2xl border border-blue-100/50">
                  <h4 className="text-sm font-bold text-blue-900 mb-2 uppercase tracking-wider">Key Impact</h4>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    {selectedProject.impact}
                  </p>
                </div>
              )}

              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Tools &amp; Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-50 text-gray-600 border border-gray-200/60 px-3 py-1.5 rounded-lg text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
