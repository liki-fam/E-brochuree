import React from 'react';
import EventHighlights from '../Components/EventHighlights'; // Import the EventHighlights component
// Import your CSS file
// If you have a separate script.js for functionality (e.g., animations), import or include it here if needed
// Note: In React, scripts are often handled via useEffect or integrated into components
// You can include script.js logic in useEffect if it handles animations or interactivity

const About = () => {
  return (
    <div>
      {/* Render the EventHighlights component */}
      <EventHighlights />
    </div>
  );
};

export default About;