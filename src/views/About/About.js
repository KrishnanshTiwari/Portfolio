import React from "react";
import "./About.css";
import img from "./about.jpg";
function About() {
  return (
    <>
    <section id="about">
      <div className="about">
        <h1>About me</h1>
       
        <div className="about-content">
          <div className="about-image">
            <img src={img} alt=""></img>
          </div>

          <div className="about-text">
            <p>
              Hi, my name is Krishnansh Tiwari, a full-stack developer & Competitive programmer with a collaborative mindset and passion for learning.I enjoy building New Projects and solving complex problems.
            </p>
            <a
              href="https://github.com/KrishnanshTiwari"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default About;
