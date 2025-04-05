import React, { useState } from "react";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import "./blog.css";
import blog1 from "../../assets/images/blog-1.png";
import blog2 from "../../assets/images/blog-2.png";
import blog3 from "../../assets/images/blog-3.png";
import titleIcon from "../../assets/images/category-1.svg";
import blog4 from "../../assets/images/blog-4.png";
import { Button, Pagination } from "@mui/material";
import blog5 from "../../assets/images/blog-5.png";
import blog6 from "../../assets/images/blog-6.png";
import blog7 from "../../assets/images/blog-7.png";
import blog8 from "../../assets/images/blog-8.png";
import blog9 from "../../assets/images/blog-9.png";
import blog10 from "../../assets/images/blog-10.png";
import blog12 from "../../assets/images/blog-12.png";
import blog13 from "../../assets/images/blog-13.png";
import blog14 from "../../assets/images/blog-14.png";
import blog15 from "../../assets/images/blog-15.png";
import underline from "../../assets/images/Underline.png";
import member from "../../assets/images/about-7.png";
import member2 from "../../assets/images/about-8.png";
import { FacebookOutlined } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { YouTube } from "@mui/icons-material";
function Blog() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortDropdown, setSortDropdown] = useState(false);

  return (
    <>
      <section className="BlogWrapper">
        <div className="blogTitle">
          <div className="titleDetail">
            <img src={titleIcon} alt="" />
            <h2>
              Recips Articles <br />
              <img src={underline} alt="" />
            </h2>

            <div className=" drpdwn d-flex align-items-center">
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
        </div>

        <div className="recipis">
          <div className="CardRacipe">
            <img src={blog1} alt="" />
            <div className="CardDetail">
              <h5>Side Dish</h5>
              <h2>
                The Intermediate Guide to <br /> Healthy Food
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
          <div className="CardRacipe">
            <img src={blog2} alt="" />
            <div className="CardDetail">
              <h5>Soups and Stews</h5>
              <h2>
                Summer Quinoa Salad Jars <br /> with Lemon Dill
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
          <div className="CardRacipe">
            <img src={blog3} alt="" />
            <div className="CardDetail">
              <h5>Salad</h5>
              <h2>
                Caprese Chicken with <br /> Smashed Potatoes
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
          <div className="CardRacipe">
            <img src={blog4} alt="" />
            <div className="CardDetail">
              <h5>Dessert</h5>
              <h2>
                Harissa Chickpeas with <br /> Whipped Feta
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
        </div>
        <div className="recipis">
          <div className="CardRacipe">
            <img src={blog5} alt="" />
            <div className="CardDetail">
              <h5>Breakfast</h5>
              <h2>
                Almond Butter Chocolate <br /> Chip Zucchini Bars
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
          <div className="CardRacipe">
            <img src={blog6} alt="" />
            <div className="CardDetail">
              <h5>Vegan</h5>
              <h2>
                Smoky Beans & Greens
                <br /> Tacos with Aji Verde
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
          <div className="CardRacipe">
            <img src={blog7} alt="" />
            <div className="CardDetail">
              <h5>Side Dish</h5>
              <h2>
                The Intermediate Guide to <br /> Healthy Food
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
          <div className="CardRacipe">
            <img src={blog8} alt="" />
            <div className="CardDetail">
              <h5>Gluten Free</h5>
              <h2>
                Sticky Ginger Rice Bowls
                <br /> with Pickled Veg
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
        </div>
        <div className="recipis">
          <div className="CardRacipe">
            <img src={blog9} alt="" />
            <div className="CardDetail">
              <h5>Side Dish</h5>
              <h2>
                Creamy Garlic Sun-Dried <br /> Tomato Pasta
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
          <div className="CardRacipe">
            <img src={blog10} alt="" />
            <div className="CardDetail">
              <h5>Dairy Free</h5>
              <h2>
                The Absolute Easiest <br /> Spinach and Pizza
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
          <div className="CardRacipe">
            <img src={blog12} alt="" />
            <div className="CardDetail">
              <h5>Salad</h5>
              <h2>
                Sticky Ginger Rice Bowls <br /> with Pickled
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
          <div className="CardRacipe">
            <img src={blog13} alt="" />
            <div className="CardDetail">
              <h5>Soups</h5>
              <h2>
                The Best Soft Chocolate <br /> Chip Cookies
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
        </div>
        <div className="recipis">
          <div className="CardRacipe">
            <img src={blog14} alt="" />
            <div className="CardDetail">
              <h5>Vegetarian</h5>
              <h2>
                Baked Mozzarella Chicken <br /> Rolls
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
          <div className="CardRacipe">
            <img src={blog15} alt="" />
            <div className="CardDetail">
              <h5>Dessert</h5>
              <h2>
                The Best Avocado Egg <br />
                Salad
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
          <div className="CardRacipe">
            <img src={blog10} alt="" />
            <div className="CardDetail">
              <h5>Vegetarian</h5>
              <h2>
                The litigants on the screen <br /> are not actors
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
          <div className="CardRacipe">
            <img src={blog1} alt="" />
            <div className="CardDetail">
              <h5>Vegetarian</h5>
              <h2>
                The litigants on the screen <br /> are not actors{" "}
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
        </div>

        <div className="recipis">
          <div className="CardRacipe">
            <img src={blog9} alt="" />
            <div className="CardDetail">
              <h5>Side Dish</h5>
              <h2>
                The Intermediate Guide to <br /> Healthy Food
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
          <div className="CardRacipe">
            <img src={blog3} alt="" />
            <div className="CardDetail">
              <h5>Soups and Stews</h5>
              <h2>
                Summer Quinoa Salad Jars <br /> with Lemon Dill
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
          <div className="CardRacipe">
            <img src={blog13} alt="" />
            <div className="CardDetail">
              <h5>Salad</h5>
              <h2>
                Caprese Chicken with <br /> Smashed Potatoes
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
          <div className="CardRacipe">
            <img src={blog6} alt="" />
            <div className="CardDetail">
              <h5>Dessert</h5>
              <h2>
                Harissa Chickpeas with <br /> Whipped Feta
              </h2>
              <p>
                25 April 2024
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 126k
                Views
                <FiberManualRecordOutlinedIcon className="cardIcon" /> 4 mins
                read
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="paginationInfo">
        <div className="NextPage">
          <Pagination count={10} variant="outlined" color="info" />
        </div>
      </section>

      <section className="TeamWrapper">
        <div className="privde">
          <h3>Our Team</h3>
          <img src={underline} alt="" />
        </div>
        <div className="row OurTeam">
          <div className="col-lg-3 ExpertTeam">
            <h4>Our Team</h4>
            <h2>
              Meet Our Expert <br /> Team
            </h2>
            <p>
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus.
            </p>
            <br />
            <p>
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus.
            </p>
            <Button>View All Members</Button>
          </div>
          <div className="TeamMember col-lg-3">
            <img src={member} alt="" />
            <div className="memberInfo">
              <h3>H. Merinda</h3>
              <p>CEO & Co-Founder</p>
              <div className="MemberSocialInfo">
                <FacebookOutlined className="icon" />
                <Twitter className="icon" />
                <Instagram className="icon" />
                <YouTube className="icon" />
              </div>
            </div>
          </div>
          <div className="TeamMember col-lg-3">
            <img src={member2} alt="" />
            <div className="memberInfo">
              <h3>Dilan Specter</h3>
              <p>Head Engineer</p>
              <div className="MemberSocialInfo">
                <FacebookOutlined className="icon" />
                <Twitter className="icon" />
                <Instagram className="icon" />
                <YouTube className="icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
