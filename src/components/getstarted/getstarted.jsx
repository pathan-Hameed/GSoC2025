import React from "react";
import { Link } from "react-router-dom";
import "./getstarted.css";

export default function GetStarted() {
  return (
    <div id="getstarted">
      <div className="get-start">
        <h1 className="getstart-title">How To Get Started</h1>
        {/* this is steps container */}
        <div className="steps7">
          {/* step 1          */}
          <div className="step-container">
            <div className="step-head">
              <h3 className="step-title">Learn Basic of Coding</h3>
            </div>
            <ul className="step-body">
              <li className="step-text">
                Start learning a programming language like Python, Java,
                or JavaScript.
              </li>
              <li className="step-text">
                Practice codeing on platfroms like freeCodeCamp or LeetCode.
              </li>
            </ul>
          </div>
          {/* step 2 */}
          <div className="step-container">
            <ul className="step-body">
              <li className="step-text">
                When GSoC applications open from March-24 to April-8 , check
                the GSoC website for participating organizations.
              </li>
              <li className="step-text">
                Pick an organization and project that excites you.
              </li>
            </ul>
            <div className="step-head">
              <h3 className="step-title">Find GSoC Organizations</h3>
            </div>
          </div>
          {/* step 3 */}
          <div className="step-container">
            <div className="step-head">
              <h3 className="step-title">Connect with the Community</h3>
            </div>
            <ul className="step-body">
              <li className="step-text">
                Join the organization’s mailing list, chat channels, or forums.
              </li>
              <li className="step-text">
                Introduce yourself and ask questions—it’s a great way to show
                your interest!
              </li>
            </ul>
          </div>
          {/* step 4  */}
          <div className="step-container">
            <ul className="step-body">
              <li className="step-text">
                Fix small bugs or add features to the organization’s projects.
              </li>
              <li className="step-text">
                This helps you understand the codebase and shows your
                dedication.
              </li>
            </ul>
            <div className="step-head">
              <h3 className="step-title">Start Contributing</h3>
            </div>
          </div>
          {/* step 5  */}
          <div className="step-container">
            <div className="step-head">
              <h3 className="step-title">Write a Strong Proposal</h3>
            </div>
            <ul className="step-body">
              <li className="step-text">
                Write a clear and detailed proposal for the project you want to
                work on.
              </li>
              <li className="step-text">
                Explain your plan, timeline, and why you’re the right person for
                the job.
              </li>
            </ul>
          </div>
          {/* step 6  */}
          <div className="step-container">
            <ul className="step-body">
              <li className="step-text">
                Submit your proposal before the deadline (usually in April).
              </li>
              <li className="step-text">
                Wait for the results—if selected, you’ll start working on your
                project in May!
              </li>
            </ul>
            <div className="step-head">
              <h3 className="step-title">Submit Your Application</h3>
            </div>
          </div>
        </div>
        <p className="home-links">Know the Timeline  <a href="/timeline">Click Here</a></p>
        <p className="home-links"> For GSoC related refferals, Success stories video links and more...Visit   <a href="/help">Help Section</a></p>
      </div>
    </div>
  );
}
