import React from "react";
import "./help.css";
import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div>
      <div className="help-section">
        <h1 className="help-title">Help</h1>
        <h1 className="home-sub-title">Important Links:</h1>
        <p className="home-links">
          New to GSoC?{" "}
          <a href="https://youtu.be/Wxjxwx7mqaI?si=3K_cLzJZA9YbPKWf">
            Introduction to Google Summer Of Code.
          </a>
        </p>
        <p className="home-links">
          What is Open Source Organisation? <a href="https://www.youtube.com/@GoogleDevelopers/videos">Learn Here</a>
        </p>
        <p className="home-links">
          How to Apply? <a href="https://youtu.be/YN7uGCg5vLg?si=jg7XxJ84zPzPpdgd">Learn Here</a>
        </p>
        <p className="home-links">
          Know the Timeline <Link href="/timeline">Click Here</Link>
        </p>
        <p className="home-links">
          2025 GSoC Organisations Announced <a href="https://summerofcode.withgoogle.com/programs/2025/organizations">Explore Here</a>
        </p>

        <h1 className="home-sub-title">Other Refferals:</h1>

        <p className="home-links">
          About GSoC by Apna College{" "}
          <a href="https://youtu.be/sPM2WiwA1us?si=w6HJ-kxPL44r1qVt">
            Click Here
          </a>
        </p>
        <p className="home-links">
          GSoC 2025: Full Roadmap + Live Open Source Contribution Guide by
          Harshit Trahan{" "}
          <a href="https://youtu.be/IoSNu7RVQdg?si=Go-U3I7nDl3j5v4u">
            Click Here
          </a>
        </p>

        <h1 className="home-sub-title">How They Did:</h1>

        <p className="home-links">
          How I Cracked GSoC in Just 1 Month by Ashish Pratap Singh{" "}
          <a href="https://youtu.be/DK3XINRFoNE?si=BGaJQTYvjkd8eaw0">Click Here</a>
        </p>
        <p className="home-links">
          How she cracked Google Summer of Code in First year in 1 month! 🚀 |
          GSoC Guide by Nishat chahar <a href="https://youtu.be/XvSJ0KvFGDY?si=9S6QoHNXcXW6awnY">Click Here</a>
        </p>
        <p className="home-links">
        Google Summer of Code: How To Crack It In 2025 STEP BY STEP | The Sanskar Show by Sanskar Goyal <a href="https://youtu.be/BxbgmP6ScmY?si=7hSrCWOhOWHc0-q5">Click Here</a>
        </p>
      </div>
    </div>
  );
}
