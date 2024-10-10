

// REDUX


import { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { EditData, AddData, DeleteData } from "./Redux/action";

const App = () => {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const [editIndex, setEditIndex] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.item);

  const handleForm = (e) => {
    e.preventDefault();


    if (editIndex !== null) {
      dispatch(EditData({ item: input, index: editIndex })); 
      setEditIndex(null); 
    } else {
      dispatch(AddData(input));


    setInput({
      name: "",
      password: "",
    });
  }
}

  const handleDelete = (index) => {
    dispatch(DeleteData(index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const dataToEdit = data[index];
    setInput(dataToEdit);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleForm} className="form-group">
        <h4>Name :</h4>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
          className="form-control"
        /> 
        <h4 className="mt-3">Password :</h4>
        <input
          type="password"
          placeholder="Enter Your Password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          className="form-control"
        />  <br /><br />
        <button type="submit" className="btn btn-primary mt-3">
          {editIndex === null ? "Submit" : "Update"}
        </button>
      </form>

      <table className="table mt-5">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((ele, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.password}</td>
                <td>
                  <button
                    onClick={() => handleEdit(index)}
                    className="btn btn-warning me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Data Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
