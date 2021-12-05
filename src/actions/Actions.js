import { ADD, DELETE, UPDATETASK, CHANGESTATE, FILTERTODO } from "./types";

export const add = (task) => {
	return {
		type: ADD,
		payload: task,
	};
};
export const deleteTask = (task) => {
	return {
		type: DELETE,
		payload: task,
	};
};
export const updateTask = (task) => {
	return {
		type: UPDATETASK,
		payload: task,
	};
};

export const changeState = (task) => {
	return {
		type: CHANGESTATE,
		payload: task,
	};
};

export const filterTodo = (filterTodo) => {
	return {
		type: FILTERTODO,
		payload: filterTodo,
	};
};
