import { createStore } from "redux";

const initialState = { count: 0 };

const store = createStore((state = initialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			const incrementBy = typeof action["incrementBy"] === "number" ? action["incrementBy"] : 1;
			return {
				count: state.count + incrementBy,
			};
		case "DECREMENT":
			const decrement = typeof action["decrement"] === "number" ? action["decrement"] : 1;
			return {
				count: state.count - decrement,
			};

		case "RESET":
			return {
				count: 0,
			};
		default:
			return state;
	}
});

store.subscribe(() => {
	console.log(store.getState());
});

//Actions - is an object that is sent to the store
store.dispatch({ type: "INCREMENT", incrementBy: 5 });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "RESET" });
store.dispatch({ type: "DECREMENT", decrement: 8 });

export default function Redux() {
	return <div className="text-center m-4">redux store</div>;
}
