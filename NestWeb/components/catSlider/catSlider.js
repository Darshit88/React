import React from "react";
import "./catSlider.css";
import Slider from "react-slick";
import cat1 from "../../assets/images/cat-1.png";
import cat2 from "../../assets/images/cat-2.png";
import cat3 from "../../assets/images/cat-3.png";
import cat4 from "../../assets/images/cat-4.png";
import cat5 from "../../assets/images/cat-5.png";
import cat6 from "../../assets/images/cat-6.png";
import cat7 from "../../assets/images/cat-7.png";
import cat8 from "../../assets/images/cat-8.png";
import cat9 from "../../assets/images/cat-9.png";
import cat10 from "../../assets/images/cat-10.png";
import cat11 from "../../assets/images/cat-11.png";

function CatSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    fade: false,
  };

  return (
    <div className="catSliderSection">
      <div className="container-fluid">
        <h2 className="hd">Featured Categories</h2>
        <Slider {...settings} className="cat_slider_Main">
          <div className="item">
            <div className="info">
              <img src={cat1} alt="" />
              <h5>Vegetables</h5>
              <p>72 Items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={cat2} alt="" />
              <h5>Strawberry</h5>
              <p>36 Items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={cat3} alt="" />
              <h5>Snack</h5>
              <p>56 Items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={cat4} alt="" />
              <h5>Black Plum</h5>
              <p>123 Items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={cat5} alt="" />
              <h5>Custard Apple</h5>
              <p>34 Items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={cat6} alt="" />
              <h5>Red Apple</h5>
              <p>54 Items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={cat7} alt="" />
              <h5>Peach</h5>
              <p>14 Items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={cat8} alt="" />
              <h5>Oganic Kiwi</h5>
              <p>28 Items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={cat9} alt="" />
              <h5>Cack & Milk</h5>
              <p>26 Items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={cat10} alt="" />
              <h5>Coffee & Tea</h5>
              <p>89 Items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={cat11} alt="" />
              <h5>HeadPhone</h5>
              <p>87 Items</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CatSlider;
