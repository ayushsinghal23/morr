import React from "react";
import styles from "./HomeCard.module.css";
import ClapperBoard from "../../../Assets/clapperboard.png";
import { Link } from "react-router-dom";

const Card = (props) => {
	return (
		<div className={styles.card}>
			<Link to={`${props.imageTitle}`.toLowerCase()} className={styles.myLink}>
				<div className={styles["card-image"]}>
					<img src={ClapperBoard} alt="" />
					<span>{props.imageTitle}</span>
				</div>
			</Link>
			<div className={styles["card-title"]}>{props.cardTitle}</div>
		</div>
	);
};

export default Card;
