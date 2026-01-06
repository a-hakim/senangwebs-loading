const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    swl: './src/js/swl.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'SWL',
      type: 'umd',
    },
    globalObject: 'this'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false, // Prevents LICENSE.txt generation
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
};