import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Import Link
import "./Homepage.css";

export default function Homepage() {
  const reason = [
    {
      id: 1,
      title: "Learn Real Coding Skills",
      text: "You’ll work on real projects, which is a great way to learn and improve your coding skills.",
    },
    {
      id: 2,
      title: "Build Your Resume",
      text: " GSoC looks amazing on your resume and can help you land jobs or internships in the future.",
    },
    {
      id: 3,
      title: "Contribute to the World",
      text: "The code you write will be used by people around the world—it’s a chance to make a difference!",
    },
  ];

  const domains = [
    {
      title: "Artificial Intelligence & Machine Learning",
      cards: [
        {
          cardtitle: "TensorFlow",
          src: "TensorFlow.png",
          text: "Google’s open-source machine learning framework.",
        },
        {
          cardtitle: "OpenCV",
          src: "opencv.png",
          text: "Open-source computer vision and image processing.",
        },
        {
          cardtitle: "SciKit-Learn",
          src: "scikit-learn-logo.png",
          text: "Machine learning for Python.",
        },
        {
          cardtitle: "ML4SCI (Machine Learning for Science)",
          src: "ml4sci.png",
          text: "AI/ML applications in scientific research.",
        },
      ],
    },

    {
      title: "Web Development & Frameworks",
      cards: [
        {
          cardtitle: "Django Software Foundation",
          src: "Django_logo.png",
          text: "Python’s leading web framework.",
        },
        {
          cardtitle: "Ruby on Rails",
          src: "Ruby_on_Rails-Logo.png",
          text: "Open-source computer vision and image processing.",
        },
        {
          cardtitle: "Rocket.Chat",
          src: "rocket-chat.png",
          text: "Open-source chat platform like Slack",
        },
        {
          cardtitle: "Apache Software Foundation",
          src: "Apache_Software_Foundation_Logo.png",
          text: " AI/ML applications in scientific research.",
        },
      ],
    },

    {
      title: "Scientific Computing & Data Science",
      cards: [
        {
          cardtitle: "NumFOCUS",
          src: "numfocus.png",
          text: "Supports projects like NumPy, SciPy, pandas, and Jupyter",
        },
        {
          cardtitle: "SunPy",
          src: "sunpy_logo.png",
          text: "Python for solar physics research.",
        },
        {
          cardtitle: "Open Data Cube",
          src: "odc.png",
          text: "Analyzing satellite imagery and geospatial data.",
        },
        {
          cardtitle: "OSGeo (Open Source Geospatial Foundation)",
          src: "OSGeo_logo.png",
          text: "Geographic information systems (GIS).",
        },
      ],
    },
  ];

  const worksec = [
    {
      title: "1. Open Source Organizations :",
      text: "Many organizations (like WordPress, Apache, or even smaller coding communities) participate in GSoC. They list projects they need help with.",
    },
    {
      title: "2. Student Apply : ",
      text: "If you’re a student (or a beginner in coding), you can apply to work on one of these projects. You don’t need to be an expert—just passionate about learning and contributing!",
    },
    {
      title: "3. Mentors Guide You : ",
      text: "If you’re selected, you’ll be paired with mentors (experienced developers) who will guide you throughout the project.",
    },
    {
      title: "4. Work Remotely :",
      text: "You work from home or anywhere you like, and you get paid by Google for completing your project.",
    },
  ];

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
              {reason.map((card) => (
                <li>
                  <div className="card">
                    <div className="card-body" key={card.id}>
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.text}</p>
                    </div>
                  </div>
                </li>
              ))}
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
            New to GSoC?{" "}
            <a href="https://youtu.be/Wxjxwx7mqaI?si=3K_cLzJZA9YbPKWf">
              Introduction to Google Summer Of Code.
            </a>
          </p>
        </div>
      </div>

      <div className="organizations">
        <h1 className="section-title">Mentor Organisations</h1>
        {domains.map((domain, index) => (
          <div className="domain-section" key={index}>
            <h3 className="domain-title">{domain.title}</h3>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {domain.cards.map((card, index) => (
                <div className="col">
                  <div className="card" key={index}>
                    <img
                      src={card.src}
                      className="card-img-top"
                      alt="TensorFlow logo"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{card.cardtitle}</h5>
                      <p className="card-text"> {card.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <p className="home-links">
          What is Open Source Organisation?{" "}
          <a href="https://www.youtube.com/@GoogleDevelopers/videos">
            Learn Here
          </a>
        </p>
      </div>

      <div className="working-section">
        <div className="section-title">
          <h1>How Does It Works?</h1>
        </div>
        <ol>
          {worksec.map((work, index) => (
            <li key={index}>
              <h5 className="work-title">{work.title}</h5>
              <p className="work-text">{work.text}</p>
            </li>
          ))}
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
        <p className="home-links">
          How to Apply?{" "}
          <a href="https://youtu.be/YN7uGCg5vLg?si=jg7XxJ84zPzPpdgd">
            Learn Here
          </a>
        </p>
        <p className="home-links">
          {" "}
          For GSoC related refferals, Success stories video links and
          more...Visit <Link to="/help">Help Section</Link>
        </p>
      </div>
    </div>
  );
}
