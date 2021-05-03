import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Character from "./containers/Character";
import Layout from "./components/Layout";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/character/:id" component={Character}></Route>
				<Layout>
					<Route exact path="/" component={Home}></Route>
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
