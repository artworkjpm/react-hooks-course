import React from "react";
import { connect } from "react-redux";
import { setText } from "../../Redux/actions/expenseActions";

function ExpenseInput(props) {
	return (
		<div>
			<h1>{props.filters.text}</h1>
			<input
				type="text"
				value={props.filters.text}
				onChange={(e) => {
					props.dispatch(setText(e.target.value));
				}}
				className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
