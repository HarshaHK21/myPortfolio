import React from 'react';

export function Resume() {
  
  const skillCategories = [
    { title: "Languages", skills: ["Python", "JavaScript", "TypeScript", "Java", "C#", "PHP", "HTML", "CSS"] },
    { title: "Frontend", skills: ["React.js", "Angular", "Tailwind CSS", "Bootstrap", "Figma (UI/UX)"] },
    { title: "Backend", skills: ["Node.js", "Express.js"] },
    { title: "Data & AI", skills: ["PySpark", "Pandas", "TensorFlow/Keras (CNN)", "Multiple Linear Regression"] },
    { title: "Database", skills: ["MongoDB", "MySQL"] },
    { title: "Cloud & Tools", skills: ["AWS IoT Core", "Git/GitHub", "Jira", "Selenium WebDriver", "TestLink"] }
  ];

  const projects = [
    {
      name: "Soul of Lanka – Travel Management System",
      tech: "MERN Stack",
      description: "A secure, full-stack travel booking system featuring role-based access for Users, Agents, and Admins.",
      features: ["JWT Authentication", "Secure password hashing (bcrypt)", "Automated email notifications"],
      stackDetails: "MongoDB, Express.js, React, Node.js, TypeScript, Tailwind CSS",
      color: "#5483B3"
    },
    {
      name: "Smart Beach Cleaning Robot",
      tech: "AI & IoT",
      description: "An ongoing autonomous robotics project focused on intelligent waste detection and navigation.",
      features: ["CNN for plastic waste detection", "MLR for movement optimization"],
      stackDetails: "Python, TensorFlow, ESP32, AWS IoT Core",
      color: "#7DA0CA"
    },
    {
      name: "Spotify Song Trends Analysis",
      tech: "Big Data Analysis",
      description: "A scalable data processing system analyzing over 30,000 song records to identify music trends.",
      features: ["End-to-end data pipeline", "Genre-wise popularity using RDD/DataFrame APIs"],
      stackDetails: "Python, PySpark, Pandas, Matplotlib",
      color: "#5483B3"
    },
    {
      name: "Vintage Summer – E-commerce QA",
      tech: "Quality Assurance",
      description: "Conducted comprehensive manual and automated testing for an online clothing platform.",
      features: ["Automated key user journeys (login, checkout)", "Managed test cases in TestLink"],
      stackDetails: "Selenium WebDriver, TestLink, PHP, SQL",
      color: "#7DA0CA"
    }
  ];

  const education = [
    { title: "BSc (Hons) in Information Technology", place: "BCI Campus (2023 – Present)" },
    { title: "Information Communication Technology Technician", place: "Vocational Training Authority (2022)" }
  ];

  const certifications = [
    "AI/ML Engineer Stage 1 – SLIIT (2025)",
    "Python for Data Science – Cognitive Class by IBM (2025)",
    "Introduction to UI/UX Design – Le Wagon (2025)",
    "Front-End Web Development – University of Moratuwa (2023)"
  ];

  const softSkills = [
    "Innovative Problem Solving",
    "Team Leadership & Coordination",
    "Communication & Presentation",
    "Fast Learner & Adaptable"
  ];

  return (
    <section 
      id="resume" 
      className="min-h-screen py-20"
      style={{ backgroundColor: '#021024' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation */}
        <nav className="flex space-x-8 mb-12">
            {['Home', 'About', 'Resume', 'Portfolio'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`hover:text-[#5483B3] transition-colors ${item === 'Resume' ? 'border-b-2 border-[#5483B3]' : ''}`}
                style={{ color: '#C1E8FF' }}
              >
                {item}
              </a>
            ))}
        </nav>

        {/* Note: User requested "Projects" to be part of the major update. 
            Given the structure, I will place Projects prominently in the layout. */}

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column - Skills (4 cols) */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 tracking-wide" style={{ color: '#C1E8FF' }}>
                SKILLS
              </h3>
              <div className="space-y-8">
                {skillCategories.map((category) => (
                  <div key={category.title}>
                    <h4 className="font-semibold mb-3 text-lg" style={{ color: '#5483B3' }}>{category.title}</h4>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map(skill => (
                            <span 
                                key={skill} 
                                className="px-3 py-1 rounded-md text-sm transition-all hover:bg-[#5483B3] hover:text-[#021024]"
                                style={{ backgroundColor: 'rgba(84, 131, 179, 0.1)', color: '#C1E8FF', border: '1px solid rgba(84, 131, 179, 0.3)' }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-6 tracking-wide" style={{ color: '#C1E8FF' }}>
                SOFT SKILLS
              </h3>
              <ul className="space-y-3">
                {softSkills.map((skill) => (
                  <li key={skill} className="flex items-center space-x-3 text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5483B3]"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Middle/Right Column - Projects & Education (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Projects Section */}
            <div id="portfolio">
              <h3 className="text-2xl font-bold mb-8 tracking-wide" style={{ color: '#C1E8FF' }}>
                PROJECTS
              </h3>
              <div className="grid gap-8">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="group p-6 rounded-2xl border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(84,131,179,0.2)]"
                    style={{ 
                        backgroundColor: 'rgba(5, 38, 89, 0.4)', 
                        borderColor: 'rgba(84, 131, 179, 0.2)',
                        backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold group-hover:text-[#5483B3] transition-colors" style={{ color: '#ffffff' }}>{project.name}</h4>
                        <span className="text-xs px-2 py-1 rounded bg-[#5483B3]/20 text-[#7DA0CA] border border-[#5483B3]/30">
                            {project.tech}
                        </span>
                    </div>
                    <p className="text-white/80 mb-4 leading-relaxed text-sm">
                        {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4">
                        <h5 className="text-sm font-semibold mb-2" style={{ color: '#5483B3' }}>Key Features:</h5>
                        <ul className="list-disc list-inside text-sm text-[#7DA0CA] space-y-1">
                            {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-4 border-t border-[#5483B3]/20">
                         <p className="text-xs" style={{ color: '#5483B3' }}>
                            <span className="font-semibold">Tech Stack:</span> {project.stackDetails}
                         </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Education */}
                <div>
                <h3 className="text-2xl font-bold mb-6 tracking-wide" style={{ color: '#C1E8FF' }}>
                    EDUCATION
                </h3>
                <div className="space-y-6">
                    {education.map((edu, index) => (
                    <div key={index} className="pl-4 border-l-2 border-[#5483B3]">
                        <h4 className="font-bold text-lg" style={{ color: '#C1E8FF' }}>{edu.title}</h4>
                        <p className="text-sm mt-1" style={{ color: '#7DA0CA' }}>{edu.place}</p>
                    </div>
                    ))}
                </div>
                </div>

                {/* Certifications */}
                <div>
                <h3 className="text-2xl font-bold mb-6 tracking-wide" style={{ color: '#C1E8FF' }}>
                    CERTIFICATIONS
                </h3>
                <div className="space-y-4">
                    {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5483B3] flex-shrink-0"></span>
                        <p className="text-sm leading-snug" style={{ color: '#C1E8FF' }}>{cert}</p>
                    </div>
                    ))}
                </div>
                </div>
            </div>

          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex justify-end mt-12 pb-10">
          <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#5483B3]/10 border border-[#5483B3]/30">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span style={{ color: '#C1E8FF', fontSize: '14px' }}>Open to Opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}