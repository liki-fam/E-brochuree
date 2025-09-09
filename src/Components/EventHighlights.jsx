import React, { useEffect, useState } from 'react';
import '../index.css'; // Import your CSS file

const EventDetails = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setFadeIn(false);
    }, 2);

    return () => clearTimeout(timer);
  }, []);

  const handleBackClick = () => {
    // You can use React Router's useNavigate hook instead
    window.history.back();
  };

  // const handleGoToHome = () => {
  //   // Navigate to home page - adjust path as needed
  //   window.location.href = './1st.html';
  // };

  return (
    <div>
      {/* Event Details */}
      <section id="about" className="event-details">
        <div className="container">
          <h2 className={`section-title ${fadeIn ? 'fade-in' : '2s'}`}>
            Event Highlights
          </h2>
          <div className="details-grid">
            <a href="/">
              <button className="back-btn" onClick={handleBackClick}>
                ← Back to Events
              </button>
            </a>
          </div>
          
          <div className="detail-card-container">
            <div className={`detail-card ${fadeIn ? 'fade-in' : '2s'}`}>
              <div className="detail-icon">🗓️</div>
              <h3 className="detail-title">Event Dates</h3>
              <p className="detail-text">
                SEP 25-26, 2025<br />
                2 Days of Innovation
              </p>
            </div>
            
            <div className={`detail-card ${fadeIn ? 'fade-in' : '2s'}`}>
              <div className="detail-icon">📍</div>
              <h3 className="detail-title">Venue</h3>
              <p className="detail-text">
                DAMS Campus<br />
                Main Auditorium & Tech Labs
              </p>
            </div>
            
            <div className={`detail-card ${fadeIn ? 'fade-in' : '2s'}`}>
              <div className="detail-icon">👥</div>
              <h3 className="detail-title">Expected Participants</h3>
              <p className="detail-text">
                500+ Students<br />
                From 100+ Colleges
              </p>
            </div>
            
            <div className={`detail-card ${fadeIn ? 'fade-in' : '2s'}`}>
              <div className="detail-icon">🎯</div>
              <h3 className="detail-title">Focus Areas</h3>
              <p className="detail-text">
                Talent, Web Dev, Skills Dev<br />
                Cybersecurity
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;