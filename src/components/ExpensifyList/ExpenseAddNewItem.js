import React, { useState } from "react";
import useExpenseForm from "../../hooks/useExpenseForm";
import { addExpense } from "../../Redux/actions/expenseActions";
import expenseValidations from "../../validations/expenseValidations";

function ExpenseAddNewItem({ dispatch }) {
	const { inputs, handleInputChange, handleSubmit, errors } = useExpenseForm(submit, expenseValidations, {
		description: "",
		amount: 0,
		email: "",
	});
	const [openForm, setOpenForm] = useState(false);

	function submit() {
		dispatch(addExpense(inputs));
		setOpenForm((prev) => !prev);
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
						<div className="grid grid-cols-3 gap-4">
							<div>
								<input
									className="border-2 border-indigo-600 rounded py-2 px-3 text-gray-700 leading-tight"
									type="text"
									placeholder="Description"
									name="description"
									onChange={handleInputChange}
									value={inputs.description}
								/>
								{errors.description && <p className="error">{errors.description}</p>}
							</div>
							<div>
								<input
									className="border-2 border-indigo-600 rounded py-2 px-3 text-gray-700 leading-tight"
									type="number"
									placeholder="Amount"
									name="amount"
									onChange={handleInputChange}
									value={inputs.amount}
								/>
							</div>

							<div>
								<input
									className="border-2 border-indigo-600 rounded py-2 px-3 text-gray-700 leading-tight"
									type="text"
									placeholder="Email"
									name="email"
									onChange={handleInputChange}
									value={inputs.email}
								/>
								{errors.email && <p className="error ">{errors.email}</p>}
							</div>

							<button
								className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Add Item
							</button>
						</div>
					</form>
				</div>
			)}
		</div>
	);
}

export default ExpenseAddNewItem;
