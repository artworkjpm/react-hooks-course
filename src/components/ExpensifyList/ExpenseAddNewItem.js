import React, { useState } from "react";
import { addExpense } from "../../Redux/actions/expenseActions";

function ExpenseAddNewItem({ dispatch }) {
	const [openForm, setOpenForm] = useState(false);
	const [inputs, setInputs] = useState();

	function handleSubmit(event) {
		event.preventDefault();
		console.log(inputs);
		dispatch(addExpense(inputs));
	}

	function handleInputChange(event) {
		setInputs((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
	}

	return (
		<div>
			<button
				onClick={() => setOpenForm((prev) => !prev)}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			>
				{!openForm ? "Add New Expense" : "Close Form"}
			</button>

			{openForm && (
				<div>
					<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
						<input
							className="border-2 border-indigo-600 rounded py-2 px-3 text-gray-700 leading-tight"
							type="text"
							placeholder="Description"
							name="description"
							onChange={handleInputChange}
						/>

						<input
							className="mx-4 border-2 border-indigo-600 rounded py-2 px-3 text-gray-700 leading-tight"
							type="number"
							placeholder="Amount"
							name="amount"
							onChange={handleInputChange}
						/>

						<button
							className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Add Item
						</button>
					</form>
				</div>
			)}
		</div>
	);
}

export default ExpenseAddNewItem;
