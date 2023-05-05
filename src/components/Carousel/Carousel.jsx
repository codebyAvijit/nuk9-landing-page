import React from "react";
import "./Carousel.css";
import { CarouselInfo } from "../../Data/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselData from "./CarouselData";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // nextArrow: <SampleNext />,
    // prevArrow: <SamplePrev />,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        {CarouselInfo.map((data) => {
          return <CarouselData key={data.imgData} {...data} />;
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
