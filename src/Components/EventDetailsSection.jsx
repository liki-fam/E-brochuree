import React, { useEffect, useRef } from 'react';
import allEventsData from './db.json'; // Assuming db.json is in the same directory or adjust path

const AllEventsDisplay = () => {
    const mainContentRefs = useRef([]);

    useEffect(() => {
        // Global styles for animations (moved here for self-containment)
        const style = document.createElement('style');
        style.textContent = `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #000428 100%);
                color: #ffffff;
                overflow-x: hidden;
                min-height: 100vh;
            }

            /* Animated background */
            .bg-animation {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                overflow: hidden;
            }

            .bg-animation::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background:
                    radial-gradient(circle at 20% 20%, rgba(0, 100, 255, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(0, 150, 255, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 40% 60%, rgba(0, 50, 200, 0.1) 0%, transparent 50%);
                animation: float 15s infinite linear;
            }

            @keyframes float {
                0% { transform: rotate(0deg) translateY(0); }
                100% { transform: rotate(360deg) translateY(-50px); }
            }

            /* Header */
            header {
                padding: 20px 0;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(10px);
                border-bottom: 2px solid #0066ff;
                position: sticky;
                top: 0;
                z-index: 100;
            }

            .header-content {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .logo {
                font-size: 1.8rem;
                font-weight: bold;
                background: linear-gradient(45deg, #0066ff, #00ccff);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            .back-btn {
                padding: 10px 20px;
                background: linear-gradient(45deg, #0066ff, #0099ff);
                color: white;
                text-decoration: none;
                border-radius: 25px;
                transition: all 0.3s ease;
                border: none;
                cursor: pointer;
            }

            .back-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(0, 102, 255, 0.4);
            }

            /* Main Content */
            .main-content {
                max-width: 1000px;
                margin: 0 auto;
                padding: 50px 20px;
            }

            .event-header {
                text-align: center;
                margin-bottom: 50px;
            }

            .event-title {
                font-size: 3.5rem;
                background: linear-gradient(45deg, #0066ff, #00ccff, #0099ff);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 20px;
                text-shadow: 0 0 30px rgba(0, 102, 255, 0.5);
            }

            .event-subtitle {
                font-size: 1.5rem;
                color: #00ccff;
                margin-bottom: 10px;
            }

            .event-emoji {
                font-size: 4rem;
                margin-bottom: 20px;
                display: block;
            }

            /* Content Sections */
            .content-grid {
                display: grid;
                gap: 30px;
                margin-bottom: 50px;
            }

            .content-card {
                background: linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%);
                backdrop-filter: blur(10px);
                padding: 30px;
                border-radius: 15px;
                border: 1px solid rgba(0, 102, 255, 0.3);
                position: relative;
                overflow: hidden;
            }

            .content-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 3px;
                background: linear-gradient(90deg, #0066ff, #00ccff);
            }

            .card-title {
                font-size: 1.8rem;
                color: #00ccff;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .card-content {
                color: #e0e0e0;
                line-height: 1.8;
                font-size: 1.1rem;
            }

            .card-content ul {
                padding-left: 20px;
                margin: 15px 0;
            }

            .card-content li {
                margin-bottom: 10px;
                position: relative;
            }

            .card-content li::marker {
                color: #0066ff;
            }

            /* Quick Info Section */
            .quick-info {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                margin-bottom: 40px;
            }

            .info-box {
                background: linear-gradient(45deg, rgba(0, 102, 255, 0.2), rgba(0, 0, 0, 0.9));
                padding: 25px;
                border-radius: 10px;
                text-align: center;
                border: 1px solid rgba(0, 102, 255, 0.4);
                transition: all 0.3s ease;
            }

            .info-box:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 25px rgba(0, 102, 255, 0.3);
            }

            .info-icon {
                font-size: 2.5rem;
                margin-bottom: 15px;
                display: block;
            }

            .info-label {
                color: #00ccff;
                font-weight: bold;
                margin-bottom: 5px;
                font-size: 1.1rem;
            }

            .info-value {
                color: #ffffff;
                font-size: 1.2rem;
            }

            /* Registration Section */
            .registration-section {
                background: linear-gradient(135deg, rgba(0, 102, 255, 0.15), rgba(0, 0, 0, 0.9));
                padding: 40px;
                border-radius: 15px;
                text-align: center;
                border: 2px solid rgba(0, 102, 255, 0.5);
                margin-top: 40px;
            }

            .register-btn {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                padding: 15px 40px;
                background: linear-gradient(45deg, #0066ff, #0099ff);
                color: white;
                text-decoration: none;
                border-radius: 50px;
                font-size: 1.2rem;
                font-weight: bold;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }

            .register-btn::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                transition: left 0.5s;
            }

            .register-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 10px 30px rgba(0, 102, 255, 0.4);
            }

            .register-btn:hover::before {
                left: 100%;
            }

            /* Contact Info */
            .contact-info {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin-top: 30px;
            }

            .contact-item {
                background: rgba(0, 102, 255, 0.1);
                padding: 20px;
                border-radius: 10px;
                text-align: center;
                border: 1px solid rgba(0, 102, 255, 0.3);
            }

            .contact-label {
                color: #00ccff;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .contact-value {
                color: #ffffff;
            }

            /* Responsive Design */
            @media (max-width: 768px) {
                .event-title {
                    font-size: 2.5rem;
                }

                .quick-info {
                    grid-template-columns: 1fr;
                }

                .content-card {
                    padding: 20px;
                }

                .main-content {
                    padding: 30px 15px;
                }
            }

            /* Animations */
            .fade-in {
                opacity: 0;
                transform: translateY(30px);
                animation: fadeInUp 0.8s ease forwards;
            }

            @keyframes fadeInUp {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            /* Delay for individual cards within an event */
            .content-card:nth-child(1) { animation-delay: 0.2s; }
            .content-card:nth-child(2) { animation-delay: 0.4s; }
            .content-card:nth-child(3) { animation-delay: 0.6s; }
            .content-card:nth-child(4) { animation-delay: 0.8s; }

            /* Glowing effects */
            .glow {
                box-shadow: 0 0 20px rgba(0, 102, 255, 0.3);
            }

            .pulse {
                animation: pulse 2s infinite;
            }

            @keyframes pulse {
                0% {
                    box-shadow: 0 0 0 0 rgba(0, 102, 255, 0.7);
                }
                70% {
                    box-shadow: 0 0 0 10px rgba(0, 102, 255, 0);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(0, 102, 255, 0);
                }
            }

            /* Particle animation for JS */
            @keyframes particleFloat {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
            @keyframes fadeOut {
                0% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(1.5); }
            }
        `;
        document.head.appendChild(style);

        // Add interactive particle effects
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '3px';
            particle.style.height = '3px';
            particle.style.background = '#0066ff';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '-1';
            particle.style.animation = 'particleFloat 4s linear forwards';

            document.body.appendChild(particle);

            setTimeout(() => particle.remove(), 4000);
        };

        const particleInterval = setInterval(createParticle, 3000);

        // Function to create glow effect
        const createGlow = (x, y) => {
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
        };

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

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observe all main content sections
        mainContentRefs.current.forEach(ref => {
            if (ref) {
                ref.querySelectorAll('.fade-in').forEach(el => {
                    observer.observe(el);
                });
            }
        });

        // Add hover glow effects to all content cards
        const allContentCards = document.querySelectorAll('.content-card');
        allContentCards.forEach(card => {
            const handleMouseEnter = function() {
                this.style.boxShadow = '0 10px 30px rgba(0, 102, 255, 0.3)';
                this.style.transform = 'translateY(-5px)';
            };
            const handleMouseLeave = function() {
                this.style.boxShadow = '';
                this.style.transform = '';
            };
            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);
        });


        return () => {
            // Cleanup
            document.head.removeChild(style);
            clearInterval(particleInterval);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchend', handleTouchEnd);
            observer.disconnect();
            allContentCards.forEach(card => {
                card.removeEventListener('mouseenter', () => {}); // Remove listeners
                card.removeEventListener('mouseleave', () => {});
            });
        };
    }, []); // Empty dependency array means this runs once on mount

    if (!allEventsData || allEventsData.length === 0) {
        return <div>Loading events...</div>;
    }

    return (
        <>
            <div className="bg-animation"></div>

            <header>
                <div className="header-content">
                    <div className="logo">TechXplore 2K25</div>
                    {/* This button might need to navigate to a different page in a multi-page app */}
                    <a href="/">
                        <button className="back-btn" onClick={() => window.history.back()}>← Back to Events</button>
                    </a>
                </div>
            </header>

            {allEventsData.map((event, index) => (
                <main className="main-content" key={index} ref={el => mainContentRefs.current[index] = el}>
                    <div className="event-header fade-in">
                        <span className="event-emoji">{event.Emoji}</span>
                        <h1 className="event-title">{event["Event Name"]}</h1>
                        <p className="event-subtitle">{event["Event Subtitle"]}</p>
                    </div>

                    <div className="quick-info fade-in">
                        <div className="info-box">
                            <span className="info-icon">💰</span>
                            <div className="info-label">Registration Fee</div>
                            <div className="info-value">{event["Registration Fee"]}</div>
                        </div>
                        <div className="info-box">
                            <span className="info-icon">👥</span>
                            <div className="info-label">Team Size</div>
                            <div className="info-value">{event["Team Size"]}</div>
                        </div>
                        {event.Duration && ( // Conditionally render Duration if it exists
                            <div className="info-box">
                                <span className="info-icon">⏱️</span>
                                <div className="info-label">Duration</div>
                                <div className="info-value">{event.Duration}</div>
                            </div>
                        )}
                        <div className="info-box">
                            <span className="info-icon">📍</span>
                            <div className="info-label">Venue</div>
                            <div className="info-value">{event.Venue}</div>
                        </div>
                    </div>

                    <div className="content-grid">
                        <div className="content-card fade-in">
                            <h2 className="card-title">📋 Event Description</h2>
                            <div className="card-content">
                                {event["Event Description"].split('\n').map((paragraph, pIdx) => (
                                    <p key={pIdx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className="content-card fade-in">
                            <h2 className="card-title">📏 Rules & Regulations</h2>
                            <div className="card-content">
                                <ul>
                                    {event["Rules & Regulations"].map((rule, ruleIdx) => (
                                        <li key={ruleIdx}><strong>{ruleIdx + 1}).</strong> {rule}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="content-card fade-in">
                            <h2 className="card-title">🎯 Event Guidelines</h2>
                            <div className="card-content">
                                <ul>
                                    {event["Event Guidelines"].map((guideline, guideIdx) => (
                                        <li key={guideIdx}><strong>{guideline.split(':')[0]}:</strong> {guideline.split(':').slice(1).join(':')}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="content-card fade-in">
                            <h2 className="card-title">⏰ Schedule</h2>
                            <div className="card-content">
                                <p><strong>Event Date:</strong> {event.Schedule["Event Date"]}</p>
                                <p><strong>Reporting Time:</strong> {event.Schedule["Reporting Time"]}</p>
                                <p><strong>Event Start:</strong> {event.Schedule["Event Start"]}</p>
                                <p><strong>Duration:</strong> {event.Schedule.Duration}</p>
                                <p><strong>Results:</strong> {event.Schedule.Results}</p>
                            </div>
                        </div>

                        <div className="content-card fade-in">
                            <h2 className="card-title">Co-ordinators</h2>
                            <div className="card-content">
                                {event["Co-ordinators"].map((coordinator, coordIdx) => (
                                    <p key={coordIdx}><strong>{coordinator.name}:</strong> {coordinator.phone}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <a href={event["Registration Link"]} className="cta-button register-btn">Register Now</a>
                </main>
            ))}
        </>
    );
};

export default AllEventsDisplay;