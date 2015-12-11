var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '../app.jsx')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/scripts/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()	
  ],
  
  module: {
    loaders: [
		{
			test: /\.jsx?$/,
			loaders: ['react-hot', 'babel?presets[]=react'],
			include: path.join(__dirname, '..'),
			exclude: /node_modules/
		},
		{
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass']
		}
	]
  }
};
