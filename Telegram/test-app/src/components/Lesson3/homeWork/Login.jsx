import React from 'react'
import { useState } from "react";

const arr = [
 "Oleg",
  "Max",
  "Ivan",
  "Olya"
]

function Login() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const [show, setShow] = useState(false);
  const [submit, setSubmit] = useState('') 

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(!show) 
    // setShow(!false)
    setSubmit(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(event) => {
            setName(event.target.value)}}
        />
          <input 
          type="text" 
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value)}}
        />
      </label> 



      { submit ?
      <>
      <h1>{show ? lastName : "" }</h1>
       {arr.map((event  ) => <p>{event}</p>)}
       </> : "" }
      <input type="Submit" />


    </form>
  )
}
export default Login

