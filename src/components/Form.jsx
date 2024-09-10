import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(null);
  const [check, setCheck] = useState(false);
  const [gender, setGender] = useState("")

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (check) {
      setShow(name, email, password);
      console.log(name, email, password);
    } else {
      alert("Please check Terms and Condition");
    }
    e.target.reset();
  };

  return (
    <>
      <form action="" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input
          type="checkbox"
          name=""
          id="check"
          checked={check}
          onChange={(e) => setCheck(e.target.checked)}
        />
        <label htmlFor="check">Terms and condition applied</label>
        <br />
        <br />
        <input
          type="radio"
          name="gender"
          id="male"
          value="Male"
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="Female"
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="female">FeMale</label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />

      {show !== null ? (
        <>
          <h2>Name : {name}</h2>
          <h2>Email : {email}</h2>
          <h2>Password : {password}</h2>
          <h2>Gender : {gender}</h2>
        </>
      ) : (
        "No Data"
      )}
    </>
  );
}
