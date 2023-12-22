import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Offers.css";
import discount from "../Assets/4.png";
import banner_women_image from "../Assets/banner_women.png";
import banner_men_image from "../Assets/banner_mens.png";
import banner_kids_image from "../Assets/banner_kids.png";
import { Link } from "react-router-dom";

const withSlideLogging = (WrappedComponent) => {
  return function WithSlideLogging(props) {
    const logSlide = (index) => {
      console.log(`Slide ${index + 1} is displayed`);
    };

    return <WrappedComponent logSlide={logSlide} {...props} />;
  };
};

const EnhancedSlider = withSlideLogging(Slider);

const Offers = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="offers">
      <EnhancedSlider {...sliderSettings}>
        <div className="offers-slide offer-added">
          <img src={discount} alt="" />
        </div>
        <div className="offers-slide">
          <Link to="/womens">
            <img src={banner_women_image} alt="" />
          </Link>
        </div>
        <div className="offers-slide">
          <Link to="/mens">
            <img src={banner_men_image} alt="" />
          </Link>
        </div>
        <div className="offers-slide">
          <Link to="/kids">
            <img src={banner_kids_image} alt="" />
          </Link>
        </div>
      </EnhancedSlider>
    </div>
  );
};

export default Offers;
