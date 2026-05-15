import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MagneticButton = ({ children, className = '' }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    
    const moveEvent = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      gsap.to(button, {
        x: x * 0.3, // Strength of the magnetic pull
        y: y * 0.3,
        duration: 1,
        ease: 'power3.out',
      });
    };

    const leaveEvent = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    button.addEventListener('mousemove', moveEvent);
    button.addEventListener('mouseleave', leaveEvent);

    return () => {
      button.removeEventListener('mousemove', moveEvent);
      button.removeEventListener('mouseleave', leaveEvent);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`relative px-8 py-4 text-sm font-medium tracking-widest text-white uppercase bg-white/5 border border-white/10 rounded-full backdrop-blur-md transition-colors hover:bg-white/10 ${className}`}
    >
      {children}
    </button>
  );
};

export default MagneticButton;