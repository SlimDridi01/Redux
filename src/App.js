import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
	return (
		<div className="todo-app">
			<h1>What's the Plan for Today?</h1>
			<TodoForm />
			<TodoList />
		</div>
	);
};

export default App;
