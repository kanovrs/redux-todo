import { useSelector, useDispatch, } from "react-redux";
import { toggleAll, removeCompleted, setAllCompleted } from "../../store/slices/todoSlice";

import Todo from "../Todo/Todo";

import "./todo-list.css"

export default function TodoList() {
  const { loading, error, todoArray, allCompleted } = useSelector(state => state.todos);

  const dispatch = useDispatch();

  const handleToggleAll = () => {
    const areAllCompleted = todoArray.every((todo) => todo.completed);
    dispatch(setAllCompleted(!areAllCompleted));
    dispatch(toggleAll());
  };

  const handleRemoveCompleted = () => {
    dispatch(removeCompleted());
    dispatch(setAllCompleted(false));
  }

  return (
    <div className="todo-list">
      <h1 className="todo-list-title">Todo List</h1>
       {loading && <h3>loading...</h3>}
      {error && todoArray.length === 0 && <h3>{error}</h3>}
      <div className="todo-list-container">
        <input
          className="todo-list-checkbox"
          type="checkbox"
          id="toggleAll"
          checked={allCompleted}
          onChange={handleToggleAll}
        />
        <label className="todo-list-input-text" htmlFor="toggleAll">
          Select All
        </label>
        {todoArray.filter(todo => todo.completed).length >= 2 &&  <button className="todolist-btn" type="button" onClick={handleRemoveCompleted}>Remove selection</button>}
      </div>
      {todoArray.map((todo, index) => (
        <Todo key={todo.id} todo={todo} index={index} />
      ))}
    </div>
  );
}
