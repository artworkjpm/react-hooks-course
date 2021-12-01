import { v4 as uuid } from "uuid";

export const addExpense = ({ description = "", amount = 0, createdAt = 0, id = uuid() } = {}) => {
	console.log(id);
	return {
		type: "ADD_EXPENSE",
		expenseDetail: {
			id,
			description,
			amount,
			createdAt,
		},
	};
};
//REMOVE_EXPENSE

export const removeExpense = (id) => {
	console.log(id);
	return {
		type: "REMOVE_EXPENSE",
		id,
	};
};
//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
	type: "EDIT_EXPENSE",
	id,
	updates,
});
