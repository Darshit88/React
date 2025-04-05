import React from "react";
import "./product.css";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@mui/icons-material";
import product1 from "../../assets/images/shop/product-1-1.jpg";
// import product2 from "../../assets/images/shop/product-2-1.jpg"
function Product() {
  return (
    <div className="productThumb">
      <div className="imgWrapper">
        <img src={product1} alt="" className="w-100" />
      </div>
      <div className="info">
        <span className="d-block catName">Snack</span>
        <h4 className="title">
          Seeds of Change Organic Quinoa, Brown & Red Rice
        </h4>
        <Rating name="read-only" value={4} readOnly />
        <span className="brand d-block text-g fw-bold">
          By <Link className="text-g a ">NestFood</Link>
        </span>

        <div className="d-flex mt-3 align-items-center">
          <div className="d-flex align-items-center">
            <span className="price text-g">$28.85</span>{" "}
            <span className="oldPrice">$32.8</span>
          </div>
          <Button className="cart transition">
            {" "}
            <ShoppingCartOutlined />
            Add
          </Button>
        </div>
      </div>
    </div>
    
  );
}

export default Product;
