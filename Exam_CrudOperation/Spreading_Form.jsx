import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Sprading_Form() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    position: "",
    salary: "",
    phone: "",
  });

  const [item, setItem] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  });

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    if (
      !input.name ||
      !input.email ||
      !input.phone ||
      !input.position ||
      !input.salary
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newItem = [...item, input];
    setItem(newItem);
    localStorage.setItem("data", JSON.stringify(newItem)); 
    setInput({
      name: "",
      email: "",
      position: "",
      salary: "",
      phone: "",
    });
    navigate("/employees");
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(item));
  }, [item]);

  return (
    <div className="ForForms">
      <h2 className="ForHeading">Fill The Employee Form</h2>
      <form onSubmit={handleForm}>
        <div className="ForDisFlex">
          <h4 className="ForNames">Enter Your Full Name:</h4>
          <input
            type="text"
            value={input.name}
            placeholder="Enter Your Name"
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
        </div>
        <div className="ForDisFlex">
          <h4 className="ForNames">Enter Your Email Address:</h4>
          <input
            type="email"
            value={input.email}
            placeholder="Enter Your Email"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
        </div>
        <div className="ForDisFlex">
          <h4 className="ForNames">Enter Your Position:</h4>
          <input
            type="text"
            value={input.position}
            placeholder="Enter Your Position"
            onChange={(e) => setInput({ ...input, position: e.target.value })}
          />
        </div>
        <div className="ForDisFlex">
          <h4 className="ForNames">Enter Your Salary:</h4>
          <input
            type="number"
            value={input.salary}
            placeholder="Enter Your Salary"
            onChange={(e) => setInput({ ...input, salary: e.target.value })}
          />
        </div>
        <div className="ForDisFlex">
          <h4 className="ForNames">Enter Your Phone Number:</h4>
          <input
            type="number"
            value={input.phone}
            placeholder="Enter Your Phone Number"
            onChange={(e) => setInput({ ...input, phone: e.target.value })}
          />
        </div>
        <button type="submit" className="ForBTN">
          Submit
        </button>
      </form>
    </div>
  );
}
