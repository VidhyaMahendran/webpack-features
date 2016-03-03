module.exports = {
	devtool: "inline-sourcemap",
	entry: ["./js/sayHelloModule.js", "./js/titleLoader.js"],
	output: {
		path: __dirname,
		filename: "./js/build.js"
	}
};