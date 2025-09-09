import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const EventDetailsSection = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="event-details">
      <div className="container">
        <h2 className="section-title fade-in">Event Highlights</h2>
        <div className="details-grid">
          <Link to="/events" className="back-btn">← Back to Events</Link> {/* Changed to Link */}
          <div className="detail-card fade-in">
            <div className="detail-icon">🗓️</div>
            <h3 className="detail-title">Event Dates</h3>
            <p className="detail-text">SEP 25-26, 2025<br />2 Days of Innovation</p>
          </div>
          <div className="detail-card fade-in">
            <div className="detail-icon">📍</div>
            <h3 className="detail-title">Venue</h3>
            <p className="detail-text">DAMS Campus<br />Main Auditorium & Tech Labs</p>
          </div>
          <div className="detail-card fade-in">
            <div className="detail-icon">👥</div>
            <h3 className="detail-title">Expected Participants</h3>
            <p className="detail-text">500+ Students<br />From 100+ Colleges</p>
          </div>
          <div className="detail-card fade-in">
            <div className="detail-icon">🎯</div>
            <h3 className="detail-title">Focus Areas</h3>
            <p className="detail-text">Talent, Web Dev,Skills Dev<br />Cybersecurity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;