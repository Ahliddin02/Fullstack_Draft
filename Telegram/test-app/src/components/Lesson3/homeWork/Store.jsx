// import React, { useState } from 'react'

// export default function Store() {

//   const [input, setInput] = useState('')

//   return (
//     <div> 
      
//       <input type="text" onChange={((e) => onChange(setInput(e.target.value)))}>Click me</input>
//       <burron>Click</burron>
//       <h1>{input} </h1>
//      </div>
//   )
// }



import React, {useEffect, useState} from "react"
export default function Store() {

  const [text, setText] = useState('')
  const [store, setStore] = useState('')

  function onChangeValue(e) {
    setText(e.target.value)
  }
  function clickButton(e) {
      setStore(text)
  }

  return (
    <div>
      <input type="text" onChange={onChangeValue} />
      <button onClick={clickButton}>Click</button>
      <h1>{store}</h1>
    </div>
  )
}




// import React, {Component} from "react";

// export default class Store extends Component {


//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       age: undefined  
//     }

//     this.onNameChange = this.onNameChange.bind(this);
//     this.onAgeChange = this.onAgeChange.bind(this);
//     this.onFormSubmit = this.onFormSubmit.bind(this);
//   }

//   onNameChange(e) {
//     this.setState({
//       name: e.target.value
//     })
//   }

//   onAgeChange(e) {
//     this.setState({
//       age: e.target.value
//     })
//   }

//   onFormSubmit(e) {
//     e.preventDefault();
//     console.log(this.state);
//     }

//     render() {
//       return (
//         <div>
//           <form onSubmit={this.onFormSubmit}>
//               <input onChange={this.} />
//           </form>
//         </div>
//       )
//     }
//   }




