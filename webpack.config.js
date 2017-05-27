var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html', // points to regular index.html file in /app directory
	filename: 'index.html', 				 // we want to keep the same name
	inject: 'body' 							 // inject a script which references the name of the output file (index_bundle.js) of our loaders and put it in the body of this newly-created HTML file
});

module.exports = {
	entry: [
		'./app/index.js'
	],
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{ test: /\.css$/, loader: "style-loader!css-loader"}
		]
	},
	output: {
		filename: "index_bundle.js",
		path: __dirname + '/dist'
	},
	plugins: [HTMLWebpackPluginConfig] // need this after requiring the plugins at the top
}

// __dirname is referencing the name of the directory in which the currently executing script resides
// When Webpack runs, the code wiill be transformed and referencable at:

//			ourApp.dist/index_bundle.js

// ... and we need to get our HTML to reference this specific file

