import React, { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    // Dynamic title animation (Typewriter effect)
    const titleElement = document.querySelector('.hero-title');
    if (!titleElement) return;

    let titleText = 'TechXplore 2K25';
    let i = 0;
    let typingTimeout;
    let resetTimeout;

    function typeWriter() {
      if (i < titleText.length) {
        titleElement.innerHTML = titleText.substring(0, i + 1) + '<span style="opacity: 0.5;">|</span>';
        i++;
        typingTimeout = setTimeout(typeWriter, 100);
      } else {
        titleElement.innerHTML = titleText; // Remove cursor
        resetTimeout = setTimeout(() => {
          i = 0;
          titleElement.innerHTML = '';
          typingTimeout = setTimeout(typeWriter, 1000); // Restart after a delay
        }, 3000);
      }
    }

    // Start typewriter effect after page load
    typingTimeout = setTimeout(typeWriter, 1000);

    // Cleanup timeouts on component unmount
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(resetTimeout);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <h1 className="hero-title">TechXplore 2K25</h1>
        <p className="hero-subtitle">Innovate • Compete • Create</p>
        <p className="hero-description">
          TechXplore 2K25 is a dynamic platform for young innovators to showcase their talent and creativity.
          With a lineup of exciting technical events, coding challenges and fun competitions,
          it’s the ultimate arena to Innovate • Compete • Create.
          Join us and experience the thrill of technology, teamwork, and innovation—all in one place.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc0Dnkk4e7cIJuG8KVQiZl_JLSvvwMWr526R2fyiB06DWgxfQ/viewform?usp=header" className="cta-button">Register Now</a>
      </div>
    </section>
  );
};

export default HeroSection;