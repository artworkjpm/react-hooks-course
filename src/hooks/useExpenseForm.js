import { useEffect, useState } from "react";

function useExpenseForm(submit, expenseValidations, { description, amount, email }) {
	const [inputs, setInputs] = useState({ description, amount, email });
	const [errors, setErrors] = useState({ description: "", amount: "", email: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);

	function handleInputChange(event) {
		setInputs((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
	}

	function handleSubmit(event) {
		event.preventDefault();
		setErrors(expenseValidations(inputs));
		setIsSubmitting(true);
	}

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			submit();
		}
		// eslint-disable-next-line
	}, [errors]);

	return { inputs, setInputs, handleInputChange, handleSubmit, errors };
}

export default useExpenseForm;
