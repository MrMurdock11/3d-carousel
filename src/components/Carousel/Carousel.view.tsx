import styles from "./Carousel.style.css";

import React, { useState } from "react";
import { CarouselProps } from "./Carousel";
import { animated, useSprings } from "react-spring";
import { HotKeys } from "react-hotkeys";

export const CarouselView: React.FC<CarouselProps> = props => {
	const { slides } = props;

	const [current, setCurrent] = useState(0);
	const springs = useSprings(
		slides.length,
		slides.map((_, index) => ({
			transform: `translateX(${(index - current) * 100}%)`,
			backgroundColor: `#` + Math.random().toString(16).substr(-6),
		}))
	);

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
			{springs.map((style, index) => (
				<animated.div className={styles.element} style={style}>
					{slides[index]}
				</animated.div>
			))}
		</HotKeys>
	);
};
