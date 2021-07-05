import React from "react";
import { CarouselView } from "./Carousel.view";

type CarouselState = {
	offsetRadius: number;
	slides: string[];
};

export type CarouselProps = CarouselState;

export const Carousel: React.FC<CarouselProps> = props => {
	return <CarouselView {...props} />;
};
