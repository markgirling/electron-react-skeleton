const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
  entry: {
    bundle: ['@babel/polyfill', './src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new WebpackAssetsManifest({})
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new TerserPlugin({
        parallel: true
      })
    ],
    usedExports: true
  },
};
