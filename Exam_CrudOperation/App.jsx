import { Routes, Route } from "react-router-dom";
import SpradingForm from "./Exam_CrudOperation/Spreading_Form";
import EmployeeTable from "./Exam_CrudOperation/EmployeeTable";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <div className="logo">
          <h1>Employee Management App</h1>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<SpradingForm />} />
        <Route path="/employees" element={<EmployeeTable />} />
      </Routes>
    </>
  );
};

export default App;
