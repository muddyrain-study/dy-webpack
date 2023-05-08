var MyPlugins = require("./plugins/my-plugin");
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
        test: /\.(jpg)|(png)|(jpeg)|(gif)$/,
        use: [
          {
            loader: "./loaders/img-loader",
            options: {
              limit: 50000,
              filename: "img-[contenthash:5].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [new MyPlugins("哈哈哈哈1.txt")],
};
