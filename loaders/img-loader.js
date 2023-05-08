const loaderUtils = require("loader-utils");
function loader(buffer) {
  const { limit = 1000, filename = "[contenthash:5].[ext]" } = this.query;
  console.log(buffer.byteLength);
  if (buffer.byteLength >= limit) {
    return `
    module.exports = \`${getFilePath.call(this, buffer, filename)}\`
      `;
  } else {
    return `
    module.exports = \`${getBase64(buffer)}\`
      `;
  }
}

// 要求原始数据
loader.raw = true;

module.exports = loader;
function getBase64(buffer) {
  return "data:image/jpg;base64," + buffer.toString("base64");
}

function getFilePath(buffer, filename) {
  var filename = loaderUtils.interpolateName(this, filename, {
    content: buffer,
  });
  this.emitFile(filename, buffer);
  return filename;
}
