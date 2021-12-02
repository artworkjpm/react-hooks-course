import React, { useState } from "react";
import { editExpense } from "../../Redux/actions/expenseActions";

function ExpenseEditItem(props) {
	const { description, amount, dispatch, id, setOpen } = props;
	const [inputs, setInputs] = useState({
		description,
		amount,
	});

	function handleSubmit(event) {
		event.preventDefault();
		dispatch(editExpense(id, inputs));
		setOpen((prev) => !prev);
	}

	function handleInputChange(event) {
		setInputs((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
	}

	return (
		<div>
			<form className="pt-4 mb-4" onSubmit={handleSubmit}>
				<input
					className="border-2 border-indigo-600 rounded py-2 px-3 text-gray-700 leading-tight"
					type="text"
					placeholder="Description"
					name="description"
					onChange={handleInputChange}
					value={inputs.description}
				/>

				<input
					className="mx-4 border-2 border-indigo-600 rounded py-2 px-3 text-gray-700 leading-tight"
					type="number"
					placeholder="Amount"
					name="amount"
					onChange={handleInputChange}
					value={inputs.amount}
				/>

				<button
					className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Edit Expense
				</button>
			</form>
		</div>
	);
}

export default ExpenseEditItem;
