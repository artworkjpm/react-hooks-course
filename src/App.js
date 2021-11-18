import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import CrudApp from "./pages/CrudApp";
import { HOC } from "./pages/HOC";
import NewsPage from "./pages/NewsPage";
import Redux from "./Redux/Redux";
export default function App() {
	return (
		<BrowserRouter>
			<TopNavBar />
			<Routes>
				<Route exact path="/items" element={<NewsPage />} />
				<Route exact path="/hoc" element={<HOC />} />
				<Route exact path="/crud" element={<CrudApp />} />
				<Route exact path="/redux" element={<Redux />} />
				<Route exact path="/" element={<Navigate to="/redux" />} />
			</Routes>
		</BrowserRouter>
	);
}
