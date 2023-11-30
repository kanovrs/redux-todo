import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addTodo, fetchTodos } from "../../store/slices/todoSlice";

import "./todo-form.css"

export default function TodoForm() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== ('')) {
            dispatch(addTodo(text));
            setText('');
        }
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input className="form-input"
                placeholder="input todo"
                type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button className="form-btn" type="submit" >Add todo</button>
        </form>
    )
    }