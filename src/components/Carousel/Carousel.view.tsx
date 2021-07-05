import styles from "./Carousel.style.css";

import React, { useEffect, useState } from "react";
import { CarouselProps } from "./Carousel";
import { HotKeys } from "react-hotkeys";
import { Slide } from "./childs/Slide";
import { concat, first, indexOf, initial, last, map, tail } from "lodash";

function frontOf<T>(array: T[], offsetRadius: number): T[] {
	const dynamicArray = [...array, ...array, ...array];
	const currentIndex = array.length;

	return dynamicArray.slice(
		currentIndex - offsetRadius,
		currentIndex - offsetRadius + array.length
	);
}

export const CarouselView: React.FC<CarouselProps> = props => {
	const { slides, offsetRadius } = props;

	const [order, setOrder] = useState(
		frontOf(
			map(slides, (_, index) => index),
			offsetRadius
		)
	);

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
			{slides.map((slide, index, arr) => (
				<Slide
					offsetRadius={offsetRadius}
					index={indexOf(order, index)}
					arraySize={arr.length}
				>
					{slide}
				</Slide>
			))}
		</HotKeys>
	);
};
