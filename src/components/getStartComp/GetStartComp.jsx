import React from "react";
import "./getStartComp.css";

export default function GetStartComp() {
  const steps = [
    {
      id: 1,
      title: "Learn Basic of Coding",
      text: [
        "Start learning a programming language like Python, Java, or JavaScript.",
        "Practice coding on platforms like freeCodeCamp or LeetCode.",
      ],
    },
    {
      id: 2,
      title: "Find GSoC Organizations",
      text: [
        "When GSoC applications open from March-24 to April-8, check the GSoC website for participating organizations.",
        "Pick an organization and project that excites you.",
      ],
    },
    {
      id: 3,
      title: "Connect with the Community",
      text: [
        "Join the organization’s mailing list, chat channels, or forums.",
        "Introduce yourself and ask questions—it’s a great way to show your interest!",
      ],
    },
    {
      id: 4,
      title: "Prepare Your Proposal",
      text: [
        "Write a clear and detailed proposal outlining your project idea, timeline, and how you’ll contribute.",
        "Follow the organization’s guidelines for proposals.",
      ],
    },
    {
      id: 5,
      title: "Submit Your Application",
      text: [
        "Submit your proposal through the GSoC application portal before the deadline.",
        "Make sure to double-check all details!",
      ],
    },
  ];

  return (
    <>
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`step-container ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          <div className="step-head">
            <h3 className="step-title">{step.title}</h3>
          </div>
          <ul className="step-body">
            {step.text.map((text, i) => (
              <li key={i} className="step-text">
                {text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
