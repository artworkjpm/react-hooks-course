import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function NewsPage() {
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

	return (
		<div className="container max-w-md mx-auto p-4 m-2 bg-purple-100 shadow-lg rounded">
			<img src="react.png" alt="React Logo" className="float-right h-12" />
			<h1 className="text-grey-darkest font-thin">Hooks News</h1>
			<form onSubmit={handleSearch} className="mb-2">
				<input
					type="text"
					onChange={(event) => setQuery(event.target.value)}
					value={query}
					ref={searchInputRef}
					className="border p-1 rounded"
				/>
				<button type="submit" className="bg-yellow-500 hover:bg-red-500 rounded m-1 p-1">
					Search
				</button>
				<button type="button" onClick={handleClearSearch} className="bg-green-300 text-white p-1 rounded">
					Clear
				</button>
			</form>

			{loading ? (
				<div className="font-bold">Loading results...</div>
			) : (
				<ul className="">
					{results.map((result) => (
						<li key={result.objectID}>
							<a href={result.url} className="no-underline hover:underline">
								<b>{" > "}</b> {result.title}
							</a>
						</li>
					))}
				</ul>
			)}

			{error && <div className="text-red font-bold">{error.message}</div>}
		</div>
	);
}
