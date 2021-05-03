import React from "react";
import Nav from "./Nav";

const Layout = (props) => {
	return (
		<div className="container">
			<Nav />
			<section className="main-content">{props.children}</section>
		</div>
	);
};

export default Layout;
