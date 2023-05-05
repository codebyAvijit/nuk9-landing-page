import React from "react";
import { data } from "../../Data/Home";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-head">
        <h1>Our Portfolio of Services</h1>
      </div>
      <p>
        Your Governance, Risk, Compliance and Information Security services
        under on roof, that not only enables you to achieve the needs of the
        stake holders but also shocast Risk on Security Investments (ROSI) to
        the Top Management
      </p>
      <div className="portfolio-content">
        {data.map((item, key) => {
          return (
            <div key={key} className="content-container">
              <img src={item.imgData} alt="logo" />
              <p>{item.heading}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
