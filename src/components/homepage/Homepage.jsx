import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
        </div>
      </div>

      <div className="example-section">
        <div className="sub-heading">
          <h1>Example:</h1>
        </div>
        <div className="sub-content">
          <p>
            Imagine you’re working on a project to improve a weather app that’s
            used by millions of people. Your job might be to add a new feature,
            like showing air quality, or fixing bugs in the app. You’ll write
            code, test it, and make sure it works perfectly. Your mentors will
            help you every step of the way.
          </p>
        </div>
      </div>

      <div className="eligible-section">
        <div className="eligible-image">
          <img src="eligible.jpg" alt="eligible.jpg"/>
        </div>
        <div className="eligible-content">
          <h1>GSoC contributor eligibility</h1>
          <ol>
            <li><p>Must be at least 18 years old at time of registration.</p></li>
            <li>Must be a student or an open source beginner.</li>
            <li >
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

      <div className="link-section">
        <div className="link-title">Frequently Asked Questions</div>
        <ul className="links">
          <a href="">
            <li className="link-box">How can I increase my chances of getting selected for GSoC?</li>
          </a>
          <a href="">
            <li className="link-box">How do I choose the right organization and project?</li>
          </a>
          <a href="">
            <li className="link-box">What should I include in my GSoC proposal?</li>
          </a>
          <a href="">
            <li className="link-box">How much coding experience is required for GSoC?</li>
          </a>
        </ul>
      </div>

    </div>
  );
}
