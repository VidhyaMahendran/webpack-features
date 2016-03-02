module.exports = {
	devtool: "inline-sourcemap",
	entry: "./modules/main.js",
	output: {
		path: __dirname,
		filename: "build.js"
	}
};