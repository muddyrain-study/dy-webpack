module.exports = function (sourceCode) {
  return `
  var style = document.createElement("style");
  style.innerHTML = \`${sourceCode}\`;
  document.head.appendChild(style); 
  module.exports = \`${sourceCode}\`;
  `;
};
