import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addExpense } from "../../Redux/actions/expenseActions";
import { getVisibleExpenses } from "../../Redux/selectors/expenseSelector";
import ExpenseInput from "./ExpenseInput";
import ExpenseListItem from "./ExpenseListItem";

function ExpensifyList({ dispatch, expenses }) {
	useEffect(() => {
		dispatch(addExpense({ description: "Rent", amount: 100 }));
		dispatch(addExpense({ description: "Moto", amount: 5000 }));
	}, [dispatch]);

	console.log(expenses);

	return (
		<div className="text-center mt-4">
			<h1>Expensify Redux List</h1>
			<ExpenseInput />
			<ul>
				{expenses.map((items) => {
					return <ExpenseListItem {...items} />;
				})}
			</ul>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		expenses: getVisibleExpenses(state.expenses, state.filters),
	};
};

export default connect(mapStateToProps)(ExpensifyList);
