import "./style.css";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { getDatabase, ref, remove, set, update } from "firebase/database";
import { app } from "./Firebase/firebase";
import Firestore from "./Firebase/Firestore";

const App = () => {
  const db = getDatabase(app);
  const AddData = () => {
    set(ref(db, "user/student"), {
      name: "John Doe",
      age: 25,
      std: 10,
    })
      .then(() => {
        alert("Data added successfully!");
      })
      .catch((error) => {
        console.error("Error adding data:", error);
      });
  };

  const deleteData = () => {
    remove(ref(db, "User/Students"))
      .then(() => console.log("Deleted"))
      .catch((err) => console.log("Error :" + err));
  };

  const updateData = () => {
    update(ref(db, "User/Students"), {
      name: "Student2",
      age: 25,
      std: 10,
    })
      .then(() => console.log("Updated"))
      .catch((err) => console.log("Error:" + err));
  };

  return (
    <div className="container mt-5">
      <h2>RealTime Database</h2>
      <button onClick={AddData}>
        Add Data
      </button>
      <button onClick={deleteData}>Delete Data</button>
      <br /> <br />
      <button onClick={updateData}>Update Data</button>
      <br />
      <br />
      <br />
      
      <Firestore />
    </div>
  );
};

export default App;
