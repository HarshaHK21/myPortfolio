import React from 'react';
import professionalPhoto from '../assets/professional-photo.png'; 


export function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center py-20"
      style={{ backgroundColor: '#052659' }}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <nav className="flex space-x-8 mb-8">
            <a href="#home" className="hover:opacity-80 transition-opacity" style={{ color: '#C1E8FF' }}>
              Home
            </a>
            <a href="#about" className="border-b-2 pb-1" style={{ color: '#C1E8FF', borderColor: '#5483B3' }}>
              About
            </a>
            <a href="#resume" className="hover:opacity-80 transition-opacity" style={{ color: '#C1E8FF' }}>
              Resume
            </a>
            <a href="#portfolio" className="hover:opacity-80 transition-opacity" style={{ color: '#C1E8FF' }}>
              Portfolio
            </a>
          </nav>

          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ 
              color: '#C1E8FF',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            ABOUT
          </h2>
          
          <div className="mb-6">
            <p 
              className="text-lg mb-4"
              style={{ 
                color: '#7DA0CA',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              harshahk288@gmail.com
            </p>
          </div>

          <div className="space-y-4">
            <p 
              className="text-base leading-relaxed"
              style={{ 
                color: '#C1E8FF',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              Passionate IT undergraduate student at BCI Campus Negombo with a strong foundation 
              in modern web technologies, programming fundamentals, and software development principles. 
              Eager to apply academic knowledge in real-world projects.
            </p>
            
            <p 
              className="text-base leading-relaxed"
              style={{ 
                color: '#C1E8FF',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              Currently seeking internship opportunities to gain hands-on experience in full-stack 
              development. My greatest strength is quick learning and adaptability, which enables me 
              to tackle new technologies and contribute effectively to development teams.
            </p>
          </div>

          <div className="pt-6">
            <p 
              className="text-sm"
              style={{ 
                color: '#7DA0CA',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              Negombo, Sri Lanka<br />
              BCI Campus Student
            </p>
          </div>

          <div className="flex items-center space-x-2 pt-4">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span style={{ color: '#C1E8FF' }}>Seeking internship opportunities</span>
          </div>
        </div>

        {/* Right Column - Professional Photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div 
              className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: '#021024' }}
            >
              {/* The custom ImageWithFallback is replaced with a standard <img> tag */}
              <img
                src={professionalPhoto} // Use the imported image variable here
                alt="Professional headshot"
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{
                  filter: 'brightness(1) contrast(1.1)',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'brightness(1.1) contrast(1.2)';
                  e.currentTarget.parentElement.style.boxShadow = '0 0 30px rgba(84, 131, 179, 0.4)';
                  e.currentTarget.parentElement.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'brightness(1) contrast(1.1)';
                  e.currentTarget.parentElement.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                  e.currentTarget.parentElement.style.transform = 'translateY(0)';
                }}
                onClick={() => {
                  console.log('Profile image clicked');
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}