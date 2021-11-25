import React, { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import BestPractices from "./pages/BestPractices";
import LazyLoading from "./pages/BestPractices/LazyLoading";
import Separation from "./pages/BestPractices/Separation";
import CrudApp from "./pages/CrudApp";
import { HOC } from "./pages/HOC";
import NewsPage from "./pages/NewsPage";
import ReduxExpensify from "./Redux/ReduxExpensify";
const Redux = lazy(() => import("./Redux/Redux"));
export default function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<TopNavBar />
				<Routes>
					<Route exact path="/items" element={<NewsPage />} />
					<Route exact path="/hoc" element={<HOC />} />
					<Route exact path="/crud" element={<CrudApp />} />
					<Route exact path="/redux" element={<Redux />} />
					<Route exact path="/redux-expensify" element={<ReduxExpensify />} />
					<Route exact path="/best-practices" element={<BestPractices />} />
					<Route exact path="/best-practices/separate-logic-from-ui-logic" element={<Separation />} />
					<Route exact path="/best-practices/lazy-load-components" element={<LazyLoading />} />
					<Route exact path="/" element={<Navigate to="/items" />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}
