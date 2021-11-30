import React from "react";
import { connect } from "react-redux";
import { setText } from "../../Redux/actions/expenseFilters";

function ExpenseInput(props) {
	return (
		<div>
			<input
				type="text"
				placeholder="filter by name..."
				value={props.filters.text}
				onChange={(e) => {
					props.dispatch(setText(e.target.value));
				}}
				className="border-2 border-indigo-600 rounded py-2 px-3 text-gray-700 leading-tight my-4"
			/>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
	};
};

export default connect(mapStateToProps)(ExpenseInput);
