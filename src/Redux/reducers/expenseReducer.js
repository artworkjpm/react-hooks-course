//Expenses Reducer

const expenseDefaultState = [];
export const expenseReducer = (state = expenseDefaultState, action) => {
	switch (action.type) {
		case "ADD_EXPENSE":
			return [...state, action.expenseDetail];

		case "REMOVE_EXPENSE":
			return state.filter(({ id }) => id !== action.id);

		case "EDIT_EXPENSE":
			return state.map((item) => {
				if (item.id === action.id) {
					return { ...item, ...action.updates };
				} else return item;
			});

		default:
			return state;
	}
};
