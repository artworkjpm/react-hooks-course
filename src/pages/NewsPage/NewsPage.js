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
