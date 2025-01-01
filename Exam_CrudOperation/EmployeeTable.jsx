import  { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const EmployeeTable = () => {
  const [item, setItem] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [editIndex, setEditIndex] = useState(null);
  const [editInput, setEditInput] = useState({});

  const deleteData = (index) => {
    const updatedData = item.filter((_, i) => i !== index);
    setItem(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
  };

  const initiateEdit = (index) => {
    setEditIndex(index);
    setEditInput(item[index]);
  };

  const updateData = () => {
    const updatedData = [...item];
    updatedData[editIndex] = editInput;
    setItem(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
    setEditIndex(null);
    setEditInput({});
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Link to="/" className="ForBTN2">
        Add New Employee
      </Link>
      {item.length > 0 ? (
        <table border={2} className="ForTableEmpl">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Contact Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {item.map((ele, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="name"
                      value={editInput.name || ""}
                      onChange={handleEditInputChange}
                    />
                  ) : (
                    ele.name
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="email"
                      name="email"
                      value={editInput.email || ""}
                      onChange={handleEditInputChange}
                    />
                  ) : (
                    ele.email
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="position"
                      value={editInput.position || ""}
                      onChange={handleEditInputChange}
                    />
                  ) : (
                    ele.position
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="number"
                      name="salary"
                      value={editInput.salary || ""}
                      onChange={handleEditInputChange}
                    />
                  ) : (
                    ele.salary
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="phone"
                      value={editInput.phone || ""}
                      onChange={handleEditInputChange}
                    />
                  ) : (
                    ele.phone
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <button onClick={updateData}>Update</button>
                  ) : (
                    <>
                      <button
                        className="SameBtn"
                        onClick={() => initiateEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="SameBtn"
                        onClick={() => deleteData(index)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="not_found">No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeTable;
