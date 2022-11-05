// import React, {Component} from "react"

// class Child2 extends Component {
//     render() {
//       return (
//         <div>
//             <h1>Hello, im 2 Child</h1>
//             <div>
//                 name: {this.props.name}
//             </div>
//             <div>
//                 age: {this.props.age}
//             </div>
//             <div>
//                 {this.props.children}
//             </div>
//         </div>
//       )
//     }
// }

// class Child3 extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello im 3 Child</h1>
//                 <div>
//                     {this.props.children}
//                 </div>
//             </div>
//         )
//     }
// }

// export default class PropsExample extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello im main 1 Child</h1>
//                 <Child2 
//                      name="12"
//                      age={20}                
//                 >
//                     <h2>Hello im 2 child</h2>
//                 </Child2>
//                 <Child3 >
//                     <h3>Hello im 3 child</h3>
//                 </Child3>
//             </div>
//         )
//     }
// }



// import React, {Component} from "react"

// class Child2 extends Component {
//     render() {
//       return (
//         <div>
//             <h1>Hello, im 2 Child</h1>
//         </div>
//       )
//     }
// }

// class Child3 extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello im 3 Child</h1>
//             </div>
//         )
//     }
// }

// export default class PropsExample extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello im main 1 Child</h1>
//                 <Child3 />
//                 <Child2 />
//             </div>
//         )
//     }
// }

import React from "react";
import State from "./State";

export default function PropsExample() {
    const name = "Ahliddin"
    return (
        <div>
            <h1>Hello World</h1>
            <State nameProgrammer = {name} />
            {/* {nameProgrammer} */}
        </div>
    )
}