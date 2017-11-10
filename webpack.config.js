var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // Saves new bundle name with key from entry object
    filename: '[name].js',
    // remove publicPath if putting index into dist folder
    // publicPath: 'dist/'
  },
  // 
  // devServer: {
  //   contentBase: path.join(__dirname, "dist"),
  //   compress: true,
  //   port: 9000
  // },

  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        // css loader teaches to interpret css, style loader puts into style tag
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
    // Adds script files to generated html automatically
    new HtmlWebpackPlugin({
      // Tells plugin that we already have an initial HTML setup to use
      template: 'src/index.html',
    }),
    new webpack.DefinePlugin ({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
