import React, { useEffect } from 'react';

const BackgroundAnimation = ({ isEventDetailPage = false }) => {
  useEffect(() => {
    // Dynamic particle generation
    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 3 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 5000);
    }

    // Create particles periodically
    const particleInterval = setInterval(createParticle, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(particleInterval);
  }, []);

  return <div className={`bg-animation ${isEventDetailPage ? 'event-detail-page' : ''}`}></div>;
};

export default BackgroundAnimation;