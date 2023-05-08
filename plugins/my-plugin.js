/**
 * @type {import("webpack").WebpackPluginInstance}
 */
class Plugin {
  constructor(filename = "filename.txt") {
    this.filename = filename;
  }
  apply(compiler) {
    console.log("插件运行了");
    // 生成文件之前
    compiler.hooks.emit.tap("MyPlugin", async (params) => {
      var fileList = [];
      for (const key in params.assets) {
        var content = `
        【${key}】
        大小: ${params.assets[key].size() / 1024}KB
        `;
        fileList.push(content);
      }
      var str = fileList.join("\n");
      params.assets[this.filename] = {
        source() {
          return str;
        },
        size() {
          return str.length;
        },
      };
    });
  }
}

module.exports = Plugin;
