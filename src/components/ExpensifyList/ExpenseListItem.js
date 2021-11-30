import React from "react";

function ExpenseListItem(props) {
	return (
		<div>
			<ul>
				{props.items.map((item) => {
					return (
						<li key={item.id}>
							{item.description} | {item.amount} Euros
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default ExpenseListItem;
