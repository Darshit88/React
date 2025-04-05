import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import slider1 from "../../../assets/images/slider-1.png"
import slider2 from "../../../assets/images/slider-2.png";
import Button from "@mui/material/Button";
import SendOutlined from "@mui/icons-material/SendOutlined";


const HomeSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
  };

  return (
    <section className="homeSlider position-relative">
      <div className="container-fluid">
        <Slider {...settings} className="home_slider_Main">
          <div className="item">
            <img src={slider1} className="w-100" alt="Slide 1" />
            <div className="info">
              <h2 className="mb-4">
                Don't miss amazing <br />
                grocery deals.
              </h2>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
          <div className="item">
            <img src={slider2} className="w-100" alt="Slide 1" />
            <div className="info">
              <h2 className="mb-4">
                Fresh Vegetables <br />
                Big discount
              </h2>
              <p>Save up to 50% off on your first order.</p>
            </div>
          </div>
        </Slider>

        <div className="newsLetterBanner">
          <SendOutlined />
          <input type="text" placeholder="Your Email Address..." />
          <Button className="bg-success">Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
