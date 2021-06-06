import React, { useState, useEffect } from "react";
import Titlebar from "../UI/Header/Titlebar";
import axios from "axios";
import styles from "./SeriesPage.module.css";
import MovieAndSeriesCard from "../UI/Cards/MovieAndSeriesCards/MovieAndSeriesCard";

const SeriesPage = () => {
	const [seriesData, setSeriesData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isDataLoaded, setDataIsLoaded] = useState(false);
	const [componentMounted, setComponentMounted] = useState(true);

	const loadingFeature = () => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
		return <div className={styles.loaders}>Loading...</div>;
	};

	function sortAlphaNum(movieOne, movieTwo) {
		const reA = /[^a-zA-Z]/g;
		const reN = /[^0-9]/g;
		movieOne = movieOne.title;
		movieTwo = movieTwo.title;
		var NumbersInMovieOne = movieOne.replace(reA, "");
		var NumbersInMovieTwo = movieTwo.replace(reA, "");
		if (NumbersInMovieOne === NumbersInMovieTwo) {
			var AlphabetsInMovieOne = parseInt(movieOne.replace(reN, ""), 10);
			var AlphabetsInMovieTwo = parseInt(movieTwo.replace(reN, ""), 10);
			return AlphabetsInMovieOne === AlphabetsInMovieTwo
				? 0
				: AlphabetsInMovieOne > AlphabetsInMovieTwo
				? 1
				: -1;
		} else {
			return NumbersInMovieOne > NumbersInMovieTwo ? 1 : -1;
		}
	}

	const fetchAndFilterData = async () => {
		try {
			await axios
				.get(
					"https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
				)
				.then((response) => {
					const Data = response.data.entries;
					const FilterData = Data.filter(
						(oneData) =>
							oneData.programType === "series" && oneData.releaseYear >= 2010
					).slice(0, 21);
					const sortedFilteredData = FilterData.sort(sortAlphaNum);
					setSeriesData(sortedFilteredData);
				});
			setLoading(false);
			setDataIsLoaded(true);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (componentMounted) {
			fetchAndFilterData();
		}
		return () => {
			setComponentMounted(false);
		};
	}, []);

	return (
		<div className={styles.series}>
			<Titlebar title={"Popular Series"} />
			<div className={styles["render-series"]}>
				{seriesData.map((series, index) => (
					<MovieAndSeriesCard
						key={`${series.title}_${index}`}
						imageUrl={series.images["Poster Art"].url}
						title={series.title}
					/>
				))}
				{loading && loadingFeature()}
				{!isDataLoaded && !loading && (
					<div className={styles.loaders}>Oops.. Something Went Wrong..</div>
				)}
			</div>
		</div>
	);
};

export default SeriesPage;
