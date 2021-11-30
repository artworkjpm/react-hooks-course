import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import BestPractices from "./pages/BestPractices";
import LazyLoading from "./pages/BestPractices/LazyLoading";
import Separation from "./pages/BestPractices/Separation";
import UseEffectPage from "./pages/BestPractices/UseEffect";
import CrudApp from "./pages/CrudApp";
import { HOC } from "./pages/HOC";
import NewsPage from "./pages/NewsPage/NewsPage";
import { addExpense, setText } from "./Redux/actions/expenseActions";
import { expenseStore } from "./Redux/store/expenseStore";

const ReduxExpensify = lazy(() => import("./Redux/ReduxExpensify"));
const Redux = lazy(() => import("./Redux/Redux"));
const storeExpense = expenseStore();
storeExpense.dispatch(addExpense({ description: "Rent", amount: 100 }));
storeExpense.dispatch(addExpense({ description: "Moto", amount: 5000 }));
storeExpense.dispatch(setText("app text"));
/* console.log(storeExpense.getState()); */

export default function App() {
	return (
		<Provider store={storeExpense}>
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
						<Route exact path="/best-practices/use-effect-hook" element={<UseEffectPage />} />
						<Route exact path="/" element={<Navigate to="/items" />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</Provider>
	);
}
