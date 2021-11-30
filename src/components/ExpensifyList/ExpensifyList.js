import React, { useEffect } from "react";
import { connect } from "react-redux";
import { filterExpenses } from "../../Redux/selectors/expenseSelector";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseListItem from "./ExpenseListItem";
import ExpenseAddNewItem from "./ExpenseAddNewItem";

function ExpensifyList({ dispatch, expenses }) {
	useEffect(() => {}, [dispatch]);

	return (
		<div className="text-center mt-4">
			<h1>Expensify Redux List</h1>
			<ExpenseFilter />
			<ExpenseAddNewItem />
			<ul className="my-4">
				{expenses.map((items) => {
					return <ExpenseListItem {...items} key={items.id} />;
				})}
			</ul>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		expenses: filterExpenses(state.expenses, state.filters),
	};
};

export default connect(mapStateToProps)(ExpensifyList);
