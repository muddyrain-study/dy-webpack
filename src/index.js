const jpg = require("./assets/1.jpg");
var img = document.createElement("img");
console.log(jpg);
img.src = jpg.default;
document.body.appendChild(img);
