import { useEffect, useState } from "react";
import { fetchPost } from "../Redux/actions/expenseActions";

function useFetchExpense(url, dispatch) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();
	useEffect(() => {
		setLoading(true);
		dispatch(fetchPost(url, dispatch, setError));
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, [url, dispatch]);

	return { loading, error };
}

export default useFetchExpense;
