const loaderUtils = require("loader-utils");
module.exports = function (sourceCode) {
  // sourceCode 源码
  console.log("test-loader 运行了");
  var options = loaderUtils.getOptions(this);
  console.log(options);
  var reg = new RegExp(options.changeVar, "g");
  return sourceCode.replace(reg, "var");
};
