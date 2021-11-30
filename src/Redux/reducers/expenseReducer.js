//Expenses Reducer
import { v4 as uuid } from "uuid";
const dummyExpenses = [
	{
		id: uuid(),
		description: "Car",
		amount: 10000,
		createdAt: 123,
	},
];

export const expenseReducer = (state = dummyExpenses, action) => {
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
