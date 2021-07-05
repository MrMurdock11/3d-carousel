declare namespace SlideStyleCssNamespace {
	export interface ISlideStyleCss {
		container: string;
		content: string;
		wrapper: string;
	}
}

declare const SlideStyleCssModule: SlideStyleCssNamespace.ISlideStyleCss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: SlideStyleCssNamespace.ISlideStyleCss;
};

export = SlideStyleCssModule;
