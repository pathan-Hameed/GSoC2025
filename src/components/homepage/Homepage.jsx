import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Import Link
import "./Homepage.css";

export default function Homepage() {
  return (
    <div id="homepage">
      <div className="main-section" id="main-section">
        <div className="main-article">
          <div className="heading">
            <h1>
              What Is <br />
              Google Summer Of Code!
            </h1>
          </div>
          <div className="head-content">
            <p>
              Google Summer of Code (GSoC) is a global program organized by
              Google where students (like you!) get the chance to work
              on real-world open-source projects during their summer break. It’s
              like an internship, but instead of working for a company, you
              contribute to free, open-source software that anyone can use.
            </p>
          </div>
        </div>
      </div>

      <div className="why-section">
        <div className="sub-heading">
          <h1>Why Should You Care?</h1>
        </div>
        <div className="reasons">
          <div className="reason-section1">
            <ul>
              <li>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Learn Real Coding Skills</h5>
                    <p className="card-text">
                      You’ll work on real projects, which is a great way to
                      learn and improve your coding skills.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Build Your Resume</h5>
                    <p className="card-text">
                      GSoC looks amazing on your resume and can help you land
                      jobs or internships in the future.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Contribute to the World</h5>
                    <p className="card-text">
                      The code you write will be used by people around the
                      world—it’s a chance to make a difference!
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="reason-section2">
            <ul>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Earn Money</h5>
                  <p className="card-text">
                    Google pays you a stipend (like a salary) for completing
                    your project. Which is around $6,000 - $1,500 (around
                    5,00,00 rs - 1,25,000 rs).
                  </p>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="since-section">
        <div className="since-content">
          <p>
            Since 2005, the Google Summer of Code program has connected 19,000+
            new open source contributors from 112 countries with 18,000+ mentors
            from 133 countries. Google Summer of Code has produced over 43
            million lines of code for 800+ open source organizations.
          </p>
          <p className="home-links">
           New to GSoC? {" "}
            <a href="https://youtu.be/Wxjxwx7mqaI?si=3K_cLzJZA9YbPKWf">Introduction to Google Summer Of Code.</a>
          </p>
        </div>
      </div>

      <div className="organizations">
        <h1 className="section-title">Mentor Organisations</h1>

        <div className="domain-section">
          <h3 className="domain-title">
            Artificial Intelligence & Machine Learning
          </h3>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img
                  src="TensorFlow.png"
                  className="card-img-top"
                  alt="TensorFlow logo"
                />
                <div className="card-body">
                  <h5 className="card-title">TensorFlow</h5>
                  <p className="card-text">
                    {" "}
                    Google’s open-source machine learning framework.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="opencv.png"
                  className="card-img-top"
                  alt="OpenCV logo"
                />
                <div className="card-body">
                  <h5 className="card-title">OpenCV</h5>
                  <p className="card-text">
                    {" "}
                    Open-source computer vision and image processing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="scikit-learn-logo.png"
                  className="card-img-top"
                  alt="SciKit-Learn logo"
                />
                <div className="card-body">
                  <h5 className="card-title">SciKit-Learn</h5>
                  <p className="card-text"> Machine learning for Python.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="ml4sci.png"
                  className="card-img-top"
                  alt="blender logo"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    ML4SCI (Machine Learning for Science){" "}
                  </h5>
                  <p className="card-text">
                    {" "}
                    AI/ML applications in scientific research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="domain-section">
          <h3 className="domain-title">Web Development & Frameworks</h3>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img
                  src="Django_logo.png"
                  className="card-img-top"
                  alt="Django Software Foundation logo"
                />
                <div className="card-body">
                  <h5 className="card-title">Django Software Foundation</h5>
                  <p className="card-text"> Python’s leading web framework.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="Ruby_on_Rails-Logo.png"
                  className="card-img-top"
                  alt="Ruby on Rails logo"
                />
                <div className="card-body">
                  <h5 className="card-title">Ruby on Rails</h5>
                  <p className="card-text">
                    {" "}
                    Open-source computer vision and image processing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="rocket-chat.png"
                  className="card-img-top"
                  alt="Rocket.Chat logo"
                />
                <div className="card-body">
                  <h5 className="card-title">Rocket.Chat</h5>
                  <p className="card-text">
                    {" "}
                    Open-source chat platform like Slack
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="Apache_Software_Foundation_Logo.png"
                  className="card-img-top"
                  alt="Apache Software Foundation logo"
                />
                <div className="card-body">
                  <h5 className="card-title">Apache Software Foundation </h5>
                  <p className="card-text">
                    {" "}
                    AI/ML applications in scientific research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="domain-section">
          <h3 className="domain-title">Scientific Computing & Data Science</h3>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img
                  src="numfocus.png"
                  className="card-img-top"
                  alt="NumFOCUS logo"
                />
                <div className="card-body">
                  <h5 className="card-title">NumFOCUS</h5>
                  <p className="card-text">
                    {" "}
                    Supports projects like NumPy, SciPy, pandas, and Jupyter
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="sunpy_logo.png"
                  className="card-img-top"
                  alt="SunPy logo"
                />
                <div className="card-body">
                  <h5 className="card-title">SunPy</h5>
                  <p className="card-text">
                    {" "}
                    Python for solar physics research.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="odc.png"
                  className="card-img-top"
                  alt="Open Data Cube logo"
                />
                <div className="card-body">
                  <h5 className="card-title">Open Data Cube</h5>
                  <p className="card-text">
                    {" "}
                    Analyzing satellite imagery and geospatial data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="OSGeo_logo.png"
                  className="card-img-top"
                  alt="OSGeo logo"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    OSGeo (Open Source Geospatial Foundation)
                  </h5>
                  <p className="card-text">
                    {" "}
                    Geographic information systems (GIS).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="home-links">What is Open Source Organisation? <a href="">Learn Here</a></p>
      </div>

      <div className="working-section">
        <div className="section-title">
          <h1>How Does It Works?</h1>
        </div>
        <ol>
          <li>
            <h5 className="work-title">1. Open Source Organizations :</h5>
            <p className="work-text">
              Many organizations (like WordPress, Apache, or even smaller coding
              communities) participate in GSoC. They list projects they need
              help with.
            </p>
          </li>
          <li>
            <h5 className="work-title">2. Student Apply : </h5>
            <p className="work-text">
              If you’re a student (or a beginner in coding), you can apply to
              work on one of these projects. You don’t need to be an expert—just
              passionate about learning and contributing!
            </p>
          </li>
          <li>
            <h5 className="work-title">3. Mentors Guide You : </h5>
            <p className="work-text">
              If you’re selected, you’ll be paired with mentors (experienced
              developers) who will guide you throughout the project.
            </p>
          </li>
          <li>
            <h5 className="work-title">4. Work Remotely :</h5>
            <p className="work-text">
              You work from home or anywhere you like, and you get paid by
              Google for completing your project.
            </p>
          </li>
        </ol>
      </div>

      <div className="eligible-section">
        <div className="eligible-image">
          <img src="eligible.jpg" alt="eligible.jpg" />
        </div>
        <div className="eligible-content">
          <h1>GSoC contributor eligibility</h1>
          <ol>
            <li>
              <p>Must be at least 18 years old at time of registration.</p>
            </li>
            <li>Must be a student or an open source beginner.</li>
            <li>
              Must be eligible to work in their country of residence during
              duration of program.
            </li>
            <li>
              Must be a resident of a country not currently embargoed by the
              United States.
            </li>
          </ol>
        </div>
      </div>
      <div className="last-link">
        <p className="home-links">How to Apply? <a href="">Learn Here</a></p>
        <p className="home-links"> For GSoC related refferals, Success stories video links and more...Visit   <a href="/help">Help Section</a></p>
      </div>
    </div>
  );
}
