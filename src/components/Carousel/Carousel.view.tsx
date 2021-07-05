import styles from "./Carousel.style.css";

import React, { useEffect, useState } from "react";
import { CarouselProps } from "./Carousel";
import { animated, useSprings } from "react-spring";
import { HotKeys } from "react-hotkeys";
import { Slide } from "./childs/Slide";
import { concat, first, indexOf, initial, last, map, tail } from "lodash";

function frontOf<T>(array: T[], currentIndex: number = 0): T[] {
	const dynamicArray = [...array, ...array, ...array];
	const dynamicCurrentIndex = currentIndex + array.length;

	return dynamicArray.slice(
		dynamicCurrentIndex - 3,
		dynamicCurrentIndex - 3 + 7
	);
}

export const CarouselView: React.FC<CarouselProps> = props => {
	const { slides, offsetRadius } = props;

	const [order, setOrder] = useState(
		frontOf(map(slides, (_, index) => index))
	);
	const [canvas, setCanvas] = useState(slides);

	return (
		<HotKeys
			keyMap={{
				NEXT: "right",
				PREVIOUSE: "left",
			}}
			handlers={{
				NEXT: () => {
					setOrder(concat(tail(order), first(order)));
				},
				PREVIOUSE: () => {
					setOrder(concat(last(order), initial(order)));
				},
			}}
			allowChanges
			className={styles.container}
		>
			{canvas.map((slide, index) => (
				<Slide
					offsetRadius={offsetRadius}
					index={indexOf(order, index)}
					animationConfig={{}}
				>
					{slide}
				</Slide>
			))}
		</HotKeys>
	);
};
