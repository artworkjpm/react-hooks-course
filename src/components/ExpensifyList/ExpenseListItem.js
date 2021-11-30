import React from "react";

function ExpenseListItem({ description, amount }) {
	return (
		<li>
			{description} | {amount} Euros
		</li>
	);
}

export default ExpenseListItem;
