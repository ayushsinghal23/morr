import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className={styles["nav-bar"]}>
			<div
				className={
					toggle
						? `${styles["toggled-data"]} ${styles.active}`
						: `${styles["toggled-data"]}`
				}
			>
				<div className={styles["nav-left-side"]}>
					<span>DEMO</span> Streaming
				</div>
				<div className={styles["nav-right-side"]}>
					<span>Log In</span>
					<button
						onClick={() => {
							console.log("clicked");
						}}
					>
						Start your free trial
					</button>
				</div>
			</div>

			<div className={styles["toggle-bar"]}>
				<span
					className={styles.hamburger}
					onClick={() => {
						setToggle(!toggle);
					}}
				>
					<div></div>
					<div></div>
					<div></div>
				</span>
			</div>
		</nav>
	);
};

export default Navbar;
