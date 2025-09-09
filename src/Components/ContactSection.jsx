import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
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
    <section className="contact">
      <div className="container">
        <h2 className="section-title fade-in">Get In Touch</h2>
        <div className="butn">
          <Link to="/" className="back-btn">← Back to Events</Link> {/* Changed to Link */}
        </div>
        <div className="contact-grid">
          <div className="contact-card fade-in">
            <h3 className="detail-title">📧 Email</h3>
            <p className="detail-text">2k25techxplore@gmail.com</p>
          </div>
          <div className="contact-card fade-in">
            <h3 className="detail-title">📞 Phone</h3>
            <p className="detail-text">Likith S:+91 80500 36887<br />Srushty Y S:+91 89040 92608</p>
          </div>
          <div className="contact-card fade-in">
            <h3 className="detail-title">🌐 Website</h3>
            <p className="detail-text">dhanwantariinstitutions.com</p>
          </div>
          <div className="contact-card fade-in">
            <h3 className="detail-title">📱 Social Media</h3>
            <p className="detail-text">@_dams_official</p>
          </div>
        </div>
      </div>
      <section id="location" className="section">
        <h2>Venue</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3145668363427!2d77.50125197489491!3d13.07923938724605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae2332c1bd9105%3A0x243a84faa1220bfc!2sDHANWANTARI%20ACADEMY%20FOR%20MANAGEMENT%20STUDIES-MBA%20Colleges%20in%20Bangalore!5e0!3m2!1sen!2sin!4v1746852587404!5m2!1sen!2sin"
          width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" title="DAMS Location Map"></iframe>
      </section>
    </section>
  );
};

export default ContactSection;