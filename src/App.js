import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
	const [results, setResults] = useState([]);
	useEffect(() => {
		getResults();
	}, []);

	const getResults = async () => {
		const res = await axios.get("http://hn.algolia.com/api/v1/search?query=reacthooks");
		console.log(res);
		setResults(res.data.hits);
	};

	return (
		<div>
			<ul>
				{results.map((item) => {
					return (
						<li key={item.objectID}>
							<a href={item.url}>{item.title}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
