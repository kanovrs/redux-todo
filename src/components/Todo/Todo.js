import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../../store/slices/todoSlice";
import { useId } from "react";

import "./todo.css"

export default function Todo({ todo }) {
    const dispatch = useDispatch();
    const id = useId();


    const handleToggle = () => {
        dispatch(toggleTodo({ id: todo.id }));
    };

    const handleRemove = () => {
        dispatch(removeTodo({ id: todo.id }));
    };
    
    return (
        <div className="todo-item">
            <input id={id + todo.text} className="todo-item-checkbox" type="checkbox" checked={todo.completed} onChange={handleToggle} />
            <label htmlFor={id + todo.text} className="todo-item-text"
                style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</label>
            <button className="todo-item-btn" onClick={handleRemove}></button>
            </div>
    ) 
}