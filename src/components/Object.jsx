import { useState } from "react";
export default function Object() {
  const [obj, setObj] = useState({
    name: "dp",
    password: "12345",
  });
  return (
    <>
      <h2>Name : {obj.name}</h2>
      <h2>Password : {obj.password}</h2> <br />
      <br />
      <button onClick={() => setObj({ ...obj, name: "darshit" })}>
        change Name
      </button>
      <button onClick={() => setObj({ ...obj, password: "2904" })}>
        Change Password
      </button>
    </>
  );
}
