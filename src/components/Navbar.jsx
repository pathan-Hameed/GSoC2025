import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to close navbar when a link is clicked
  const closeNavbar = () => {
    setIsExpanded(false);
  };

  return (
    <>
      {/* Overlay that appears when navbar expands */}
      {isExpanded && <div className="overlay" onClick={toggleNavbar}></div>}

      <div className={`navbar ${isExpanded ? "expanded" : ""}`}>
        <div className="icon" onClick={toggleNavbar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </div>
        <div className="links" onClick={closeNavbar}>
          <a href="#homepage" onClick={closeNavbar}>Home</a>
          <a href="#" onClick={closeNavbar}>Get Started</a>
          <a href="#" onClick={closeNavbar}>About</a>
          <a href="#" onClick={closeNavbar}>Help</a>
        </div>
      </div>
    </>
  );
}
