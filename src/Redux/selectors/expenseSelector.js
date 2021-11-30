export const getVisibleExpenses = (expenseState, { text }) => {
	return expenseState.filter((item) => {
		return item.description.toLowerCase().includes(text.toLowerCase());
	});
};
