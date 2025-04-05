import React, { useState, useEffect } from "react";
import "./nav.css";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import { Link } from "react-router-dom";
import HeadphonesIcon from "@mui/icons-material/Headphones";

function Nav() {
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [vendorsDropdownOpen, setVendorsDropdownOpen] = useState(false);

  const togglePagesDropdown = () => {
    setPagesDropdownOpen(!pagesDropdownOpen);
    setVendorsDropdownOpen(false); 
  };

  const toggleVendorsDropdown = () => {
    setVendorsDropdownOpen(!vendorsDropdownOpen);
    setPagesDropdownOpen(false); 
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setPagesDropdownOpen(false);
        setVendorsDropdownOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="nav align-items-center d-flex">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 part1 d-flex align-item-center">
            <Button className="bg-success text-white catTab">
              <GridViewIcon /> &nbsp; Browse All Categories{" "}
              <KeyboardArrowDownIcon />
            </Button>
          </div>
          <div className="col-sm-7 part2">
            <nav>
              <ul className="list list-inline mb-0">
                <li className="list-inline-item">
                  <Button>
                    <Link to="/">Home</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/about">About</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/shop">Shop</Link>
                  </Button>
                </li>

                <li className="list-inline-item dropdown-container">
                  <Button onClick={toggleVendorsDropdown}>
                    Vendors <KeyboardArrowDownIcon />
                  </Button>

                  <div
                    className={`dropdown_menu ${
                      vendorsDropdownOpen ? "show" : ""
                    }`}
                  >
                    <ul>
                      <li>
                        <Button>
                          <Link to="/about">About Us</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/contact">Contact</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/account">My Account</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/login">Login</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/register">Register</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/forgot-password">Forgot Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/reset-password">Reset Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/purchase-guide">Purchase Guide</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/privacy-policy">Privacy Policy</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/terms-of-service">Terms Of Service</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/404">404 Pages</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </li>

               
                <li className="list-inline-item">
                  <Button>
                    <Link to="/blog">Blog</Link>
                  </Button>
                </li>

                <li className="list-inline-item dropdown-container">
                  <Button onClick={togglePagesDropdown}>
                    Pages <KeyboardArrowDownIcon />
                  </Button>

                  <div
                    className={`dropdown_menu ${
                      pagesDropdownOpen ? "show" : ""
                    }`}
                  >
                    <ul>
                      <li>
                        <Button>
                          <Link to="/about">About Us</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/contact">Contact</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/account">My Account</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/login">Login</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/register">Register</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/forgot-password">Forgot Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/reset-password">Reset Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/purchase-guide">Purchase Guide</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/privacy-policy">Privacy Policy</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/terms-of-service">Terms Of Service</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/404">404 Pages</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="list-inline-item">
                  <Button>
                    <Link to="/contect">Contact</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-2 part3 d-flex align-items-center">
            <div className="phNo d-flex align-items-center">
              <span>
                <HeadphonesIcon />
              </span>
              <div className="info ml-3">
                <h3 className="text-g mb-0">1900 - 888</h3>
                <p className="mb-0">24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
