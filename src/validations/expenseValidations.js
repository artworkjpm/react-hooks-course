export default function expenseValidations(inputs) {
	let errors = {};
	if (!inputs.email) {
		errors.email = "Email required";
	} else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
		errors.email = "Email address is invalid";
	}
	if (!inputs.description) {
		errors.description = "Description is required";
	} else if (inputs.description.length < 2) {
		errors.description = "Description needs to be more than 2 characters";
	}
	return errors;
}
