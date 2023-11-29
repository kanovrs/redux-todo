import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todoArray: [],
        allCompleted: false,
    },
    reducers: {
        addTodo(state, action) {
            state.todoArray.push({ id: Date.now(), text: action.payload, completed: false });
        },
        removeTodo(state, action) {
            state.todoArray = state.todoArray.filter((todo) => todo.id !== action.payload.id);
        },
        toggleTodo(state, action) {
            state.todoArray = state.todoArray.map((todo) =>
            todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
         );
        },
        toggleAll(state) {
            state.allCompleted = !state.allCompleted;
            state.todoArray = state.todoArray.map((todo) => ({ ...todo, completed: state.allCompleted }));
        },
    }
})  

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  toggleAll,
} = todoSlice.actions;

export default todoSlice.reducer;