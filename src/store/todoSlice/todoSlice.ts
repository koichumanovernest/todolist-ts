import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo, TodoState } from "./index.d";

const initialState: TodoState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, { payload }: PayloadAction<Todo>) => {
			state.todos.push(payload);
		},
		deleteTodo: (state, { payload }: PayloadAction<number>) => {
			state.todos = state.todos.filter((todo) => todo.id !== payload);
		},
		editTodo: (state, { payload }: PayloadAction<Todo>) => {
			state.todos = state.todos.map((todo) =>
				todo.id === payload.id ? { ...todo, title: payload.title } : todo
			);
		},
	},
});

export const { addTodo,deleteTodo,editTodo, } = todoSlice.actions;
