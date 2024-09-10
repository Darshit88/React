import { useState } from "react";

export default function ObjState() {
  const [obj, setObj] = useState({
    name: "",
    password: "",
    show: "",
    gender: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    console.log(obj.name);
    console.log(obj.password);
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setObj({ ...obj, name: e.target.value })}
        />{" "}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setObj({ ...obj, password: e.target.value })}
        />
        <br />
        <br />
        <button onClick={(i) => setObj({ ...obj, show: i })}>click here</button>
      </form>

      {obj.show !== null ? (
        <>
          <h2>Name : {obj.name}</h2>
          <h2>Password : {obj.password}</h2>
        </>
      ) : (
        ""
      )}
    </>
  );
}
