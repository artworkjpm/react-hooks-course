import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

export default function ReduxToolkit() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<div className="center">
			<div>Counter: {count}</div>
			<div>
				<button
					className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<button
					className="m-4 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
				<button
					className="m-4 bg-red-500 hover:bg-red-700 text-white font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"
					aria-label="Reset value"
					onClick={() => dispatch(reset())}
				>
					Reset
				</button>
			</div>
		</div>
	);
}
