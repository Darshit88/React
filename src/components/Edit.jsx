import { useEffect, useState } from "react";

export default function Form() {
  const [input, setInput] = useState({
    name: "",
    password: "",
    email: "",
    gender: "",
    check: false,
    img: null,
    show: false
  });

    const [item , setItem] = useState(() => {
    const storeData = localStorage.getItem("data");
    return storeData ? JSON.parse(storeData) : [];
  });

  const handleForm = (e) => {
    e.preventDefault();

    if (input.check) {
      console.log("Checked");
      setInput({ ...input, show: true }); 
    } else {
      alert("Please check our Terms & Conditions checkbox");
    }
    e.target.reset();
    setInput({
        name : "",
        email : "",
        password: "",
        gender : "",
        check: false,  
        img: null,  
        show: false  
    });
    setItem([...item,input]);
  };

  const handleFileChange = (e) => {
    const storedData = e.target.files[0];
    if (storedData) {
      setInput({ ...input, img: storedData });
    }
  };

  const handleCheckboxChange = (e) => {
    setInput({ ...input, check: e.target.checked });
  };

  useEffect(()=> {
    localStorage.setItem("data", JSON.stringify(item));
  },[item]);

  const deleteData = (index) => {
    const updateData = item.filter((_,i) => i !== index);
    setItem(updateData);
    localStorage.setItem("data",JSON.stringify(updateData));
  };
  
  const [edit,setEdit] = useState(null);

  const editData = (index) => {
    setEdit(index);
    setInput(item[index]);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={input.name}
          placeholder="Enter Your Name"
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <br />
        <br />
        <input
          type="email"
          value={input.email}
          placeholder="Enter Your Mail"
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          value={input.password}
          placeholder="Enter Your Password"
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <br />
        <br />
        <input
          type="radio"
          name="gender"
          id="male"
          value="Male"
          onChange={(e) => setInput({ ...input, gender: e.target.value })}
        />
        <label htmlFor="male">Male</label>

        <input
          type="radio"
          name="gender"
          id="female"
          value="Female"
          onChange={(e) => setInput({ ...input, gender: e.target.value })}
        />
        <label htmlFor="female">Female</label>

        <input
          type="radio"
          name="gender"
          id="other"
          value="Other"
          onChange={(e) => setInput({ ...input, gender: e.target.value })}
        />
        <label htmlFor="other">Other</label>
        <br />
        <br />

        <input type="file" accept="image/*" onChange={handleFileChange} />
        <br />
        <br />

        <input
          type="checkbox"
          id="check"
          checked={input.check}
          value={input.check}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="check">Terms & Conditions Apply</label>
        <br />
        <br />
        {
            edit === null ? <button onClick={handleForm}>Submit</button> : <button >Update</button>
        }
        <br />
        <br />
      </form>
    {
      item.length > 0 &&
      <table border={2} className="table">
        <thead>
            <tr>
                <td>Sr No</td>
                <td>Name</td>
                <td>Email ID</td>
                <td>Password</td>
                <td>Gender</td>
                <td>Actions</td>
            </tr>
        </thead>

        <tbody>
            {
                item.map((ele,index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.email}</td>
                        <td>{ele.password}</td>
                        <td>{ele.gender}</td>
                        <td>
                            <button onClick={()=>editData(index)}>Edit</button>
                            <button onClick={()=>deleteData(index)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    }  
    </div>
  );
}