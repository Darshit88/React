import { useState } from "react";
import { useEffect } from "react";
const CrudOpr = () => {
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
    <section className="crud-operation">
      <div className="crud-opr">
        <form onSubmit={handleForm} className="Form">
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
          {/* {edit === null ? (
                <button onClick={handleForm}>Submit</button>
              ) : (
                <button onClick={handleUpdate}>Update</button>
              )} */}
          <br /> <br />
        </form>

        {item.length > 0 && (
          <table border={1} className="crud-data">
            <thead>
              <tr>
                <th>Sr. No</th>
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
                  <td>{index + 1}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.password}</td>
                  <td>{ele.gender}</td>
                  <td>
                    {/* <button onClick={() => editData(index)}>Edit</button> */}
                    <button onClick={() => deleteData(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}

export default CrudOpr;