const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'misc/entry.js'),
  output: {
    filename: 'template.js',
    path: path.resolve(__dirname, 'build/assets'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: path.resolve(__dirname, 'misc/loader.js'),
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
