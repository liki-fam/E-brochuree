import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Reusable Button component for event details
const DetailsButton = ({ to }) => (
  <Link to={to} className="btn">
    <strong>DETAILS</strong>
    <div id="container-stars">
      <div id="stars"></div>
    </div>
    <div id="glow">
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  </Link>
);


const Events = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <section id="events" className="events">
      <div className="container">
        <h2 className="section-title fade-in">Competition Events</h2>
        <div className="events-grid">
          <button className="back-btn" onClick={goBack}>← Back to Events</button>
        </div>

        <div className="event-card fade-in">
          {/* event 1 */}
          <h3 className="event-title">🎤 GiggleBytes</h3>
          <p className="event-description">
            Laugh along with tech-themed standup performances from talented comedians and tech enthusiasts. Showcase your humor with a tech twist!
          </p>
          <p className="event-prize">Fee: ₹300</p>
          <a href="./EVENT1.html">
            <button type="button" className="btn">
              <strong>DETAILS</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </a>
        </div>

        {/* event 2 */}
        <div className="event-card fade-in">
          <h3 className="event-title">💻 Ad-Venture</h3>
          <p className="event-description">
            Test your marketing skills by creating compelling campaigns for real-world scenarios. Demonstrate your creative strategy abilities!
          </p>
          <p className="event-prize">Fee: ₹250</p>
          <a href="./EVENT2.html">
            <button type="button" className="btn">
              <strong>DETAILS</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </a>
        </div>

        {/* event 3 */}
        <div className="event-card fade-in">
          <h3 className="event-title">🧠 Knowledge Knockout</h3>
          <p className="event-description">
            Test your IT knowledge in this fast-paced knockout quiz competition. Prove you're the tech trivia champion!
          </p>
          <p className="event-prize">Fee: ₹300</p>
          <a href="./EVENT3.html">
            <button type="button" className="btn">
              <strong>DETAILS</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </a>
        </div>

        {/* event 4 */}
        <div className="event-card fade-in">
          <h3 className="event-title">🔒 Capture the Glory</h3>
          <p className="event-description">
            Compete in cybersecurity challenges to find vulnerabilities and capture digital flags. Test your hacking skills in a safe environment!
          </p>
          <p className="event-prize">Fee: ₹400</p>
          <a href="./EVENT4.html">
            <button type="button" className="btn">
              <strong>DETAILS</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </a>
        </div>

        {/* event 5 */}
        <div className="event-card fade-in">
          <h3 className="event-title">🎮 BGICS</h3>
          <p className="event-description">
            Compete in BGMI matches with custom rules and thrilling gameplay. Show off your battle royale skills!
          </p>
          <p className="event-prize">Fee: ₹500</p>
          <a href="./EVENT5.html">
            <button type="button" className="btn">
              <strong>DETAILS</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </a>
        </div>

        {/* event 6 */}
        <div className="event-card fade-in">
          <h3 className="event-title">🎨 PixelCraft</h3>
          <p className="event-description">
            Showcase your design skills by creating stunning digital posters on given themes. Let your creativity speak through pixels!
          </p>
          <p className="event-prize">Fee: ₹300</p>
          <a href="./EVENT6.html">
            <button type="button" className="btn">
              <strong>DETAILS</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </a>
        </div>

        {/* event 7 */}
        <div className="event-card fade-in">
          <h3 className="event-title">🎥 Micro Tales</h3>
          <p className="event-description">
            Tell compelling stories through short films within tight time constraints. Showcase your storytelling and filmmaking skills!
          </p>
          <p className="event-prize">Fee: ₹350</p>
          <a href="./EVENT7.html">
            <button type="button" className="btn">
              <strong>DETAILS</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </a>
        </div>

        {/* event 8 */}
        <div className="event-card fade-in">
          <h3 className="event-title">🤖 3D Artistery Arena</h3>
          <p className="event-description">
            Create stunning 3D models and showcase your digital sculpting prowess. Bring imagination to life in three dimensions!
          </p>
          <p className="event-prize">Fee: ₹400</p>
          <a href="./EVENT8.html">
            <button type="button" className="btn">
              <strong>DETAILS</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </a>
        </div>

        {/* event 9 */}
        <div className="event-card fade-in">
          <h3 className="event-title">🎮 survival Showdown</h3>
          <p className="event-description">
            Battle it out in Free Fire with teams competing for survival supremacy. Prove your strategic gameplay skills!
          </p>
          <p className="event-prize">Fee: ₹500</p>
          <a href="./EVENT9.html">
            <button type="button" className="btn">
              <strong>DETAILS</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </a>
        </div>

        {/* event 10 */}
        <div className="event-card fade-in">
          <h3 className="event-title">🌐 Script and Style</h3>
          <p className="event-description">
            Build responsive and innovative websites under competitive constraints. Show off your coding and design skills!
          </p>
          <p className="event-prize">Fee: ₹300</p>
          <a href="./EVENT10.html">
            <button type="button" className="btn">
              <strong>DETAILS</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;