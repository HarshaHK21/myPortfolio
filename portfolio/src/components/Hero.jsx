import React, { useState, useEffect } from 'react';
import ThreeDScene from './ThreeDScene';
import CustomCursor from './CustomCursor';
import { FaLinkedin, FaInstagram, FaBehance, FaPinterest, FaTwitter, FaSkype, FaGithub } from 'react-icons/fa';
import cvPDF from '../assets/Harsha -cv.pdf';

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
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#021024] cursor-none">
      {/* Custom Cursor */}
       <CustomCursor />
      
      {/* 3D Background */}
      <ThreeDScene />

      {/* Navigation - Glassmorphism */}
      <nav className="absolute top-0 left-0 right-0 z-10 p-6 backdrop-blur-md bg-[#021024]/30 border-b border-[#5483B3]/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-8">
            {['Home', 'About', 'Resume', 'Portfolio'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="font-medium hover:text-[#5483B3] transition-colors relative group cursor-none"
                style={{ color: '#ffffff' }} // Forced white for visibility
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5483B3] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#5483B3]/30" style={{ backgroundColor: 'rgba(84, 131, 179, 0.1)' }}>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium" style={{ color: '#ffffff' }}>Seeking internship opportunities</span>
          </div>
        </div>
      </nav>

      {/* Hero Content - Added consistent vertical spacing */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center justify-center h-full mt-20"> 
        
        {/* Name Typography */}
        <h1 className="font-black tracking-tighter mb-12 relative group select-none flex flex-col items-center">
            <span 
                className="block text-6xl md:text-8xl lg:text-9xl transition-transform duration-500 hover:scale-105 pb-4"
                style={{
                    background: 'linear-gradient(to right, #ffffff, #A0D2EB, #7DA0CA)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    filter: 'drop-shadow(0 0 15px rgba(193,232,255,0.5))',
                    lineHeight: 1.1
                }}
            >
                HARSHA
            </span>
            <span 
                className="block text-6xl md:text-8xl lg:text-9xl transition-transform duration-500 hover:scale-105 pb-2"
                style={{
                    background: 'linear-gradient(to right, #7DA0CA, #5483B3, #4A729D)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    filter: 'drop-shadow(0 0 15px rgba(125,160,202,0.5))',
                     lineHeight: 1.1
                }}
            >
                KARUNARATHNA
            </span>
        </h1>

        <div className="flex flex-col items-center justify-center mb-16 text-center max-w-3xl mx-auto space-y-8">
          <h2 
            className="text-xl md:text-3xl font-bold tracking-wide"
            style={{ color: '#ffffff', fontFamily: 'Inter, system-ui, sans-serif', textShadow: '0 0 20px rgba(84, 131, 179, 0.6)' }}
          >
            Software Engineering Undergraduate | Full Stack Developer | AI & Data Enthusiast
          </h2>
          <p 
            className="text-lg md:text-xl font-light leading-relaxed opacity-90"
            style={{ color: '#C1E8FF', fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Passionate about building scalable software solutions, exploring AI/ML technologies, and ensuring software quality through automated testing.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-24">
          <button 
            onClick={() => {
              const pdfUrl = cvPDF;
              const link = document.createElement('a');
              link.href = pdfUrl;
              link.download = 'Harsha-CV.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="px-10 py-4 rounded-full font-bold tracking-wide transition-all duration-300 hover:scale-105 shadow-lg active:scale-95 cursor-none"
            style={{
                background: '#5483B3',
                color: '#021024',
                boxShadow: '0 0 20px rgba(84, 131, 179, 0.6)'
            }}
          >
            Download CV
          </button> 
          <button 
            onClick={() => window.location.href = '#portfolio'}
            className="px-10 py-4 rounded-full font-semibold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 cursor-none"
             style={{
                background: 'transparent',
                border: '2px solid #5483B3',
                color: '#ffffff',
                boxShadow: '0 0 15px rgba(84, 131, 179, 0.3)'
            }}
          >
            View Portfolio
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 pb-10">
          {[
            { name: 'LinkedIn', IconComponent: FaLinkedin, url: 'https://www.linkedin.com/in/harsha-karunarathna-a67915213/' },
            { name: 'Instagram', IconComponent: FaInstagram, url: 'https://www.facebook.com/profile.php?id=100089794230249&mibextid=ZbWKwL' },
            { name: 'Pinterest', IconComponent: FaPinterest, url: 'https://pinterest.com' },
            { name: 'Twitter', IconComponent: FaTwitter, url: 'https://twitter.com' },
            { name: 'Github', IconComponent: FaGithub, url: 'https://github.com/harshaHK21' }
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
              style={{
                  background: 'rgba(2, 16, 36, 0.8)',
                  border: '1px solid rgba(84, 131, 179, 0.5)',
                  color: '#ffffff',
                  boxShadow: '0 0 15px rgba(84, 131, 179, 0.3)'
              }}
            >
              <social.IconComponent className="text-xl" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
