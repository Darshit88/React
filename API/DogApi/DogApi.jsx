import { useState } from "react";

export default function DogApi() {
  const [img, setImg] = useState("");

  const handleChange = () => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => setImg(data.message))
        .catch((err) => console.log(err));
    }
  return (
    <div>
       <img src={img} alt="dog img" width={500} height={500}/>
      <br /> <br />
      <button onClick={handleChange}>Change</button>
    </div>
  );
}
