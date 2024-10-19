import "./style.css";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import AuthEmailPass from "./Firebase/AuthEmailPass";

const App = () => {
  
  return (
    <div className="container mt-5">
      <AuthEmailPass/>
     
    </div>
  );
};

export default App;

