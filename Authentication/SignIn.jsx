import { useState } from "react";
import { app } from "./Firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
// import "./App.css";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const auth = getAuth(app);

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => console.log("Successfully SignIn"))
      .catch((err) => console.log(err));

    e.target.reset();
  };

  return (
    <div>
      <br />
      <br />
      <h2>Sign In</h2>
      <br />
      <br />
      <form onSubmit={handleSignUp}>
        Email Address :{" "}
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        Paassword :{" "}
        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <br />
      <br />
      Back to Sign Up page ? <Link to="/">Click Here </Link>
      <br />
      Forgot Your Password ? <Link to="/forgotPassword">Click here</Link>
    </div>
  );
}
