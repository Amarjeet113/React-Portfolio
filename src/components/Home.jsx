import React, { useState } from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "./Home.css"; // Import the CSS file

const Home = () => {
  const [arrowRotated, setArrowRotated] = useState(false);

  const handleArrowRotation = () => {
    setArrowRotated(!arrowRotated);
  };

  return (
    <div name="home" className="home-container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>
            Hi, My name is <span className="highlight">Amarjeet</span>
          </h1>
          <h2>
            and I am a passionate <span className="highlight">Web Developer</span>
          </h2>
          <p className="description">
          I'm skilled in HTML, CSS, JavaScript, React.js, MongoDB, Node.js, Express.js, Git, GitHub, C++, Data Structures, Algorithms, and MySQL, holding certifications in MERN Stack and AWS Cloud Practitioner. His projects like Geet-Sangeet and Sweet’s Cart showcase his impact in web development. With a strong academic background and MERN Full Stack internship, he excels in problem-solving and competitive coding, driven by his passion for sports and coding leadership.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="portfolio-button"
              onMouseEnter={handleArrowRotation}
              onMouseLeave={handleArrowRotation}
              onClick={handleArrowRotation}
            >
              Portfolio
              <span
                className="arrow-icon"
                style={{ transform: arrowRotated ? "rotate(90deg)" : "rotate(0deg)" }}
              >
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="image-section">
        <img src={HeroImage} alt="my profile" className="hero-image" />
      </div>
    </div>
  );
};

export default Home;
