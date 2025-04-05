import React, { useState } from "react";
import "./shop.css";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Product from "../../components/product/product";
import { Button } from "react-bootstrap";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
function Shop() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortDropdown, setSortDropdown] = useState(false);

  return (
    <div>
      <section className="shopPgae">
        <div className="container-fluid">
          <div className="breadcrumb flex-column">
            <h1>Snack</h1>
            <ul className="list list-inline d-flex mb-0">
              <li className="list-inline-item">
                <Link to={""}>
                  <HomeOutlinedIcon className="icon" />
                  Home
                </Link>
              </li>{" "}
              <p>
                <KeyboardArrowRightOutlinedIcon className="icon1" />
              </p>
              <li className="list-inline-item">
                <LocalGroceryStoreOutlinedIcon className="icon2" />
                <Link to={""}>Shop</Link>
              </li> 
            </ul>
          </div>

          <div className="shopData">
            <div className="row">
              <div className="col-md-3 sidebarWrapper">
                <Sidebar />
              </div>
              <div className="col-md-9 rightContent homeProducts w-100 pt-0 ">
                <div className="topStrip d-flex align-items-center">
                  <p className="mb-0">
                    We found <span className="text-success">29</span> items for
                    you!
                  </p>
                  <div className="ml-auto d-flex align-items-center">
                    <div className="tab_ position-relative">
                      <Button
                        className="btn_"
                        onClick={() => setShowDropdown(!showDropdown)}
                      >
                        Show : 50
                      </Button>
                      {showDropdown && (
                        <ul className="dropdownMenu">
                          <li>
                            <Button className="drop">100</Button>
                          </li>
                          <li>
                            <Button className="drop">150</Button>
                          </li>
                          <li>
                            <Button className="drop">200</Button>
                          </li>
                          <li>
                            <Button className="drop">250</Button>
                          </li>

                          <li>
                            <Button className="drop">All</Button>
                          </li>
                        </ul>
                      )}
                    </div>
                    <div className="tab_ m-3 position-relative">
                      <Button
                        className="btn_"
                        onClick={() => setSortDropdown(!sortDropdown)}
                      >
                        Sort By : Featured
                      </Button>
                      {sortDropdown && (
                        <ul className="dropdownMenu">
                          <li>
                            <Button className="drop">Featured</Button>
                          </li>
                          <li>
                            <Button className="drop">Price: Low to High</Button>
                          </li>
                          <li>
                            <Button className="drop">Price: High to Low</Button>
                          </li>
                          <li>
                            <Button className="drop">Release Date</Button>
                          </li>
                          <li>
                            <Button className="drop">Avg. Ratting</Button>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                <div className="productRow pl-4 pr-3">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
