import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { filtersReducer } from "../reducers/expenseFilters";
import { expenseReducer } from "../reducers/expenseReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const expenseStore = () => {
	const store = createStore(
		combineReducers({
			expenses: expenseReducer,
			filters: filtersReducer,
		}),
		composedEnhancer
	);
	return store;
};
