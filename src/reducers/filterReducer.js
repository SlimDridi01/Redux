import { FILTERTODO } from "../actions/types";

const filterReducer = (state = [""], action) => {
	switch (action.type) {
		case FILTERTODO:
			return [(state = action.payload)];

		default:
			return state;
	}
};

export default filterReducer;
