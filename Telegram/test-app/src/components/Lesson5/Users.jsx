import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get("https://62a7452b97b6156bff8b8879.mockapi.io/userss").then((res) => {
            setTodos(res.data) 
        })
    }, [])


    
    return (
      <div className="main__users">
        <div className="users">
            {
                todos.map((todo, index) => (
                    <div className="users__box" key={index}>
                        <h1>{todo.name}</h1>    
                        <img src={todo.avatar} alt="" />
                        <div>{todo.number}</div>
                        <div>{todo.job}</div>
                    </div>
                ))
            }
          
        </div>
        <br />
        <br />
      </div>
    )
}