import styles from "./Home.style.css";

import React from "react";
import { HomeProps } from "./Home";
import { Carousel } from "../../components/Carousel";

export const HomeView: React.FC<HomeProps> = props => {
	return (
		<div className={styles.container}>
			<Carousel slides={["hello", "my", "friend"]} />
		</div>
	);
};
