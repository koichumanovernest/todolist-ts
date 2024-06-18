import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Todo from "./Todo";
import { Todo as TodoType } from "../store/todoSlice";

const TodoItem = () => {
	const { todos } = useSelector((state: RootState) => state.todo);
	return (
		<div>
			{todos?.map((item:TodoType) => (
				<Todo key={item.id} {...item} />
			))}
		</div>
	);
};

export default TodoItem;
