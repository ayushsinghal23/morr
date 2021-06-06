import React from "react";
import { Link } from "react-router-dom";
import styles from "./Links.module.css";
const Links = () => {
	return (
		<span className={styles["footer-links"]}>
			<Link to="/" className={styles.link}>
				Home&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
			</Link>
			<Link to="/terms" className={styles.link}>
				Terms and Conditions&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
			</Link>
			<Link to="/privacypolicy" className={styles.link}>
				Privacy Policy&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
			</Link>
			<Link to="/collectionstatement" className={styles.link}>
				Collection Statement&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
			</Link>
			<Link to="/help" className={styles.link}>
				Help&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
			</Link>
			<Link to="/manageaccount" className={styles.link}>
				Manage Account
			</Link>
		</span>
	);
};

export default Links;
