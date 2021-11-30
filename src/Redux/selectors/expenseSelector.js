export const filterExpenses = (expenseState, { text }) => {
	return expenseState.filter((item) => {
		return item.description.toLowerCase().includes(text.toLowerCase());
	});
};
