import React from "react";
import { connect } from "react-redux";
import useFetchExpense from "../../hooks/useFetchExpense";
import { addExpense } from "../../Redux/actions/expenseActions";
import { filterExpenses } from "../../Redux/selectors/expenseSelector";
import ExpenseAddNewItem from "./ExpenseAddNewItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseListItem from "./ExpenseListItem";

function ExpensifyList({ dispatch, expenses }) {
	const { data, loading } = useFetchExpense("https://jsonplaceholder.typicode.com/posts/1", dispatch);

	if (data) {
		console.log(data);
		return dispatch(
			addExpense({
				description: data.title,
				amount: 101,
				id: data.id,
			})
		);
	}

	return (
		<div className="mt-4 grid place-items-center">
			<h1>Expensify Redux List</h1>
			<ExpenseFilter />
			<ExpenseAddNewItem dispatch={dispatch} />

			{loading && (
				<div className="mt-4 grid place-items-center">
					<h1>...Loading jsonplaceholder</h1>
				</div>
			)}

			<ul className="my-4">
				{expenses.map((items, i) => {
					return <ExpenseListItem {...items} key={items.id} items={i} dispatch={dispatch} />;
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
