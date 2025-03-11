import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./NavBar.css"; // Import the CSS file
import portfoliobg from "../assets/portfoliobg.jpeg"; // Import your background image

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "Skills" },
    { id: 5, link: "Contact" },
  ];

  const logoStyle = {
    backgroundImage: `url(${portfoliobg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <h1 className="logo-text" style={logoStyle}>
          Amarjeet-Portfolio
        </h1>
      </div>

      <ul className="nav-links-desktop">
        {links.map(({ id, link }) => (
          <li key={id} className="nav-link-item">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="nav-icon">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="nav-links-mobile">
          {links.map(({ id, link }) => (
            <li key={id} className="nav-link-item-mobile">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
