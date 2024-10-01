import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

export default function EventHandler() {
  const [inputValue, setInputValue] = useState("");
  const [outputs, setOutputs] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setOutputs((prevOutputs) => [
      ...prevOutputs,
      `onChange: You typed "${e.target.value}"`,
    ]);
  };

  const handleClick = () => {
    setOutputs((prevOutputs) => [...prevOutputs, "onClick: Button clicked!"]);
  };

  const handleDoubleClick = () => {
    setOutputs((prevOutputs) => [
      ...prevOutputs,
      "onDoubleClick: Button double-clicked!",
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutputs((prevOutputs) => [
      ...prevOutputs,
      `onSubmit: Form submitted with value "${inputValue}"`,
    ]);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setOutputs((prevOutputs) => [
      ...prevOutputs,
      "onContextMenu: ContaxtManu open ",
    ]);
  };

  return (
    <div className="container mt-5 col-md-6" onContextMenu={handleContextMenu}>
      <h3>Event Handler Example</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={inputValue}
            onChange={handleChange}
            placeholder="Type something..."
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
        >
          Submit
        </button>
      </form>

      <div className="mt-4">
        <h5>Output:</h5>
        <ul>
          {outputs.map((output, index) => (
            <li key={index}>{output}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
