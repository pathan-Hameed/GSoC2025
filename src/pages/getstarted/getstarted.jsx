import React from "react";
import { Link } from "react-router-dom";
import "./getstarted.css";
import GetStartComp from "../../components/getStartComp/getStartComp";

export default function GetStarted() {
  return (
    <div id="getstarted">
      <div className="get-start">
        <h1 className="getstart-title">How To Get Started</h1>
        {/* this is steps container */}
        <div className="steps7">
         <GetStartComp />
        </div>
        <p className="home-links">Know the Timeline  <Link to="/timeline">Click Here</Link></p>
        <p className="home-links"> For GSoC related refferals, Success stories video links and more...Visit   <Link to="/help">Help Section</Link></p>
      </div>
    </div>
  );
}
