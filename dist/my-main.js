// 合并2个模块
// ./src/a.js
// ./src/index.js

(function (modules) {
  // 用于缓存模块导出结果
  var moduleExports = {};
  // require 函数相当于运行一个模块，得到模块导出结果
  function webpackRequire(moduleId) {
    if (moduleExports[moduleId]) {
      // 检测是否有缓存
      return moduleExports[moduleId];
    }
    // moduleId就是模块的路径
    var func = modules[moduleId]; // 该模块对应的函数
    var module = {
      exports: {},
    };
    func(module, module.exports, webpackRequire);
    var result = module.exports; // 获得导出结果
    moduleExports[moduleId] = result;
    return result;
  }
  // 执行入口模块
  webpackRequire("./src/index.js");
})({
  // 该对象保存了所有的模块 以及模块对应的代码
  "./src/a.js": function (module, exports) {
    eval(
      'console.log("module a");\nmodule.exports = "a"; //# sourceURL=webpack://./src/a.js'
    );
  },
  "./src/index.js": function (module, exports, webpackRequire) {
    eval(
      'console.log("index module");\nvar a = webpackRequire("./src/a.js");\na.abc();\nconsole.log(a); //# sourceURL=webpack://陈子涵/./src/a.js'
    );
  },
});
