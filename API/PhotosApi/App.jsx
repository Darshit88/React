// import Header from "./BootstrapProject/Header";
// import Sections from "./BootstrapProject/Section";
// import Footer from "./BootstrapProject/Footer";
//  import CommentReview from "./CommentReview/CommentReview";
//  import LocalBox from "./LocalBox/LocalBox";
//  import Counter from "./Counter/Counter";
// import EventHandler from "./EventHandlar/EventHandler";
//  import List from "./CrudOperation/List";
// import Explorer from "./Expolerer/Explorer";




import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Photo from "./Api/Photo";

const App = () => {
  return (
    <>
      <Photo />
    </>
  );
};
export default App;












//  const App = () => {
//   return (
//      <div>
//    <Header />
//       <Sections />
//       <Footer /> 

//    </div>
//   );
// };

// export default App; 

//  import { Routes, Route } from "react-router-dom";
//  import "./App.css";
// import Home from "./Navigation/Home";
//  import About from "./Navigation/About";
//  function App() {
//   return (
//     <>
//        <Routes>
//         <Route path="/" element={<Home />}></Route>
//        <Route path="/about" element={<About />}></Route>
//        </Routes>
//     </>
//   );
//  }

//  export default App;



// const App = () => {
//   const [input, setInput] = useState({
//     name: "",
//     password: ""
//   })

//   const dispatch = useDispatch()
//   const data = useSelector((state) => state.item)

//   const HandleFormSubmit = (e) => {
//     e.preventDefault();

//     dispatch(AddData(input));

//     setInput({
//       name: "",
//       password: "",
//     });

//     e.target.reset();
//   };

//   return (
//     <>
//       <form action="" onSubmit={HandleFormSubmit}>
//         <input
//           type="text"
//           placeholder="Enter the name"
//           value={input.name}
//           onChange={(e) => setInput({ ...input, name: e.target.value })}
//         />
//         <br />
//         <br />
//         <input
//           type="password"
//           placeholder="Enter the password"
//           value={input.password}
//           onChange={(e) => setInput({ ...input, password: e.target.value })}
//         />
//         <br />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       <br />
//       <br />
//       <ul>
//         {data.map((ele, index) => (
//           <li key={index}>
//             {ele.name} : {ele.password}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;

