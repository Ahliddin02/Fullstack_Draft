import React, { useState } from "react";
import { v1 as uuid  } from "uuid"
// import uuid from "uuid"
// import uuid from 'uuid';


function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id:"",
        task: "",
        completed: false
    });

    // const [id, setId] = useState(1);

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
        // console.log(12)
    }


    function handleSubmit(e) {
        e.preventDefault();
        if(todo.task.trim()) {
            addTodo({ ...todo, id: uuid() });
            setTodo({ ...todo, task: "" }); 
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
               name="task"
               type="text"
               value={todo.task}
               onChange={handleTaskInputChange}
            />
            <button type="submit">submit</button>
          
        </form>
    )

}
export default TodoForm;
