const path = require("path");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "index.js",
		publicPath: "./",
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	module: {
		rules: require("./webpack.rules"),
	},
	plugins: require("./webpack.plugins"),
};
