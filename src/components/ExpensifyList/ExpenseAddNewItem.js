import React, { useState } from "react";

function ExpenseAddNewItem(props) {
	const [openForm, setOpenForm] = useState(false);

	return (
		<div>
			<button
				onClick={() => setOpenForm((prev) => !prev)}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			>
				Add New Expense
			</button>

			{openForm && (
				<div>
					<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
						<input
							className="border-2 border-indigo-600 rounded py-2 px-3 text-gray-700 leading-tight"
							type="text"
							placeholder="Description"
						/>

						<input
							className="mx-4 border-2 border-indigo-600 rounded py-2 px-3 text-gray-700 leading-tight"
							type="number"
							placeholder="Amount"
						/>

						<button
							className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="button"
						>
							Add new item
						</button>
					</form>
				</div>
			)}
		</div>
	);
}

export default ExpenseAddNewItem;
