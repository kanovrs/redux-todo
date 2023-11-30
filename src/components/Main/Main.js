import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";

import "./main.css"

export default function Main() {
    return (
        <div className= "main">
            <TodoForm />
            <TodoList />
        </div>
    );
};