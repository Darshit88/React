import { Route, Routes } from "react-router-dom";
import "./style.css";
import SignUp from "./Authentication/SignUp";
import SignIn from "./Authentication/SignIn";
import { app } from "./Authentication/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import PasswordReset from "./Authentication/PasswordReset";
import MainPage from "./Authentication/MainPage";

const auth = getAuth(app)

const App = () => {
 

  const [user, setUser] = useState("");

  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    };
    return () => unsubscribe();
  }, []);

  console.log(user);
  
  return (
    <>
      {user ? (
        <MainPage displayName={user.displayName} email={user.email} />
      ) : (
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/SignInPage" element={<SignIn />} />
          <Route path="/forgotPassword" element={<PasswordReset />} />
        </Routes>
      )}
    </>
  );
};
export default App;
