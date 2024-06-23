import React from "react";
import "./About.css"; // Import the CSS file
import about from "../assets/about.png"; // Correct path to your image

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="content-wrapper">
        <div className="section-heading">
          <h1 className="title">About Me</h1>
        </div>
        <div className="about-content">
          <div className="text-content">
            <p>
              Hello, I'm <span className="highlight">Amarjeet Kumar</span>, a
              passionate pre-final year graduate with a{" "}
              <span className="highlight">fervor</span> for assimilating
              cutting-edge engineering technologies, poised to catalyze positive
              change and contribute to shaping a brighter future.
            </p>
            <p>
              Experienced in <span className="highlight">tackling</span>{" "}
              challenges with a keen analytical mind, I excel in crafting seamless
              solutions for both <span className="highlight">front-end</span> &
              <span className="highlight">back-end</span> development, leveraging
              a range of cutting-edge technologies.
            </p>
          </div>
          <div className="image-content">
            <img src={about} alt="About" className="about-image" />
          </div>
        </div>
        <div className="section-heading">
          <h1 className="title">Education</h1>
        </div>
        <div className="horizontal-boxes">
          <div className="box">
            <h3>Matriculation</h3>
            <p>
              <strong>School:</strong> Devasthaly Vidyapeeth
            </p>
            <p>
              <strong>Passing Year:</strong> 2019
            </p>
            <p>
              <strong>Percentage:</strong> 77.8%
            </p>
          </div>
          <div className="box">
            <h3>Intermediate</h3>
            <p>
              <strong>School:</strong> Devasthaly Vidyapeeth
            </p>
            <p>
              <strong>Passing Year:</strong> 2021
            </p>
            <p>
              <strong>Percentage:</strong> 75.4%
            </p>
          </div>
          <div className="box">
            <h3>Graduation</h3>
            <p>
              <strong>University:</strong> Vellore Institute of Technology
            </p>
            <p>
              <strong>Year:</strong> 2021-2025
            </p>
            <p>
              <strong>CGPA:</strong> 8.18
            </p>
          </div>
        </div>
        <div className="section-heading">
          <h1 className="title">Experience</h1>
        </div>
        <div className="box">
          <p>
            <strong>ETHNUS</strong> (MERN Full Stack Internship Program), Aug
            2023 to Nov 2023
          </p>
          <ul>
            <li>
              Developed Art Gallery, a full-stack application using MERN stack
              (ReactJS, ExpressJS, NodeJS, MongoDB).
            </li>
            <li>
              Gained hands-on experience and strengthened project planning,
              problem-solving, and teamwork skills.
            </li>
            <li>
              Contributed to a scalable and functional application, including
              user authentication, responsive UI, and specific functionalities.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
