import React, { useEffect } from "react";
import Prism from "prismjs";
import "../../code-css.css";
const LazyLoading = () => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<div className="text-center m-4">
			<h1>Lazy Loading example</h1>
			<h2>Why?</h2>
			<h3>Stop the components from running until the route is reached. 1) improves performance of web app</h3>
			<pre>
				<code className="language-javascript">
					{`

                    import React, { Suspense, lazy } from "react";
                    import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
                    const MyComponent = lazy(() => import("./MyComponent"));

                    
                    <BrowserRouter>
                    <Suspense fallback={<div>Loading...</div>}>
					<Routes>
                        <Route exact path="/mycomponent" element={<MyComponent />
                    </Routes>
                    </Suspense>
                    </BrowserRouter>
                    `}
				</code>
			</pre>
		</div>
	);
};

export default LazyLoading;
