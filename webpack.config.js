// thanks to
// https://github.com/gaearon/react-hot-boilerplate/blob/v1.0.0/webpack.config.js

var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/main'
  ],
  output: {
    path: __dirname + '/scripts/',
    filename: 'bundle.js',
    publicPath: '/scripts/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'react-hot!babel?stage=1', exclude: /node_modules/ },
      { test: /\.css/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.png/, loader: 'file' },
    ]
  }
};
