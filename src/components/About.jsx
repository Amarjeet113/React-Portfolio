import React, { useEffect, useState } from "react";
import "./About.css"; // Import the CSS file
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.webp";
import about4 from "../assets/about4.jpg";
import about5 from "../assets/about5.jpg";
import about6 from "../assets/about6.png";

const images = [about1, about2, about3, about4, about5,about6];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container" id="about">
      <div className="content-wrapper">
        {/* About Me Section */}
        <div className="section-heading">
          <h1 className="title">Who Am I?</h1>
        </div>
        <div className="about-content">
          <div className="text-content">
            <p>
              Hey there! I'm <span className="highlight">Amarjeet Kumar</span>, a{" "}
              <span className="highlight">MERN Stack Developer</span> and{" "}
              <span className="highlight">AI Enthusiast</span>, currently 
              pursuing my <strong>B.Tech in Computer Science</strong> at VIT Bhopal.
            </p>
            <p>
              I specialize in <strong>full-stack development</strong>, cloud computing, and AI-powered solutions. My passion 
              lies in developing scalable applications that solve real-world problems efficiently.
            </p>
            <p>
              With expertise in <strong>React, Node.js, MongoDB, and Express.js</strong>, I build high-performance, user-friendly platforms. 
              When I'm not coding, you'll find me researching AI, exploring blockchain, or enjoying cricket! 🏏
            </p>
          </div>
          <div className="image-content">
            <img
              src={images[currentImage]}
              alt="About"
              className="about-image rotating-image"
            />
          </div>
        </div>

        {/* Education Section */}
        <div className="section-heading">
          <h1 className="title">Education</h1>
        </div>
        <div className="horizontal-boxes">
          <div className="box">
            <h3>Matriculation</h3>
            <p><strong>School:</strong> Devasthaly Vidyapeeth</p>
            <p><strong>Passing Year:</strong> 2019</p>
            <p><strong>Percentage:</strong> 77.8%</p>
          </div>
          <div className="box">
            <h3>Intermediate</h3>
            <p><strong>School:</strong> Devasthaly Vidyapeeth</p>
            <p><strong>Passing Year:</strong> 2021</p>
            <p><strong>Percentage:</strong> 75.4%</p>
          </div>
          <div className="box">
            <h3>Graduation</h3>
            <p><strong>University:</strong> Vellore Institute of Technology</p>
            <p><strong>Year:</strong> 2021-2025</p>
            <p><strong>CGPA:</strong> 8.20</p>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="section-heading">
          <h1 className="title">Work Experience</h1>
        </div>
        <div className="box">
          <h3>MERN Stack Developer - Ethnus</h3>
          <p><strong>Internship:</strong> Aug 2023 - Nov 2023</p>
          <ul>
            <li>Developed an <strong>Art Gallery Website</strong> using MERN stack, improving frontend performance and backend security.</li>
            <li>Designed secure, scalable applications with real-time data processing.</li>
            <li>Contributed to five major releases, working with Agile methodologies.</li>
          </ul>
        </div>

        {/* Projects Section */}
        <div className="section-heading">
          <h1 className="title">Projects</h1>
        </div>
        <div className="box">
          <h3>Food's Cart – Sales Analytics & Inventory Optimization</h3>
          <p><strong>Tech Stack:</strong> React, Node.js, Express.js, MongoDB</p>
          <ul>
            <li>Built a digital sales platform for a confectionery business, boosting sales by 10%.</li>
            <li>Integrated <strong>JWT authentication</strong>, Stripe payments, and an analytics dashboard.</li>
          </ul>
        </div>
        <div className="box">
          <h3>Cryptocurrency Tracking Platform</h3>
          <p><strong>Tech Stack:</strong> React, Material UI, Axios, Coingecko API</p>
          <ul>
            <li>Developed a real-time crypto tracking platform with price alerts and portfolio monitoring.</li>
            <li>Optimized data fetching to reduce latency below <strong>1 second</strong>.</li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="section-heading">
          <h1 className="title">Certifications & Achievements</h1>
        </div>
        <div className="box">
          <ul>
            <li>📜 <strong>AWS Certified Cloud Practitioner</strong> - AWS Academy</li>
            <li>🏆 100+ coding problems solved on LeetCode (5 badges earned)</li>
            <li>🔗 <strong>Lead Member</strong> - Software Development Club, VIT Bhopal</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
