// Lesson 1 / -----------------------Component----------------- */
// import React from "react";
// import Test from "./components/Lesson1/Test";
// import Test2 from "./components/Lesson1/Test2";
// import Test3 from "./components/Lesson1/Test3";
// import Test4 from "./components/Lesson1/Test4";
// import Test5 from "./components/Lesson1/Test5";

// function App() {z
//   return (
//     <div >
//       <Test />
//       <Test2 />
//       <Test3 />
//       <Test4 />
//       <Test5 />

//     </div>
//   );
// }
// export default App;

//Lesson2 /*--------------------------Props CallBack-------------------------*/
// import React from "react";
// import Parent from "./components/Lesson2/Parent";

// function App() {
//   return (
//     <div>
//       <Parent />
//     </div>
//   );
// }
// export default App;

//home work /////////////////////////////////////*/
// import React from "react";
// import Parent from "./components/Lesson2/homeWork/Parent";
// import "./App.css"
// function App() {
//   return (
//     <div >
//       <Parent />
//     </div>
//   );
// }
// export default App;

/* Lesson 3/-------------////////----------///////-------- */
// import React from "react";
// import Counter from "./components/Lesson3/Counter";
// import Example from "./components/Lesson3/Example";
// import Users from "./components/Lesson3/Users";
// function App() {
//   return (
//     <div >
//         <Counter />
//         {/* <Users /> */}
//         {/* <Example /> */}
//     </div>
//   );
// }
// export default App;

//** Home work */
// import React from "react";
// import Store from "./components/Lesson3/homeWork/Store";
// import Input from "./components/Lesson3/homeWork/Input";
// import Counter from "./components/Lesson3/Counter";
// function App() {
//   return (
//     <div >
//         <Store />
//         {/* <Counter /> */}
//         {/* <Input /> */}
//     </div>
//   );
// }
// export default App;

/* Lesson 5 -----*------------------*------------------------------ */
// import React from "react";
// import Login from "./components/Lesson5/Login";
// import Navigation from "./components/Lesson5/Navigation";

// function App() {
//   const user = localStorage.getItem("user");

//   if (!user)
//     return (
//       <div>
//         <Login />
//       </div>
//     );

//   return (
//     <div>
//       <Navigation />
//     </div>
//   );
// }
// export default App;

//*/*/*------ Vidoe Lesson Week7 PropsExample
// import React from "react";
// import PropsExample from "./components/VideoLesson/Week7/PropsExample";

// function App() {
//   return (
//     <div >
//         <PropsExample />
//     </div>
//   );
// }
// export default App;

//*/*/*------ Vidoe Lesson Week7 StateExample
// import React from "react";
// import StateExample from "./components/VideoLesson/Week7/StateExample";

// function App() {
//   return (
//     <div >
//         <StateExample />
//     </div>
//   );
// }
// export default App;

/* Video Example JS Vladilen */
// import React, {useState} from "react";
// import Form from "./components/Lesson5/Form";
// import Header from "./components/Lesson5/Header";
// import TodosList from "./components/Lesson5/TodosList";
// function App() {

//   const [name, setName] = useState("");
//   const [todos, setTodos] = useState([]);

//   return (
//     <div>
//       <div>
//         <Header />
//       </div>
//       <div>
//         <Form
//             name={name}
//             setName={setName}
//             todos={todos}
//             setTodos={setTodos}
//           />
//       </div>
//        <div>
//           <TodosList todos={todos} setTodos={setTodos} />
//        </div>
//     </div>
//   )
// }
// export default App;

// import React from "react";
// import MainTodo from "./components/Todo/MainTodo";
// function App() {
//   return (
//     <div className="App">
//         <header className="App-header">
//           <p>React Todo</p>
//          <MainTodo />
//         </header>
//     </div>
//   )
// }
// export default App;

import React, { useEffect, useState } from "react";
import { ContactList } from "./components-telegram/ContactList.component";
import { MessageHeader } from "./components-telegram/MessageHeader.component";
import "./App.css";
import { MessageList } from "./components-telegram/MessageList.component";
import InputMessages from "./components-telegram/InputMessages";
// import AddContact from "./components-telegram/Modal/AddContact";

// const messageString = localStorage.getItem("message");
// const oldMessages = messageString ? JSON.parse(messageString) : [];

function App() {
  const [selectedContact, setSelectedContact] = useState("");
  const [messages, setMessages] = useState([]);

  return (
    <div className="main">
      <div>
        <ContactList onContactSelect={(contact) => setSelectedContact(contact)} />
      </div>
      <div>
        <MessageHeader contact={selectedContact} />
        <MessageList messages={messages} contact={selectedContact} />
        <InputMessages setMessages={setMessages} contact={selectedContact} messages={messages} />
      </div>
    </div>
  );
}
export default App;
