import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="external-links">
        <li>
          <a href="https://youtu.be/sPM2WiwA1us?si=ibaxD2TP4C6acTFs">
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
          <a href="#homepage">Home</a>
        </li>
        <li>
          <Link to="/getstarted">Get Started</Link>
        </li>
        <li>
          <Link to="/Timeline">Timeline</Link>
        </li>
        <li>
          <Link to="/Questions">Q&A</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>

      <ul className="other-links">
      <li>
          <Link to="/Help">Help</Link>
        </li>
      <li>
          <Link to="/Moreblogs">More Blogs</Link>
        </li>
      <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

      {/* <li>
          <a href="www.linkedin.com/in/abdulhameed230923">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
        </li> */}
    </div>
  );
}
