import { Button, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice/todoSlice";
import { Todo } from "../store/todoSlice";

const TodoForm = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState<string>("");
	const [data, setData] = useState<string>("");
	const [photo, setPhoto] = useState<string>("");

	const changeTitle = (e: ChangeEvent<HTMLInputElement>) =>
		setTitle(e.target.value);
	const changeData = (e: ChangeEvent<HTMLInputElement>) =>
		setData(e.target.value);
	const changePhoto = (e: ChangeEvent<HTMLInputElement>) =>
		setPhoto(e.target.value);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newTodo: Todo = {
			id: Math.random(),
			title,
			data,
			photo,
		};
		dispatch(addTodo(newTodo));
	};

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				onChange={changeTitle}
				value={title}
				color="success"
				variant="standard"
				label="title"
			/>
			<TextField
				onChange={changeData}
				value={data}
				color="success"
				variant="standard"
				label="data"
				type="date"
			/>
			<TextField
				onChange={changePhoto}
				value={photo}
				color="success"
				variant="standard"
				label="photo"
				type="url"
			/>
			<Button type="submit">Create ☆</Button>
		</form>
	);
};

export default TodoForm;
