import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import "./Portfolio.css"; // Import the CSS file

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="portfolio-container"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-white text-white">
            Portfolio
          </p>
          <p className="py-6 text-lg text-yellow-100">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-lg shadow-gray-800 rounded-lg overflow-hidden">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105 w-full"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 text-lg font-semibold text-white btn-demo">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 text-lg font-semibold text-white btn-code">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
