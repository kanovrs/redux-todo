import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async function(_, { rejectWithValue }) {
        try {
        const response = await fetch("https://6568bf679927836bd9755cc2.mockapi.io/todo/todos")
        
            const date = await response.json();
            
            if (!response.ok) {
                throw new Error('Something went wrong...');
            }

        return date;
        }
        catch (error) {
            return rejectWithValue("Something went wrong...");
        }
    }
);

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todoArray: [],
        loading: false,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            console.log(action)
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
            const areAllCompleted = state.todoArray.every((todo) => todo.completed);
            state.todoArray = state.todoArray.map((todo) => ({ ...todo, completed: !areAllCompleted }));
        },
        removeCompleted(state) {
            state.todoArray = state.todoArray.filter((todo) => !todo.completed);
        },
        setAllCompleted(state, action) {
            state.allCompleted = action.payload;
        },

    },

    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.loading = true;
        },
        [fetchTodos.fulfilled]: (state, action) => { 
            state.todoArray = action.payload;
            state.loading = false;
            
        },
        [fetchTodos.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});  

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  toggleAll,
  removeCompleted,
  setAllCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;