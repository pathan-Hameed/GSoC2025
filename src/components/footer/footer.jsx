import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="footer">
      <ul className="external-links">
        <li>
          <a href="https://youtu.be/Wxjxwx7mqaI?si=wLviEqD8LEflygv5">
            About GSoC on youtube
          </a>
        </li>
        <li>
          <a href="https://summerofcode.withgoogle.com/">
            GSoC official website
          </a>
        </li>
        <li>
          <a href="https://summerofcode.withgoogle.com/">Apply Here</a>
        </li>
      </ul>

      <ul className="internal-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link to="/getstarted">Get Started</Link>
        </li>
        
        <li>
          <Link to="/Timeline">Timeline</Link>
        </li>
        <li>
          <a href="https://summerofcode.withgoogle.com/programs/2025/organizations"> Mentor Organisations</a>
        </li>
        <li>
          <Link to="/QA">Q&A</Link>
        </li>
      </ul>

      <ul className="other-links">
        <li>
          <Link to="/About">About</Link>
        </li>
      <li>
          <Link to="/Help">Help</Link>
        </li>
      <li>
          <Link to="/Moreblogs">More Blogs</Link>
        </li>
      <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      </div>

      <p className="copyright">2025@CodeCompanion</p>

    </div>
  );
}
