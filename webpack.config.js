module.exports = {
	entry: './index.js',
	output: {
		path:'./',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: 'client',
		inline: true,
		port: 8080
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}