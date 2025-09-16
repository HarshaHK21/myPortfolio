import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/hero-image.jpg'; 
import { FaLinkedin, FaInstagram, FaBehance, FaPinterest, FaTwitter, FaSkype } from 'react-icons/fa';

export function Hero() {
  const titles = ['Full Stack Developer', 'UI/UX Designer', 'IT Undergraduate Student'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsVisible(true);
      }, 500); // This delay should match the fade-out duration
    }, 3000); // Time each title is displayed

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage} // Replace with your background image path
          alt="Modern workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(2, 16, 36, 0.8)' }}></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-8">
            <a href="#home" className="hover:opacity-80 transition-opacity" style={{ color: '#C1E8FF' }}>
              Home
            </a>
            <a href="#about" className="hover:opacity-80 transition-opacity" style={{ color: '#C1E8FF' }}>
              About
            </a>
            <a href="#resume" className="hover:opacity-80 transition-opacity" style={{ color: '#C1E8FF' }}>
              Resume
            </a>
            <a href="#portfolio" className="hover:opacity-80 transition-opacity" style={{ color: '#C1E8FF' }}>
              Portfolio
            </a>
          </div>
          <div className="flex items-center space-x-2" style={{ color: '#C1E8FF' }}>
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span>Seeking internship opportunities</span>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6"> <br />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br />  
        {/* <h1 
          className="text-6xl md:text-8xl font-bold mb-4 tracking-tight"
          style={{ 
            color: '#C1E8FF',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          HARSHA<br />
          KARUNARATHNA
        </h1> */}
        <div className="h-16 flex items-center justify-center mb-8">
          <p 
            className={`text-xl md:text-2xl tracking-wide transition-all duration-500 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}
            style={{ 
              color: '#7DA0CA',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            {titles[currentTitleIndex]}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button a href="#resume"
            className="px-8 py-3 rounded-lg border-2 transition-all duration-300 hover:scale-105"
            style={{ 
              borderColor: '#5483B3',
              backgroundColor: 'transparent',
              color: '#C1E8FF'
            }}
          >
            Resume
          </button>
          <button a href="#portfolio"
            className="px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: '#5483B3',
              color: '#021024'
            }}
          >
            Portfolio
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          {[
            { name: 'Behance', IconComponent: FaBehance, url: '#' },
            { name: 'LinkedIn', IconComponent: FaLinkedin, url: 'https://www.linkedin.com/in/harsha-karunarathna-a67915213/' },
            { name: 'Instagram', IconComponent: FaInstagram, url: '#' },
            { name: 'Pinterest', IconComponent: FaPinterest, url: '#' },
            { name: 'Twitter', IconComponent: FaTwitter, url: '#' },
            { name: 'Skype', IconComponent: FaSkype, url: '#' }
          ].map((social) => (
            <a
              key={social.name}
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110"
              style={{ 
                borderColor: '#5483B3',
                color: '#7DA0CA'
              }}
            >
              <span className="text-sm">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}