import React, { useState, useEffect } from "react";

function UseEffectPage(props) {
	const [name, setName] = useState("initial name");
	const [count, setCount] = useState(0);
	const [prev, setPrev] = useState();

	useEffect(() => {
		//setName("new name");
		console.log("USE EFFECT!!!");
	}, []);

	console.log("WORKING");

	return (
		<div className="justify-center m-4">
			<h1>{name}</h1>
			<h1>{count}</h1>
			<h2>previous count: {prev}</h2>
			<button
				onClick={() =>
					setCount((prevState) => {
						setPrev(prevState);
						return prevState + 1;
					})
				}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Button
			</button>
		</div>
	);
}

export default UseEffectPage;
