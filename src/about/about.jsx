import React from "react";
import "./about.css";

export default function About() {
  return (
    <div>
      <div className="about-section">
        <h1 className="about-title">About</h1>

        <p className="about-content">
          Google Summer of Code (GSoC) is a global program that provides
          students and beginner developers with an opportunity to contribute to
          open-source projects under the guidance of experienced mentors. It
          helps participants gain real-world development experience while making
          meaningful contributions to open-source communities.
        </p>

        <p className="about-content">
          This website serves as a comprehensive guide for aspiring GSoC
          contributors. Whether you're a student preparing to apply or an
          open-source enthusiast looking to get started, we provide essential
          resources to simplify the process. You'll find a clear overview of
          GSoC, step-by-step guidance on applying, and direct links to
          participating organizations.
        </p>

        <p className="about-content">
          Explore the resources, follow the guidelines, and take your first step
          toward open-source development with GSoC! 🚀
        </p>
        
        <p className="home-links">Visit Official Website Of <a href="https://summerofcode.withgoogle.com/">Google Summer Of Code</a> For More Information</p>
        <p className="home-links"> For GSoC related refferals, Success stories video links and more...Visit   <Link href="/help">Help Section</Link></p>
      </div>
    </div>
  );
}
