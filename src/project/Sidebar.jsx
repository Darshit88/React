import { useState, useEffect } from "react";
import "./Sidebar.css";
const Sidebar = () => {
  const [input, setInput] = useState({
    name: "",
    password: "",
    email: "",
    gender: "",
    check: false,
    img: null,
    show: false,
  });

  const [item, setItem] = useState(() => {
    const storeData = localStorage.getItem("data");
    return storeData ? JSON.parse(storeData) : [];
  });

  const handleForm = (e) => {
    e.preventDefault();
    if (input.check) {
      console.log("Checked");
      setInput({ ...input, show: true });
    } else {
      alert("Please check our Terms & Conditions checkbox");
    }

    // e.target.reset();
    setInput({
      name: "",
      email: "",
      password: "",
      gender: "",
      check: false,
      img: null,
      show: false,
    });
    setItem([...item, input]);
  };

  const handleFileChange = (e) => {
    const storedData = e.target.files[0];
    if (storedData) {
      setInput({ ...input, img: storedData });
    }
  };

  const handleCheckboxChange = (e) => {
    setInput({ ...input, check: e.target.checked });
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(item));
  }, [item]);

  const deleteData = (index) => {
    const updateData = item.filter((_, i) => i !== index);
    setItem(updateData);
    localStorage.setItem("data", JSON.stringify(updateData));
  };

  const [edit, setEdit] = useState(null);

  const editData = (index) => {
    setEdit(index);
    setInput(item[index]);
  };

  const handleUpdate = () => {
    const updateData = [...item];
    updateData[edit] = input;
    setItem(updateData);
    setInput({
      name: "",
      email: "",
      password: "",
      gender: "",
      check: false,
      img: null,
      show: false,
    });
    setEdit(null);
  };

  return (
    <div className="navbar">
      <div className="ds">
        <nav className="headerNav">
          <div className="headerMenu">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="menu">
            <ul className="navbar-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="searchbar">
            <input
              type="search"
              className="searchText"
              placeholder="Search Here..."
            />
            <i className="fa-solid fa-magnifying-glass searchGlass"></i>
          </div>
          <div className="userDetail">
            <i className="fa-solid fa-user user"></i>
            <i className="fa-solid fa-gear setting"></i>
          </div>
        </nav>
      </div>

      {/* Sidebar start */}
      <aside className="side">
        <div className="sideBar">
          <div className="sideBar-logo">
            <img src="/src/assets/name-logo.jpg" alt="" className="logoImg" />
          </div>
          <div className="sidebar-main">
            <div className="function">
              <i className="fa-solid fa-gauge icon"></i>
              <h3 className="funTitle">Dashboard</h3>
            </div>
            <div className="function">
              <i className="fa-solid fa-chart-simple"></i>
              <h3 className="funTitle">Blogs</h3>
            </div>
            <div className="function">
              <i className="fa-solid fa-table"></i>
              <h3 className="funTitle">Tables</h3>
            </div>
            <div className="function">
              <i className="fa-brands fa-wpforms"></i>
              <h3 className="funTitle">Forms</h3>
            </div>
            <div className="function">
              <i className="fa-solid fa-wrench"></i>
              <h3 className="funTitle">UI Elements</h3>
            </div>
            <div className="function">
              <i className="fa-solid fa-network-wired"></i>
              <h3 className="funTitle">Network</h3>
            </div>
            <div className="function">
              <i className="fa-solid fa-user "></i>
              <h3 className="funTitle">Account</h3>
            </div>
          </div>
        </div>
      </aside>

      {/* crud-operation start */}
      <section className="crud-operation">
        <div className="crud-opr">
          <form className="Form">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={input.name}
              className="form-detail"
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            />
            <br />
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              value={input.email}
              className="form-detail"
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              value={input.password}
              className="form-detail"
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
            <br />
            <br />
            <label className="form-gender">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={input.gender === "Male"}
                className="gender"
                onChange={(e) => setInput({ ...input, gender: e.target.value })}
              />
              Male
            </label>
            <label className="form-gender">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={input.gender === "Female"}
                onChange={(e) => setInput({ ...input, gender: e.target.value })}
              />
              Female
            </label>
            <label className="form-gender">
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={input.gender === "Other"}
                onChange={(e) => setInput({ ...input, gender: e.target.value })}
              />
              Other
            </label>
            <br />
            <br />
            <input
              type="file"
              accept="image/*"
              className="form-file"
              onChange={handleFileChange}
            />
            <br />
            <br />
            <input
              type="checkbox"
              id="check"
              value={input.check}
              checked={input.check}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="check" className="form-check">
              Terms & Conditions Apply
            </label>
            <br />
            <br />

            {edit === null ? (
              <button onClick={handleForm} className="submit-btn">
                Submit
              </button>
            ) : (
              <button onClick={handleUpdate} className="submit-btn">
                Update
              </button>
            )}
          </form>

          {item.length > 0 && (
            <table border={1} className="table-data">
              <thead>
                <tr className="table-head">
                  <th className="table-detail">Sr. No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {item.map((ele, index) => (
                  <tr key={index}>
                    <td className="table-detail">{index + 1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.password}</td>
                    <td>{ele.gender}</td>
                    <td>
                      <button
                        className="submit-btn"
                        onClick={() => editData(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="submit-btn"
                        onClick={() => deleteData(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
