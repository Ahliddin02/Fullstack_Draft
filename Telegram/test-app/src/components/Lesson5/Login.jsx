import { useState } from "react"
import "./Lesson5.css"

export default function Login() {

    const [user, setUser] = useState({
        name: "",
        password: ""
    })

    function Parol() {
        localStorage.setItem("user", JSON.stringify(user))
        window.location.reload()
    }

    const onInputChange = (key) => (e) => {
        setUser({
            ...user,
            [key]: e.target.value
        })
    }

    // function nameChange(e) {
    //     setUser({
    //         ...user,
    //         name: e.target.value
    //     })
    // }
    // function passwordChane(e) {
    //     setUser({
    //         ...user,
    //         password: e.target.value
    //     })
    // }

    return (
        <div className="login__main">
          <div className="login__back">
            <div className="username">
                <input onChange={onInputChange('name')} placeholder="username" />
            </div>
            <div>
                <input onChange={onInputChange('password')} placeholder="password" type={"password"} />
            </div>  
          
            <button onClick={Parol}>Send</button>
            </div>  
        </div>
        
    )
}