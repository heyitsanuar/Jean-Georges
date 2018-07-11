var path = require('path');

module.exports = {
	entry: "./app/assets/js/App.js",
	output: {
		path: path.resolve(__dirname, "./app/temp/js"),
		filename: "Script.js"
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query:{
				presets:['es2015']
			}
		}]
	}
}
