const path = require("path");
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    a: ["./src/a.js", "./src/index.js"],
  },
  output: {
    filename: "[name]-[chunkhash:5].js",
    // 必须配置一个绝对路径
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "eval",
};
