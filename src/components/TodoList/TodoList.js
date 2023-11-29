import { useSelector, useDispatch } from "react-redux";
import { toggleAll } from "../../store/slices/todoSlice";


import Todo from "../Todo/Todo";

export default function TodoList() {
    const todos = useSelector((state) => state.todos.todoArray);
    const allCompleted = useSelector((state) => state.todos.allCompleted);
    const dispatch = useDispatch();

    const handleToggleAll = () => {
    dispatch(toggleAll());
  };


    return (
        <div className="todo-list">
            <h1 className="todo-list-title">Todo List</h1>
            <input className="todo-list-input" type="checkbox" checked={allCompleted} onChange={handleToggleAll} />
            <label className="todo-list-input-text" htmlFor="toggleAll">Select All</label>
            {todos.map((todo, index) => (
                <Todo key={todo.id} todo={todo} index={index} />
            ))}
        </div>
    )
}