import React from "react";
import styles from "./HomePage.module.css";
import HomeCard from "../UI/Cards/HomeCards/HomeCard";
import Titlebar from "../UI/Header/Titlebar";

const HomePage = () => {
	return (
		<main>
			<Titlebar title={"Popular Titles"} />
			<div className={styles["home-page"]}>
				<HomeCard imageTitle="SERIES" cardTitle="Popular Series" />
				<HomeCard imageTitle="MOVIES" cardTitle="Popular Movies" />
			</div>
		</main>
	);
};

export default HomePage;
