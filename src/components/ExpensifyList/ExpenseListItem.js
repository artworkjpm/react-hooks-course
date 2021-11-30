import React from "react";

function ExpenseListItem({ id, description, amount }) {
	return (
		<div>
			<li key={id}>
				{description} | {amount} Euros
			</li>
		</div>
	);
}

export default ExpenseListItem;
