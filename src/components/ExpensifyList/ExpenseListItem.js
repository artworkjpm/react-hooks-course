import React, { useState } from "react";
import { removeExpense } from "../../Redux/actions/expenseActions";
import ExpenseEditItem from "./ExpenseEditItem";

function ExpenseListItem(props) {
	const { description, amount, index, dispatch, id } = props;
	const [open, setOpen] = useState(false);

	return (
		<li className="border-b-2 py-2">
			{index + 1}
			{") "}
			{description} | {amount} Euros
			<button
				className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold px-1 rounded focus:outline-none focus:shadow-outline py-2"
				onClick={() => dispatch(removeExpense(id))}
			>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
					<path
						fillRule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			<button
				className="mx-2 bg-green-500 hover:bg-green-700 text-white font-bold px-1 py-2 rounded focus:outline-none focus:shadow-outline"
				onClick={() => setOpen((prev) => !prev)}
			>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
					<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
				</svg>
			</button>
			{open && <ExpenseEditItem {...props} setOpen={setOpen} />}
		</li>
	);
}

export default ExpenseListItem;
