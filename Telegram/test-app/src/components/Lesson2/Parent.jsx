import React from 'react'
import Child1 from './Child1';

function Parent() {
  const name = "John";
  return (
    <div>
      <Child1 nameUser={name} />
    </div>
  )
}
export default Parent



// import React from 'react'
// import Child1 from './Child1';
// function Parent() {
//    const Test = (data) => {
//    console.log("Hello", data);
//   } 
//   return (
//     <div>
//       <Child1 ParentTest = {Test} />
//     </div>
//   )
// }
// export default Parent