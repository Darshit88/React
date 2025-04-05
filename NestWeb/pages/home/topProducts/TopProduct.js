import React from "react";
import "./TopProduct.css";
import shop1 from "../../../assets/images/shop1.jpg";
import shop2 from "../../../assets/images/shop2.jpg";
import shop3 from "../../../assets/images/shop3.jpg";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function TopProduct(props) {
  return (
    <div>
      <div className="topSelling_box">
        <h3>{props.title}</h3>

        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
              <img src={shop1} alt="Shop1" className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link to="">
              <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
            </Link>
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
            />
            <div className="d-flex align-items-center">
              <span className="price text-g font-weight-bold">$28.85</span>
              <span className="oldPrice">$32.8</span>
            </div>
          </div>
        </div>

        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
              <img src={shop2} alt="Shop2" className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link to="">
              <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
            </Link>
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
            />
            <div className="d-flex align-items-center">
              <span className="price text-g font-weight-bold">$28.85</span>
              <span className="oldPrice">$32.8</span>
            </div>
          </div>
        </div>

        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
              <img src={shop3} alt="Shop3" className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link to="">
              <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
            </Link>
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
            />
            <div className="d-flex align-items-center">
              <span className="price text-g font-weight-bold">$28.85</span>
              <span className="oldPrice">$32.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProduct;
