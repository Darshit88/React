import React from "react";
import "./banner.css";
import banner1 from "../../assets/images/sec1.png";
import banner2 from "../../assets/images/sec2.png";
import banner3 from "../../assets/images/sec3.png";
function Banner() {
  return (
    <div className="bannerSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="box">
              <img src={banner1} alt="" className="w-100 transition" />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <img src={banner2} alt="" className="w-100 transition" />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <img src={banner3} alt="" className="w-100 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
