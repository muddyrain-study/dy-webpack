const baseConfig = require("./webpack.base");
const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");
/**
 *
 * @return {import("webpack").Configuration}
 */
module.exports = function (env) {
  console.log(env);
  if (env && env.prod) {
    return { ...baseConfig, ...prodConfig };
  } else if (env && env.dev) {
    return { ...baseConfig, ...devConfig };
  }
};
