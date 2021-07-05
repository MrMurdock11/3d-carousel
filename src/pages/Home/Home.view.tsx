import styles from "./Home.style.css";

import React from "react";
import { HomeProps } from "./Home";
import { Carousel } from "../../components/Carousel";

export const HomeView: React.FC<HomeProps> = props => {
	return (
		<div className={styles.container}>
			<Carousel
				offsetRadius={5}
				slides={[
					"https://picsum.photos/800/450?random=1",
					"https://picsum.photos/800/450?random=2",
					"https://picsum.photos/800/450?random=3",
					"https://picsum.photos/800/450?random=4",
					"https://picsum.photos/800/450?random=5",
					"https://picsum.photos/800/450?random=6",
					"https://picsum.photos/800/450?random=7",
					"https://picsum.photos/800/450?random=8",
					"https://picsum.photos/800/450?random=9",
					"https://picsum.photos/800/450?random=10",
					"https://picsum.photos/800/450?random=11",
					"https://picsum.photos/800/450?random=12",
					"https://picsum.photos/800/450?random=13",
					"https://picsum.photos/800/450?random=14",
					"https://picsum.photos/800/450?random=15",
					"https://picsum.photos/800/450?random=16",
				]}
			/>
		</div>
	);
};
