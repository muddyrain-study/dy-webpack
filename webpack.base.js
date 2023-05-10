const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "[name]-[chunkhash:5].js",
    library: "webpack",
    libraryTarget: "var",
  },
  // target: "web",
  // module: {
  //   noParse: false,
  // },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  externals: {
    jquery: "$",
  },
  stats: {
    colors: true,
    modules: false,
    hash: false,
    builtAt: true,
  },
  plugins: [new CleanWebpackPlugin()],
  // context: path.resolve(__dirname, "src"),
};
