import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'; // Import your consolidated CSS

// Components
import BackgroundAnimation from './Components/BackgroundAnimation';
import Header from './Components/Header';
import Footer from './Components/Footer';

// Pages
import Home from './pages/Homes';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import EventDetail from './Components/EventDetailsSection'; // Example event detail page

// Helper component to apply global effects based on route
const AppContent = () => {
  const location = useLocation();
  const isEventDetailPage = location.pathname.startsWith('/events/');

  useEffect(() => {
    // Global mouse/touch glow effect
    function createGlow(x, y) {
      const glow = document.createElement('div');
      glow.style.position = 'fixed';
      glow.style.left = (x - 10) + 'px';
      glow.style.top = (y - 10) + 'px';
      glow.style.width = '20px';
      glow.style.height = '20px';
      glow.style.background = 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)';
      glow.style.borderRadius = '50%';
      glow.style.pointerEvents = 'none';
      glow.style.zIndex = '1000';
      glow.style.animation = 'fadeOut 1s ease-out forwards';

      document.body.appendChild(glow);

      setTimeout(() => glow.remove(), 1000);
    }

    const handleMouseMove = (e) => createGlow(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      e.preventDefault(); // Prevent scrolling while dragging
      const touch = e.touches[0];
      createGlow(touch.clientX, touch.clientY);
    };
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      createGlow(touch.clientX, touch.clientY);
    };
    const handleTouchEnd = (e) => {
      if (e.changedTouches.length > 0) {
        const touch = e.changedTouches[0];
        createGlow(touch.clientX, touch.clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    // Add hover effects to cards (general for all pages)
    const cards = document.querySelectorAll('.detail-card, .event-card, .contact-card, .info-box');
    cards.forEach(card => {
      const handleMouseEnter = function() {
        if (this.classList.contains('detail-card')) {
          this.style.transform = 'translateY(-10px)';
        } else if (this.classList.contains('event-card')) {
          this.style.transform = 'scale(1.05)';
        } else if (this.classList.contains('contact-card') || this.classList.contains('info-box')) {
          this.style.transform = 'translateY(-5px)';
        }
      };

      const handleMouseLeave = function() {
        this.style.transform = '';
        this.style.boxShadow = ''; // Clear box-shadow added by hover
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup event listeners
      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });


    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <BackgroundAnimation isEventDetailPage={isEventDetailPage} />
      <Header />
      <Routes>
    <div className="min-h-screen bg-gray-50 overflow-y-auto">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        {/* Example route for a specific event detail page */}
        <Route path="/events/gigglebytes" element={<EventDetail />} />
        {/* Add more routes for other events as needed */}
        <Route path="/events/:eventName" element={<EventDetail />} /> {/* Dynamic route */}
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
