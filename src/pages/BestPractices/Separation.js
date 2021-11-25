import React, { useEffect } from "react";
import Prism from "prismjs";
import "../../code-css.css";

const Separation = () => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<div className="text-center m-4">
			<h1>Separate Logic and UI components </h1>
			<h2>Why?</h2>
			<h3>
				Creating separate components for logic, things like API calls, adding things to state, and displaying the UI,
				things like styling, helps use to organise and reuse components
			</h3>
			<h2>How?</h2>
			<h3>
				You create the state and variables, functions, inside the logic component and return them from a function
				component using destructuring. You then import them into UI component using destructuring
			</h3>

			<div class="grid grid-cols-2 gap-4">
				<div>
					<h2>Logic Component:</h2>
					<pre>
						<code className="language-javascript">
							{`
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
			const response = await axios.get(\`http://hn.algolia.com/api/v1/search?query=\${query}\`);
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
`}
						</code>
					</pre>
				</div>
				<div>
					<h2>UI Component:</h2>
					<pre>
						<code className="language-javascript">
							{`
import NewsPageLogic from "./NewsPageLogic";

export default function NewsPage() {
	const { setQuery, handleSearch, query, searchInputRef, handleClearSearch, loading, results, error } = NewsPageLogic();

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

`}
						</code>
					</pre>
				</div>
			</div>
		</div>
	);
};

export default Separation;
