const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './static_src/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, "static", "build"),
    filename: "app.js",
    publicPath: "/static/build/"
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "static_src"),
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "static_src"),
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  devServer: {
    hot: true
  }
};