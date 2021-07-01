import styles from "./Carousel.style.css";

import React, { useEffect, useState } from "react";
import { CarouselProps } from "./Carousel";
import { animated, useSprings } from "react-spring";
import { HotKeys } from "react-hotkeys";

function frontOf<T>(array: T[], currentIndex: number): T[] {
	const dynamicArray = [...array, ...array, ...array];
	const dynamicCurrentIndex = currentIndex + array.length;

	return dynamicArray.slice(
		dynamicCurrentIndex - 3,
		dynamicCurrentIndex - 3 + 7
	);
}

export const CarouselView: React.FC<CarouselProps> = props => {
	const { slides } = props;

	const [current, setCurrent] = useState(0);
	const [canvas, setCanvas] = useState([]);
	const springs = useSprings(
		slides.length,
		slides.map((_, index) => ({
			transform: `translateX(${(index - current) * 100}%)`,
			backgroundColor: `#` + Math.random().toString(16).substr(-6),
		}))
	);

	useEffect(() => {
		setCanvas(frontOf(slides, current));
	}, [current]);

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
						: setCurrent(0),
				PREVIOUSE: () =>
					current - 1 > 0
						? setCurrent(current - 1)
						: setCurrent(slides.length),
			}}
			allowChanges
			className={styles.container}
		>
			{canvas.map(item => (
				<div>{item}</div>
			))}
			{/* {springs.map((style, index) => (
				<animated.div className={styles.element} style={style}>
					{slides[index]}
				</animated.div>
			))} */}
		</HotKeys>
	);
};
