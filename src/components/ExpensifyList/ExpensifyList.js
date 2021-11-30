import React from "react";
import { connect } from "react-redux";
import ExpenseInput from "./ExpenseInput";
import ExpenseListItem from "./ExpenseListItem";

function ExpensifyList(props) {
	return (
		<div>
			<h1>Expensify Redux List</h1>
			<ExpenseInput />
			<ExpenseListItem items={props.expenses} />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		expenses: state.expenses,
	};
};

export default connect(mapStateToProps)(ExpensifyList);
