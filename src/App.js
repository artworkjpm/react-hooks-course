import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import CrudApp from "./pages/CrudApp";
import { HOC } from "./pages/HOC";
import NewsPage from "./pages/NewsPage";
import Redux from "./pages/Redux";
export default function App() {
	return (
		<BrowserRouter>
			<nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
				<div className="mb-2 sm:mb-0">
					<Link className="text-2xl no-underline text-grey-darkest hover:text-blue-dark" to="/">
						Home
					</Link>
				</div>
				<div>
					<Link className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2" to="/items">
						News
					</Link>
					<Link className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2" to="/crud">
						CrudApp
					</Link>
				</div>
			</nav>

			<Routes>
				<Route exact path="/items" element={<NewsPage />} />
				<Route exact path="/hoc" element={<HOC />} />
				<Route exact path="/crud" element={<CrudApp />} />
				<Route exact path="/redux" element={<Redux />} />
				<Route exact path="/" element={<Navigate to="/redux" />} />
			</Routes>

			{/* <Switch>
				<Route exact path="/redux" component={<Redux />} />
				<Route exact path="/" render={() => <Redirect to="/redux" />} />
			</Switch> */}
		</BrowserRouter>
	);
}
