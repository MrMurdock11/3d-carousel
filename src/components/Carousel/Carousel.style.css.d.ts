declare namespace CarouselStyleCssNamespace {
	export interface ICarouselStyleCss {
		container: string;
	}
}

declare const CarouselStyleCssModule: CarouselStyleCssNamespace.ICarouselStyleCss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: CarouselStyleCssNamespace.ICarouselStyleCss;
};

export = CarouselStyleCssModule;
