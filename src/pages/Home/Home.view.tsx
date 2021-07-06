import styles from "./Home.style.css";

import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import { HomeProps } from "./Home";
import { Carousel } from "../../components/Carousel";
import { isEmpty } from "lodash";

export const HomeView: React.FC<HomeProps> = props => {
	const [slides, setSlides] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(`http://localhost:1000/slides`);
			const data = await response.json();

			setSlides(data);
		})();
	}, []);

	return (
		<div className={styles.container}>
			{!isEmpty(slides) ? (
				<Carousel offsetRadius={5} slides={slides} />
			) : null}
		</div>
	);
};
