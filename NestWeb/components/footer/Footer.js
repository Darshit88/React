import React from "react";
import "./footer.css";
import icon1 from "../../assets/images/icon-1.svg";
import icon2 from "../../assets/images/icon-2.svg";
import icon3 from "../../assets/images/icon-3.svg";
import icon4 from "../../assets/images/icon-4.svg";
import icon5 from "../../assets/images/icon-5.svg";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { LocationOnOutlined } from "@mui/icons-material";
import { HeadphonesOutlined } from "@mui/icons-material";
import { EmailOutlined } from "@mui/icons-material";
import { WatchLaterOutlined } from "@mui/icons-material";
import { FacebookOutlined } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { YouTube } from "@mui/icons-material";
import { Telegram } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerBoxes">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  <img src={icon1} alt="" />
                </span>
                <div className="info">
                  <h4>Best Prices & offers</h4>
                  <p>Orders $50 or More</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  <img src={icon2} alt="" />
                </span>
                <div className="info">
                  <h4>Free delivery</h4>
                  <p>24/7 amazing services</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  <img src={icon3} alt="" />
                </span>
                <div className="info">
                  <h4>Great daily deal</h4>
                  <p>When you sign up</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  <img src={icon4} alt="" />
                </span>
                <div className="info">
                  <h4>Wide assortment</h4>
                  <p>Mega Discounts</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  <img src={icon5} alt="" />
                </span>
                <div className="info">
                  <h4>Easy returns</h4>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 part1">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
              <br />

              <p>Awesome grocery store website template</p>

              <p>
                <LocationOnOutlined />
                <strong>Address</strong> : 5171 W Campbell Ave <br />
                <span>Utah 53127 United States</span>
              </p>
              <p>
                <HeadphonesOutlined /> <strong>Call Us</strong>: (+91) -
                540-025-124553
              </p>
              <p>
                <EmailOutlined /> <strong>Email</strong>: sale@Nest.com
              </p>
              <p>
                <WatchLaterOutlined /> <strong>Hours</strong>: 10:00 - 18:00,
                Mon - Sat
              </p>
            </div>

            <div className="col-md-8 part2">
              <div className="row">
                <div className="col">
                  <h3>Company</h3>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <Link to="#">About Us</Link>
                    </li>
                    <li>
                      <Link to="#">Delivery Information</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Terms &amp; Condition</Link>
                    </li>
                    <li>
                      <Link to="#">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="#">Support Center</Link>
                    </li>
                    <li>
                      <Link to="#">Careers</Link>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h3>Account</h3>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <Link to="#">Sign in</Link>
                    </li>
                    <li>
                      <Link to="#">View Cart</Link>
                    </li>
                    <li>
                      <Link to="#">My Wishlist</Link>
                    </li>
                    <li>
                      <Link to="#">Track My Order</Link>
                    </li>
                    <li>
                      <Link to="#">Help Ticket</Link>
                    </li>
                    <li>
                      <Link to="#">Shopping Details</Link>
                    </li>
                    <li>
                      <Link to="#">Compare Products</Link>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h3>Corporate</h3>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <Link to="#">Become a Vendor</Link>
                    </li>
                    <li>
                      <Link to="#">Affiliate Program</Link>
                    </li>
                    <li>
                      <Link to="#">Farm Business</Link>
                    </li>
                    <li>
                      <Link to="#">Farm Careers</Link>
                    </li>
                    <li>
                      <Link to="#">Our Suppliers</Link>
                    </li>
                    <li>
                      <Link to="#">Accessibility</Link>
                    </li>
                    <li>
                      <Link to="#">Promotions</Link>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h3>Popular</h3>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <Link to="#">Milk & Flavoured Milk</Link>
                    </li>
                    <li>
                      <Link to="#">Butter and Margarine</Link>
                    </li>
                    <li>
                      <Link to="#">Eggs Substitutes</Link>
                    </li>
                    <li>
                      <Link to="#">Marmalades</Link>
                    </li>
                    <li>
                      <Link to="#">Sour Cream and Dips</Link>
                    </li>
                    <li>
                      <Link to="#">Tea & Kombucha</Link>
                    </li>
                    <li>
                      <Link to="#">Cheese</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="row lastStrip">
            <div className="col-md-3">
              <p className="data">@ 2022 , DP All Rights Reserved</p>
            </div>
            <div className="col-md-6 d-flex">
              <div className="m-auto d-flex align-items-center">
                <div className="phNo d-flex align-items-center mx-3">
                  <span>
                    <HeadphonesOutlined />
                  </span>
                  <div className="info ml-3">
                    <h3 className="text-g mb-0">1900 - 666</h3>
                    <p className="mb-0">Working 8:00 - 22:00</p>
                  </div>
                </div>
                <div className="phNo d-flex align-items-center mx-3">
                  <span>
                    <HeadphonesOutlined />
                  </span>
                  <div className="info ml-3">
                    <h3 className="text-g mb-0">1900 - 888</h3>
                    <p className="mb-0">24/7 Support Center</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 part3">
              <div className=" align-items-center">
                <h5>Follow Us : -</h5>
                <ul className="list list-inline d-flex">
                  <li className="list-inline-item">
                    <Link to={""}>
                      <FacebookOutlined />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={""}>
                      <Twitter />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={""}>
                      <Instagram />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={""}>
                      <YouTube />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={""}>
                      <Telegram />
                    </Link>
                  </li>
                </ul>
                <p>Up to 15% discount on your first subscribe</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;