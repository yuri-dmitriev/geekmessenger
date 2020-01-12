const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './static_src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, "static", "build"),
    filename: "app.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './static_src/index.html',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "static_src"),
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "static_src"),
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
};