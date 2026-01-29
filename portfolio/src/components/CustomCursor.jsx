import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'P' || e.target.tagName === 'H1' || e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.tagName === 'SPAN') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-all duration-300 ease-out flex items-center justify-center backdrop-blur-sm"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isHovering ? '60px' : '20px',
        height: isHovering ? '60px' : '20px',
        backgroundColor: isHovering ? 'rgba(84, 131, 179, 0.2)' : '#5483B3',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        border: isHovering ? '1px solid rgba(193, 232, 255, 0.5)' : 'none',
        boxShadow: isHovering ? '0 0 15px rgba(84, 131, 179, 0.5)' : 'none'
      }}
    >
      {isHovering && <div className="w-1 h-1 bg-[#C1E8FF] rounded-full opacity-50"></div>}
    </div>
  );
}
