import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Dropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import iconCompare from "../../assets/images/icon-compare1.svg";
import iconHeart from "../../assets/images/icon-heart.svg";
import iconCart from "../../assets/images/icon-cart.svg";
import iconUser from "../../assets/images/icon-user.svg";
import Button from "@mui/material/Button";
import Nav from "./nav/nav"

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countrySearchTerm, setCountrySearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Select Country");
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const headerRef = useRef()
 
  const categories = [
    "Milks and Dairies",
    "Wines & Drinks",
    "Clothing & Beauty",
    "Fresh Seafood",
    "Pet Foods & Toys",
    "Fast Food",
    "Baking Material",
    "Vegetables",
    "Fresh Fruits",
    "Bread and Juice",
  ];

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    try {
      const response = await axios.get(
        "https://countriesnow.space/api/v0.1/countries/"
      );
      if (response.data && response.data.data) {
        setCountries(response.data.data.map((item) => item.country));
      }
    } catch (error) {
      console.error("Error fetching countries:", error.message);
    }
  };

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(countrySearchTerm.toLowerCase())
  );

useEffect(() => {
  const handleScroll = () => {
    if (headerRef.current) {
      if (window.scrollY > 100) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
    }
  }
  

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <div className="headerWrapper" ref={headerRef}>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={logo} alt="Logo" />
            </div>

            {/* Categories Dropdown */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <Dropdown className="customDropdown">
                  <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                    All Categories
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="custom-dropdown-menu">
                    <div className="custom-dropdown-search">
                      <Form.Control
                        type="text"
                        placeholder="Search categories..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="custom-dropdown-items">
                      {filteredCategories.length > 0 ? (
                        filteredCategories.map((category, index) => (
                          <Dropdown.Item key={index}>{category}</Dropdown.Item>
                        ))
                      ) : (
                        <Dropdown.Item disabled>No results found</Dropdown.Item>
                      )}
                    </div>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Search Bar */}
                <div className="search">
                  <input type="text" placeholder="Search for items...." />
                  <SearchIcon className="searchIcon cursor" />
                </div>
              </div>
            </div>

            {/* Country Dropdown */}
            <div className="col-sm-2">
              <div className="ml-auto d-flex align-items-center">
                <Dropdown className="customDropdown">
                  <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                    {selectedCountry}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="custom-dropdown-menu">
                    <div className="custom-dropdown-search">
                      <Form.Control
                        type="text"
                        placeholder="Search country..."
                        value={countrySearchTerm}
                        onChange={(e) => setCountrySearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="custom-dropdown-items">
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((country, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={() => setSelectedCountry(country)}
                          >
                            {country}
                          </Dropdown.Item>
                        ))
                      ) : (
                        <Dropdown.Item disabled>No results found</Dropdown.Item>
                      )}
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            {/* Icons & Account Dropdown */}
            <div className="col-sm-3">
              <ul className="list-inline mb-0 headerTabs d-flex">
                <li>
                  <span className="d-flex">
                    <img src={iconCart} alt="Cart" />
                    <span className="badge bg-success rounded-circle">3</span>
                    Cart
                  </span>
                </li>
                <li>
                  <span className="d-flex">
                    <img src={iconHeart} alt="Wishlist" />
                    WishList
                  </span>
                </li>
                <li>
                  <span className="d-flex">
                    <img src={iconCompare} alt="Compare" />
                    Compare
                  </span>
                </li>
                <li
                  className="account-item"
                  onClick={() =>
                    setIsAccountDropdownOpen(!isAccountDropdownOpen)
                  }
                >
                  <span className="account-icon">
                    <img src={iconUser} alt="User Icon" />
                    Account
                  </span>

                  {isAccountDropdownOpen && (
                    <ul className="account-dropdown">
                      <li>
                        <Button className="dropdown-button">My Account</Button>
                      </li>
                      <li>
                        <Button className="dropdown-button">
                          Order Tracking
                        </Button>
                      </li>
                      <li>
                        <Button className="dropdown-button">My Wishlist</Button>
                      </li>
                      <li>
                        <Button className="dropdown-button">Settings</Button>
                      </li>
                      <li>
                        <Button className="dropdown-button">Sign Out</Button>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Nav />
    </div>
  );
}

export default Header;
