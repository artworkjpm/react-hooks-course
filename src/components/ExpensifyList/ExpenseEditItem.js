import React from "react";
import useExpenseForm from "../../hooks/useExpenseForm";
import { editExpense } from "../../Redux/actions/expenseActions";
import expenseValidations from "../../validations/expenseValidations";

function ExpenseEditItem(props) {
	const { description, amount, dispatch, id, setOpen, email } = props;
	const { inputs, handleInputChange, handleSubmit, errors } = useExpenseForm(submit, expenseValidations, {
		description,
		amount,
		email,
	});

	function submit() {
		dispatch(editExpense(id, inputs));
		setOpen((prev) => !prev);
	}

	return (
		<div>
			<form className="pt-4 mb-4" onSubmit={handleSubmit}>
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
						{errors.email && <p className="error">{errors.email}</p>}
					</div>

					<button
						className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Edit Expense
					</button>
				</div>
			</form>
		</div>
	);
}

export default ExpenseEditItem;
