const path = require('path');

const host = '127.0.0.1';
const port = 8001;
const outputFileName = 'bundle.js';

module.exports = {
  entry: [
    '@babel/polyfill',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    filename: outputFileName,
    publicPath: `http://${host}:${port}/`
  },
  devServer: {
    host,
    port,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel']
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
