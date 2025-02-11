import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { Todo as TypeTodo } from "./../store/todoSlice/index.d";
import { useDispatch } from "react-redux";
import { ChangeEvent, useState } from "react";
import { deleteTodo, editTodo } from "../store/todoSlice/todoSlice";

const Todo = (props: TypeTodo) => {
	const { title, id, data, photo } = props;
	const dispatch = useDispatch();
	const [openEdit, setOpenEdit] = useState<boolean>(false);
	const [edit, setEdit] = useState<string>(title);
	const [description, setDescription] = useState<string>(data);
	const [newPhoto, setNewPhoto] = useState<string>(photo);

	const handleDelete = () => {
		dispatch(deleteTodo(id ));
	};

	const handleOpenEdit = () => setOpenEdit((prev) => !prev);
	const handleEditTodo = (e: ChangeEvent<HTMLInputElement>) =>
		setEdit(e.target.value);
	const handleEditDescription = (e: ChangeEvent<HTMLInputElement>) =>
		setDescription(e.target.value);

	const handleEditPhoto = (e: ChangeEvent<HTMLInputElement>) =>
		setNewPhoto(e.target.value);

	const handleSaveTodo = () => {
		const newEdit: TypeTodo = {
			id,
			title: edit,
			data: description,
			photo: newPhoto,
		};
		dispatch(editTodo(newEdit));
		setOpenEdit(false);
	};

	return (
		<MuiContainer>
			<MuiContent>
				{openEdit ? (
					<Box>
						<TextField type="text" value={edit} onChange={handleEditTodo} />
						<TextField
							type="text"
							value={description}
							onChange={handleEditDescription}
						/>
						<TextField type="url" value={newPhoto} onChange={handleEditPhoto} />

						<Button variant="outlined" onClick={handleSaveTodo}>
							Save
						</Button>
						<Button variant="outlined" onClick={handleOpenEdit}>
							Cancel
						</Button>
					</Box>
				) : (
					<>
						<Typography>{title}</Typography>
						<Typography>{data}</Typography>
						<img src={photo} alt="photo" />
						<Button variant="outlined" onClick={handleDelete}>
							Delete
						</Button>
						<Button variant="outlined" onClick={handleOpenEdit}>
							Edit
						</Button>
					</>
				)}
			</MuiContent>
		</MuiContainer>
	);
};

export default Todo;

const MuiContainer = styled(Box)(() => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "10px",
	margin: "10px",
	borderRadius: "10px",
}));

const MuiContent = styled(Box)(() => ({
	display: "flex",
	justifyContent: "space-between",
	width: "56rem",
   flexDirection: "column",
	alignItems: "center",
	padding: "10px",
	margin: "0px",
	borderRadius: "10px",
	border: "1px solid black",
	boxShadow: "10px 10px 20px #babecc, -10px -10px 20px #ffffff",
}));
