import { ADD, DELETE, CHANGESTATE, UPDATETASK } from "./actions/types";

let incrimentId = 3;
const initState = [
	{
		id: 1,
		task: "Redux Chekpoint",
		isComplete: true,
	},
];

const Reducer = (state = initState, action) => {
	switch (action.type) {
		case ADD:
			return [
				...state,
				{
					id: incrimentId++,

					task: action.payload,
					isComplete: false,
				},
			];
		case DELETE:
			return [...state.filter((tdo) => tdo.id !== action.payload.id)];

		case UPDATETASK:
			return [
				...state.map((item) =>
					item.id === action.payload.id
						? {
								id: action.payload.id,
								task: action.payload.task,
								isComplete: !action.payload.isComplete,
						  }
						: item
				),
			];

		case CHANGESTATE:
			return [
				...state.map((item) =>
					item.id === action.payload.id
						? {
								id: action.payload.id,
								task: action.payload.task,
								isComplete: !action.payload.isComplete,
						  }
						: item
				),
			];

		default:
			return state;
	}
};

export default Reducer;
