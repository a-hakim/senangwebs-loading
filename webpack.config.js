const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const commonConfig = {
  entry: './src/js/swl.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'SWL',
      type: 'umd',
    },
    globalObject: 'this'
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

module.exports = [
  {
    ...commonConfig,
    mode: 'production',
    output: {
      ...commonConfig.output,
      filename: 'swl.js',
    },
    optimization: {
      minimize: false,
    },
  },
  {
    ...commonConfig,
    mode: 'production',
    output: {
      ...commonConfig.output,
      filename: 'swl.min.js',
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
  },
];