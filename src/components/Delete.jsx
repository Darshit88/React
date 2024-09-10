import  { useEffect, useState } from 'react';  

export default function Delete() {  
    const [input, setInput] = useState({  
        name: "",  
        password: "",  
        email: "",  
        gender: "",  
        check: false,  
        img: null,  
        show: false  
    });  

    const [item, setItem] = useState(() => {  
        const storedData = localStorage.getItem("data");  
        return storedData ? JSON.parse(storedData) : [];  
    });  

    const handleForm = (e) => {  
        e.preventDefault();  

        if (!input.check) {  
            alert("Please Check Our Terms & Conditions Check Box");  
            return;  
        }  

        setItem(prevItems => [...prevItems, input]); 
      
        setInput({ name: "", password: "", email: "", gender: "", check: false, img: null, show: false });  
    };  

    const handleFileChange = (e) => {  
        const file = e.target.files[0];  
        if (file) {  
            setInput(prevState => ({ ...prevState, img: file }));  
        }  
    };  

    const handleCheckboxChange = (e) => {  
        setInput(prevState => ({ ...prevState, check: e.target.checked }));  
    };  

    useEffect(() => {  
        localStorage.setItem("data", JSON.stringify(item));  
    }, [item]);  

    const deleteData = (index) => {  
        const updatedData = item.filter((_, i) => i !== index);  
        setItem(updatedData);  
    };  

    return (  
        <div>  
            <form onSubmit={handleForm}>  
                <input  
                    type="text"  
                    placeholder='Enter Your Name'  
                    value={input.name}  
                    onChange={(e) => setInput({ ...input, name: e.target.value })}  
                />  
                <br /><br />  
                <input  
                    type="email"  
                    placeholder='Enter Your Email'  
                    value={input.email}  
                    onChange={(e) => setInput({ ...input, email: e.target.value })}  
                />  
                <br /><br />  
                <input  
                    type="password"  
                    placeholder='Enter Your Password'  
                    value={input.password}  
                    onChange={(e) => setInput({ ...input, password: e.target.value })}  
                />  
                <br /><br />  
                <label>  
                    <input  
                        type="radio"  
                        name="gender"  
                        value="Male"  
                        checked={input.gender === "Male"}  
                        onChange={(e) => setInput({ ...input, gender: e.target.value })}  
                    />  
                    Male  
                </label>  
                <label>  
                    <input  
                        type="radio"  
                        name="gender"  
                        value="Female"  
                        checked={input.gender === "Female"}  
                        onChange={(e) => setInput({ ...input, gender: e.target.value })}  
                    />  
                    Female  
                </label>  
                <label>  
                    <input  
                        type="radio"  
                        name="gender"  
                        value="Other"  
                        checked={input.gender === "Other"}  
                        onChange={(e) => setInput({ ...input, gender: e.target.value })}  
                    />  
                    Other  
                </label>  
                <br /><br />  

                <input  
                    type="file"  
                    accept="image/*"  
                    onChange={handleFileChange}  
                />  
                <br /><br />  

                <input  
                    type="checkbox"  
                    id="check"  
                    checked={input.check}  
                    onChange={handleCheckboxChange}  
                />  
                <label htmlFor="check">Terms & Conditions Apply</label>  
                <br /><br />  
                <button type="submit">Submit</button> <br /> <br />  
            </form>  

            {item.length > 0 && (  
                <table border={1}>  
                    <thead>  
                        <tr>  
                            <th>Sr. No</th>  
                            <th>Name</th>  
                            <th>Email</th>  
                            <th>Password</th>
                            <th>Gender</th> 
                            <th>Actions</th>  
                        </tr>  
                    </thead>  
                    <tbody>  
                        {item.map((ele, index) => (  
                            <tr key={index}>  
                                <td>{index + 1}</td>  
                                <td>{ele.name}</td>  
                                <td>{ele.email}</td>  
                                <td>{ele.password}</td>  
                                <td>{ele.gender}</td>
                                <td>  
                                    <button>Edit</button>  
                                    <button onClick={() => deleteData(index)}>Delete</button>  
                                </td>  
                            </tr>  
                        ))}  
                    </tbody>  
                </table>  
            )}  
        </div>  
    );  
}