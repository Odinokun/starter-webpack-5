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
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  }
}