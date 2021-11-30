import { createStore, combineReducers } from "redux";
import { filtersReducer } from "../reducers/expenseFilters";
import { expenseReducer } from "../reducers/expenseReducer";
export const expenseStore = () => {
	const store = createStore(
		combineReducers({
			expenses: expenseReducer,
			filters: filtersReducer,
		})
	);
	return store;
};
