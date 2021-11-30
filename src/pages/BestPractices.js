import React from "react";
import LinkedList from "../components/LinkedList.js/LinkedList";

const BestPractices = () => {
	const data = [
		{ linkText: "Separate Logic from UI", linkURL: "separate-logic-from-ui-logic" },
		{ linkText: "Lazy-Loading-Components", linkURL: "lazy-load-components" },
		{ linkText: "useMemo hook", linkURL: "usememo-hook" },
		{ linkText: "useEffect hook", linkURL: "use-effect-hook" },
	];
	return (
		<div>
			<LinkedList name="Expensify Redux" data={data} />;
		</div>
	);
};

export default BestPractices;
