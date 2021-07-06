import styles from "./Slide.style.css";

import React, { useEffect, useState } from "react";
import { SlideProps } from "./Slide";
import { animated, config, useSpring } from "react-spring";
import { v4 } from "uuid";

export const SlideView: React.FC<SlideProps> = props => {
	const { index, arraySize, offsetRadius } = props;

	const [id] = useState(v4());

	const offsetFromCenter = index - offsetRadius;
	const totalPresentables = 2 * offsetRadius + 1;
	const distanceFactor = 1 - Math.abs(offsetFromCenter / (offsetRadius + 1));

	const translateXoffset =
		50 * (Math.abs(offsetFromCenter) / (offsetRadius + 1));

	let translateX = -50;

	if (offsetRadius !== 0) {
		if (index === 0) {
			translateX = 0;
		} else if (index === totalPresentables - 1) {
			translateX = -100;
		}
	}

	if (offsetFromCenter > 0) {
		translateX += translateXoffset;
	} else if (offsetFromCenter < 0) {
		translateX -= translateXoffset;
	}

	const style = useSpring({
		to: {
			transform: `translateY(-50%) translateX(${translateX}%) scale(${distanceFactor})`,
			left: `${
				offsetRadius === 0
					? 50
					: 50 + (offsetFromCenter * 50) / offsetRadius
			}%`,
		},
		config: config.default,
	});

	useEffect(() => {
		const slide = document.getElementById(id);

		const config = {
			width: 1920,
			height: 1080,
		};

		const scale = Math.min(
			slide.offsetWidth / config.width,
			slide.offsetHeight / config.height
		);

		slide.style.width = `${config.width}px`;
		slide.style.height = `${config.height}px`;
		slide.style.transform = `translate(-50%, -50%) scale(${scale + 0.25})`;

		const callback: ResizeObserverCallback = entries => {
			const width = entries[0].contentRect.width;
			const height = entries[0].contentRect.height;

			const scale = Math.min(
				width / config.width,
				height / config.height
			);

			slide.style.transform = `translate(-50%, -50%) scale(${
				scale + 0.25
			})`;
		};

		const observer = new ResizeObserver(callback);
		observer.observe(slide);

		return () => observer.disconnect();
	}, []);

	return (
		<animated.div
			className={styles.container}
			style={{
				...style,
				zIndex: Math.abs(
					Math.abs(offsetFromCenter) - Math.floor(arraySize / 2)
				),
			}}
			data-order-index={index}
		>
			<div className={styles.wrapper}>
				<div
					className={styles.content}
					dangerouslySetInnerHTML={{
						__html: (() => {
							const section = document.createElement("div");

							section.innerHTML = props.children as string;
							(section.firstChild as HTMLElement).setAttribute(
								"id",
								id
							);

							return section.innerHTML;
						})(),
					}}
				></div>
			</div>
		</animated.div>
	);
};
