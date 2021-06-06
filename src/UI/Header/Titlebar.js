import React from "react";
import styles from "./Titlebar.module.css";
const TitleBar = (props) => {
	return (
		<div className={styles["title-bar"]}>
			<span>{props.title}</span>
		</div>
	);
};

export default TitleBar;
