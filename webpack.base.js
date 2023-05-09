/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "scripts/[name]-[hash].js",
  },
};
