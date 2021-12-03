import React from "react";
import { Link } from "react-router-dom";
function LinkedList(props) {
	return (
		<div>
			<h1>{props.title}</h1>
			<ul>
				{props.data.map((item, index) => {
					return (
						<Link to={item.linkURL} key={index}>
							<li className="border list-none rounded-sm px-3 py-3">{item.linkText}</li>
						</Link>
					);
				})}
			</ul>
		</div>
	);
}

export default LinkedList;
