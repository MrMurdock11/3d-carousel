import styles from "./Slide.style.css";

import React from "react";
import { SlideProps } from "./Slide";
import { animated, config, useSpring } from "react-spring";

export const SlideView: React.FC<SlideProps> = props => {
	const { index, offsetRadius, animationConfig } = props;

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
			opacity: distanceFactor * distanceFactor,
		},
		config: config.default,
	});

	return (
		<animated.div
			className={styles.container}
			style={{
				...style,
				zIndex: Math.abs(Math.abs(offsetFromCenter) - 2),
				backgroundColor: "#f0f0f0",
			}}
		>
			<div className={styles.wrapper}>
				<div className={styles.content}>{props.children}</div>
			</div>
		</animated.div>
	);
};
