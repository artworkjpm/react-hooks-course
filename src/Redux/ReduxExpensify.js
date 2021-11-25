import { createStore, combineReducers } from "redux";
import { v4 as uuid } from "uuid";
//ADD_EXPENSE

const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0 } = {}) => ({
	type: "ADD_EXPENSE",
	expenseDetail: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt,
	},
});
//REMOVE_EXPENSE

const removeExpense = ({ id }) => {
	return {
		type: "REMOVE_EXPENSE",
		id,
	};
};
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: "EDIT_EXPENSE",
	id,
	updates,
});
//SET_TEXT_FILTER
const setText = (text) => ({
	type: "SET_TEXT",
	text,
});
//SORT_BY_AMOUNT

//Expenses Reducer

const expenseDefaultState = [];
const expenseReducer = (state = expenseDefaultState, action) => {
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

//filters reducer

const filtersInitialState = {
	text: "",
	sortBy: "date", //date or amount
	startDate: undefined,
	endDate: undefined,
};

const filtersReducer = (state = filtersInitialState, action) => {
	switch (action.type) {
		case "SET_TEXT":
			return { ...state, ...action.text };

		default:
			return state;
	}
};

// Create Store

const store = createStore(
	combineReducers({
		expenses: expenseReducer,
		filters: filtersReducer,
	})
);

store.subscribe(() => {
	console.log(store.getState());
});

const expense1 = store.dispatch(addExpense({ description: "Rent", amount: 100 }));
const expense2 = store.dispatch(addExpense({ description: "Tea", amount: 5 }));

store.dispatch(removeExpense({ id: expense1.expenseDetail.id }));
store.dispatch(editExpense(expense2.expenseDetail.id, { amount: 6 }));
store.dispatch(setText("rentx"));

const demoState = {
	expenses: [
		{
			id: "poui",
			description: "January Rent",
			note: "Rent",
			amount: 5455,
			createdAt: 0,
		},
	],
	filters: {
		text: "rent",
		sortBy: "amount", //date or amount
		startDate: undefined,
		endDate: undefined,
	},
};

const user = {
	name: "john",
};

console.log({
	...user,
});

export default function ReduxExpensify() {
	return <div className="text-center m-4">Redux Expensify</div>;
}
