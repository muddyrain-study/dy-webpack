/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
  },
  devtool: "hidden-source-map",
};
