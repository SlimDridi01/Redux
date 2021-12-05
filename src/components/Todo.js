import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteTask, changeState } from "../actions/Actions.js";

const Todo = ({ todo, index, completeTodo }) => {
	const [edit, setEdit] = useState({
		id: null,
		task: "",
		isComplete: "",
	});

	const submitUpdate = () => {
		setEdit({
			id: null,
			task: "",
		});
	};

	const dispatch = useDispatch();

	if (edit.id) {
		return <TodoForm edit={edit} onSubmit={submitUpdate} />;
	}

	return (
		<div
			className={todo.isComplete ? "todo-row complete" : "todo-row"}
			key={index}
		>
			<div key={todo.id} onClick={() => completeTodo(todo.id)}>
				{todo.task}
			</div>
			<div className="icons">
				<RiCheckboxCircleLine
					onClick={() => dispatch(changeState(todo))}
					className="delete-icon"
				/>
				<RiCloseCircleLine
					onClick={() => dispatch(deleteTask(todo))}
					className="delete-icon"
				/>
				<TiEdit
					onClick={() =>
						setEdit({ id: todo.id, task: todo.task, isComplete: true })
					}
					className="edit-icon"
				/>
			</div>
		</div>
	);
};

export default Todo;
