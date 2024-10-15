// DYNAMIC DATA

import { useState } from "react";
import { app } from "./firebase";
import "./style.css"
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firestore = getFirestore(app);

export default function Firestore() {
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [population, setPopulation] = useState("");
  const [cityId, setCityId] = useState("");

  const AddData = async () => {
    try {
      const docRef = await addDoc(collection(firestore, "cities"), {
        city,
        pincode: Number(pincode),
      });
      console.log("Document written with ID: ", docRef.id);
      setCityId(docRef.id); 
      setCity("");
      setPincode("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const AddSubData = async () => {
    if (!cityId) {
      alert("Please add a city first!");
      return;
    }

    try {
      await addDoc(collection(firestore, `cities/${cityId}/population`), {
        population: Number(population),
      });
      console.log("Subdata added successfully!");
      setPopulation("");
    } catch (error) {
      console.error("Error adding subdata: ", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fire Store</h2>
      <h3>Add City</h3>
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Enter Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />
      <br />
      <button onClick={AddData}>Add City</button>
<br /><br />
      <h3 className="mt-4">Add Population</h3>
      <input
        type="number"
        placeholder="Enter Population"
        value={population}
        onChange={(e) => setPopulation(e.target.value)}
      />
      <br />
      <button onClick={AddSubData}>Add Population</button>
    </div>
  );
}

// STATIC DATA


// import { app } from "./firebase"
// import { addDoc, collection, getFirestore } from "firebase/firestore"

// const firestore = getFirestore(app)
// export default function Firestore() {

//     const AddData = async() => {
//         await addDoc (collection(firestore, "cities") , {
//             city : "New York",
//            pincode : 2344
//         })
//     }

//     const AddSubData = async() => {
//         await addDoc(collection(firestore, "cities/uzHi4D1yYCBoXSOrHPMp/population"), {
//           population : 809999
//         });
//     }

//     return (
//     <div>
//         <button onClick={AddData}>add data</button>
//         <button onClick={AddSubData}>Add subdata</button>
//     </div>
//   )
// }