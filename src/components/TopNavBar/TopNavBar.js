import { Link } from "react-router-dom";

function TopNavBar() {
	return (
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
				<Link className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2" to="/hoc">
					HOC
				</Link>
				<Link className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2" to="/crud">
					CrudApp
				</Link>
				<Link className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2" to="/redux">
					Redux
				</Link>
				<Link className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2" to="/redux-expensify">
					Redux-Expensify
				</Link>
				<Link className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2" to="/best-practices">
					Best-Practices
				</Link>
			</div>
		</nav>
	);
}

export default TopNavBar;
