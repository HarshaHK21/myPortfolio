import React, { useState, useEffect } from 'react';
import ThreeDScene from './ThreeDScene';
import CustomCursor from './CustomCursor';
import { FaLinkedin, FaInstagram, FaBehance, FaPinterest, FaTwitter, FaSkype, FaGithub } from 'react-icons/fa';
import cvPDF from '../assets/Harsha -cv.pdf';

export function Hero() {
  const titles = ['IT Undergraduate', 'Full Stack Developer', 'UI/UX Designer', 'Quality Assurance', 'AI & Data Enthusiast'];
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
    <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-none" 
        style={{ backgroundColor: '#021024' }} 
    >
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
      <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center h-full mt-24"> 
        
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
          <div className="h-10 flex items-center justify-center">
            <h2 
                className={`text-xl md:text-3xl font-bold tracking-wide transition-all duration-700 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'
                }`}
                style={{ color: '#ffffff', fontFamily: 'Inter, system-ui, sans-serif', textShadow: '0 0 20px rgba(84, 131, 179, 0.6)' }}
            >
                {titles[currentTitleIndex]}
            </h2>
          </div>
          <p 
            className="text-base md:text-lg font-light leading-relaxed opacity-80 max-w-2xl mx-auto"
            style={{ color: '#C1E8FF', fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Passionate about building scalable software solutions, exploring AI/ML technologies,<br className="hidden md:block"/> and ensuring software quality through automated testing.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-12 justify-center mb-32 w-full">
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
            className="group relative px-12 py-6 rounded-full font-bold tracking-[0.2em] uppercase text-base md:text-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-none overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #5483B3 0%, #052659 100%)',
                color: '#ffffff',
                boxShadow: '0 0 30px rgba(84, 131, 179, 0.6)',
                border: '1px solid rgba(193, 232, 255, 0.1)',
                minWidth: '220px'
            }}
          >
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#7DA0CA] to-[#5483B3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button> 
          <button 
            onClick={() => window.location.href = '#portfolio'}
            className="px-12 py-6 rounded-full font-bold tracking-[0.2em] uppercase text-base md:text-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-none hover:bg-[#5483B3]/10"
             style={{
                background: 'transparent',
                border: '3px solid #5483B3',
                color: '#ffffff',
                boxShadow: '0 0 20px rgba(84, 131, 179, 0.3)',
                minWidth: '220px'
            }}
          >
            View Portfolio
          </button>
        </div>

        {/* Social Icons - Redesigned for cleaner look */}
        <div className="flex justify-center gap-10 pb-12">
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
              className="group relative w-20 h-20 flex items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:scale-110 p-[5px] m-[10px]"
            >
                <social.IconComponent className="relative z-10 text-5xl text-white group-hover:text-white transition-all duration-300 drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_4px_12px_rgba(255,255,255,0.5)]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
