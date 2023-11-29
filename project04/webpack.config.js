const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: `${__dirname}/dist`,
    },
};
module.exports = {
    entry: './src/index.js',
    output: { //... 생략 ...
    },

    devServer: {
        static: './dist', //추가내역
    }, //추가내역
};
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //..생략..
  devServer: {
    static: './dist',
  },
    plugins: [new HtmlWebpackPlugin({
      template: './src/index.html'
  })],
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: `${__dirname}/dist`,
  },
  devServer: {
    static: './dist',
  },
  plugins: [new HtmlWebpackPlugin({
      template: './src/index.html'
  })],
};