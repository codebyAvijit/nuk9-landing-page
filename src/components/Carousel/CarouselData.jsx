import React from "react";
import "./Carousel.css";
const CarouselData = ({ imgData }) => {
  return (
    <div className="cardata">
      <img src={imgData} alt="pics" />
    </div>
  );
};

export default CarouselData;
