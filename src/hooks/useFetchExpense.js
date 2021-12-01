import { useEffect, useState } from "react";
import { addExpense } from "../Redux/actions/expenseActions";

function useFetchExpense(url, dispatch) {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();
	useEffect(() => {
		setLoading(true);
		try {
			fetch(url)
				.then((response) => {
					if (response.ok) {
						return response.json();
					} else {
						alert(response.type + " Error, we had an error fetching the data");
						setError(response.type);
						return response.json();
					}
				})
				.then((item) => {
					return dispatch(
						addExpense({
							description: item.title,
							amount: 101,
							id: item.id,
						})
					);
				});
		} catch (err) {
			setError(err);
		}

		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, [url, dispatch]);

	return { data, loading, error };
}

export default useFetchExpense;
