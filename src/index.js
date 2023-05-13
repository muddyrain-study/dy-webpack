const jpg = require("./assets/webpack.jpg");
var img = document.createElement("img");
console.log(jpg);
img.src = jpg.default;
document.body.appendChild(img);
