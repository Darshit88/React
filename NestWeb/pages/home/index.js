import React from "react";
import "./index.css";
import HomeSliderBanner from "./slider/slider";
// import "./slider/slider.cssh"
import CatSlider from "../../components/catSlider/catSlider";
import Banner from "../../components/banners/banner";
import Product from "../../components/product/product";
import Best from "../../assets/images/shop/best.png";
import Slider from "react-slick";
import TopProduct from "./topProducts/TopProduct";
import NewsLatter from "../../assets/images/banner.png";
import { SendOutlined } from "@mui/icons-material";

function index() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: 3000,
    autoplaySpeed: 2000,
    arrows: false,
    fade: false,
  };

  return (
    <div>
      <HomeSliderBanner />
      <CatSlider />
      <Banner />

      <section className="homeProducts">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mt-0 mb-0">Popular Products</h2>
            <ul className="list list-inline filterTab">
              <li className="list-inline-item">
                <a className="cursor" href="#">
                  All
                </a>
              </li>
              <li className="list-inline-item">
                <a className="cursor" href="#">
                  Milk & Dairies
                </a>
              </li>
              <li className="list-inline-item">
                <a className="cursor" href="#">
                  Coffee & Tea
                </a>
              </li>
              <li className="list-inline-item">
                <a className="cursor" href="#">
                  Pet Foods
                </a>
              </li>
              <li className="list-inline-item">
                <a className="cursor" href="#">
                  Meats
                </a>
              </li>
              <li className="list-inline-item">
                <a className="cursor" href="#">
                  Vegitables
                </a>
              </li>
              <li className="list-inline-item">
                <a className="cursor" href="#">
                  Fruits
                </a>
              </li>
            </ul>
          </div>

          <div className="productRow row">
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
          </div>
        </div>
      </section>

      <section className="homeProducts homeProductsRow2 pt-0">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>

            <ul className="list list-inline filterTab">
              <li className="list-inline-item">
                <a className="cursor" href="#">
                  Featured
                </a>
              </li>
              <li className="list-inline-item">
                <a className="cursor" href="#">
                  Popular
                </a>
              </li>
              <li className="list-inline-item">
                <a className="cursor" href="#">
                  New Added
                </a>
              </li>
            </ul>
          </div>
          <br />
          <div className="row">
            <div className="col-md-3">
              <img src={Best} alt="" className="w-100 best" />
            </div>

            <div className="col-md-9">
              <Slider {...settings} className="prodSlider">
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
              </Slider>
            </div>
          </div>

          <section className="topProductSection">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <TopProduct title="Top Selling" />
                </div>
                <div className="col">
                  <TopProduct title="Trending Products" />
                </div>
                <div className="col">
                  <TopProduct title="Recently Added" />
                </div>
                <div className="col">
                  <TopProduct title="Top Rated" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="newsLetterSection">
        <div className="container-fluid">
          <div className="box d-flex align-items-center justify-content-between">
            <div className="info">
              <h2>
                Stay Home & Get Your Daily <br /> Needs From Our Shop
              </h2>
              <p>Start Your Daily Shopping With Nest Mart</p>

              <div className="newsLetterBanner">
                <span className="icon">
                  <SendOutlined />
                </span>
                <input type="email" placeholder="Your Email Address..." />
                <button className="subscribe-btn bg-success">Subscribe</button>
              </div>
            </div>
            <div className="img">
              <img src={NewsLatter} alt="Newsletter" className="w-100" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
