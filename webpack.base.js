const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "js/[name]-[chunkhash:5].js",
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
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./public"),
          to: "./",
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ["**/index.html"],
          },
        },
      ],

      options: {},
    }),
  ],
  // context: path.resolve(__dirname, "src"),
};
