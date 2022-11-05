import React from "react";
import {v4 as uuidv4} from "uuid";


const Form = ({ name, setName, todos, setTodos }) => {
    const onInputChange = (event) => {
        setName(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, { id: uuidv4(), title: name, completed: false}]);
        setName("");
    };
    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type="text"
                placeholder="Enter a Todo ..."
                value={name}
                required
                onChange={onInputChange}
            />
            <button type="submit">
                Add
            </button>
        </form>
    )
}
export default Form();