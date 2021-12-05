import Todo from "./Todo";
import { useSelector } from "react-redux";

function TodoList() {
	const todos = useSelector((state) => state.todoReducer);
	const filterTodo = useSelector((state) => state.filterReducer);
	let filtred = "";
	filterTodo[0] === ""
		? (filtred = todos)
		: (filtred = [...todos.filter((tdo) => tdo.isComplete === filterTodo[0])]);
	return filtred.map((todo, index) => (
		<Todo key={todo.id} todo={todo} index={index} />
	));
}

export default TodoList;
