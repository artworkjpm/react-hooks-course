// @flow
import React from "react";

//Higher Order Components render other components
//Why? reuse code and components
//Manipulate props
//Abstract the state

const Info = (props) => {
	return (
		<div>
			<h1 className="text-2xl">Info test</h1>
			<p>{props.text}</p>
		</div>
	);
};

const checkAuth = (props) => {
	return <div>{!props.isAuthenticated ? "Not authenticated" : "Welcome Mr Bond"}</div>;
};

const higherOrderComp = (WrappedComponent1, WrappedComponent2) => {
	return (props) => (
		<div className="text-center m-4">
			<WrappedComponent2 {...props} />
			<p>{props.isAuthenticated ? "New Secret content 5678" : "Not permitted"}</p>
			<WrappedComponent1 {...props} />
		</div>
	);
};

const AddHOC = higherOrderComp(Info, checkAuth);

export function HOC() {
	return <AddHOC text="secret code 1234" isAuthenticated={true} />;
}
