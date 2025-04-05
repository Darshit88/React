import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./NestContect.css";
function NestContect() {
  return (
    <>
      <section className="contectWrapper">
        <div className="contectDetail col-lg-4">
          <h3>How can help you ?</h3>
          <div className="contectinfo">
            <h2>
              Let us know how <br /> we can help you
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />{" "}
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />{" "}
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div className="visit col-lg-4">
          <div className="visitInfo">
            <h3>01. Visit Facebook</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <h3 className="Billinginfo">03. Billing Inquiries</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div className="visit col-lg-4">
          <div className="visitInfo">
            <h3>02. Employer Services</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <h3 className="Billinginfo">04.General Inquiries</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </section>

      <section className="Map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842920963!2d72.41492881144384!3d23.020474101422124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1743590432329!5m2!1sen!2sin"
          className="GoogleMap"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        > </iframe>
      </section>

      <section className="location">
        <div className="office">
          <h3>Office</h3>
          <p>
            205 North Michigan Avenue, Suite <br /> 810 Chicago, 60601, USA
          </p>
          <p>
            <span>Phone </span> : (123) 456-7890
          </p>
          <p>
            <span>Email</span> : contact@Evara.com
          </p>
          <button>
            <LocationOnOutlinedIcon /> View Map
          </button>
        </div>
        <div className="office">
          <h3>Studio</h3>
          <p>
            205 North Michigan Avenue, Suite <br /> 810 Chicago, 60601, USA
          </p>
          <p>
            <span>Phone </span> : (123) 456-7890
          </p>
          <p>
            <span>Email</span> : contact@Evara.com
          </p>
          <button>
            <LocationOnOutlinedIcon /> View Map
          </button>
        </div>
        <div className="office">
          <h3>Shop</h3>
          <p>
            205 North Michigan Avenue, Suite <br /> 810 Chicago, 60601, USA
          </p>
          <p>
            <span>Phone </span> : (123) 456-7890
          </p>
          <p>
            <span>Email</span> : contact@Evara.com
          </p>
          <button>
            <LocationOnOutlinedIcon /> View Map
          </button>
        </div>
      </section>
    </>
  );
}

export default NestContect;
