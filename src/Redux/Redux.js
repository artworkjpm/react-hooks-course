import { createStore } from "redux";
//https://cognizant.udemy.com/course/react-2nd-edition/learn/lecture/7900014#overview
let result = [];
const initialState = { count: 0 };

//ACTION GENERATORS
//Use destructuring with default values
const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: "INCREMENT",
	incrementBy,
});

//Without destructuring and default values
/* const incrementCount = (payload = {}) => ({
	type: "INCREMENT",
	incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1,
}); */

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: "DECREMENT",
	decrementBy,
});

const resetCount = () => ({
	type: "RESET",
});

//Reducer
// 1. Reducers are pure function, they only use what is passed into them.
// 2. Never change state or change

const countReducer = (state = initialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				count: state.count + action.incrementBy,
			};
		case "DECREMENT":
			return {
				count: state.count - action.decrementBy,
			};

		case "RESET":
			return {
				count: 0,
			};
		default:
			return state;
	}
};

const store = createStore(countReducer);

store.subscribe(() => {
	console.log(store.getState());
	result.push(JSON.stringify(store.getState()));
});

//Actions - is an object that is sent to the store
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(resetCount());
store.dispatch(decrementCount({ decrementBy: 8 }));

export default function Redux() {
	return (
		<div className="text-center m-4">
			redux store
			<div>
				{result.map((item, i) => (
					<div key={i}>{item}</div>
				))}
			</div>
		</div>
	);
}
