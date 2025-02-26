import React from "react";
import "./Timeline.css";

const events = [
  { date: "February 27", title: "Organizations Announced", info: "Google publishes the list of mentoring organizations (teams you can work with)." },
  { date: "February 27 - March 24", title: "Contributor Discussion Period", info: "Reach out to the organizations you like and Talk to mentors, ask questions, and discuss your project ideas." },
  { date: "March 24", title: "Contributor Application Period", info: "The application period starts on March 24. Write a project proposal (a plan explaining how you’ll complete the project)." },
  { date: "April 8", title: "Contributor Application Deadline", info: "GSoC contributor application deadline. Submit your application before  the   deadline." },
  { date: "May 8", title: "Contributor Projects Announced", info: " Google announces the accepted students." },
  { date: "May 8 - June 1", title: "Community Bonding", info: "GSoC contributors get to know mentors, read documentation, get up to speed to begin working on their projects" },
  { date: "June 2", title: "Coding Period", info: "Coding officially begins!" },
  { date: "July 14 - Ju;y 18", title: "Evaluations", info: "Mentors and GSoC contributors submit their evaluations of one another." },
  { date: "July 14 - August 25", title: "Work Period", info: " GSoC contributors work on their project with guidance from Mentors" },
  { date: "September 1 - November 9", title: "Extended Timelines", info: "GSoC contributors with extended timelines continue coding" },
  { date: "November 10", title: "Mentors Submit Final Evaluations", info: "Final date for all GSoC contributors to submit their final work product and final evaluation" },
  { date: "November 17", title: "Results Announced", info: "Final date for mentors to submit evaluations for GSoC contributor projects with extended deadlines" },
];

export default function Timeline() {
  return (
    <div className="timeline-section">
        <h3 className="section-title">
        Google Summer of Code 2025 Timeline
        </h3>
    <div className="timeline">
      {events.map((event, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="timeline-title">{event.title}</h3>
            <span className="timeline-date">{event.date}</span>
            <p className="timeline-info">{event.info}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
