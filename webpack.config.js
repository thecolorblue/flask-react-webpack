var path = require('path');

module.exports = {
  entry: ['./js-src/main.js'],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'app/static/lib')
  },
  module: {
    rules: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
