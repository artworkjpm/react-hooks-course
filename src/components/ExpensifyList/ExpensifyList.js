import React from "react";
import { connect } from "react-redux";
import { filterExpenses } from "../../Redux/selectors/expenseSelector";
import ExpenseAddNewItem from "./ExpenseAddNewItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseListItem from "./ExpenseListItem";

function ExpensifyList({ dispatch, expenses }) {
	return (
		<div className="text-center mt-4">
			<h1>Expensify Redux List</h1>
			<ExpenseFilter />
			<ExpenseAddNewItem dispatch={dispatch} />
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
