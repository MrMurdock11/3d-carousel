import React from "react";
import { SlideView } from "./Slide.view";

type SlideState = {
	index: number;
	offsetRadius: number;
	animationConfig: any; // temporary type
	current?: boolean;
};

export type SlideProps = SlideState;

export const Slide: React.FC<SlideProps> = props => {
	return <SlideView {...props} />;
};

Slide.defaultProps = {
	current: false,
};
