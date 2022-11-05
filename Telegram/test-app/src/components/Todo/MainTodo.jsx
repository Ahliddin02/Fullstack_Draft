import React, { useEffect, useState } from "react";
import "../../../src/App.css";
import TodoForm from "../../../src/components/Todo/TodoForm";
import TodoList from "../../../src/components/Todo/TodoList";

// import "../src/components/Todo/App.css"
// import TodoForm from "../src/components/Todo/TodoForm"
// import TodoList from "../src/components/Todo/TodoList"

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function MainTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      </header>
    </div>
  );
}
export default MainTodo;
