const path = require("path");
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: "development",
  module: {
    // 模块的匹配规则
    rules: [
      {
        test: /\.css$/,
        use: ["./loaders/style-loader"],
      },
    ],
  },
};
