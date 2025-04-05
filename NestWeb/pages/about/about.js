import React from "react";
import aboutImg from "../../assets/images/main.png";
import "./about.css";
import Carousel from "react-bootstrap/Carousel";
import about1 from "../../assets/images/about-1.png";
import about2 from "../../assets/images/about-2.png";
import about3 from "../../assets/images/about-3.png";
import underline from "../../assets/images/Underline.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import icon1 from "../../assets/images/icon-1.svg";
import icon2 from "../../assets/images/icon-2.svg";
import icon3 from "../../assets/images/icon-3.svg";
import icon4 from "../../assets/images/icon-4.svg";
import icon5 from "../../assets/images/icon-5.svg";
import icon6 from "../../assets/images/icon-6.svg";
import about5 from "../../assets/images/about-5.png";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    const counter = (id, start, end, duration) => {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          obj.textContent = current;
          if (current === end) {
            clearInterval(timer);
          }
        }, step);
    };

    counter("count1", 50, 107, 1000);
    counter("count2", 9911, 10000, 1000);
    counter("count3", 0, 21, 1000);
    counter("count4", 10, 56, 1000);
  }, []);

  return (
    <>
      <section className="about">
        <div className="container-fluid d-flex ">
          <div className="aboutSection col-lg-6">
            <img src={aboutImg} alt="" className="MainImg" />
          </div>
          <div className="welcome col-lg-6">
            <h2>Welcome to Nest</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate id est laborum.
            </p>
            <p>
              Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
              et Ut placerat legendos interpre.Donec vitae sapien ut libero
              venenatis faucibus. Nullam quis ante Etiam sit amet orci eget.
              Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt
              dui ut ornare lectus. Auctor elit sed vulputate mi sit amet.
              Commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate id est laborum.
            </p>
            <Carousel>
              <Carousel.Item className="slider">
                <img src={about1} alt="" className="w-75 " />
              </Carousel.Item>
              <Carousel.Item className="slider">
                <img src={about2} alt="" className="w-75 " />
              </Carousel.Item>
              <Carousel.Item className="slider">
                <img src={about3} alt="" className="w-75 " />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="provideSection container-fluid">
        <div className="privde">
          <h3>What We Provide?</h3>
          <img src={underline} alt="" />
        </div>
        <div className="cardData">
          <Card className="cardInfo  d-flex align-items-center">
            <Card.Img variant="top" src={icon1} className="cardimg" />
            <Card.Body className="text-center">
              <Card.Title>Best Prices & Offers</Card.Title>
              <Card.Text>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Card className="cardInfo  d-flex align-items-center">
            <Card.Img variant="top" src={icon2} className="cardimg" />
            <Card.Body className="text-center">
              <Card.Title>Wide Assortment</Card.Title>
              <Card.Text>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Card className="cardInfo d-flex align-items-center">
            <Card.Img variant="top" src={icon3} className="cardimg" />
            <Card.Body className="text-center">
              <Card.Title>Free Delivery</Card.Title>
              <Card.Text>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="cardData">
          <Card className="cardInfo  d-flex align-items-center">
            <Card.Img variant="top" src={icon4} className="cardimg" />
            <Card.Body className="text-center">
              <Card.Title>Easy Returns</Card.Title>
              <Card.Text>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Card className="cardInfo  d-flex align-items-center">
            <Card.Img variant="top" src={icon5} className="cardimg" />
            <Card.Body className="text-center">
              <Card.Title>100% Satisfaction</Card.Title>
              <Card.Text>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Card className="cardInfo d-flex align-items-center">
            <Card.Img variant="top" src={icon6} className="cardimg" />
            <Card.Body className="text-center">
              <Card.Title>Great Daily Deal</Card.Title>
              <Card.Text>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
      </section>

      <section className="container-fluid">
        <div className="d-flex">
          <div className="col-lg-6 performance">
            <img src={about5} alt="" />
          </div>
          <div className="performanceInfo col-lg-6">
            <h5>Our performance</h5>
            <h2>
              Your Partner for e <br />
              -commerce grocery <br />
              solution
            </h2>
            <p>
              Ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium <br />
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              <br />
              inventore veritatis et quasi architecto <br />
              <br />
              Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim
              <br /> ipsam voluptatem quia voluptas sit aspernatur aut odit aut
              fugit, sed quia
            </p>
          </div>
        </div>
        <div className="ourInfo d-flex">
          <div className="history">
            <h3>Who We Are</h3>
            <p>
              Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis
              enim ut tellus eros donec ac odio orci ultrices in. ellus eros
              donec ac odio orci ultrices in.
            </p>
          </div>
          <div className="history">
            <h3>Our History</h3>
            <p>
              Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis
              enim ut tellus eros donec ac odio orci ultrices in. ellus eros
              donec ac odio orci ultrices in.
            </p>
          </div>
          <div className="history">
            <h3>Our Mission</h3>
            <p>
              Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis
              enim ut tellus eros donec ac odio orci ultrices in. ellus eros
              donec ac odio orci ultrices in.
            </p>
          </div>
        </div>
      </section>

      <section className="counter-wrapper">
        <div className="counter-inner">
          <div className="container">
            <div className="row g-0">
              <div className="col-6 col-lg-3">
                <div className="py-5 text-center text-white">
                  <div>
                    <i className="bi bi-building count-icon"></i>
                  </div>
                  <div className="py-2 count">
                    <span id="count1">80</span>+
                  </div>
                  <div>Glorious years</div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="py-5 text-center text-white">
                  <div>
                    <i className="bi bi-people count-icon"></i>
                  </div>
                  <div className="py-2 count">
                    <span id="count2">10000</span>+
                  </div>
                  <div>Happy Clients</div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="py-5 text-center text-white">
                  <div>
                    <i className="bi bi-trophy count-icon"></i>
                  </div>
                  <div className="py-2 count">
                    <span id="count3">21</span>+
                  </div>
                  <div>Projects complete</div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="py-5 text-center text-white">
                  <div>
                    <i className="bi bi-graph-up count-icon"></i>
                  </div>
                  <div className="py-2 count">
                    <span id="count4">5000</span>+
                  </div>
                  <div>Products Sale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
