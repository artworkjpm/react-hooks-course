import React from "react";
import { removeExpense } from "../../Redux/actions/expenseActions";

function ExpenseListItem({ description, amount, items, dispatch, id }) {
	return (
		<li className="border-b-2 py-2">
			{items + 1}
			{") "}
			{description} | {amount} Euros
			<button
				className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold px-1 rounded focus:outline-none focus:shadow-outline"
				onClick={() => dispatch(removeExpense(id))}
			>
				X
			</button>
		</li>
	);
}

export default ExpenseListItem;
