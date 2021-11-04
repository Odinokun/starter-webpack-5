const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: "./src/index.js"
  },
  output: {
    clean: true,
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new HTMLWebpackPlugin({
      filename: "about.html",
      template: path.resolve(__dirname, 'src/about.html')
    })
  ]
}