import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const UserName = React.createContext();
const value = "";

ReactDOM.render(
	<React.StrictMode>
		<UserName.Provider value={value}>
			<App />
		</UserName.Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

if (module.hot) {
	module.hot.accept();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
