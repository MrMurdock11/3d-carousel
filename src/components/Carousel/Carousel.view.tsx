import styles from "./Carousel.style.css";

import React, { useState } from "react";
import { CarouselProps } from "./Carousel";
import { animated, useSpring } from "react-spring";
import { HotKeys } from "react-hotkeys";

export const CarouselView: React.FC<CarouselProps> = props => {
	const { slides } = props;

	const [current, setCurrent] = useState(0);

	return (
		<HotKeys
			keyMap={{
				NEXT: "right",
				PREVIOUSE: "left",
			}}
			handlers={{
				NEXT: () =>
					current + 1 < slides.length
						? setCurrent(current + 1)
						: null,
				PREVIOUSE: () =>
					current - 1 >= 0 ? setCurrent(current - 1) : null,
			}}
			allowChanges
			className={styles.container}
		>
			{slides.map((slide, index) => (
				<animated.div
					style={{
						left: `${(index - current) * 100}%`,
						backgroundColor: `red`,
					}}
					className={styles.element}
				>
					{slide}
				</animated.div>
			))}
		</HotKeys>
	);
};
