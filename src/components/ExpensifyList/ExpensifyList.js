import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchExpense from "../../hooks/useFetchExpense";
import { filterExpenses } from "../../Redux/selectors/expenseSelector";
import ExpenseAddNewItem from "./ExpenseAddNewItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseListItem from "./ExpenseListItem";

function ExpensifyList() {
	const expenses = useSelector((state) => filterExpenses(state.expenses, state.filters));
	const dispatch = useDispatch();
	const { loading } = useFetchExpense("https://jsonplaceholder.typicode.com/posts/1", dispatch);

	return (
		<div className="px-4 mt-4 grid place-items-center">
			<h1>Expensify Redux List</h1>
			<ExpenseFilter />
			<ExpenseAddNewItem dispatch={dispatch} />

			{loading && (
				<div className="mt-4 grid place-items-center">
					<h1>...Loading jsonplaceholder</h1>
				</div>
			)}

			{!loading && (
				<ul className="my-4">
					{expenses.map((items, i) => {
						return <ExpenseListItem {...items} key={items.id} index={i} dispatch={dispatch} />;
					})}
				</ul>
			)}
		</div>
	);
}

export default ExpensifyList;

/* const mapStateToProps = (state) => {
	return {
		expenses: filterExpenses(state.expenses, state.filters),
	};
};

export default connect(mapStateToProps)(ExpensifyList); */
