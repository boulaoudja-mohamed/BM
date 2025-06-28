
import { useEffect, useRef } from 'react';

const FloatingElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating elements
    const elements = [];
    const shapes = ['circle', 'triangle', 'square', 'hexagon'];
    const colors = ['bg-blue-400/20', 'bg-green-400/20', 'bg-purple-400/20', 'bg-pink-400/20', 'bg-yellow-400/20'];

    for (let i = 0; i < 15; i++) {
      const element = document.createElement('div');
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 60 + 20;
      
      element.className = `absolute ${color} rounded-full opacity-60 animate-float`;
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.animationDelay = `${Math.random() * 20}s`;
      element.style.animationDuration = `${15 + Math.random() * 10}s`;
      
      // Add different shapes
      if (shape === 'triangle') {
        element.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        element.classList.remove('rounded-full');
      } else if (shape === 'square') {
        element.classList.remove('rounded-full');
        element.classList.add('rounded-lg');
      } else if (shape === 'hexagon') {
        element.style.clipPath = 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)';
        element.classList.remove('rounded-full');
      }
      
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
