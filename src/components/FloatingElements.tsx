import { useEffect, useRef } from 'react';

const FloatingElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create enhanced floating elements
    const elements = [];
    const shapes = ['circle', 'triangle', 'square', 'hexagon', 'diamond'];
    const colors = [
      'bg-blue-500/10', 'bg-green-500/10', 'bg-purple-500/10', 'bg-pink-500/10', 
      'bg-yellow-500/10', 'bg-indigo-500/10', 'bg-red-500/10', 'bg-teal-500/10'
    ];
    const animations = ['animate-float', 'animate-drift', 'animate-pulse-glow'];

    for (let i = 0; i < 20; i++) {
      const element = document.createElement('div');
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const animation = animations[Math.floor(Math.random() * animations.length)];
      const size = Math.random() * 80 + 30;
      
      element.className = `absolute ${color} rounded-full opacity-40 ${animation} backdrop-blur-sm`;
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.animationDelay = `${Math.random() * 20}s`;
      element.style.animationDuration = `${20 + Math.random() * 15}s`;
      element.style.filter = 'blur(1px)';
      
      // Add different shapes with enhanced styling
      if (shape === 'triangle') {
        element.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        element.classList.remove('rounded-full');
        element.style.borderRadius = '0';
      } else if (shape === 'square') {
        element.classList.remove('rounded-full');
        element.classList.add('rounded-xl');
      } else if (shape === 'hexagon') {
        element.style.clipPath = 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)';
        element.classList.remove('rounded-full');
        element.style.borderRadius = '0';
      } else if (shape === 'diamond') {
        element.style.clipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
        element.classList.remove('rounded-full');
        element.style.borderRadius = '0';
      }
      
      // Add subtle glow effect
      element.style.boxShadow = `0 0 ${size/3}px ${size/6}px rgba(59, 130, 246, 0.1)`;
      
      container.appendChild(element);
      elements.push(element);
    }

    // Add some smaller accent elements with different animations
    for (let i = 0; i < 15; i++) {
      const element = document.createElement('div');
      const color = colors[Math.floor(Math.random() * colors.length)];
      const animation = animations[Math.floor(Math.random() * animations.length)];
      const size = Math.random() * 25 + 15;
      
      element.className = `absolute ${color} rounded-full opacity-30 ${animation}`;
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.animationDelay = `${Math.random() * 10}s`;
      element.style.animationDuration = `${8 + Math.random() * 12}s`;
      element.style.filter = 'blur(0.5px)';
      
      container.appendChild(element);
      elements.push(element);
    }

    return () => {
      elements.forEach(element => element.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default FloatingElements;
