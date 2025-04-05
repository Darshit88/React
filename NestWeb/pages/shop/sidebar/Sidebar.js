import React from "react";
import category1 from "../../../assets/images/category-1.svg";
import category2 from "../../../assets/images/category-2.svg";
import category3 from "../../../assets/images/category-3.svg";
import category4 from "../../../assets/images/category-4.svg";
import category5 from "../../../assets/images/category-5.svg";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "react-bootstrap";
import banner from "../../../assets/images/banner-111.png"
function valuetext(value) {
  return `${value}°C`;
}
function Sidebar() {
  const [value, setValue] = React.useState([0, 1]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const label = {
    inputProps: { "aria-label": "Checkbox demo" },
  };

  return (
    <div className="sidebar">
      <div className="card border-0 shadow">
        <h3>Category</h3>
        <div className="cardlist">
          <div className="cardItem d-flex align-items-center">
            <span className="img">
              <img src={category1} alt="" width={30} />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
            <span className="d-flex align-items-center justify-content-center rounded-circle num ml-auto">
              30
            </span>
          </div>
          <div className="cardItem d-flex align-items-center">
            <span className="img">
              <img src={category2} alt="" width={30} />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
            <span className="d-flex align-items-center justify-content-center rounded-circle num ml-auto">
              30
            </span>
          </div>
          <div className="cardItem d-flex align-items-center">
            <span className="img">
              <img src={category3} alt="" width={30} />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
            <span className="d-flex align-items-center justify-content-center rounded-circle num ml-auto">
              30
            </span>
          </div>
          <div className="cardItem d-flex align-items-center">
            <span className="img">
              <img src={category4} alt="" width={30} />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
            <span className="d-flex align-items-center justify-content-center rounded-circle num ml-auto">
              30
            </span>
          </div>
          <div className="cardItem d-flex align-items-center">
            <span className="img">
              <img src={category5} alt="" width={30} />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
            <span className="d-flex align-items-center justify-content-center rounded-circle num ml-auto">
              30
            </span>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow">
        <h3> Fill By Price </h3>
        <Slider
          min={0}
          step={1}
          max={1000}
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          color="success"
          getAriaValueText={valuetext}
        />

        <div className="d-flex pt-2 pb-2 priceRange">
          <span>
            From: <strong className="text-success">${value[0]}</strong>
          </span>
          <span className="price">
            From: <strong className="text-success">${value[1]}</strong>
          </span>
        </div>
        <div className="filters">
          <h5>Color :-</h5>
          <ul>
            <li>
              <Checkbox {...label} color="success" /> Red (56)
            </li>
            <li>
              <Checkbox {...label} color="success" /> Yellow (56)
            </li>
            <li>
              <Checkbox {...label} color="success" /> Green (36)
            </li>
            <li>
              <Checkbox {...label} color="success" /> Blue (24)
            </li>
            <li>
              <Checkbox {...label} color="success" /> Violate (26)
            </li>
            <li>
              <Checkbox {...label} color="success" /> Maroon (46)
            </li>
            <li>
              <Checkbox {...label} color="success" /> Black (78)
            </li>
            <li>
              <Checkbox {...label} color="success" /> White (30)
            </li>
            <li>
              <Checkbox {...label} color="success" /> Olive (26)
            </li>
            <li>
              <Checkbox {...label} color="success" /> Purple (536)
            </li>
            <li>
              <Checkbox {...label} color="success" /> Pink (5)
            </li>
            <li>
              <Checkbox {...label} color="success" /> Orange (36)
            </li>
          </ul>
        </div>
        <div className="filters">
          <h5>Item Condition :-</h5>
          <ul>
            <li>
              <Checkbox {...label} color="success" /> New (1506)
            </li>
            <li>
              <Checkbox {...label} color="success" /> Refurbished (27)
            </li>
            <li>
              <Checkbox {...label} color="success" /> Used (45)
            </li>
            <li>
              <Checkbox {...label} color="success" /> West (20)
            </li>
            <li>
              <Checkbox {...label} color="success" /> Medium (27)
            </li>
          </ul>
        </div>

        <div className="d-flex">
          <Button className="btn w-75 bg-success">Filter</Button>
        </div>
      </div>
      <div>
        <img src={banner} className="w-100 " alt="" />
      </div>
    </div>
  );
}

export default Sidebar;
