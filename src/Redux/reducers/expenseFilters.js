//filters reducer

const filtersInitialState = {
	text: "",
	sortBy: "date", //date or amount
	startDate: undefined,
	endDate: undefined,
};

export const filtersReducer = (state = filtersInitialState, action) => {
	switch (action.type) {
		case "SET_TEXT":
			return { ...state, text: action.text };

		default:
			return state;
	}
};
