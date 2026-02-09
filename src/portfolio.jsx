import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, Briefcase, User, TrendingUp, Shield, Heart} from 'lucide-react';


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('projects');

  const portfolioData = {
    name: "Archana Srinivas",
    title: "Software Developer | IT Support Specialist",
    tagline: "Welcome to my website! Here you’ll find information about me, my interests, my experiences, my projects, and more.",
    email: "archanasrinivas482@gmail.com",
    github: "https://github.com/archana-srinivas",
    linkedin: "https://www.linkedin.com/in/archanas01",
    
    about: "I'm an aspiring IT professional building expertise across cybersecurity, and software development. With hands-on experience in enterprise-grade tools and platforms, I'm focused on delivering reliable technical solutions and proactive security monitoring.",
    
    skills: {
    "Ticketing/ITSM": ["ServiceNow", "Jira", "osTicket", "Spiceworks"],
    "Monitoring": ["Nagios", "Zabbix", "PRTG", "Prometheus", "Grafana"],
    "Security": ["Splunk", "Suricata", "Wireshark", "OpenVAS", "OWASP ZAP"],
    "Cloud": ["AWS", "Azure", "Terraform", "Docker", "Kubernetes"],
    "Database": ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    "Development": ["Git", "React", "Node.js", "Python", "Jenkins"],
    "Networking": ["pfSense", "Cisco Packet Tracer"],
    "Scripting": ["PowerShell", "Python", "Bash"],
    "Testing": ["Selenium", "Cypress", "JMeter", "Postman"]  
    },
    
    projects: [
      {
        title: "Incident Management & Automation",
        description: "An incident management solution focused on improving tracking, escalation, and resolution processes for electronic trading platforms. The project includes incident categorization and severity mapping in ServiceNow to enhance response times, along with data analysis using SQL and Excel to identify recurring platform, connectivity, and entitlement issues.",
        tech: ["ServiceNow", "MySQL", "Microsoft Excel", "Power BI", "Python"],
        github: "https://github.com/archana-srinivas/incident-management-automation",
        highlights: ["Incident Tracking Automation", "Severity Mapping", "Data Analysis & Reporting"],
        icon: Shield,
        color: "bg-blue-500",
        lightColor: "bg-blue-50",
        borderColor: "border-blue-200"
      },
      {
        title: "Real-Time Trade Reconciliation System",
        description: "A reconciliation engine that processes daily trade records, matching internal transactions against external clearing house data. Automatic matching of internal vs external trades, discrepancy detection with configurable tolerance levels, alert mechanisms for unmatched or mismatched trades, and audit trail in MongoDB.",
        tech: ["Java", "Spring Boot", "Apache Kafka", "MongoDB"],
        github: "https://github.com/archana-srinivas/Projects",
        highlights: ["Kafka Integration", "Real-time Processing", "MongoDB Audit Trail"],
        icon: TrendingUp,
        color: "bg-emerald-500",
        lightColor: "bg-emerald-50",
        borderColor: "border-emerald-200"
      },
      {
        title: "Threat Detection with UNSW-NB15",
        description: "In today's digital world, network security is a major concern. Cyber attacks are increasingly common and harder to detect. This project aims to classify network traffic as either normal or malicious (attack) based on network behavior using machine learning. Accurately predicting attacks can help reduce security breaches and system downtime.",
        tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
        github: "https://github.com/w8162583/projects",
        highlights: ["ML Classification", "Network Traffic Analysis", "85% Accuracy"],
        icon: Shield,
        color: "bg-purple-500",
        lightColor: "bg-purple-50",
        borderColor: "border-purple-200"
      },
      {
        title: "Donor-Recipient Matching Dashboard",
        description: "A full-stack medical application designed to modernize the organ donation matching process. It serves as a technical bridge, connecting the ColdFusion (CFML) backend with the React.js frontend, supported by an SQL Server database. Key Feature: A 'Match Score' algorithm in the SQL procedure that ranks potential donors based on blood type and proximity.",
        tech: ["React.js", "ColdFusion (CFML)", "SQL Server", "REST APIs"],
        github: "https://github.com/archana-srinivas/Donor-Recipient-Matching-Dashboard-React-ColdFusion-SQL-Server",
        highlights: ["Full-Stack App", "Match Algorithm", "ColdFusion Backend"],
        icon: Heart,
        color: "bg-red-500",
        lightColor: "bg-red-50",
        borderColor: "border-red-200"
      }
    ],

    
    experience: [
      {
        role: "Technical Client Support Analyst",
        company: "CAMBLISS STUDIO",
        period: "Feb 2023 - Jul 2024",
        achievements: [
          "Served as the primary contact for platform-related issues including authentication, entitlements, access provisioning, and navigation.",
          "Designed and optimized SQL database schemas and queries for PostgreSQL, improving data retrieval performance via indexing and query optimization.",
          "Supported web, desktop, and mobile applications across Windows, iOS, and browser environments.",
          "Implemented automated testing frameworks using JUnit and Mockito, achieving 85% code coverage and reducing production defects by 40%.",
          "Participated in code reviews and mentored junior developers on object-oriented design, SOLID principles, and clean code practices.",
          "Managed production support responsibilities, troubleshooting critical issues in UNIX/Linux environments and reducing incident resolution time."
        ]
      }
    ]
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Space Mono', monospace;
          overflow-x: hidden;
        }
        
        .font-display {
          font-family: 'Syne', sans-serif;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #00ff88 0%, #00b8ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 255, 136, 0.15);
        }
        
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00ff88, #00b8ff);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        
        .skill-tag {
          background: rgba(0, 255, 136, 0.1);
          border: 1px solid rgba(0, 255, 136, 0.3);
          transition: all 0.3s ease;
        }
        
        .skill-tag:hover {
          background: rgba(0, 255, 136, 0.2);
          border-color: rgba(0, 255, 136, 0.6);
          transform: scale(1.05);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
        
        .grain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.05;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* Grain Overlay */}
      <div className="grain" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-lg z-50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <button onClick={() => scrollToSection('projects')} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</button>
            <button onClick={() => scrollToSection('skills')} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</button>
            <button onClick={() => scrollToSection('experience')} className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>Experience</button>
            <button onClick={() => scrollToSection('contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 via-transparent to-[#00b8ff]/5" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in stagger-1">
            <div className="text-sm tracking-[0.3em] text-[#00ff88] mb-4 uppercase">
              {portfolioData.title}
            </div>
          </div>
          <h1 className="font-display text-7xl md:text-8xl font-bold mb-6 animate-fade-in stagger-2">
            <div className="gradient-text">{portfolioData.name}</div>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in stagger-3">
            {portfolioData.tagline}
          </p>
          <div className="flex gap-6 justify-center animate-fade-in stagger-4">
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href={`mailto:${portfolioData.email}`}
               className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00b8ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/20 transition-all">
              <Mail size={20} />
              <span>Get Resume</span>
            </a>
          </div>
          <div className="mt-16 animate-fade-in stagger-4">
            <ChevronDown className="mx-auto animate-bounce text-[#00ff88]" size={32} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Code2 className="text-[#00ff88]" size={32} />
            <h2 className="font-display text-5xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid gap-8">
            {portfolioData.projects.map((project, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 card-hover">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-lg">{project.description}</p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                         className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all">
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                         className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="skill-tag px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Code2 className="text-[#00ff88]" size={32} />
            <h2 className="font-display text-5xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills], idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="font-display text-2xl font-bold mb-6 gradient-text">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <span key={i} className="skill-tag px-4 py-2 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Briefcase className="text-[#00ff88]" size={32} />
            <h2 className="font-display text-5xl font-bold">Experience</h2>
          </div>
          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-[#00ff88] pl-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#00ff88]" />
                <div className="mb-4">
                  <h3 className="font-display text-2xl font-bold">{exp.role}</h3>
                  <div className="flex items-center gap-3 text-gray-400 mt-1">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] mt-2 shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-t from-[#0a0a0a] to-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <User className="text-[#00ff88]" size={32} />
            <h2 className="font-display text-5xl font-bold">About & Contact</h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              {portfolioData.about}
            </p>
            <div className="border-t border-white/10 pt-8">
              <h3 className="font-display text-2xl font-bold mb-6">Let's Connect</h3>
              <div className="flex flex-col gap-4">
                <a href={`mailto:${portfolioData.email}`} 
                   className="flex items-center gap-3 text-lg hover:text-[#00ff88] transition-colors">
                  <Mail size={24} />
                  <span>{portfolioData.email}</span>
                </a>
                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-3 text-lg hover:text-[#00ff88] transition-colors">
                  <Github size={24} />
                  <span>GitHub Profile</span>
                </a>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-3 text-lg hover:text-[#00ff88] transition-colors">
                  <Linkedin size={24} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© {new Date().getFullYear()} {portfolioData.name}. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
