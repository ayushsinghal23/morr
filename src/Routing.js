import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import HomePage from "./Components/HomePage";
import MoviesPage from "./Components/MoviesPage";
import SeriesPage from "./Components/SeriesPage";
import Footer from "./UI/Footer/Footer";
import Navbar from "./UI/Header/Navbar";

const Routing = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={HomePage}></Route>
				<Route path="/movies" component={MoviesPage}></Route>
				<Route path="series" component={SeriesPage}></Route>
				<Route component={ErrorPage}></Route>
			</Switch>
			<Footer />
		</Router>
	);
};

export default Routing;
