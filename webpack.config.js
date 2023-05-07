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
        test: /index\.js$/,
        use: ["./loaders/loader1", "./loaders/loader2"],
      },
      {
        test: /\.js$/,
        use: ["./loaders/loader3", "./loaders/loader4"],
      },
    ],
  },
};
