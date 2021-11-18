import { createStore } from "redux";

const initialState = { count: 0 };

const store = createStore((state = initialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				count: state.count + 1,
			};
		case "DECREMENT":
			return {
				count: state.count - 1,
			};

		case "RESET":
			return {
				count: 0,
			};
		default:
			return state;
	}
});
console.log(store.getState());
//Actions - is an object that is sent to the store
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "RESET" });
store.dispatch({ type: "DECREMENT" });
console.log(store.getState());

export default function Redux() {
	return <div className="text-center m-4">redux store</div>;
}
