import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../../store/slices/todoSlice";

export default function Todo({ todo }) {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo({ id: todo.id }));
    };

    const handleRemove = () => {
        dispatch(removeTodo({ id: todo.id }));
    };
    
    return (
        <div className="todo-item">
            <input className="todo-item-checkbox" type="checkbox" checked={todo.completed} onChange={handleToggle} />
            <span className="todo-item-text" style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginBottom: '10px' }}>{todo.text}</span>
            <button className="todo-item-btn" onClick={handleRemove}>Remove</button>
        </div>
    ) 
}