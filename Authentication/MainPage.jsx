
import { getAuth, signOut } from "firebase/auth";
// import { onAuthStateChanged } from 'firebase/auth'
import { app } from "./Firebase";


export default function MainPage({ email  }) {
  const auth = getAuth(app);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("User Signed Out Successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <br />
      <br />
    <h1>Main Page</h1>
      <h2 style={{ color: "red" }}>Your Register Email : {email}</h2>
      <br /> <br />
      <button onClick={handleSignOut}>SignOut</button>
    </div>
  );
}
