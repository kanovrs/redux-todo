import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../store/slices/todoSlice";

import './todo-form.css'

export default function TodoForm() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(text));
        setText('');
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input className="form-input" type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button className="form-btn" type="submit">Add todo</button>

        </form>
    )
    }