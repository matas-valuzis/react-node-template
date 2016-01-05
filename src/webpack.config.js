var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'eval',
  entry: [    
    path.join(__dirname, './app.jsx')
  ],
  output: {
    path: path.join(__dirname, '../scripts'),
    filename: 'app.js',    
  },
  
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
			loaders: ['css', 'sass']
		}		
	]
  }
};
