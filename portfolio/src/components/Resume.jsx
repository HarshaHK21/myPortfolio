import React from 'react';

export function Resume() {
  const softwareSkills = [
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'Python', level: 85 },
    { name: 'MongoDB', level: 82 },
    { name: 'AWS', level: 80 }
  ];

  const languages = [
    { name: 'English', level:  85},
   
    
  ];

  const experience = [
    {
      year: '2023',
      company: 'TECH INNOVATIONS CO.',
      role: 'Senior Full Stack Developer',
      color: '#5483B3'
    },
    {
      year: '2021',
      company: 'DIGITAL SOLUTIONS INC.',
      role: 'Full Stack Developer',
      color: '#7DA0CA'
    },
    {
      year: '2020',
      company: 'STARTUP DYNAMICS & CREATIVE SERVICES CO.',
      role: 'Junior Full Stack Developer',
      color: '#5483B3'
    },
    {
      year: '2019',
      company: 'FREELANCE DEVELOPMENT AGENCY',
      role: 'Frontend Developer',
      color: '#7DA0CA'
    }
  ];

  const hobbies = [
    { name: 'Coding', icon: '💻' },
    { name: 'Photography', icon: '📸' },
    { name: 'Music', icon: '🎵' },
    { name: 'Travel', icon: '✈️' }
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
          <a href="#home" className="hover:opacity-80 transition-opacity" style={{ color: '#C1E8FF' }}>
            Home
          </a>
          <a href="#about" className="hover:opacity-80 transition-opacity" style={{ color: '#C1E8FF' }}>
            About
          </a>
          <a href="#resume" className="border-b-2 pb-1" style={{ color: '#C1E8FF', borderColor: '#5483B3' }}>
            Resume
          </a>
          <a href="#portfolio" className="hover:opacity-80 transition-opacity" style={{ color: '#C1E8FF' }}>
            Portfolio
          </a>
        </nav>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Skills */}
          <div className="space-y-12">
            {/* Software Skills */}
            <div>
              <h3 
                className="text-2xl font-bold mb-8"
                style={{ 
                  color: '#C1E8FF',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}
              >
                SOFTWARE SKILLS
              </h3>
              <div className="space-y-6">
                {softwareSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span style={{ color: '#C1E8FF', fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {skill.name}
                      </span>
                      <span style={{ color: '#7DA0CA' }}>{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#052659' }}>
                      <div 
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: '#5483B3'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 
                className="text-2xl font-bold mb-8"
                style={{ 
                  color: '#C1E8FF',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}
              >
                LANGUAGES
              </h3>
              <div className="space-y-6">
                {languages.map((language) => (
                  <div key={language.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span style={{ color: '#C1E8FF', fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {language.name}
                      </span>
                      <span style={{ color: '#7DA0CA' }}>{language.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#052659' }}>
                      <div 
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${language.level}%`,
                          backgroundColor: '#5483B3'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Skills */}
            <div>
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ 
                  color: '#C1E8FF',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}
              >
                PERSONAL SKILLS
              </h3>
              <div className="space-y-3">
                {['Problem Solving', 'Team Work', 'Communication', 'Leadership'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5483B3' }}></div>
                    <span style={{ color: '#C1E8FF', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Experience */}
          <div>
            <h3 
              className="text-2xl font-bold mb-8"
              style={{ 
                color: '#C1E8FF',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              PROJECTS
            </h3>
            <div className="space-y-8">
              {[
                {
                  year: '2024',
                  name: 'E-Commerce Web Platform',
                  tech: 'React, Node.js, MongoDB',
                  description: 'Full-stack e-commerce platform with user authentication, payment integration, and admin dashboard',
                  color: '#5483B3',
                  image: 'https://images.unsplash.com/photo-1742072594003-abf6ca86e154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NTc3NDAwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                },
                {
                  year: '2024',
                  name: 'Task Management Mobile App',
                  tech: 'React Native, Firebase',
                  description: 'Cross-platform mobile app for task management with real-time synchronization and offline support',
                  color: '#7DA0CA',
                  image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3Njk0MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                },
                {
                  year: '2023',
                  name: 'University Database System',
                  tech: 'Python, PostgreSQL, Django',
                  description: 'Student information management system with course enrollment and grade tracking features',
                  color: '#5483B3',
                  image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHNlcnZlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3NjUwOTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                },
                {
                  year: '2023',
                  name: 'Restaurant UI/UX Design',
                  tech: 'Figma, Adobe XD',
                  description: 'Complete UI/UX design for restaurant ordering system with user research and prototyping',
                  color: '#7DA0CA',
                  image: 'https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc1NzY5NDIwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                }
              ].map((project, index) => (
                <div key={index} className="flex space-x-4 group">
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: project.color }}
                    >
                      <span style={{ color: '#021024', fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {project.year}
                      </span>
                    </div>
                    {index < 3 && (
                      <div 
                        className="w-0.5 h-20 mt-2"
                        style={{ backgroundColor: '#052659' }}
                      ></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-4">
                      <div className="flex-1">
                        <h4 
                          className="font-bold mb-1"
                          style={{ 
                            color: '#C1E8FF',
                            fontFamily: 'Inter, system-ui, sans-serif'
                          }}
                        >
                          {project.name}
                        </h4>
                        <p 
                          className="text-sm mb-2"
                          style={{ color: '#7DA0CA', fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                          {project.tech}
                        </p>
                        <p 
                          className="text-sm leading-relaxed"
                          style={{ color: '#C1E8FF', fontFamily: 'Inter, system-ui, sans-serif', opacity: 0.8 }}
                        >
                          {project.description}
                        </p>
                      </div>
                      <div className="mt-3 lg:mt-0">
                        <div 
                          className="w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 cursor-pointer"
                          style={{ borderColor: project.color }}
                        >
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-12">
              <h3 
                className="text-2xl font-bold mb-8"
                style={{ 
                  color: '#C1E8FF',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}
              >
                EDUCATION
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 
                    className="font-bold"
                    style={{ 
                      color: '#C1E8FF',
                      fontFamily: 'Inter, system-ui, sans-serif'
                    }}
                  >
                    BSc(Hons) in Information Technology
                  </h4>
                  <p style={{ color: '#7DA0CA', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    BCI Campus Negombo - 2024 (Expected)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - What I Can Do & Hobbies */}
          <div className="space-y-12">
            <div>
              <h3 
                className="text-2xl font-bold mb-8"
                style={{ 
                  color: '#C1E8FF',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}
              >
                WHAT I CAN DO ?
              </h3>
              <div className="space-y-4">
                {[
                  'Full Stack Development',
                  'Database Design & Management', 
                  'API Development & Integration',
                  'Cloud Architecture',
                  'DevOps & CI/CD'
                ].map((skill) => (
                  <div key={skill}>
                    <span style={{ color: '#C1E8FF', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 
                className="text-2xl font-bold mb-8"
                style={{ 
                  color: '#C1E8FF',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}
              >
                DESIGN SKILLS
              </h3>
              <div className="space-y-4">
                {[
                  'UI/UX Design',
                  'Responsive Design',
                  'User Experience Research',
                  'Prototyping'
                ].map((skill) => (
                  <div key={skill}>
                    <span style={{ color: '#C1E8FF', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 
                className="text-2xl font-bold mb-8"
                style={{ 
                  color: '#C1E8FF',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}
              >
                HOBBIES & INTERESTS
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {hobbies.map((hobby) => (
                  <div 
                    key={hobby.name} 
                    className="flex flex-col items-center p-4 rounded-lg transition-transform hover:scale-105"
                    style={{ backgroundColor: '#052659' }}
                  >
                    <div className="text-2xl mb-2">{hobby.icon}</div>
                    <span 
                      className="text-sm text-center"
                      style={{ color: '#C1E8FF', fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {hobby.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex justify-end mt-12">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span style={{ color: '#C1E8FF' }}>Seeking internship opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}