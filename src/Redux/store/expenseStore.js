import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { counterReducer } from "../../pages/ReduxToolkit/counterSlice";
import { filtersReducer } from "../reducers/expenseFilters";
import { expenseReducer } from "../reducers/expenseReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = () => {
	const store = configureStore({
		reducer: {
			expenses: expenseReducer,
			filters: filtersReducer,
			counter: counterReducer,
		},
		composedEnhancer,
	});

	return store;
};
