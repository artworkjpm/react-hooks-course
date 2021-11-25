import React from "react";
import { Link } from "react-router-dom";

const BestPractices = () => {
	return (
		<div>
			<ul className="px-0">
				<Link to="separate-logic-from-ui-logic">
					<li className="border list-none rounded-sm px-3 py-3">Separate Logic from UI</li>
				</Link>
				<Link to="lazy-load-components">
					<li className="border list-none rounded-sm px-3 py-3">Lazy-Loading-Components</li>
				</Link>
				<li className="border list-none rounded-sm px-3 py-3">useMemo hook</li>
				<li className="border list-none rounded-sm px-3 py-3">List Item 4</li>
				<li className="border list-none rounded-sm px-3 py-3">List Item 5</li>
			</ul>
		</div>
	);
};

export default BestPractices;
