import {useState, useEffect} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    // const [change, setChange] = useState(0)
  return (
        <div>
            <h1>Your click {count} times</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}



// import { useState, useEffect } from "react";
// export default function Counter({status}) {
//   const [ count, setCount ] = useState(0)
//   const [ fruits, setFruits ] = useState('banana');
//   console.log(status);

//     useEffect(() => {
//         alert("your clicked")
//     }, [count, fruits])

//   return (
//     <div>
//       <h1>you clicked {count} times</h1>
//       <h2>{fruits}</h2>
//       <button onClick={() => setCount({count})}>Click me</button>
//       {/* <button onClick={() => setFruits('apple')}>Click fruits</button> */}
//       {/* {add ? <h1>Clicked gfhdjfhjhdg</h1>: "" } */}
//     </div>
//   )
// }



// import { useState } from 'react'
// import Example from './Example'
// import Users from './Users'

// export default function Counter() {
//     const [change, setChange] = useState(0)
//   return (
//         <div>
//           {
//              change ? <Users />  : <Example />
//           }
//           <button onClick={() => setChange (!change) }>Click me</button>
//         </div>
//     )
// }
