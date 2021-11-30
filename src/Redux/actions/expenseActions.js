import { v4 as uuid } from "uuid";

export const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0 } = {}) => ({
	type: "ADD_EXPENSE",
	expenseDetail: {
		id: uuid(),
		description,
		amount,
		createdAt,
	},
});
//REMOVE_EXPENSE

export const removeExpense = ({ id }) => {
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
