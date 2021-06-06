import React from "react";
import styles from "./MovieAndSeriesCard.module.css";

const MovieAndSeriesCard = (props) => {
	return (
		<div className={styles["entertainment-cards"]}>
			<div className={styles.poster}>
				<img src={props.imageUrl} alt={props.imageUrl} />
			</div>
			<div className={styles.title}>{props.title}</div>
		</div>
	);
};

export default MovieAndSeriesCard;
