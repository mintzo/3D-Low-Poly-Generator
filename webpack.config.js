const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  mode: "development",
  devtool: 'source-map',
  devServer: {
    open: true,
    static: [
      {
        directory: path.join(__dirname, "src"),
        publicPath: "/assets",
      },
      {
        directory: path.join(__dirname, "models"),
        publicPath: "/models",
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    clean: true,
  },
};
