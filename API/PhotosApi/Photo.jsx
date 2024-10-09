import { useEffect, useState } from "react"

const Photo = () => {
    const [item,setItem] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
          .then((res) => res.json())
          .then((data) => setItem(data))
          .catch((err) => console.log(err));
    })


    


     return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Sr No</th>
                    <th>Title</th>
                    <th>Img</th>
                </tr>
            </thead>
            <tbody>
                {item.map((ele, i) => (
                    <tr key={i}>
                        <td>{ele.id}</td>
                        <td>{ele.title}</td>
                        <td><img src={ele.url} alt="photo" width="100" height="100" /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default  Photo;