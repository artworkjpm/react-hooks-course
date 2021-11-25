import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function NewsPageLogic() {
	const [results, setResults] = useState([]);
	const [query, setQuery] = useState("react hooks");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const searchInputRef = useRef();

	useEffect(() => {
		getResults();
		// eslint-disable-next-line
	}, []);

	const getResults = async () => {
		setLoading(true);
		try {
			const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
			setResults(response.data.hits);
		} catch (err) {
			setError(err);
		}
		setLoading(false);
	};

	const handleSearch = (event) => {
		event.preventDefault();
		getResults();
	};

	const handleClearSearch = () => {
		setQuery("");
		searchInputRef.current.focus();
	};

	return { setQuery, handleSearch, query, searchInputRef, handleClearSearch, loading, results, error };
}
