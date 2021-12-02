import axios from "axios";
import { v4 as uuid } from "uuid";

export const fetchPost = (url, dispatch, setError) => {
	return () => {
		axios
			.get(url)
			.then((res) => {
				const item = res.data;
				return dispatch(
					addExpense({
						description: item.title,
						amount: 101,
						id: item.id,
						email: "jsonplaceholder@gmail.com",
					})
				);
			})
			.catch((err) => {
				setError(err);
				return alert(err);
			});
	};
};

export const addExpense = ({ description = "", amount = 0, createdAt = 0, id = uuid(), email = "" } = {}) => {
	return {
		type: "ADD_EXPENSE",
		expenseDetail: {
			id,
			description,
			amount,
			createdAt,
			email,
		},
	};
};

//REMOVE_EXPENSE
export const removeExpense = (id) => {
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
